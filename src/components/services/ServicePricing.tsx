"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface PricingPlan {
    name: string;
    price: string;
    period?: string;
    description: string;
    features: string[];
    popular?: boolean;
}

interface ServicePricingProps {
    title?: string;
    plans: PricingPlan[];
}

export function ServicePricing({ title = "Transparent Pricing", plans }: ServicePricingProps) {
    return (
        <section className="py-12 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl font-heading font-bold text-primary-700 mb-4">{title}</h2>
                    <p className="text-gray-600">Choose the plan that suits your business needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border ${plan.popular ? 'border-secondary-500 ring-2 ring-secondary-500/20' : 'border-gray-100'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-gray-500 text-sm mb-6">{plan.description}</p>

                                <div className="flex items-baseline mb-6">
                                    <span className="text-4xl font-bold text-primary-700">{plan.price}</span>
                                    {plan.period && <span className="text-gray-500 ml-2">{plan.period}</span>}
                                </div>

                                <Link
                                    href="/contact"
                                    className={`block w-full py-3 rounded-lg font-semibold text-center transition-colors ${plan.popular
                                            ? 'bg-secondary-500 hover:bg-secondary-600 text-white'
                                            : 'bg-primary-50 hover:bg-primary-100 text-primary-700'
                                        }`}
                                >
                                    Get Started
                                </Link>
                            </div>

                            <div className="bg-gray-50 p-8 border-t border-gray-100">
                                <ul className="space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                            <Check className="w-5 h-5 text-green-500 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
