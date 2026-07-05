"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    product: "Select a category",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    setTimeout(() => {
      setStatus("sent")
      setFormData({
        name: "",
        company: "",
        email: "",
        product: "Select a category",
        message: "",
      })

      setTimeout(() => {
        setStatus("idle")
      }, 3000)
    }, 1500)
  }

  return (
    <div className="lg:col-span-7 bg-white border border-outline-variant p-10 rounded shadow-sm paper-texture">
      <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Send an Inquiry</h2>
      <p className="text-on-surface-variant mb-8 font-body-md text-sm">
        Our procurement team typically responds within 4 business hours.
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-label-sm text-label-sm uppercase text-outline">Full Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-white border border-outline-variant px-4 py-3 focus:ring-1 focus:ring-primary-container focus:border-primary-container outline-none transition-all rounded font-body-md text-sm text-primary"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-sm text-label-sm uppercase text-outline">Company Name</label>
            <input
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="bg-white border border-outline-variant px-4 py-3 focus:ring-1 focus:ring-primary-container focus:border-primary-container outline-none transition-all rounded font-body-md text-sm text-primary"
              placeholder="Industrial Enterprises Ltd."
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-label-sm text-label-sm uppercase text-outline">Work Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white border border-outline-variant px-4 py-3 focus:ring-1 focus:ring-primary-container focus:border-primary-container outline-none transition-all rounded font-body-md text-sm text-primary"
              placeholder="john@company.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-sm text-label-sm uppercase text-outline">Product Interest</label>
            <select
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              className="bg-white border border-outline-variant px-4 py-3 focus:ring-1 focus:ring-primary-container focus:border-primary-container outline-none transition-all rounded font-body-md text-sm text-primary appearance-none"
            >
              <option>Select a category</option>
              <option>Coated Duplex Board</option>
              <option>Kraft Paper</option>
              <option>Duplex Paper Board</option>
              <option>Other Industrial Grade</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label-sm text-label-sm uppercase text-outline">Your Message</label>
          <textarea
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="bg-white border border-outline-variant px-4 py-3 focus:ring-1 focus:ring-primary-container focus:border-primary-container outline-none transition-all rounded resize-none font-body-md text-sm text-primary"
            placeholder="Detail your monthly volume requirements..."
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={status !== "idle"}
          className={cn(
            "w-full md:w-auto text-on-primary px-10 py-4 font-title-md text-title-md rounded transition-all flex items-center justify-center gap-2 cursor-pointer",
            status === "idle" && "bg-primary-container hover:opacity-90",
            status === "sending" && "bg-primary-container opacity-85",
            status === "sent" && "bg-[#006d3b] text-white"
          )}
        >
          {status === "idle" && (
            <>
              Send Request
              <span className="material-symbols-outlined text-[18px]">send</span>
            </>
          )}
          {status === "sending" && (
            <>
              <span className="material-symbols-outlined animate-spin">sync</span>
              Sending...
            </>
          )}
          {status === "sent" && (
            <>
              <span className="material-symbols-outlined">check_circle</span>
              Sent Successfully
            </>
          )}
        </button>
      </form>
    </div>
  )
}
