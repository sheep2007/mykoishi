import { Context, Schema, h, Service, Session, Logger } from 'koishi';
export declare const name: string;
export declare const logger: Logger;
declare module 'koishi' {
    interface Context {
        vits: Vits;
    }
    interface Vits {
        say(prompt: string, speaker_id?: number): Promise<string | h>;
    }
}
declare class Vits extends Service {
    private config;
    temp_msg: string;
    speaker: number;
    constructor(ctx: Context, config: Vits.Config);
    recall(session: Session, messageId: string): Promise<void>;
    /**
     *
     * @param prompt 要转化的文本
     * @param speaker_id 音色id，可选
     * @returns
     */
    say(prompt: string, speaker_id?: number): Promise<string | h>;
}
declare namespace Vits {
    const usage = "\n## \u6CE8\u610F\u4E8B\u9879\n>\u5BF9\u4E8E\u90E8\u7F72\u8005\u884C\u4E3A\u53CA\u6240\u4EA7\u751F\u7684\u4EFB\u4F55\u7EA0\u7EB7\uFF0C Koishi \u53CA koishi-plugin-open-vits \u6982\u4E0D\u8D1F\u8D23\u3002<br>\n\u5982\u679C\u6709\u66F4\u591A\u6587\u672C\u5185\u5BB9\u60F3\u8981\u4FEE\u6539\uFF0C\u53EF\u4EE5\u5728<a style=\"color:blue\" href=\"/locales\">\u672C\u5730\u5316</a>\u4E2D\u4FEE\u6539 zh \u5185\u5BB9</br>\n\u540E\u7AEF\u642D\u5EFA\u6559\u7A0B<a style=\"color:blue\" href=\"https://github.com/Artrajz/vits-simple-api\">vits-simple-api</a>\n## \u4F7F\u7528\u65B9\u6CD5\n* say \u8981\u8F6C\u5316\u7684\u6587\u672C\n\n## \u95EE\u9898\u53CD\u9988\u7FA4: \n399899914\n";
    interface Config {
        endpoint: string;
        max_length: number;
        waiting: boolean;
        waiting_text: string;
        recall: boolean;
        recall_time: number;
        speaker_id: number;
        max_speakers: number;
    }
    const Config: Schema<Schemastery.ObjectS<{
        endpoint: Schema<string, string>;
        speaker_id: Schema<number, number>;
        max_length: Schema<number, number>;
        waiting: Schema<boolean, boolean>;
        waiting_text: Schema<string, string>;
        recall: Schema<boolean, boolean>;
        recall_time: Schema<number, number>;
        max_speakers: Schema<number, number>;
    }>, Schemastery.ObjectT<{
        endpoint: Schema<string, string>;
        speaker_id: Schema<number, number>;
        max_length: Schema<number, number>;
        waiting: Schema<boolean, boolean>;
        waiting_text: Schema<string, string>;
        recall: Schema<boolean, boolean>;
        recall_time: Schema<number, number>;
        max_speakers: Schema<number, number>;
    }>>;
}
export default Vits;