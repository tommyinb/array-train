"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.infiniteTrain = infiniteTrain;
function infiniteTrain(input, func) {
    return __awaiter(this, void 0, void 0, function* () {
        const allOutput = [];
        let currentInput = input;
        let level = 0;
        while (currentInput.length > 0) {
            let nextInput = [];
            for (const item of currentInput) {
                const result = yield func(item, level);
                allOutput.push(...result.output);
                nextInput.push(...result.next);
            }
            currentInput = nextInput;
            level++;
        }
        return allOutput;
    });
}
//# sourceMappingURL=infiniteTrain.js.map