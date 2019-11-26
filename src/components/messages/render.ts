import * as Sqrl from "squirrelly";

export const render = (template: string = "", data: any = {}) =>
  Sqrl.Render(template, data || {});
