export const id = 207;
export const ids = [207];
export const modules = {
  36163: (uu, Ru, yu) => {
    yu.d(Ru, {
      reportCappedWasmFailure: () => mu,
      reportWasmFailure: () => Qu
    });
    var Eu = yu(3032);
    const Ku = Eu.b - 4;

    function Qu(uu, Ru, yu) {
      (0, Eu.e)(uu, Ru, yu, !1)
    }

    function mu(uu, Ru, yu) {
      (0, Eu.e)(uu, Ru, yu, !1, Ku)
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);