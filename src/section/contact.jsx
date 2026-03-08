import React from 'react'
import { Check, User, Users, Mail, MapPin, Instagram, Twitter, Linkedin, Zap, Sparkles } from "lucide-react";

const Contact = () => {
  return (

        <div className="flex flex-col justify-start md:flex-row p-5 md:p-3">
          
          {/* intro and picture */}
          <div className="flex-1 flex flex-col justify-start mt-0 md:mt-3 md:mr-5">
            <div className="flex flex-col gap-2 flex-1">
            <div>
              <h1 className="text-xl font-bold text-secondary tracking-tight">Let's work together</h1>
              <p className="text-[11px] text-muted">Available for new projects and creative collaborations.</p>
            </div>
            <div className='hidden md:block'>
              <img className='rounded-lg' src="/work.png" alt="Working together"/>
            </div>
            </div>
          </div>

          {/* form and submission */}
          <div className="order-2 md:order-1 flex-3 mt-3 md:mt-3 md:mx-5">
            <form action="#" className="space-y-5" method="POST">

                {/* Name Inputs */}
              <div className="grid grid-cols-2 gap-3">

                <div >
                  <label className="block text-xs text-muted tracking-wider mb-1" htmlFor="first_name">First name</label>
                  <input className="block w-full border-[1.5px] border-lightchipborder rounded-md bg-lightbg outline-none focus:border-primary focus:ring-1 focus:ring-primary text-[11px] transition-colors" id="first_name" name="first_name" placeholder="Jane" type="text" />
                </div>

                <div >
                  <label className="block text-xs text-muted tracking-wider mb-1" htmlFor="last_name">Last name</label>
                  <input className="block w-full border-[1.5px] border-lightchipborder rounded-md bg-lightbg outline-none focus:border-primary focus:ring-1 focus:ring-primary text-[11px]  transition-colors" id="last_name" name="last_name" placeholder="Doe" type="text" />
                </div>

                </div>

                {/* Email */}
              <div >
                <label className="block text-xs text-muted tracking-wider mb-1" htmlFor="email">Email address</label>
                <input className="block w-full border-[1.5px] border-lightchipborder rounded-md bg-lightbg outline-none focus:border-primary focus:ring-1 focus:ring-primary text-[11px]  transition-colors" id="email" name="email" placeholder="jane@example.com" type="email" />
              </div>

              {/* Service type */}
              <div>
                <label className="block text-xs text-muted tracking-wider mb-1">Service</label>
                <div className="flex flex-wrap gap-3">
                  <label className="cursor-pointer">
                    <input className="sr-only chip-radio" name="inquiry_type" type="radio" value="general" />
                    <div className="chip-card border-[1.5px] border-lightchipborder bg-lightbg rounded-full text-[10px] font-bold text-secondary transition-all hover:border-primary">General Inquiry</div>
                  </label>
                  <label className="cursor-pointer">
                    <input defaultChecked className="sr-only chip-radio" name="inquiry_type" type="radio" value="freelance"/>
                    <div className="chip-card border-[1.5px] border-lightchipborder bg-lightbg rounded-full text-[10px] font-bold text-secondary transition-all hover:border-primary">Technical Support</div>
                  </label>
                  <label className="cursor-pointer">
                    <input className="sr-only chip-radio" name="inquiry_type" type="radio" value="partnership" />
                    <div className="chip-card border-[1.5px] border-lightchipborder bg-lightbg rounded-full text-[10px] font-bold text-secondary transition-all hover:border-primary">Contract Work</div>
                  </label>
                </div>
              </div>

              {/* Collaboration Type */}
              <div>
              <label className="block text-xs text-muted tracking-wider mb-1">Collaboration</label>
              <div className="grid grid-cols-2 gap-3">
                <label className="cursor-pointer relative group">
                  <input defaultChecked className="sr-only selection-radio" name="creator_type" type="radio"
                    value="solo" />
                  <div className="selection-card border-[1.5px] border-lightchipborder bg-lightbg rounded-lg p-3 h-full transition-all duration-300 hover:border-primary relative">
                    <div
                      className="check-icon absolute top-2 right-2 hidden w-3.5 h-3.5 bg-primary text-white rounded-full items-center justify-center p-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <div className="flex">
                      <User className="text-icon-indigo w-5 h-5 transition-colors" />
                    </div>
                    <h3 className="text-xs font-bold text-secondary">Hire Me</h3>
                    <p className="text-[10px] text-muted">Project based work</p>
                  </div>
                </label>
                <label className="cursor-pointer relative group">
                  <input className="sr-only selection-radio" name="creator_type" type="radio" value="team" />
                  <div className="selection-card border-[1.5px] border-lightchipborder bg-lightbg rounded-lg p-3 h-full transition-all duration-300 hover:border-primary relative">
                    <div className="check-icon absolute top-2 right-2 hidden w-3.5 h-3.5 bg-primary text-white rounded-full items-center justify-center p-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <div className="flex">
                      <Users className="text-icon-pink w-5 h-5 transition-colors" />
                    </div>
                    <h3 className="text-xs font-bold text-secondary">Join Me</h3>
                    <p className="text-[10px] text-muted">Long term collaboration</p>
                  </div>
                </label>
              </div>
              </div>

              {/* Message */}
              <div >
                <label className="block text-xs text-muted tracking-wider mb-1" htmlFor="message">Message</label>
                <textarea className="block w-full border-[1.5px] border-lightchipborder rounded-md bg-lightbg outline-none text-[11px] min-h-19 resize-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" id="message" name="message" placeholder="What brings you here..." />
              </div>

              {/* submit button */}
              <div >
                <button className="w-full h-10 bg-primary hover:bg-primary-hover text-white text-xs font-bold rounded-md shadow-md shadow-primary/10 transition-all active:scale-[0.98]" type="submit">Send Message</button>
              </div>

            </form>
          </div>

          {/* social and contact information */}
          <div className="order-1 md:order-2 flex-1 flex flex-col justify-start mt-2 md:mt-3 md:ml-5">
            <div className="flex flex-col gap-2 flex-1">
              <div>
                <h1 className="text-xl font-bold text-secondary tracking-tight">Connect</h1>
                <p className="text-[11px] text-muted">Join me across platforms and let's start the conversation. </p>
              </div>

              <div>
                <a className="group flex items-center gap-3 transition-colors" href="mailto:asimvoid@gmail.com">
                  <div>
                    <Mail className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="hidden md:block text-[11px] text-muted font-outfit uppercase">Email</p>
                    <p className="text-xs font-medium text-secondary group-hover:text-primary transition-colors">asimvoid@gmail.com</p>
                  </div>
                </a>
              </div>

              <div>
                <a className="group flex items-center gap-3 transition-colors" href="https://www.google.com/maps/search/?api=1&amp;query=Karachi,+Pakistan" target="_blank">
                  <div>
                    <MapPin className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="hidden md:block text-[11px] text-muted font-outfit uppercase ">Location</p>
                    <p className="text-xs font-medium text-secondary group-hover:text-primary transition-colors">Karachi, Pakistan</p>
                  </div>
                </a>
              </div>

              <div className="hidden md:block">
                <h4 className="text-[11px] text-muted font-outfit  mb-1">Connect via</h4>
                <div className="flex gap-5">
                  <a className="flex items-center justify-center bg-transparent group transition-colors" href="#">
                    <svg className="w-4 h-4 fill-muted group-hover:fill-primary transition-colors" viewBox="0 0 24 24">
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z">
                      </path>
                    </svg>
                  </a>

                  <a className="flex items-center justify-center bg-transparent group transition-colors" href="https://www.linkedin.com/in/asimvoid/" target="_blank">
                    <svg className="w-4 h-4 fill-muted group-hover:fill-primary transition-colors" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                  
                  <a className="flex items-center justify-center bg-transparent group transition-colors" href="https://github.com/asimvoid" target="_blank">
                    <svg className="w-4 h-4 fill-muted group-hover:fill-primary transition-colors" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="hidden md:block">
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-primary" />
                    <p className="text-[11px] text-muted">Responds within 24h.</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    <p className="text-[11px] text-muted">Focused visual solutions.</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden md:flex md:items-center gap-2 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-icon-online"></span>
              <p className="text-[11px] text-muted">Open for Projects.</p>
            </div>

          </div>

        </div>

  )
}

export default Contact;