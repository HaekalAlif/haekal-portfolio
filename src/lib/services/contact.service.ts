import { supabase } from "@/lib/supabase";
import type { Contact, CreateContact } from "@/lib/types/database.types";

export class ContactService {
  // Submit contact form
  static async submitContact(contact: CreateContact): Promise<Contact> {
    const { data, error } = await supabase
      .from("contacts")
      .insert(contact)
      .select()
      .single();

    if (error) throw error;
    return data as Contact;
  }

  // ADMIN FUNCTIONS
  // Get all contacts
  static async getAllContacts(): Promise<Contact[]> {
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data as Contact[];
  }

  // Get unread contacts
  static async getUnreadContacts(): Promise<Contact[]> {
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .eq("status", "unread")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data as Contact[];
  }

  // Mark contact as read
  static async markAsRead(id: string): Promise<Contact> {
    const { data, error } = await supabase
      .from("contacts")
      .update({ status: "read" })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data as Contact;
  }

  // Mark contact as replied
  static async markAsReplied(id: string): Promise<Contact> {
    const { data, error } = await supabase
      .from("contacts")
      .update({
        status: "replied",
        replied_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data as Contact;
  }

  // Delete contact
  static async deleteContact(id: string): Promise<void> {
    const { error } = await supabase.from("contacts").delete().eq("id", id);

    if (error) throw error;
  }
}
