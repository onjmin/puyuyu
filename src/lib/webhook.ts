import { format } from "date-fns";
import { ja } from "date-fns/locale";

const sendDiscordWebhook = (url: string, array: string[]) =>
	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			content: [
				"```",
				format(new Date(), "yyyy年MM月dd日 HH時mm分ss秒", { locale: ja }),
				array.join("\n").replace(/`/g, ""),
				"```",
			].join("\n"),
			allowed_mentions: {
				parse: [],
			},
		}),
	});

export const requestNewPage = (array: string[]) =>
	sendDiscordWebhook(import.meta.env.VITE_DISCORD_WEBHOOK, array);
