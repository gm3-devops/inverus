import React from "react";
import Image from "next/image";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card"; // Adjust path as needed
import { Zap } from "lucide-react";

interface BioCardProps {
    name: string;
    title: string;
    avatar: string;
    bio: string[];
    companies: string[]; // Add a new prop to accept company logo paths
}

const BioCard = ({ name, title, avatar, bio, companies }: BioCardProps) => {
    return (
        <Card className="max-w-lg">
            {/* Header with Avatar and Company Logos */}
            <CardHeader className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="relative h-16 w-16 rounded-full border-2 border-blue-500 overflow-hidden">
                        <Image src={avatar} alt={name} layout="fill" objectFit="cover" />
                    </div>
                    <div>
                        <CardTitle>{name}</CardTitle>
                        <CardDescription>{title}</CardDescription>
                    </div>
                </div>
                {/* Company Logos */}
                <div className="flex space-x-4">
                    {companies.map((logo, index) => (
                        <div key={index} className="relative h-24 w-24">
                            <Image src={logo} alt={`Company ${index + 1}`} layout="fill" objectFit="contain" />
                        </div>
                    ))}
                </div>
            </CardHeader>

            {/* Content with Bullet Points */}
            <CardContent className="space-y-3 text-sm text-muted-foreground">
                {bio.map((point, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <Zap className="w-4 h-4 fill-primary text-primary" />
                        <p className="flex-1 leading-tight">{point}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default BioCard;
