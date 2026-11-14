export const id = 76;
export const ids = [76];
export const modules = {
  3855: (FF, WF, SF) => {
    SF.d(WF, {
      Howl: () => CF.Howl,
      c: () => CF.Howler
    });
    var CF = SF(3863);
    CF.Howler._mobileUnloaded = !0
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);