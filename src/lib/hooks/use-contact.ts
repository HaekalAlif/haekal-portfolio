"use client";

import { useState, useEffect } from "react";
import { ContactService } from "@/lib/services";
import type { Contact, CreateContact } from "@/lib/types";

export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitContact = async (contactData: CreateContact) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await ContactService.submitContact(contactData);
      setSuccess(true);

      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to submit contact form";
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setError(null);
    setSuccess(false);
    setLoading(false);
  };

  return {
    loading,
    error,
    success,
    submitContact,
    resetForm,
  };
}

export function useContactsAdmin() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ContactService.getAllContacts();
      setContacts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      await ContactService.markAsRead(id);
      await fetchContacts();
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to mark as read";
      setError(message);
      return { success: false, error: message };
    }
  };

  const markAsReplied = async (id: string) => {
    try {
      await ContactService.markAsReplied(id);
      await fetchContacts();
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to mark as replied";
      setError(message);
      return { success: false, error: message };
    }
  };

  const deleteContact = async (id: string) => {
    try {
      await ContactService.deleteContact(id);
      await fetchContacts();
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to delete contact";
      setError(message);
      return { success: false, error: message };
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return {
    contacts,
    loading,
    error,
    refetch: fetchContacts,
    markAsRead,
    markAsReplied,
    deleteContact,
  };
}

export function useUnreadContacts() {
  const [unreadContacts, setUnreadContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUnreadContacts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ContactService.getUnreadContacts();
      setUnreadContacts(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch unread contacts"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUnreadContacts();
  }, []);

  return {
    unreadContacts,
    loading,
    error,
    refetch: fetchUnreadContacts,
    unreadCount: unreadContacts.length,
  };
}
