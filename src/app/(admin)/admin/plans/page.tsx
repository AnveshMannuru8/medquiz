"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

interface Plan {
    id: string;
    name: string;
    price: number;
    stripePriceId: string | null;
    features: string[];
    isActive: boolean;
}

export default function AdminPlansPage() {
    const [plans, setPlans] = useState<Plan[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        stripePriceId: "",
        features: "",
        isActive: true,
    });

    useEffect(() => {
        fetchPlans();
    }, []);

    const fetchPlans = async () => {
        try {
            const res = await fetch("/api/admin/plans");
            if (res.ok) {
                const data = await res.json();
                setPlans(data);
            }
        } catch (error) {
            console.error("Failed to fetch plans", error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/admin/plans", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    price: parseFloat(formData.price),
                    features: formData.features.split("\n").filter((f) => f.trim() !== ""),
                }),
            });

            if (res.ok) {
                setIsOpen(false);
                setFormData({
                    name: "",
                    price: "",
                    stripePriceId: "",
                    features: "",
                    isActive: true,
                });
                fetchPlans();
            }
        } catch (error) {
            console.error("Failed to create plan", error);
        }
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Manage Pricing Plans</h1>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <Button>Create Plan</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create New Plan</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Plan Name</Label>
                                <Input
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="price">Price ($)</Label>
                                <Input
                                    id="price"
                                    type="number"
                                    step="0.01"
                                    value={formData.price}
                                    onChange={(e) =>
                                        setFormData({ ...formData, price: e.target.value })
                                    }
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="stripePriceId">Stripe Price ID (Optional)</Label>
                                <Input
                                    id="stripePriceId"
                                    value={formData.stripePriceId}
                                    onChange={(e) =>
                                        setFormData({ ...formData, stripePriceId: e.target.value })
                                    }
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="features">Features (One per line)</Label>
                                <Textarea
                                    id="features"
                                    value={formData.features}
                                    onChange={(e) =>
                                        setFormData({ ...formData, features: e.target.value })
                                    }
                                    rows={4}
                                />
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch
                                    id="isActive"
                                    checked={formData.isActive}
                                    onCheckedChange={(checked) =>
                                        setFormData({ ...formData, isActive: checked })
                                    }
                                />
                                <Label htmlFor="isActive">Active</Label>
                            </div>
                            <Button type="submit" className="w-full">
                                Create Plan
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="border rounded-md">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Stripe ID</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Features</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {plans.map((plan) => (
                            <TableRow key={plan.id}>
                                <TableCell className="font-medium">{plan.name}</TableCell>
                                <TableCell>${plan.price.toFixed(2)}</TableCell>
                                <TableCell>{plan.stripePriceId || "N/A"}</TableCell>
                                <TableCell>
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs ${plan.isActive
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                            }`}
                                    >
                                        {plan.isActive ? "Active" : "Inactive"}
                                    </span>
                                </TableCell>
                                <TableCell>{plan.features.length} features</TableCell>
                            </TableRow>
                        ))}
                        {plans.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                                    No plans found. Create one to get started.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
