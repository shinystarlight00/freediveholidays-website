import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded bg-blue-500 text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input className={`w-full p-2 border rounded ${className}`} {...props} />
  );
}

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return <div className="bg-white p-6 shadow-lg rounded-lg">{children}</div>;
}
