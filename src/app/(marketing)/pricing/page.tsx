import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Pricing - MedQuiz",
    description: "Choose the right plan for your USMLE preparation journey.",
};

const plans = [
    {
        name: "Basic",
        description: "Essential features for starting your USMLE prep.",
        price: "$29",
        duration: "/month",
        features: [
            "Access to 1,000+ practice questions",
            "Basic performance analytics",
            "Standard flashcards",
            "Email support",
        ],
        buttonText: "Get Started",
        buttonVariant: "outline" as const,
        href: "/register",
    },
    {
        name: "Pro",
        description: "Comprehensive tools for serious medical students.",
        price: "$79",
        duration: "/month",
        popular: true,
        features: [
            "Access to 5,000+ practice questions",
            "Advanced AI-powered analytics",
            "Smart spaced-repetition flashcards",
            "Custom quiz generation",
            "Priority support",
        ],
        buttonText: "Start Free Trial",
        buttonVariant: "default" as const,
        href: "/register?plan=pro",
    },
    {
        name: "Institution",
        description: "Tailored solutions for medical schools and programs.",
        price: "Custom",
        duration: "",
        features: [
            "Everything in Pro",
            "Admin dashboard & reporting",
            "Custom curriculum integration",
            "Dedicated account manager",
            "API access",
        ],
        buttonText: "Contact Sales",
        buttonVariant: "outline" as const,
        href: "/contact",
    },
];

export default function PricingPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
                    Simple, transparent pricing
                </h1>
                <p className="text-xl text-muted-foreground">
                    Choose the plan that best fits your study needs. No hidden fees. Cancel anytime.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan) => (
                    <Card
                        key={plan.name}
                        className={`flex flex-col ${plan.popular ? 'border-primary shadow-lg relative scale-105 z-10' : ''}`}
                    >
                        {plan.popular && (
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <Badge className="bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-full">
                                    Most Popular
                                </Badge>
                            </div>
                        )}
                        <CardHeader>
                            <CardTitle className="text-2xl">{plan.name}</CardTitle>
                            <CardDescription>{plan.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <div className="mb-6">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                <span className="text-muted-foreground">{plan.duration}</span>
                            </div>
                            <ul className="space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full" variant={plan.buttonVariant}>
                                <Link href={plan.href}>{plan.buttonText}</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="mt-24 max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="text-left space-y-6 mt-8">
                    <div>
                        <h3 className="font-semibold text-lg">Can I switch plans later?</h3>
                        <p className="text-muted-foreground mt-2">Yes, you can upgrade or downgrade your plan at any time. Prorated charges will be applied automatically.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Is there a discount for annual billing?</h3>
                        <p className="text-muted-foreground mt-2">Yes! We offer a 20% discount if you choose to be billed annually instead of monthly.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Do you offer refunds?</h3>
                        <p className="text-muted-foreground mt-2">We offer a 7-day money-back guarantee for all new subscriptions. If you{"'"}re not satisfied, just let us know.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
