export const id = 195;
export const ids = [195];
export const modules = {
  9077: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Uk,
      f: () => gk,
      h: () => Mk
    });
    var Rk = Bk(9079);
    const tk = {
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
      ak = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      Xk = 1048576,
      bk = "is not a binary glTF 2.0 file",
      wk = "loads data from outside the file",
      dk = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      sk = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      Vk = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      Jk = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: Vk,
        TEXCOORD_2: Vk,
        TEXCOORD_3: Vk,
        TEXCOORD_4: Vk,
        TEXCOORD_5: Vk
      },
      Ak = new Set(Rk.g.map((kk => {
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
      yk = 5126;

    function fk(kk) {
      return kk.toLocaleString("en-US")
    }

    function mk(kk, Fk, Bk) {
      return kk > Fk ? `has ${fk(kk)} ${Bk} (the limit is ${fk(Fk)})` : null
    }

    function Wk(kk, Fk) {
      return Number.isInteger(kk) && kk >= 0 && kk < (null !== Fk && void 0 !== Fk ? Fk : 0)
    }

    function vk(kk) {
      return Number.isInteger(kk) && kk >= 0
    }

    function ik(kk, Fk) {
      return void 0 !== kk && (!Array.isArray(kk) || kk.length > Fk)
    }

    function Yk(kk, Fk) {
      return "object" === typeof kk && null !== kk && Object.keys(kk).length > Fk
    }

    function Lk(kk) {
      var Fk;
      return `${kk.normalized?"normalized ":""}${null!==(Fk=Rk.f[kk.componentType])&&void 0!==Fk?Fk:kk.componentType} ${kk.type}`
    }

    function Ok(kk) {
      const Fk = Fk => {
        var Bk;
        return null !== (Bk = kk[Fk]) && void 0 !== Bk ? Bk : -1
      };
      return 255 === Fk(0) && 216 === Fk(1) ? "JPEG" : 82 === Fk(0) && 73 === Fk(1) && 87 === Fk(8) && 69 === Fk(9) ? "WebP" : 171 === Fk(0) && 75 === Fk(1) && 84 === Fk(2) && 88 === Fk(3) ? "KTX2" : "non-PNG"
    }

    function Ek(kk) {
      return kk.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((Fk, Bk) => kk[Bk] === Fk)) && 73 === kk[12] && 72 === kk[13] && 68 === kk[14] && 82 === kk[15]
    }

    function Sk(kk) {
      return /^[aeiou]/i.test(kk) ? `an ${kk}` : `a ${kk}`
    }

    function Nk(kk) {
      const Fk = kk.byteStride;
      return void 0 === Fk || Number.isInteger(Fk) && Fk >= 4 && Fk <= 252 && Fk % 4 === 0
    }

    function Hk(kk, Fk, Bk) {
      var Rk, tk;
      const ak = null === (Rk = kk.bufferViews) || void 0 === Rk ? void 0 : Rk[Bk];
      if (!ak || !Fk || 0 !== ak.buffer) return null;
      const Xk = null !== (tk = ak.byteOffset) && void 0 !== tk ? tk : 0;
      return !vk(Xk) || !vk(ak.byteLength) || Xk + ak.byteLength > Fk.byteLength ? null : Fk.subarray(Xk, Xk + ak.byteLength)
    }

    function uk(kk, Fk) {
      var Bk, tk, ak;
      const Xk = Rk.k[Fk.type],
        bk = Rk.c[Fk.componentType];
      if (!Xk || !bk || !Number.isInteger(Fk.count) || Fk.count < 0) return !1;
      if (void 0 === Fk.bufferView) return !0;
      const wk = null === (Bk = kk.bufferViews) || void 0 === Bk ? void 0 : Bk[Fk.bufferView],
        dk = null !== (tk = Fk.byteOffset) && void 0 !== tk ? tk : 0;
      if (!wk || !vk(dk) || dk % bk !== 0) return !1;
      const sk = Xk * bk,
        Vk = null !== (ak = wk.byteStride) && void 0 !== ak ? ak : sk;
      if (Vk < sk) return !1;
      return (0 === Fk.count ? 0 : dk + Vk * (Fk.count - 1) + sk) <= wk.byteLength
    }

    function Mk(kk) {
      return kk > tk.fileBytes ? `is ${(kk/Xk).toFixed(1)} MiB (the limit is ${tk.fileBytes/Xk} MiB)` : null
    }

    function gk(kk, Fk) {
      try {
        return function(kk, Fk) {
          var Bk, Xk, Vk, fk, vk, Mk, gk, Uk, ck, Gk, Tk, rk, Dk, zk, Pk, hk, qk;
          const Ck = Array.isArray(kk.extensionsUsed) && kk.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(kk, Fk) {
              var Bk, Rk;
              const {
                items: tk,
                perFile: Xk,
                surfaces: bk,
                few: wk,
                bounds: dk,
                attributeMembers: sk
              } = ak;
              if (ik(kk.extensionsRequired, wk) || ik(kk.animations, 1 / 0) || ik(kk.skins, 1 / 0)) return !0;
              if (null !== (Bk = kk.animations) && void 0 !== Bk && Bk.length || null !== (Rk = kk.skins) && void 0 !== Rk && Rk.length) return !1;
              if ([
                  [kk.buffers, wk],
                  [kk.scenes, wk],
                  [kk.bufferViews, tk],
                  [kk.accessors, tk],
                  [kk.nodes, tk],
                  [kk.meshes, tk],
                  [kk.materials, bk],
                  [kk.textures, bk],
                  [kk.samplers, bk],
                  [kk.images, bk]
                ].some((kk => {
                  let [Fk, Bk] = kk;
                  return ik(Fk, Bk)
                }))) return !0;
              for (const ak of null !== (Vk = kk.accessors) && void 0 !== Vk ? Vk : []) {
                var Vk, Jk, Ak;
                if (Number.isInteger(ak.count) && (!Number.isSafeInteger(ak.count) || Object.is(ak.count, -0)) || ik(null !== (Jk = ak.min) && void 0 !== Jk ? Jk : void 0, dk) || ik(null !== (Ak = ak.max) && void 0 !== Ak ? Ak : void 0, dk)) return !0
              }
              for (const ak of null !== (ek = kk.scenes) && void 0 !== ek ? ek : []) {
                var ek;
                if (ik(ak.nodes, tk)) return !0
              }
              let yk = 0;
              for (const ak of null !== (fk = kk.nodes) && void 0 !== fk ? fk : []) {
                var fk, mk, Wk;
                if (ik(ak.children, Xk)) return !0;
                yk += null !== (mk = null === (Wk = ak.children) || void 0 === Wk ? void 0 : Wk.length) && void 0 !== mk ? mk : 0
              }
              if (yk > Xk) return !0;
              let vk = 0;
              for (const ak of null !== (Lk = kk.meshes) && void 0 !== Lk ? Lk : []) {
                var Lk;
                if (!Array.isArray(ak.primitives)) return !0;
                if (vk += ak.primitives.length, vk > Xk) return !0;
                for (const kk of ak.primitives) {
                  var Ok;
                  const Bk = Fk ? null === (Ok = kk.extensions) || void 0 === Ok ? void 0 : Ok.KHR_draco_mesh_compression : void 0;
                  if (Yk(kk.attributes, sk) || Yk(null === Bk || void 0 === Bk ? void 0 : Bk.attributes, sk)) return !0
                }
              }
              return !1
            }(kk, Ck)) return bk;
          const Zk = null === (Bk = kk.asset) || void 0 === Bk ? void 0 : Bk.version;
          if ("string" !== typeof Zk || !/^2\.\d+/.test(Zk)) return `uses glTF version ${null!==Zk&&void 0!==Zk?Zk:"(none)"}`;
          const pk = null === (Xk = kk.asset) || void 0 === Xk ? void 0 : Xk.minVersion;
          if (void 0 !== pk && "2.0" !== pk) return `uses glTF version ${pk}`;
          for (const Rk of null !== (Kk = kk.extensionsRequired) && void 0 !== Kk ? Kk : []) {
            var Kk;
            if (!dk.has(Rk)) return `requires the glTF extension ${Rk}`
          }
          if (null !== (Vk = kk.animations) && void 0 !== Vk && Vk.length) return "has animations";
          if (null !== (fk = kk.skins) && void 0 !== fk && fk.length) return "uses skins";
          const xk = null !== (vk = kk.buffers) && void 0 !== vk ? vk : [];
          for (const [Rk, tk] of xk.entries()) {
            if (void 0 !== tk.uri) return wk;
            if (Rk > 0 || !Fk) return bk
          }
          for (const [Rk, tk] of(null !== (jk = kk.bufferViews) && void 0 !== jk ? jk : []).entries()) {
            var jk;
            if (!Hk(kk, Fk, Rk) || !Nk(tk)) return bk
          }
          const lk = null !== (Mk = kk.accessors) && void 0 !== Mk ? Mk : [];
          for (const Rk of lk) {
            if (void 0 !== Rk.sparse) return "uses sparse accessors";
            const Fk = Number.isInteger(Rk.count) ? mk(Rk.count, tk.accessorElements, "elements in an accessor") : null;
            if (Fk) return Fk;
            if (!uk(kk, Rk)) return bk
          }
          const nk = null !== (gk = kk.scenes) && void 0 !== gk ? gk : [];
          if (1 !== nk.length) return `has ${nk.length} scenes`;
          const Ik = (0, Rk.t)(kk);
          if (void 0 !== Ik && 0 !== Ik) return bk;
          const Qk = null !== (Uk = kk.nodes) && void 0 !== Uk ? Uk : [],
            kF = null !== (ck = kk.meshes) && void 0 !== ck ? ck : [],
            FF = null !== (Gk = kk.materials) && void 0 !== Gk ? Gk : [],
            BF = null !== (Tk = kk.textures) && void 0 !== Tk ? Tk : [],
            RF = null !== (rk = kk.images) && void 0 !== rk ? rk : [],
            tF = null !== (Dk = null !== (zk = null !== (Pk = mk(Qk.length, tk.nodes, "nodes")) && void 0 !== Pk ? Pk : mk(kF.length, tk.meshes, "meshes")) && void 0 !== zk ? zk : mk(FF.length, tk.materials, "materials")) && void 0 !== Dk ? Dk : mk(RF.length, tk.images, "images");
          if (tF) return tF;
          const aF = new Set;
          for (const Rk of Qk)
            for (const kk of null !== (XF = Rk.children) && void 0 !== XF ? XF : []) {
              var XF;
              if (!Wk(kk, Qk.length) || aF.has(kk)) return bk;
              aF.add(kk)
            }
          const bF = new Set,
            wF = kk => {
              var Fk;
              return !bF.has(kk) && (bF.add(kk), (null !== (Fk = Qk[kk].children) && void 0 !== Fk ? Fk : []).every(wF))
            };
          for (const Rk of null !== (dF = nk[0].nodes) && void 0 !== dF ? dF : []) {
            var dF;
            if (!Wk(Rk, Qk.length) || aF.has(Rk) || !wF(Rk)) return bk
          }
          for (const Rk of Qk) {
            if (void 0 !== Rk.matrix) return "uses node matrices";
            if (void 0 !== Rk.skin) return "uses skins";
            if (void 0 !== Rk.weights) return "uses morph targets";
            if (void 0 !== Rk.mesh && !Wk(Rk.mesh, kF.length)) return bk;
            const kk = [
              [Rk.translation, 3],
              [Rk.rotation, 4],
              [Rk.scale, 3]
            ];
            for (const [Fk, Bk] of kk)
              if (void 0 !== Fk && (!Array.isArray(Fk) || Fk.length !== Bk || !Fk.every((kk => Number.isFinite(kk))))) return bk
          }
          let sF = -1,
            VF = 0,
            JF = 0,
            AF = null;
          for (const tk of kF) {
            if (void 0 !== tk.weights) return "uses morph targets";
            if (0 === tk.primitives.length) return bk;
            for (const Bk of tk.primitives) {
              var eF, yF;
              const tk = null !== (eF = Bk.mode) && void 0 !== eF ? eF : 4;
              var fF;
              if (4 !== tk && 0 !== tk) return `uses ${null!==(fF=ek[tk])&&void 0!==fF?fF:`mode ${tk}`} primitives`;
              if (void 0 !== Bk.targets) return "uses morph targets";
              if (void 0 !== Bk.material && !Wk(Bk.material, FF.length)) return bk;
              const ak = Ck ? null === (yF = Bk.extensions) || void 0 === yF ? void 0 : yF.KHR_draco_mesh_compression : void 0;
              if (ak) {
                if (4 !== tk) return "uses Draco-compressed points";
                if (!Hk(kk, Fk, ak.bufferView) || "object" !== typeof ak.attributes) return bk
              }
              const Xk = Bk.attributes;
              if ("object" !== typeof Xk || null === Xk) return bk;
              if (void 0 === Xk.POSITION) return "has a primitive with no positions";
              if (!Wk(Xk.POSITION, lk.length)) return bk;
              const wk = lk[Xk.POSITION].count;
              for (const [kk, Fk] of Object.entries(Xk)) {
                if (!Wk(Fk, lk.length)) return bk;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(kk)) return "uses skins";
                const Bk = lk[Fk],
                  Rk = sk[kk];
                if (Rk && (Bk.componentType !== yk || Bk.normalized || Bk.type !== Rk)) return `stores ${kk} as ${Lk(Bk)}`;
                const tk = Jk[kk];
                if (tk && (Bk.type !== tk.type || !tk.componentTypes.includes(Bk.componentType) || Bk.componentType === yk === !!Bk.normalized)) return `stores ${kk} as ${Lk(Bk)}`;
                if (Ak.has(kk) && Bk.count !== wk) return "has vertex attributes of different lengths"
              }
              if (ak) {
                if (void 0 === Bk.indices) return bk;
                for (const Fk in ak.attributes)
                  if (Ak.has(Fk) && void 0 === Xk[Fk]) return bk;
                if (void 0 === ak.attributes.POSITION) return bk;
                const kk = Wk(Bk.indices, lk.length) ? lk[Bk.indices].count : -1;
                if (0 === kk) return bk;
                if (-1 === sF) sF = ak.bufferView, VF = wk, JF = kk;
                else {
                  AF ??= new Map([
                    [sF, [VF, JF]]
                  ]);
                  const Fk = AF.get(ak.bufferView);
                  if (Fk && (Fk[0] !== wk || Fk[1] !== kk)) return bk;
                  AF.set(ak.bufferView, null !== Fk && void 0 !== Fk ? Fk : [wk, kk])
                }
              }
              let dk = wk;
              if (void 0 !== Bk.indices) {
                if (!Wk(Bk.indices, lk.length)) return bk;
                const kk = lk[Bk.indices];
                if ("SCALAR" !== kk.type) return bk;
                if (5121 === kk.componentType) return "uses 8-bit indices";
                var mF;
                if (5123 !== kk.componentType && 5125 !== kk.componentType) return `stores indices as ${null!==(mF=Rk.f[kk.componentType])&&void 0!==mF?mF:kk.componentType}`;
                if (!ak && void 0 === kk.bufferView) return bk;
                dk = kk.count
              }
              if (4 === tk && dk % 3 !== 0) return bk
            }
          }
          let WF = 0,
            vF = 0,
            iF = 0;
          for (let Rk = 0; Rk < Qk.length; Rk++) {
            const kk = Qk[Rk].mesh;
            if (void 0 !== kk && bF.has(Rk))
              for (const Fk of kF[kk].primitives) iF++, WF += lk[Fk.attributes.POSITION].count, void 0 !== Fk.indices && (vF += lk[Fk.indices].count)
          }
          const YF = null !== (hk = null !== (qk = mk(WF, tk.vertices, "vertices")) && void 0 !== qk ? qk : mk(vF, tk.indices, "indices")) && void 0 !== hk ? hk : mk(iF, tk.primitives, "primitives");
          if (YF) return YF;
          for (const Rk of FF) {
            var oF, LF;
            if (void 0 !== Rk.emissiveTexture) return "uses an emissive texture";
            const Fk = null !== (oF = Rk.alphaMode) && void 0 !== oF ? oF : "OPAQUE";
            if ("OPAQUE" !== Fk && "MASK" !== Fk && "BLEND" !== Fk) return bk;
            const Bk = null === (LF = Rk.pbrMetallicRoughness) || void 0 === LF ? void 0 : LF.baseColorTexture;
            if (Bk) {
              var OF, EF, SF, NF, HF;
              const Fk = null !== (OF = kk.extensionsUsed) && void 0 !== OF && OF.includes("KHR_texture_transform") ? null === (EF = Bk.extensions) || void 0 === EF ? void 0 : EF.KHR_texture_transform : void 0;
              if (0 !== (null !== (SF = Bk.texCoord) && void 0 !== SF ? SF : 0) || 0 !== (null !== (NF = null === Fk || void 0 === Fk ? void 0 : Fk.texCoord) && void 0 !== NF ? NF : 0)) return "uses a second UV set";
              const Rk = BF[Bk.index];
              if (!Rk || !Wk(Rk.source, RF.length) || void 0 !== Rk.sampler && !Wk(Rk.sampler, null === (HF = kk.samplers) || void 0 === HF ? void 0 : HF.length)) return bk
            }
          }
          for (const Rk of RF) {
            if (void 0 !== Rk.uri) return wk;
            if (void 0 === Rk.bufferView) return bk;
            const Bk = Hk(kk, Fk, Rk.bufferView);
            if (!Bk) return bk;
            if ("image/png" !== Rk.mimeType) {
              var uF, MF, gF;
              return `has ${Sk(null!==(uF=null!==(MF={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(gF=Rk.mimeType)&&void 0!==gF?gF:""])&&void 0!==MF?MF:Rk.mimeType)&&void 0!==uF?uF:"untyped")} image`
            }
            if (!Ek(Bk)) return `has ${Sk(Ok(Bk))} image`;
            const ak = new DataView(Bk.buffer, Bk.byteOffset, Bk.byteLength),
              Xk = ak.getUint32(16),
              dk = ak.getUint32(20);
            if (Xk > tk.imageSide || dk > tk.imageSide) return `has a ${Xk} \xd7 ${dk} image (the limit is ${tk.imageSide})`
          }
          return null
        }(kk, Fk)
      } catch {
        return bk
      }
    }

    function Uk(kk) {
      const Fk = Mk(kk.byteLength);
      if (Fk) return Fk;
      try {
        const {
          json: Fk,
          bin: Bk
        } = (0, Rk.u)(kk);
        return gk(Fk, Bk)
      } catch (Bk) {
        if (Bk instanceof Rk.i) return Bk.reason;
        throw Bk
      }
    }
  },
  9079: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Ak,
      f: () => Jk,
      g: () => yk,
      h: () => ak,
      i: () => tk,
      k: () => ek,
      m: () => sk,
      p: () => Vk,
      t: () => Xk,
      u: () => dk
    });
    var Rk = Bk(9082);
    class tk extends Error {
      constructor(kk) {
        super(`GLB refused: it ${kk}`), this.reason = kk, this.name = "GlbRefused"
      }
    }
    class ak extends Error {
      constructor(kk) {
        super(kk), this.name = "GlbError"
      }
    }

    function Xk(kk) {
      return Reflect.get(kk, "scene")
    }
    const bk = 5130562,
      wk = "is not a binary glTF 2.0 file";

    function dk(kk) {
      var Fk;
      const Bk = kk instanceof Uint8Array ? kk : new Uint8Array(kk),
        ak = (0, Rk.h)(Bk);
      if (null === ak) throw new tk(wk);
      const Xk = ak.json,
        {
          jsonEnd: dk,
          length: sk
        } = ak,
        Vk = new DataView(Bk.buffer, Bk.byteOffset, Bk.byteLength);
      let Jk = -1,
        Ak = 0;
      for (let fk = dk; fk < sk;) {
        if (fk + 8 > sk) throw new tk(wk);
        const kk = Vk.getUint32(fk, !0),
          Fk = Vk.getUint32(fk + 4, !0);
        if (fk + 8 + kk > sk || Fk === Rk.e || Fk === bk && -1 !== Jk) throw new tk(wk);
        Fk === bk && (Jk = fk + 8, Ak = kk), fk += 8 + kk
      }
      let ek = null;
      const yk = null === (Fk = Xk.buffers) || void 0 === Fk ? void 0 : Fk[0];
      if (-1 !== Jk && yk && void 0 === yk.uri) {
        if (!(yk.byteLength >= 0) || yk.byteLength > Ak) throw new tk(wk);
        ek = new Uint8Array(Bk.buffer, Bk.byteOffset + Jk, yk.byteLength)
      }
      return {
        json: Xk,
        bin: ek,
        fileBytes: Bk.byteLength
      }
    }

    function sk(kk) {
      const Fk = kk.slice(kk.indexOf(",") + 1),
        Bk = Uint8Array.fromBase64;
      if (Bk) return Bk(Fk).buffer;
      const Rk = atob(Fk),
        tk = new Uint8Array(Rk.length);
      for (let ak = 0; ak < Rk.length; ak++) tk[ak] = Rk.charCodeAt(ak);
      return tk.buffer
    }
    async function Vk(kk) {
      if (kk.startsWith("data:")) return sk(kk);
      const Fk = await fetch(kk);
      if (!Fk.ok) throw new ak(`fetching ${kk} failed: ${Fk.status} ${Fk.statusText}`);
      return await Fk.arrayBuffer()
    }
    const Jk = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      Ak = {
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
      yk = [
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
  9082: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => tk,
      h: () => ak,
      l: () => Xk
    });
    const Rk = 1179937895,
      tk = 1313821514;

    function ak(kk) {
      const Fk = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
      if (kk.byteLength < 20 || Fk.getUint32(0, !0) !== Rk || 2 !== Fk.getUint32(4, !0)) return null;
      const Bk = Math.min(Fk.getUint32(8, !0), kk.byteLength),
        ak = Fk.getUint32(12, !0);
      if (Fk.getUint32(16, !0) !== tk || 20 + ak > Bk) return null;
      let Xk;
      try {
        Xk = JSON.parse((new TextDecoder).decode(kk.subarray(20, 20 + ak)))
      } catch {
        return null
      }
      return "object" === typeof Xk && null !== Xk ? {
        json: Xk,
        jsonEnd: 20 + ak,
        length: Bk
      } : null
    }

    function Xk(kk) {
      var Fk;
      const Bk = null === (Fk = ak(kk)) || void 0 === Fk ? void 0 : Fk.json;
      if (void 0 === Bk || !Array.isArray(Bk.extensionsUsed) || !Bk.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Rk = Bk.meshes;
      return Array.isArray(Rk) && Rk.some((kk => {
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