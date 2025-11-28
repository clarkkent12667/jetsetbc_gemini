"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().regex(/^\+?[0-9\s-]{8,}$/, 'Invalid phone number'),
    company: z.string().optional(),
    service: z.enum(['coworking', 'office', 'meeting', 'virtual', 'setup', 'other']),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Failed to send message');

            setSubmitStatus('success');
            reset();
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

            {submitStatus === 'success' ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                    <p className="text-gray-600 mb-6">
                        Thank you for contacting us. We will get back to you shortly.
                    </p>
                    <button
                        onClick={() => setSubmitStatus('idle')}
                        className="text-primary-600 font-semibold hover:underline"
                    >
                        Send another message
                    </button>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                {...register('name')}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all"
                                placeholder="John Doe"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                {...register('email')}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all"
                                placeholder="john@example.com"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input
                                {...register('phone')}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all"
                                placeholder="+971 50 123 4567"
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Company (Optional)</label>
                            <input
                                {...register('company')}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all"
                                placeholder="Your Company Ltd"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Interested Service</label>
                        <select
                            {...register('service')}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all bg-white"
                        >
                            <option value="coworking">Coworking Space</option>
                            <option value="office">Serviced Office</option>
                            <option value="meeting">Meeting Room</option>
                            <option value="virtual">Virtual Office</option>
                            <option value="setup">Business Setup</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                            {...register('message')}
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all"
                            placeholder="Tell us about your requirements..."
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                    </div>

                    {submitStatus === 'error' && (
                        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                            <AlertCircle className="w-5 h-5" />
                            <p className="text-sm">Something went wrong. Please try again later.</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold text-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </form>
            )}
        </div>
    );
}
