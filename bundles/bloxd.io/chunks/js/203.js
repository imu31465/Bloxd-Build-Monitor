export const id = 203;
export const ids = [203];
export const modules = {
  34257: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => pk,
      e: () => Gk,
      f: () => nk
    });
    var Xk = Ik(34262);
    const Tk = {
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
      ik = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      yk = 1048576,
      lk = "is not a binary glTF 2.0 file",
      ak = "loads data from outside the file",
      qk = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      Lk = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      tk = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      Zk = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: tk,
        TEXCOORD_2: tk,
        TEXCOORD_3: tk,
        TEXCOORD_4: tk,
        TEXCOORD_5: tk
      },
      jk = new Set(Xk.h.map((kk => {
        let [Fk] = kk;
        return Fk
      }))),
      ek = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      wk = 5126;

    function Hk(kk) {
      return kk.toLocaleString("en-US")
    }

    function Jk(kk, Fk, Ik) {
      return kk > Fk ? `has ${Hk(kk)} ${Ik} (the limit is ${Hk(Fk)})` : null
    }

    function xk(kk, Fk) {
      return Number.isInteger(kk) && kk >= 0 && kk < (null !== Fk && void 0 !== Fk ? Fk : 0)
    }

    function Pk(kk) {
      return Number.isInteger(kk) && kk >= 0
    }

    function Kk(kk, Fk) {
      return void 0 !== kk && (!Array.isArray(kk) || kk.length > Fk)
    }

    function Qk(kk, Fk) {
      return "object" === typeof kk && null !== kk && Object.keys(kk).length > Fk
    }

    function sk(kk) {
      var Fk;
      return `${kk.normalized?"normalized ":""}${null!==(Fk=Xk.g[kk.componentType])&&void 0!==Fk?Fk:kk.componentType} ${kk.type}`
    }

    function Vk(kk) {
      const Fk = Fk => {
        var Ik;
        return null !== (Ik = kk[Fk]) && void 0 !== Ik ? Ik : -1
      };
      return 255 === Fk(0) && 216 === Fk(1) ? "JPEG" : 82 === Fk(0) && 73 === Fk(1) && 87 === Fk(8) && 69 === Fk(9) ? "WebP" : 171 === Fk(0) && 75 === Fk(1) && 84 === Fk(2) && 88 === Fk(3) ? "KTX2" : "non-PNG"
    }

    function zk(kk) {
      return kk.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((Fk, Ik) => kk[Ik] === Fk)) && 73 === kk[12] && 72 === kk[13] && 68 === kk[14] && 82 === kk[15]
    }

    function Sk(kk) {
      return /^[aeiou]/i.test(kk) ? `an ${kk}` : `a ${kk}`
    }

    function vk(kk) {
      const Fk = kk.byteStride;
      return void 0 === Fk || Number.isInteger(Fk) && Fk >= 4 && Fk <= 252 && Fk % 4 === 0
    }

    function Ek(kk, Fk, Ik) {
      var Xk, Tk;
      const ik = null === (Xk = kk.bufferViews) || void 0 === Xk ? void 0 : Xk[Ik];
      if (!ik || !Fk || 0 !== ik.buffer) return null;
      const yk = null !== (Tk = ik.byteOffset) && void 0 !== Tk ? Tk : 0;
      return !Pk(yk) || !Pk(ik.byteLength) || yk + ik.byteLength > Fk.byteLength ? null : Fk.subarray(yk, yk + ik.byteLength)
    }

    function Ok(kk, Fk) {
      var Ik, Tk, ik;
      const yk = Xk.o[Fk.type],
        lk = Xk.d[Fk.componentType];
      if (!yk || !lk || !Number.isInteger(Fk.count) || Fk.count < 0) return !1;
      if (void 0 === Fk.bufferView) return !0;
      const ak = null === (Ik = kk.bufferViews) || void 0 === Ik ? void 0 : Ik[Fk.bufferView],
        qk = null !== (Tk = Fk.byteOffset) && void 0 !== Tk ? Tk : 0;
      if (!ak || !Pk(qk) || qk % lk !== 0) return !1;
      const Lk = yk * lk,
        tk = null !== (ik = ak.byteStride) && void 0 !== ik ? ik : Lk;
      if (tk < Lk) return !1;
      return (0 === Fk.count ? 0 : qk + tk * (Fk.count - 1) + Lk) <= ak.byteLength
    }

    function nk(kk) {
      return kk > Tk.fileBytes ? `is ${(kk/yk).toFixed(1)} MiB (the limit is ${Tk.fileBytes/yk} MiB)` : null
    }

    function Gk(kk, Fk) {
      try {
        return function(kk, Fk) {
          var Ik, yk, tk, Hk, Pk, nk, Gk, pk, uk, bk, Rk, Uk, Ck, Nk, ck, Wk, fk;
          const Bk = Array.isArray(kk.extensionsUsed) && kk.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(kk, Fk) {
              var Ik, Xk;
              const {
                items: Tk,
                perFile: yk,
                surfaces: lk,
                few: ak,
                bounds: qk,
                attributeMembers: Lk
              } = ik;
              if (Kk(kk.extensionsRequired, ak) || Kk(kk.animations, 1 / 0) || Kk(kk.skins, 1 / 0)) return !0;
              if (null !== (Ik = kk.animations) && void 0 !== Ik && Ik.length || null !== (Xk = kk.skins) && void 0 !== Xk && Xk.length) return !1;
              if ([
                  [kk.buffers, ak],
                  [kk.scenes, ak],
                  [kk.bufferViews, Tk],
                  [kk.accessors, Tk],
                  [kk.nodes, Tk],
                  [kk.meshes, Tk],
                  [kk.materials, lk],
                  [kk.textures, lk],
                  [kk.samplers, lk],
                  [kk.images, lk]
                ].some((kk => {
                  let [Fk, Ik] = kk;
                  return Kk(Fk, Ik)
                }))) return !0;
              for (const ik of null !== (tk = kk.accessors) && void 0 !== tk ? tk : []) {
                var tk, Zk, jk;
                if (Number.isInteger(ik.count) && (!Number.isSafeInteger(ik.count) || Object.is(ik.count, -0)) || Kk(null !== (Zk = ik.min) && void 0 !== Zk ? Zk : void 0, qk) || Kk(null !== (jk = ik.max) && void 0 !== jk ? jk : void 0, qk)) return !0
              }
              for (const ik of null !== (ek = kk.scenes) && void 0 !== ek ? ek : []) {
                var ek;
                if (Kk(ik.nodes, Tk)) return !0
              }
              let wk = 0;
              for (const ik of null !== (Hk = kk.nodes) && void 0 !== Hk ? Hk : []) {
                var Hk, Jk, xk;
                if (Kk(ik.children, yk)) return !0;
                wk += null !== (Jk = null === (xk = ik.children) || void 0 === xk ? void 0 : xk.length) && void 0 !== Jk ? Jk : 0
              }
              if (wk > yk) return !0;
              let Pk = 0;
              for (const ik of null !== (sk = kk.meshes) && void 0 !== sk ? sk : []) {
                var sk;
                if (!Array.isArray(ik.primitives)) return !0;
                if (Pk += ik.primitives.length, Pk > yk) return !0;
                for (const kk of ik.primitives) {
                  var Vk;
                  const Ik = Fk ? null === (Vk = kk.extensions) || void 0 === Vk ? void 0 : Vk.KHR_draco_mesh_compression : void 0;
                  if (Qk(kk.attributes, Lk) || Qk(null === Ik || void 0 === Ik ? void 0 : Ik.attributes, Lk)) return !0
                }
              }
              return !1
            }(kk, Bk)) return lk;
          const dk = null === (Ik = kk.asset) || void 0 === Ik ? void 0 : Ik.version;
          if ("string" !== typeof dk || !/^2\.\d+/.test(dk)) return `uses glTF version ${null!==dk&&void 0!==dk?dk:"(none)"}`;
          const Yk = null === (yk = kk.asset) || void 0 === yk ? void 0 : yk.minVersion;
          if (void 0 !== Yk && "2.0" !== Yk) return `uses glTF version ${Yk}`;
          for (const Xk of null !== (Ak = kk.extensionsRequired) && void 0 !== Ak ? Ak : []) {
            var Ak;
            if (!qk.has(Xk)) return `requires the glTF extension ${Xk}`
          }
          if (null !== (tk = kk.animations) && void 0 !== tk && tk.length) return "has animations";
          if (null !== (Hk = kk.skins) && void 0 !== Hk && Hk.length) return "uses skins";
          const gk = null !== (Pk = kk.buffers) && void 0 !== Pk ? Pk : [];
          for (const [Xk, Tk] of gk.entries()) {
            if (void 0 !== Tk.uri) return ak;
            if (Xk > 0 || !Fk) return lk
          }
          for (const [Xk, Tk] of(null !== (mk = kk.bufferViews) && void 0 !== mk ? mk : []).entries()) {
            var mk;
            if (!Ek(kk, Fk, Xk) || !vk(Tk)) return lk
          }
          const hk = null !== (nk = kk.accessors) && void 0 !== nk ? nk : [];
          for (const Xk of hk) {
            if (void 0 !== Xk.sparse) return "uses sparse accessors";
            const Fk = Number.isInteger(Xk.count) ? Jk(Xk.count, Tk.accessorElements, "elements in an accessor") : null;
            if (Fk) return Fk;
            if (!Ok(kk, Xk)) return lk
          }
          const rk = null !== (Gk = kk.scenes) && void 0 !== Gk ? Gk : [];
          if (1 !== rk.length) return `has ${rk.length} scenes`;
          const Dk = (0, Xk.u)(kk);
          if (void 0 !== Dk && 0 !== Dk) return lk;
          const Mk = null !== (pk = kk.nodes) && void 0 !== pk ? pk : [],
            kF = null !== (uk = kk.meshes) && void 0 !== uk ? uk : [],
            FF = null !== (bk = kk.materials) && void 0 !== bk ? bk : [],
            IF = null !== (Rk = kk.textures) && void 0 !== Rk ? Rk : [],
            XF = null !== (Uk = kk.images) && void 0 !== Uk ? Uk : [],
            TF = null !== (Ck = null !== (Nk = null !== (ck = Jk(Mk.length, Tk.nodes, "nodes")) && void 0 !== ck ? ck : Jk(kF.length, Tk.meshes, "meshes")) && void 0 !== Nk ? Nk : Jk(FF.length, Tk.materials, "materials")) && void 0 !== Ck ? Ck : Jk(XF.length, Tk.images, "images");
          if (TF) return TF;
          const iF = new Set;
          for (const Xk of Mk)
            for (const kk of null !== (yF = Xk.children) && void 0 !== yF ? yF : []) {
              var yF;
              if (!xk(kk, Mk.length) || iF.has(kk)) return lk;
              iF.add(kk)
            }
          const lF = new Set,
            aF = kk => {
              var Fk;
              return !lF.has(kk) && (lF.add(kk), (null !== (Fk = Mk[kk].children) && void 0 !== Fk ? Fk : []).every(aF))
            };
          for (const Xk of null !== (qF = rk[0].nodes) && void 0 !== qF ? qF : []) {
            var qF;
            if (!xk(Xk, Mk.length) || iF.has(Xk) || !aF(Xk)) return lk
          }
          for (const Xk of Mk) {
            if (void 0 !== Xk.matrix) return "uses node matrices";
            if (void 0 !== Xk.skin) return "uses skins";
            if (void 0 !== Xk.weights) return "uses morph targets";
            if (void 0 !== Xk.mesh && !xk(Xk.mesh, kF.length)) return lk;
            const kk = [
              [Xk.translation, 3],
              [Xk.rotation, 4],
              [Xk.scale, 3]
            ];
            for (const [Fk, Ik] of kk)
              if (void 0 !== Fk && (!Array.isArray(Fk) || Fk.length !== Ik || !Fk.every((kk => Number.isFinite(kk))))) return lk
          }
          let LF = -1,
            tF = 0,
            ZF = 0,
            jF = null;
          for (const Tk of kF) {
            if (void 0 !== Tk.weights) return "uses morph targets";
            if (0 === Tk.primitives.length) return lk;
            for (const Ik of Tk.primitives) {
              var eF, wF;
              const Tk = null !== (eF = Ik.mode) && void 0 !== eF ? eF : 4;
              var HF;
              if (4 !== Tk && 0 !== Tk) return `uses ${null!==(HF=ek[Tk])&&void 0!==HF?HF:`mode ${Tk}`} primitives`;
              if (void 0 !== Ik.targets) return "uses morph targets";
              if (void 0 !== Ik.material && !xk(Ik.material, FF.length)) return lk;
              const ik = Bk ? null === (wF = Ik.extensions) || void 0 === wF ? void 0 : wF.KHR_draco_mesh_compression : void 0;
              if (ik) {
                if (4 !== Tk) return "uses Draco-compressed points";
                if (!Ek(kk, Fk, ik.bufferView) || "object" !== typeof ik.attributes) return lk
              }
              const yk = Ik.attributes;
              if ("object" !== typeof yk || null === yk) return lk;
              if (void 0 === yk.POSITION) return "has a primitive with no positions";
              if (!xk(yk.POSITION, hk.length)) return lk;
              const ak = hk[yk.POSITION].count;
              for (const [kk, Fk] of Object.entries(yk)) {
                if (!xk(Fk, hk.length)) return lk;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(kk)) return "uses skins";
                const Ik = hk[Fk],
                  Xk = Lk[kk];
                if (Xk && (Ik.componentType !== wk || Ik.normalized || Ik.type !== Xk)) return `stores ${kk} as ${sk(Ik)}`;
                const Tk = Zk[kk];
                if (Tk && (Ik.type !== Tk.type || !Tk.componentTypes.includes(Ik.componentType) || Ik.componentType === wk === !!Ik.normalized)) return `stores ${kk} as ${sk(Ik)}`;
                if (jk.has(kk) && Ik.count !== ak) return "has vertex attributes of different lengths"
              }
              if (ik) {
                if (void 0 === Ik.indices) return lk;
                for (const Fk in ik.attributes)
                  if (jk.has(Fk) && void 0 === yk[Fk]) return lk;
                if (void 0 === ik.attributes.POSITION) return lk;
                const kk = xk(Ik.indices, hk.length) ? hk[Ik.indices].count : -1;
                if (0 === kk) return lk;
                if (-1 === LF) LF = ik.bufferView, tF = ak, ZF = kk;
                else {
                  jF ??= new Map([
                    [LF, [tF, ZF]]
                  ]);
                  const Fk = jF.get(ik.bufferView);
                  if (Fk && (Fk[0] !== ak || Fk[1] !== kk)) return lk;
                  jF.set(ik.bufferView, null !== Fk && void 0 !== Fk ? Fk : [ak, kk])
                }
              }
              let qk = ak;
              if (void 0 !== Ik.indices) {
                if (!xk(Ik.indices, hk.length)) return lk;
                const kk = hk[Ik.indices];
                if ("SCALAR" !== kk.type) return lk;
                if (5121 === kk.componentType) return "uses 8-bit indices";
                var JF;
                if (5123 !== kk.componentType && 5125 !== kk.componentType) return `stores indices as ${null!==(JF=Xk.g[kk.componentType])&&void 0!==JF?JF:kk.componentType}`;
                if (!ik && void 0 === kk.bufferView) return lk;
                qk = kk.count
              }
              if (4 === Tk && qk % 3 !== 0) return lk
            }
          }
          let xF = 0,
            PF = 0,
            KF = 0;
          for (let Xk = 0; Xk < Mk.length; Xk++) {
            const kk = Mk[Xk].mesh;
            if (void 0 !== kk && lF.has(Xk))
              for (const Fk of kF[kk].primitives) KF++, xF += hk[Fk.attributes.POSITION].count, void 0 !== Fk.indices && (PF += hk[Fk.indices].count)
          }
          const QF = null !== (Wk = null !== (fk = Jk(xF, Tk.vertices, "vertices")) && void 0 !== fk ? fk : Jk(PF, Tk.indices, "indices")) && void 0 !== Wk ? Wk : Jk(KF, Tk.primitives, "primitives");
          if (QF) return QF;
          for (const Xk of FF) {
            var sF, VF;
            if (void 0 !== Xk.emissiveTexture) return "uses an emissive texture";
            const Fk = null !== (sF = Xk.alphaMode) && void 0 !== sF ? sF : "OPAQUE";
            if ("OPAQUE" !== Fk && "MASK" !== Fk && "BLEND" !== Fk) return lk;
            const Ik = null === (VF = Xk.pbrMetallicRoughness) || void 0 === VF ? void 0 : VF.baseColorTexture;
            if (Ik) {
              var zF, SF, oF, vF, EF;
              const Fk = null !== (zF = kk.extensionsUsed) && void 0 !== zF && zF.includes("KHR_texture_transform") ? null === (SF = Ik.extensions) || void 0 === SF ? void 0 : SF.KHR_texture_transform : void 0;
              if (0 !== (null !== (oF = Ik.texCoord) && void 0 !== oF ? oF : 0) || 0 !== (null !== (vF = null === Fk || void 0 === Fk ? void 0 : Fk.texCoord) && void 0 !== vF ? vF : 0)) return "uses a second UV set";
              const Xk = IF[Ik.index];
              if (!Xk || !xk(Xk.source, XF.length) || void 0 !== Xk.sampler && !xk(Xk.sampler, null === (EF = kk.samplers) || void 0 === EF ? void 0 : EF.length)) return lk
            }
          }
          for (const Xk of XF) {
            if (void 0 !== Xk.uri) return ak;
            if (void 0 === Xk.bufferView) return lk;
            const Ik = Ek(kk, Fk, Xk.bufferView);
            if (!Ik) return lk;
            if ("image/png" !== Xk.mimeType) {
              var OF, nF, GF;
              return `has ${Sk(null!==(OF=null!==(nF={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(GF=Xk.mimeType)&&void 0!==GF?GF:""])&&void 0!==nF?nF:Xk.mimeType)&&void 0!==OF?OF:"untyped")} image`
            }
            if (!zk(Ik)) return `has ${Sk(Vk(Ik))} image`;
            const ik = new DataView(Ik.buffer, Ik.byteOffset, Ik.byteLength),
              yk = ik.getUint32(16),
              qk = ik.getUint32(20);
            if (yk > Tk.imageSide || qk > Tk.imageSide) return `has a ${yk} \xd7 ${qk} image (the limit is ${Tk.imageSide})`
          }
          return null
        }(kk, Fk)
      } catch {
        return lk
      }
    }

    function pk(kk) {
      const Fk = nk(kk.byteLength);
      if (Fk) return Fk;
      try {
        const {
          json: Fk,
          bin: Ik
        } = (0, Xk.v)(kk);
        return Gk(Fk, Ik)
      } catch (Ik) {
        if (Ik instanceof Xk.m) return Ik.reason;
        throw Ik
      }
    }
  },
  34262: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => jk,
      g: () => Zk,
      h: () => wk,
      l: () => ik,
      m: () => Tk,
      o: () => ek,
      p: () => Lk,
      r: () => tk,
      u: () => yk,
      v: () => qk
    });
    var Xk = Ik(34266);
    class Tk extends Error {
      constructor(kk) {
        super(`GLB refused: it ${kk}`), this.reason = kk, this.name = "GlbRefused"
      }
    }
    class ik extends Error {
      constructor(kk) {
        super(kk), this.name = "GlbError"
      }
    }

    function yk(kk) {
      return Reflect.get(kk, "scene")
    }
    const lk = 5130562,
      ak = "is not a binary glTF 2.0 file";

    function qk(kk) {
      var Fk;
      const Ik = kk instanceof Uint8Array ? kk : new Uint8Array(kk),
        ik = (0, Xk.g)(Ik);
      if (null === ik) throw new Tk(ak);
      const yk = ik.json,
        {
          jsonEnd: qk,
          length: Lk
        } = ik,
        tk = new DataView(Ik.buffer, Ik.byteOffset, Ik.byteLength);
      let Zk = -1,
        jk = 0;
      for (let Hk = qk; Hk < Lk;) {
        if (Hk + 8 > Lk) throw new Tk(ak);
        const kk = tk.getUint32(Hk, !0),
          Fk = tk.getUint32(Hk + 4, !0);
        if (Hk + 8 + kk > Lk || Fk === Xk.e || Fk === lk && -1 !== Zk) throw new Tk(ak);
        Fk === lk && (Zk = Hk + 8, jk = kk), Hk += 8 + kk
      }
      let ek = null;
      const wk = null === (Fk = yk.buffers) || void 0 === Fk ? void 0 : Fk[0];
      if (-1 !== Zk && wk && void 0 === wk.uri) {
        if (!(wk.byteLength >= 0) || wk.byteLength > jk) throw new Tk(ak);
        ek = new Uint8Array(Ik.buffer, Ik.byteOffset + Zk, wk.byteLength)
      }
      return {
        json: yk,
        bin: ek,
        fileBytes: Ik.byteLength
      }
    }

    function Lk(kk) {
      const Fk = kk.slice(kk.indexOf(",") + 1),
        Ik = Uint8Array.fromBase64;
      if (Ik) return Ik(Fk).buffer;
      const Xk = atob(Fk),
        Tk = new Uint8Array(Xk.length);
      for (let ik = 0; ik < Xk.length; ik++) Tk[ik] = Xk.charCodeAt(ik);
      return Tk.buffer
    }
    async function tk(kk) {
      if (kk.startsWith("data:")) return Lk(kk);
      const Fk = await fetch(kk);
      if (!Fk.ok) throw new ik(`fetching ${kk} failed: ${Fk.status} ${Fk.statusText}`);
      return await Fk.arrayBuffer()
    }
    const Zk = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      jk = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      ek = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      wk = [
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
  34266: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk,
      g: () => ik,
      h: () => yk
    });
    const Xk = 1179937895,
      Tk = 1313821514;

    function ik(kk) {
      const Fk = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
      if (kk.byteLength < 20 || Fk.getUint32(0, !0) !== Xk || 2 !== Fk.getUint32(4, !0)) return null;
      const Ik = Math.min(Fk.getUint32(8, !0), kk.byteLength),
        ik = Fk.getUint32(12, !0);
      if (Fk.getUint32(16, !0) !== Tk || 20 + ik > Ik) return null;
      let yk;
      try {
        yk = JSON.parse((new TextDecoder).decode(kk.subarray(20, 20 + ik)))
      } catch {
        return null
      }
      return "object" === typeof yk && null !== yk ? {
        json: yk,
        jsonEnd: 20 + ik,
        length: Ik
      } : null
    }

    function yk(kk) {
      var Fk;
      const Ik = null === (Fk = ik(kk)) || void 0 === Fk ? void 0 : Fk.json;
      if (void 0 === Ik || !Array.isArray(Ik.extensionsUsed) || !Ik.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Xk = Ik.meshes;
      return Array.isArray(Xk) && Xk.some((kk => {
        const Fk = null === kk || void 0 === kk ? void 0 : kk.primitives;
        return Array.isArray(Fk) && Fk.some((kk => {
          const Fk = null === kk || void 0 === kk ? void 0 : kk.extensions;
          return null != (null === Fk || void 0 === Fk ? void 0 : Fk.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);