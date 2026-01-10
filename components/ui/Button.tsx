import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    icon?: LucideIcon;
    iconPosition?: 'left' | 'right';
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

export default function Button({
    children,
    variant = 'primary',
    icon: Icon,
    iconPosition = 'right',
    onClick,
    disabled = false,
    className = '',
}: ButtonProps) {
    const baseStyles = 'btn-neo neo-transition';

    const variantStyles = {
        primary: 'bg-neo-black text-neo-white',
        secondary: 'bg-neo-white text-neo-black',
        outline: 'bg-transparent text-neo-black border-4 border-neo-black',
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variantStyles[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
        >
            {Icon && iconPosition === 'left' && <Icon size={20} />}
            {children}
            {Icon && iconPosition === 'right' && <Icon size={20} />}
        </button>
    );
}
