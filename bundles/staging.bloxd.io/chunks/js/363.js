export const id = 363;
export const ids = [363];
export const modules = {
  61584: (uu, Eu, ju) => {
    function su(uu, Eu, ju, su, Uu, Zu, Xu) {
      const lu = Eu,
        qu = su,
        fu = ju;
      uu[fu + 0] = lu[qu + 0], uu[fu + 1] = lu[qu + 1], uu[fu + 2] = lu[qu + 2], uu[fu + 3] = lu[qu + 3], uu[fu + 4] = lu[qu + 4], uu[fu + 5] = lu[qu + 5], uu[fu + 6] = lu[qu + 6], uu[fu + 7] = lu[qu + 7], uu[fu + 8] = lu[qu + 8], uu[fu + 9] = lu[qu + 9], uu[fu + 10] = lu[qu + 10], uu[fu + 11] = lu[qu + 11], uu[fu + 12] = lu[qu + 12] - Uu, uu[fu + 13] = lu[qu + 13] - Zu, uu[fu + 14] = lu[qu + 14] - Xu, uu[fu + 15] = lu[qu + 15]
    }

    function Uu(uu) {
      return (Eu, ju, Uu, Zu) => {
        const Xu = uu.camera;
        if (!Xu) return void su(Eu, ju, Uu, Zu, 0, 0, 0);
        const lu = Xu.worldMatrix;
        su(Eu, ju, Uu, Zu, lu[12], lu[13], lu[14])
      }
    }
    ju.r(Eu), ju.d(Eu, {
      makePackMeshWorld: () => Uu,
      packMat4IntoF32WithOffset: () => su
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);