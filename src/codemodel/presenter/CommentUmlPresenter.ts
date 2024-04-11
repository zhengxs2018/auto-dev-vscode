import { PlantUMLPresenter } from "./PlantUMLPresenter.ts";
import { CodeFile } from "../CodeFile.ts";
import { LANGUAGE_COMMENT_MAP } from "../../language/LanguageCommentMap.ts";

export class CommentUmlPresenter extends PlantUMLPresenter {
	convert(file: CodeFile): string {
		const commentSymbol = LANGUAGE_COMMENT_MAP[file.language];
		const plantUml = this.render(file);

		return plantUml.split("\n").map((line) => {
			return `${commentSymbol} ${line}`;
		}).join("\n");
	}
}