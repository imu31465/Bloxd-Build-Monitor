export const id = 351;
export const ids = [351];
export const modules = {
  61093: (uu, Ru, yu) => {
    function Eu(uu, Ru, yu, Eu, Ku, Qu, mu) {
      const Ju = Ru,
        Nu = Eu,
        Xu = yu;
      uu[Xu + 0] = Ju[Nu + 0], uu[Xu + 1] = Ju[Nu + 1], uu[Xu + 2] = Ju[Nu + 2], uu[Xu + 3] = Ju[Nu + 3], uu[Xu + 4] = Ju[Nu + 4], uu[Xu + 5] = Ju[Nu + 5], uu[Xu + 6] = Ju[Nu + 6], uu[Xu + 7] = Ju[Nu + 7], uu[Xu + 8] = Ju[Nu + 8], uu[Xu + 9] = Ju[Nu + 9], uu[Xu + 10] = Ju[Nu + 10], uu[Xu + 11] = Ju[Nu + 11], uu[Xu + 12] = Ju[Nu + 12] - Ku, uu[Xu + 13] = Ju[Nu + 13] - Qu, uu[Xu + 14] = Ju[Nu + 14] - mu, uu[Xu + 15] = Ju[Nu + 15]
    }

    function Ku(uu) {
      return (Ru, yu, Ku, Qu) => {
        const mu = uu.camera;
        if (!mu) return void Eu(Ru, yu, Ku, Qu, 0, 0, 0);
        const Ju = mu.worldMatrix;
        Eu(Ru, yu, Ku, Qu, Ju[12], Ju[13], Ju[14])
      }
    }
    yu.r(Ru), yu.d(Ru, {
      makePackMeshWorld: () => Ku,
      packMat4IntoF32WithOffset: () => Eu
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);