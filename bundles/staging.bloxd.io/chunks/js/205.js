export const id = 205;
export const ids = [205];
export const modules = {
  33838: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Ik,
      f: () => qk,
      g: () => uk
    });
    var Dk = ik(33846);
    const fk = {
        fileBytes: 4194304,
        vertices: 65535,
        indices: 196608,
        accessorElements: 196608,
        primitives: 64,
        nodes: 128,
        meshes: 64,
        materials: 8,
        images: 8,
        imageSide: 1024
      },
      Sk = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      bk = 1048576,
      rk = "is not a binary glTF 2.0 file",
      Pk = "loads data from outside the file",
      mk = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      Mk = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      Kk = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      xk = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: Kk,
        TEXCOORD_2: Kk,
        TEXCOORD_3: Kk,
        TEXCOORD_4: Kk,
        TEXCOORD_5: Kk
      },
      nk = new Set(Dk.h.map((kk => {
        let [ek] = kk;
        return ek
      }))),
      Uk = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      Hk = 5126;

    function wk(kk) {
      return kk.toLocaleString("en-US")
    }

    function lk(kk, ek, ik) {
      return kk > ek ? `has ${wk(kk)} ${ik} (the limit is ${wk(ek)})` : null
    }

    function pk(kk, ek) {
      return Number.isInteger(kk) && kk >= 0 && kk < (null !== ek && void 0 !== ek ? ek : 0)
    }

    function yk(kk) {
      return Number.isInteger(kk) && kk >= 0
    }

    function Yk(kk, ek) {
      return void 0 !== kk && (!Array.isArray(kk) || kk.length > ek)
    }

    function Lk(kk, ek) {
      return "object" === typeof kk && null !== kk && Object.keys(kk).length > ek
    }

    function Ck(kk) {
      var ek;
      return `${kk.normalized?"normalized ":""}${null!==(ek=Dk.f[kk.componentType])&&void 0!==ek?ek:kk.componentType} ${kk.type}`
    }

    function Ak(kk) {
      const ek = ek => {
        var ik;
        return null !== (ik = kk[ek]) && void 0 !== ik ? ik : -1
      };
      return 255 === ek(0) && 216 === ek(1) ? "JPEG" : 82 === ek(0) && 73 === ek(1) && 87 === ek(8) && 69 === ek(9) ? "WebP" : 171 === ek(0) && 75 === ek(1) && 84 === ek(2) && 88 === ek(3) ? "KTX2" : "non-PNG"
    }

    function jk(kk) {
      return kk.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((ek, ik) => kk[ik] === ek)) && 73 === kk[12] && 72 === kk[13] && 68 === kk[14] && 82 === kk[15]
    }

    function sk(kk) {
      return /^[aeiou]/i.test(kk) ? `an ${kk}` : `a ${kk}`
    }

    function dk(kk) {
      const ek = kk.byteStride;
      return void 0 === ek || Number.isInteger(ek) && ek >= 4 && ek <= 252 && ek % 4 === 0
    }

    function Vk(kk, ek, ik) {
      var Dk, fk;
      const Sk = null === (Dk = kk.bufferViews) || void 0 === Dk ? void 0 : Dk[ik];
      if (!Sk || !ek || 0 !== Sk.buffer) return null;
      const bk = null !== (fk = Sk.byteOffset) && void 0 !== fk ? fk : 0;
      return !yk(bk) || !yk(Sk.byteLength) || bk + Sk.byteLength > ek.byteLength ? null : ek.subarray(bk, bk + Sk.byteLength)
    }

    function Fk(kk, ek) {
      var ik, fk, Sk;
      const bk = Dk.m[ek.type],
        rk = Dk.b[ek.componentType];
      if (!bk || !rk || !Number.isInteger(ek.count) || ek.count < 0) return !1;
      if (void 0 === ek.bufferView) return !0;
      const Pk = null === (ik = kk.bufferViews) || void 0 === ik ? void 0 : ik[ek.bufferView],
        mk = null !== (fk = ek.byteOffset) && void 0 !== fk ? fk : 0;
      if (!Pk || !yk(mk) || mk % rk !== 0) return !1;
      const Mk = bk * rk,
        Kk = null !== (Sk = Pk.byteStride) && void 0 !== Sk ? Sk : Mk;
      if (Kk < Mk) return !1;
      return (0 === ek.count ? 0 : mk + Kk * (ek.count - 1) + Mk) <= Pk.byteLength
    }

    function uk(kk) {
      return kk > fk.fileBytes ? `is ${(kk/bk).toFixed(1)} MiB (the limit is ${fk.fileBytes/bk} MiB)` : null
    }

    function qk(kk, ek) {
      try {
        return function(kk, ek) {
          var ik, bk, Kk, wk, yk, uk, qk, Ik, zk, Qk, vk, Ek, hk, ak, Wk, tk, Xk;
          const Bk = Array.isArray(kk.extensionsUsed) && kk.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(kk, ek) {
              var ik, Dk;
              const {
                items: fk,
                perFile: bk,
                surfaces: rk,
                few: Pk,
                bounds: mk,
                attributeMembers: Mk
              } = Sk;
              if (Yk(kk.extensionsRequired, Pk) || Yk(kk.animations, 1 / 0) || Yk(kk.skins, 1 / 0)) return !0;
              if (null !== (ik = kk.animations) && void 0 !== ik && ik.length || null !== (Dk = kk.skins) && void 0 !== Dk && Dk.length) return !1;
              if ([
                  [kk.buffers, Pk],
                  [kk.scenes, Pk],
                  [kk.bufferViews, fk],
                  [kk.accessors, fk],
                  [kk.nodes, fk],
                  [kk.meshes, fk],
                  [kk.materials, rk],
                  [kk.textures, rk],
                  [kk.samplers, rk],
                  [kk.images, rk]
                ].some((kk => {
                  let [ek, ik] = kk;
                  return Yk(ek, ik)
                }))) return !0;
              for (const Sk of null !== (Kk = kk.accessors) && void 0 !== Kk ? Kk : []) {
                var Kk, xk, nk;
                if (Number.isInteger(Sk.count) && (!Number.isSafeInteger(Sk.count) || Object.is(Sk.count, -0)) || Yk(null !== (xk = Sk.min) && void 0 !== xk ? xk : void 0, mk) || Yk(null !== (nk = Sk.max) && void 0 !== nk ? nk : void 0, mk)) return !0
              }
              for (const Sk of null !== (Uk = kk.scenes) && void 0 !== Uk ? Uk : []) {
                var Uk;
                if (Yk(Sk.nodes, fk)) return !0
              }
              let Hk = 0;
              for (const Sk of null !== (wk = kk.nodes) && void 0 !== wk ? wk : []) {
                var wk, lk, pk;
                if (Yk(Sk.children, bk)) return !0;
                Hk += null !== (lk = null === (pk = Sk.children) || void 0 === pk ? void 0 : pk.length) && void 0 !== lk ? lk : 0
              }
              if (Hk > bk) return !0;
              let yk = 0;
              for (const Sk of null !== (Ck = kk.meshes) && void 0 !== Ck ? Ck : []) {
                var Ck;
                if (!Array.isArray(Sk.primitives)) return !0;
                if (yk += Sk.primitives.length, yk > bk) return !0;
                for (const kk of Sk.primitives) {
                  var Ak;
                  const ik = ek ? null === (Ak = kk.extensions) || void 0 === Ak ? void 0 : Ak.KHR_draco_mesh_compression : void 0;
                  if (Lk(kk.attributes, Mk) || Lk(null === ik || void 0 === ik ? void 0 : ik.attributes, Mk)) return !0
                }
              }
              return !1
            }(kk, Bk)) return rk;
          const ck = null === (ik = kk.asset) || void 0 === ik ? void 0 : ik.version;
          if ("string" !== typeof ck || !/^2\.\d+/.test(ck)) return `uses glTF version ${null!==ck&&void 0!==ck?ck:"(none)"}`;
          const Tk = null === (bk = kk.asset) || void 0 === bk ? void 0 : bk.minVersion;
          if (void 0 !== Tk && "2.0" !== Tk) return `uses glTF version ${Tk}`;
          for (const Dk of null !== (Zk = kk.extensionsRequired) && void 0 !== Zk ? Zk : []) {
            var Zk;
            if (!mk.has(Dk)) return `requires the glTF extension ${Dk}`
          }
          if (null !== (Kk = kk.animations) && void 0 !== Kk && Kk.length) return "has animations";
          if (null !== (wk = kk.skins) && void 0 !== wk && wk.length) return "uses skins";
          const Ok = null !== (yk = kk.buffers) && void 0 !== yk ? yk : [];
          for (const [Dk, fk] of Ok.entries()) {
            if (void 0 !== fk.uri) return Pk;
            if (Dk > 0 || !ek) return rk
          }
          for (const [Dk, fk] of(null !== (gk = kk.bufferViews) && void 0 !== gk ? gk : []).entries()) {
            var gk;
            if (!Vk(kk, ek, Dk) || !dk(fk)) return rk
          }
          const Gk = null !== (uk = kk.accessors) && void 0 !== uk ? uk : [];
          for (const Dk of Gk) {
            if (void 0 !== Dk.sparse) return "uses sparse accessors";
            const ek = Number.isInteger(Dk.count) ? lk(Dk.count, fk.accessorElements, "elements in an accessor") : null;
            if (ek) return ek;
            if (!Fk(kk, Dk)) return rk
          }
          const Nk = null !== (qk = kk.scenes) && void 0 !== qk ? qk : [];
          if (1 !== Nk.length) return `has ${Nk.length} scenes`;
          const Rk = (0, Dk.w)(kk);
          if (void 0 !== Rk && 0 !== Rk) return rk;
          const Jk = null !== (Ik = kk.nodes) && void 0 !== Ik ? Ik : [],
            ke = null !== (zk = kk.meshes) && void 0 !== zk ? zk : [],
            ee = null !== (Qk = kk.materials) && void 0 !== Qk ? Qk : [],
            ie = null !== (vk = kk.textures) && void 0 !== vk ? vk : [],
            De = null !== (Ek = kk.images) && void 0 !== Ek ? Ek : [],
            fe = null !== (hk = null !== (ak = null !== (Wk = lk(Jk.length, fk.nodes, "nodes")) && void 0 !== Wk ? Wk : lk(ke.length, fk.meshes, "meshes")) && void 0 !== ak ? ak : lk(ee.length, fk.materials, "materials")) && void 0 !== hk ? hk : lk(De.length, fk.images, "images");
          if (fe) return fe;
          const Se = new Set;
          for (const Dk of Jk)
            for (const kk of null !== (be = Dk.children) && void 0 !== be ? be : []) {
              var be;
              if (!pk(kk, Jk.length) || Se.has(kk)) return rk;
              Se.add(kk)
            }
          const re = new Set,
            Pe = kk => {
              var ek;
              return !re.has(kk) && (re.add(kk), (null !== (ek = Jk[kk].children) && void 0 !== ek ? ek : []).every(Pe))
            };
          for (const Dk of null !== (me = Nk[0].nodes) && void 0 !== me ? me : []) {
            var me;
            if (!pk(Dk, Jk.length) || Se.has(Dk) || !Pe(Dk)) return rk
          }
          for (const Dk of Jk) {
            if (void 0 !== Dk.matrix) return "uses node matrices";
            if (void 0 !== Dk.skin) return "uses skins";
            if (void 0 !== Dk.weights) return "uses morph targets";
            if (void 0 !== Dk.mesh && !pk(Dk.mesh, ke.length)) return rk;
            const kk = [
              [Dk.translation, 3],
              [Dk.rotation, 4],
              [Dk.scale, 3]
            ];
            for (const [ek, ik] of kk)
              if (void 0 !== ek && (!Array.isArray(ek) || ek.length !== ik || !ek.every((kk => Number.isFinite(kk))))) return rk
          }
          let Me = -1,
            Ke = 0,
            xe = 0,
            ne = null;
          for (const fk of ke) {
            if (void 0 !== fk.weights) return "uses morph targets";
            if (0 === fk.primitives.length) return rk;
            for (const ik of fk.primitives) {
              var Ue, He;
              const fk = null !== (Ue = ik.mode) && void 0 !== Ue ? Ue : 4;
              var we;
              if (4 !== fk && 0 !== fk) return `uses ${null!==(we=Uk[fk])&&void 0!==we?we:`mode ${fk}`} primitives`;
              if (void 0 !== ik.targets) return "uses morph targets";
              if (void 0 !== ik.material && !pk(ik.material, ee.length)) return rk;
              const Sk = Bk ? null === (He = ik.extensions) || void 0 === He ? void 0 : He.KHR_draco_mesh_compression : void 0;
              if (Sk) {
                if (4 !== fk) return "uses Draco-compressed points";
                if (!Vk(kk, ek, Sk.bufferView) || "object" !== typeof Sk.attributes) return rk
              }
              const bk = ik.attributes;
              if ("object" !== typeof bk || null === bk) return rk;
              if (void 0 === bk.POSITION) return "has a primitive with no positions";
              if (!pk(bk.POSITION, Gk.length)) return rk;
              const Pk = Gk[bk.POSITION].count;
              for (const [kk, ek] of Object.entries(bk)) {
                if (!pk(ek, Gk.length)) return rk;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(kk)) return "uses skins";
                const ik = Gk[ek],
                  Dk = Mk[kk];
                if (Dk && (ik.componentType !== Hk || ik.normalized || ik.type !== Dk)) return `stores ${kk} as ${Ck(ik)}`;
                const fk = xk[kk];
                if (fk && (ik.type !== fk.type || !fk.componentTypes.includes(ik.componentType) || ik.componentType === Hk === !!ik.normalized)) return `stores ${kk} as ${Ck(ik)}`;
                if (nk.has(kk) && ik.count !== Pk) return "has vertex attributes of different lengths"
              }
              if (Sk) {
                if (void 0 === ik.indices) return rk;
                for (const ek in Sk.attributes)
                  if (nk.has(ek) && void 0 === bk[ek]) return rk;
                if (void 0 === Sk.attributes.POSITION) return rk;
                const kk = pk(ik.indices, Gk.length) ? Gk[ik.indices].count : -1;
                if (0 === kk) return rk;
                if (-1 === Me) Me = Sk.bufferView, Ke = Pk, xe = kk;
                else {
                  ne ??= new Map([
                    [Me, [Ke, xe]]
                  ]);
                  const ek = ne.get(Sk.bufferView);
                  if (ek && (ek[0] !== Pk || ek[1] !== kk)) return rk;
                  ne.set(Sk.bufferView, null !== ek && void 0 !== ek ? ek : [Pk, kk])
                }
              }
              let mk = Pk;
              if (void 0 !== ik.indices) {
                if (!pk(ik.indices, Gk.length)) return rk;
                const kk = Gk[ik.indices];
                if ("SCALAR" !== kk.type) return rk;
                if (5121 === kk.componentType) return "uses 8-bit indices";
                var le;
                if (5123 !== kk.componentType && 5125 !== kk.componentType) return `stores indices as ${null!==(le=Dk.f[kk.componentType])&&void 0!==le?le:kk.componentType}`;
                if (!Sk && void 0 === kk.bufferView) return rk;
                mk = kk.count
              }
              if (4 === fk && mk % 3 !== 0) return rk
            }
          }
          let pe = 0,
            ye = 0,
            Ye = 0;
          for (let Dk = 0; Dk < Jk.length; Dk++) {
            const kk = Jk[Dk].mesh;
            if (void 0 !== kk && re.has(Dk))
              for (const ek of ke[kk].primitives) Ye++, pe += Gk[ek.attributes.POSITION].count, void 0 !== ek.indices && (ye += Gk[ek.indices].count)
          }
          const Le = null !== (tk = null !== (Xk = lk(pe, fk.vertices, "vertices")) && void 0 !== Xk ? Xk : lk(ye, fk.indices, "indices")) && void 0 !== tk ? tk : lk(Ye, fk.primitives, "primitives");
          if (Le) return Le;
          for (const Dk of ee) {
            var Ce, Ae;
            if (void 0 !== Dk.emissiveTexture) return "uses an emissive texture";
            const ek = null !== (Ce = Dk.alphaMode) && void 0 !== Ce ? Ce : "OPAQUE";
            if ("OPAQUE" !== ek && "MASK" !== ek && "BLEND" !== ek) return rk;
            const ik = null === (Ae = Dk.pbrMetallicRoughness) || void 0 === Ae ? void 0 : Ae.baseColorTexture;
            if (ik) {
              var je, se, de, Ve, Fe;
              const ek = null !== (je = kk.extensionsUsed) && void 0 !== je && je.includes("KHR_texture_transform") ? null === (se = ik.extensions) || void 0 === se ? void 0 : se.KHR_texture_transform : void 0;
              if (0 !== (null !== (de = ik.texCoord) && void 0 !== de ? de : 0) || 0 !== (null !== (Ve = null === ek || void 0 === ek ? void 0 : ek.texCoord) && void 0 !== Ve ? Ve : 0)) return "uses a second UV set";
              const Dk = ie[ik.index];
              if (!Dk || !pk(Dk.source, De.length) || void 0 !== Dk.sampler && !pk(Dk.sampler, null === (Fe = kk.samplers) || void 0 === Fe ? void 0 : Fe.length)) return rk
            }
          }
          for (const Dk of De) {
            if (void 0 !== Dk.uri) return Pk;
            if (void 0 === Dk.bufferView) return rk;
            const ik = Vk(kk, ek, Dk.bufferView);
            if (!ik) return rk;
            if ("image/png" !== Dk.mimeType) {
              var ue, qe, Ie;
              return `has ${sk(null!==(ue=null!==(qe={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(Ie=Dk.mimeType)&&void 0!==Ie?Ie:""])&&void 0!==qe?qe:Dk.mimeType)&&void 0!==ue?ue:"untyped")} image`
            }
            if (!jk(ik)) return `has ${sk(Ak(ik))} image`;
            const Sk = new DataView(ik.buffer, ik.byteOffset, ik.byteLength),
              bk = Sk.getUint32(16),
              mk = Sk.getUint32(20);
            if (bk > fk.imageSide || mk > fk.imageSide) return `has a ${bk} \xd7 ${mk} image (the limit is ${fk.imageSide})`
          }
          return null
        }(kk, ek)
      } catch {
        return rk
      }
    }

    function Ik(kk) {
      const ek = uk(kk.byteLength);
      if (ek) return ek;
      try {
        const {
          json: ek,
          bin: ik
        } = (0, Dk.z)(kk);
        return qk(ek, ik)
      } catch (ik) {
        if (ik instanceof Dk.k) return ik.reason;
        throw ik
      }
    }
  },
  33846: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => nk,
      f: () => xk,
      h: () => Hk,
      i: () => Sk,
      k: () => fk,
      m: () => Uk,
      q: () => Mk,
      t: () => Kk,
      w: () => bk,
      z: () => mk
    });
    var Dk = ik(33848);
    class fk extends Error {
      constructor(kk) {
        super(`GLB refused: it ${kk}`), this.reason = kk, this.name = "GlbRefused"
      }
    }
    class Sk extends Error {
      constructor(kk) {
        super(kk), this.name = "GlbError"
      }
    }

    function bk(kk) {
      return Reflect.get(kk, "scene")
    }
    const rk = 5130562,
      Pk = "is not a binary glTF 2.0 file";

    function mk(kk) {
      var ek;
      const ik = kk instanceof Uint8Array ? kk : new Uint8Array(kk),
        Sk = (0, Dk.e)(ik);
      if (null === Sk) throw new fk(Pk);
      const bk = Sk.json,
        {
          jsonEnd: mk,
          length: Mk
        } = Sk,
        Kk = new DataView(ik.buffer, ik.byteOffset, ik.byteLength);
      let xk = -1,
        nk = 0;
      for (let wk = mk; wk < Mk;) {
        if (wk + 8 > Mk) throw new fk(Pk);
        const kk = Kk.getUint32(wk, !0),
          ek = Kk.getUint32(wk + 4, !0);
        if (wk + 8 + kk > Mk || ek === Dk.c || ek === rk && -1 !== xk) throw new fk(Pk);
        ek === rk && (xk = wk + 8, nk = kk), wk += 8 + kk
      }
      let Uk = null;
      const Hk = null === (ek = bk.buffers) || void 0 === ek ? void 0 : ek[0];
      if (-1 !== xk && Hk && void 0 === Hk.uri) {
        if (!(Hk.byteLength >= 0) || Hk.byteLength > nk) throw new fk(Pk);
        Uk = new Uint8Array(ik.buffer, ik.byteOffset + xk, Hk.byteLength)
      }
      return {
        json: bk,
        bin: Uk,
        fileBytes: ik.byteLength
      }
    }

    function Mk(kk) {
      const ek = kk.slice(kk.indexOf(",") + 1),
        ik = Uint8Array.fromBase64;
      if (ik) return ik(ek).buffer;
      const Dk = atob(ek),
        fk = new Uint8Array(Dk.length);
      for (let Sk = 0; Sk < Dk.length; Sk++) fk[Sk] = Dk.charCodeAt(Sk);
      return fk.buffer
    }
    async function Kk(kk) {
      if (kk.startsWith("data:")) return Mk(kk);
      const ek = await fetch(kk);
      if (!ek.ok) throw new Sk(`fetching ${kk} failed: ${ek.status} ${ek.statusText}`);
      return await ek.arrayBuffer()
    }
    const xk = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      nk = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      Uk = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      Hk = [
        ["POSITION", "position"],
        ["NORMAL", "normal"],
        ["TANGENT", "tangent"],
        ["TEXCOORD_0", "uv"],
        ["TEXCOORD_1", "uv2"],
        ["TEXCOORD_2", "uv3"],
        ["TEXCOORD_3", "uv4"],
        ["TEXCOORD_4", "uv5"],
        ["TEXCOORD_5", "uv6"],
        ["COLOR_0", "color"]
      ]
  },
  33848: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk,
      e: () => Sk,
      i: () => bk
    });
    const Dk = 1179937895,
      fk = 1313821514;

    function Sk(kk) {
      const ek = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
      if (kk.byteLength < 20 || ek.getUint32(0, !0) !== Dk || 2 !== ek.getUint32(4, !0)) return null;
      const ik = Math.min(ek.getUint32(8, !0), kk.byteLength),
        Sk = ek.getUint32(12, !0);
      if (ek.getUint32(16, !0) !== fk || 20 + Sk > ik) return null;
      let bk;
      try {
        bk = JSON.parse((new TextDecoder).decode(kk.subarray(20, 20 + Sk)))
      } catch {
        return null
      }
      return "object" === typeof bk && null !== bk ? {
        json: bk,
        jsonEnd: 20 + Sk,
        length: ik
      } : null
    }

    function bk(kk) {
      var ek;
      const ik = null === (ek = Sk(kk)) || void 0 === ek ? void 0 : ek.json;
      if (void 0 === ik || !Array.isArray(ik.extensionsUsed) || !ik.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Dk = ik.meshes;
      return Array.isArray(Dk) && Dk.some((kk => {
        const ek = null === kk || void 0 === kk ? void 0 : kk.primitives;
        return Array.isArray(ek) && ek.some((kk => {
          const ek = null === kk || void 0 === kk ? void 0 : kk.extensions;
          return null != (null === ek || void 0 === ek ? void 0 : ek.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);