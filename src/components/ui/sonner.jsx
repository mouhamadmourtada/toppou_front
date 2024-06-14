import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: ({ variant }) =>
            `group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg ${variantClasses[variant] || variantClasses.default}`,
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

// Define classes for each variant
const variantClasses = {
  destructive: "bg-red-600 text-white",
  success: "bg-green-600 text-white",
  warning: "bg-yellow-600 text-black",
  default: "bg-gray-600 text-white", // Default style
};

export { Toaster };
