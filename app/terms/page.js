import React from "react";

export default function Terms() {
  return (
    <div className="py-16 bg-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-invert prose-lg max-w-none">
          <h1 className="font-display text-3xl lg:text-4xl text-white mb-8">
            Terms of Service
          </h1>
          
          <p className="text-gray-300 mb-6">
            <em>Last updated: December 2024</em>
          </p>
          
          <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mb-8">
            <p className="text-yellow-200 text-sm mb-0">
              <strong>Legal Notice:</strong> These terms of service require review and customization 
              by qualified legal counsel before use. ACME Corp should not rely on this template without 
              proper legal review.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing and using acmecorp.live and ACME Corp services, you accept and agree 
              to be bound by these Terms of Service and our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Description of Service</h2>
            <p className="text-gray-300 mb-4">
              ACME Corp provides commerce infrastructure solutions, including but not limited to:
            </p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>• Retail Hub commerce platform</li>
              <li>• API-first commerce services</li>
              <li>• Architecture consulting</li>
              <li>• Technical documentation and support</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">User Responsibilities</h2>
            <p className="text-gray-300 mb-4">
              When using our services, you agree to:
            </p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>• Provide accurate and complete information</li>
              <li>• Use services only for lawful purposes</li>
              <li>• Maintain the security of your account credentials</li>
              <li>• Comply with all applicable laws and regulations</li>
              <li>• Not interfere with or disrupt our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              All content, trademarks, and intellectual property on this website and in our 
              services remain the property of ACME Corp or our licensors. You may not:
            </p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>• Copy, modify, or distribute our content without permission</li>
              <li>• Use our trademarks or branding without authorization</li>
              <li>• Reverse engineer or attempt to extract source code</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Service Availability</h2>
            <p className="text-gray-300 mb-4">
              While we strive for high availability, we cannot guarantee uninterrupted access 
              to our services. We may temporarily suspend services for maintenance, updates, 
              or other operational reasons.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              To the fullest extent permitted by law, ACME Corp shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages arising from 
              your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibred text-white mb-4">Privacy and Data Protection</h2>
            <p className="text-gray-300 mb-4">
              Our collection and use of personal information is governed by our Privacy Policy. 
              By using our services, you consent to such collection and use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Modifications to Terms</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right to modify these terms at any time. We will provide notice 
              of material changes by posting updated terms on this page and updating the 
              &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Termination</h2>
            <p className="text-gray-300 mb-4">
              We may terminate or suspend access to our services at any time, with or without 
              cause, with or without notice, effective immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Governing Law</h2>
            <p className="text-gray-300 mb-4">
              These terms shall be governed by and construed in accordance with the laws of 
              [LEGAL COUNSEL TO SPECIFY JURISDICTION], without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
            <p className="text-gray-300 mb-4">
              For questions about these Terms of Service, contact us at:
            </p>
            <p className="text-gray-300">
              <strong>Email:</strong> hello@acmecorp.live<br/>
              <strong>Address:</strong> [LEGAL COUNSEL TO PROVIDE REGISTERED ADDRESS]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}


