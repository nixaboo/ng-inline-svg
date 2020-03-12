import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class SVGReplaceContent {
    static AddReplaceContent(source, replaceWith) {
        SVGReplaceContent.ReplaceContentGlobal[source] = replaceWith;
    }

    static ReplaceContentForSVG(originalSVG: string): string {
        let raw = originalSVG;
        for(let findStr in SVGReplaceContent.ReplaceContentGlobal) {
            let regex = new RegExp(findStr, 'g');
            let replaceWith = SVGReplaceContent.ReplaceContentGlobal[findStr];
            raw = raw.replace(regex, replaceWith);
        }

        return raw;
    }

    private static ReplaceContentGlobal: { [key: string]: string } = {};
}
