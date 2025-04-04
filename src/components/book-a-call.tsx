"use client";

import React from "react";
import { Mail, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface BookACallProps {
  buttonText?: string;
}

export function BookACall({ buttonText = "Get in Touch" }: BookACallProps) {
  const email = "dimasmufid.data@gmail.com";
  const telegram = "https://t.me/dimasmufid";
  return (
    <Dialog>
      <DialogTrigger className="bg-primary hover:cursor-pointer hover:bg-primary/80 text-sm text-white dark:text-black px-4 py-2 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        {buttonText}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Get in Touch</DialogTitle>
          <DialogDescription>
            Choose your preferred method to contact me.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span>Send Email</span>
          </a>
          <a
            href={telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            <Send className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span>Telegram Chat</span>
          </a>
        </div>
        <div className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
          I&apos;ll get back to you as soon as possible.
        </div>
      </DialogContent>
    </Dialog>
  );
}
