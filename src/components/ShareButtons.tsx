import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Share2, Link as LinkIcon, Check } from "lucide-react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { useState } from "react";

interface ShareButtonsProps {
  title: string;
  description: string;
  url: string;
}

export function ShareButtons({ title, description, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Share2 className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem asChild>
          <TwitterShareButton
            url={url}
            title={title}
            className="w-full cursor-pointer"
          >
            <div className="flex items-center gap-2 w-full">
              <TwitterIcon size={24} round />
              <span>Twitter</span>
            </div>
          </TwitterShareButton>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <FacebookShareButton url={url} className="w-full cursor-pointer">
            <div className="flex items-center gap-2 w-full">
              <FacebookIcon size={24} round />
              <span>Facebook</span>
            </div>
          </FacebookShareButton>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <LinkedinShareButton
            url={url}
            title={title}
            summary={description}
            source={url}
            className="w-full cursor-pointer"
          >
            <div className="flex items-center gap-2 w-full">
              <LinkedinIcon size={24} round />
              <span>LinkedIn</span>
            </div>
          </LinkedinShareButton>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <WhatsappShareButton
            url={url}
            title={title}
            separator=" - "
            className="w-full cursor-pointer"
          >
            <div className="flex items-center gap-2 w-full">
              <WhatsappIcon size={24} round />
              <span>WhatsApp</span>
            </div>
          </WhatsappShareButton>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopy} className="cursor-pointer">
          <div className="flex items-center gap-2 w-full pl-0.5">
            <div className="w-[24px] h-[24px] flex items-center justify-center bg-muted rounded-full">
              {copied ? (
                <Check className="w-3.5 h-3.5" />
              ) : (
                <LinkIcon className="w-3.5 h-3.5" />
              )}
            </div>
            <span>{copied ? "Copied!" : "Copy Link"}</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
