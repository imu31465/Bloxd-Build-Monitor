export const id = 196;
export const ids = [196];
export const modules = {
  9351: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => fq,
      f: () => Zq,
      h: () => iq
    });
    var Yq = gq(9358);
    const lq = {
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
      Oq = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      mq = 1048576,
      xq = "is not a binary glTF 2.0 file",
      Aq = "loads data from outside the file",
      cq = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      uq = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      Bq = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      Wq = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: Bq,
        TEXCOORD_2: Bq,
        TEXCOORD_3: Bq,
        TEXCOORD_4: Bq,
        TEXCOORD_5: Bq
      },
      Nq = new Set(Yq.h.map((qq => {
        let [Eq] = qq;
        return Eq
      }))),
      aq = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      Vq = 5126;

    function dq(qq) {
      return qq.toLocaleString("en-US")
    }

    function jq(qq, Eq, gq) {
      return qq > Eq ? `has ${dq(qq)} ${gq} (the limit is ${dq(Eq)})` : null
    }

    function Hq(qq, Eq) {
      return Number.isInteger(qq) && qq >= 0 && qq < (null !== Eq && void 0 !== Eq ? Eq : 0)
    }

    function oq(qq) {
      return Number.isInteger(qq) && qq >= 0
    }

    function Pq(qq, Eq) {
      return void 0 !== qq && (!Array.isArray(qq) || qq.length > Eq)
    }

    function Qq(qq, Eq) {
      return "object" === typeof qq && null !== qq && Object.keys(qq).length > Eq
    }

    function yq(qq) {
      var Eq;
      return `${qq.normalized?"normalized ":""}${null!==(Eq=Yq.g[qq.componentType])&&void 0!==Eq?Eq:qq.componentType} ${qq.type}`
    }

    function tq(qq) {
      const Eq = Eq => {
        var gq;
        return null !== (gq = qq[Eq]) && void 0 !== gq ? gq : -1
      };
      return 255 === Eq(0) && 216 === Eq(1) ? "JPEG" : 82 === Eq(0) && 73 === Eq(1) && 87 === Eq(8) && 69 === Eq(9) ? "WebP" : 171 === Eq(0) && 75 === Eq(1) && 84 === Eq(2) && 88 === Eq(3) ? "KTX2" : "non-PNG"
    }

    function rq(qq) {
      return qq.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((Eq, gq) => qq[gq] === Eq)) && 73 === qq[12] && 72 === qq[13] && 68 === qq[14] && 82 === qq[15]
    }

    function vq(qq) {
      return /^[aeiou]/i.test(qq) ? `an ${qq}` : `a ${qq}`
    }

    function hq(qq) {
      const Eq = qq.byteStride;
      return void 0 === Eq || Number.isInteger(Eq) && Eq >= 4 && Eq <= 252 && Eq % 4 === 0
    }

    function nq(qq, Eq, gq) {
      var Yq, lq;
      const Oq = null === (Yq = qq.bufferViews) || void 0 === Yq ? void 0 : Yq[gq];
      if (!Oq || !Eq || 0 !== Oq.buffer) return null;
      const mq = null !== (lq = Oq.byteOffset) && void 0 !== lq ? lq : 0;
      return !oq(mq) || !oq(Oq.byteLength) || mq + Oq.byteLength > Eq.byteLength ? null : Eq.subarray(mq, mq + Oq.byteLength)
    }

    function bq(qq, Eq) {
      var gq, lq, Oq;
      const mq = Yq.m[Eq.type],
        xq = Yq.c[Eq.componentType];
      if (!mq || !xq || !Number.isInteger(Eq.count) || Eq.count < 0) return !1;
      if (void 0 === Eq.bufferView) return !0;
      const Aq = null === (gq = qq.bufferViews) || void 0 === gq ? void 0 : gq[Eq.bufferView],
        cq = null !== (lq = Eq.byteOffset) && void 0 !== lq ? lq : 0;
      if (!Aq || !oq(cq) || cq % xq !== 0) return !1;
      const uq = mq * xq,
        Bq = null !== (Oq = Aq.byteStride) && void 0 !== Oq ? Oq : uq;
      if (Bq < uq) return !1;
      return (0 === Eq.count ? 0 : cq + Bq * (Eq.count - 1) + uq) <= Aq.byteLength
    }

    function iq(qq) {
      return qq > lq.fileBytes ? `is ${(qq/mq).toFixed(1)} MiB (the limit is ${lq.fileBytes/mq} MiB)` : null
    }

    function Zq(qq, Eq) {
      try {
        return function(qq, Eq) {
          var gq, mq, Bq, dq, oq, iq, Zq, fq, Mq, Tq, zq, Sq, pq, Gq, Lq, Jq, kq;
          const Rq = Array.isArray(qq.extensionsUsed) && qq.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(qq, Eq) {
              var gq, Yq;
              const {
                items: lq,
                perFile: mq,
                surfaces: xq,
                few: Aq,
                bounds: cq,
                attributeMembers: uq
              } = Oq;
              if (Pq(qq.extensionsRequired, Aq) || Pq(qq.animations, 1 / 0) || Pq(qq.skins, 1 / 0)) return !0;
              if (null !== (gq = qq.animations) && void 0 !== gq && gq.length || null !== (Yq = qq.skins) && void 0 !== Yq && Yq.length) return !1;
              if ([
                  [qq.buffers, Aq],
                  [qq.scenes, Aq],
                  [qq.bufferViews, lq],
                  [qq.accessors, lq],
                  [qq.nodes, lq],
                  [qq.meshes, lq],
                  [qq.materials, xq],
                  [qq.textures, xq],
                  [qq.samplers, xq],
                  [qq.images, xq]
                ].some((qq => {
                  let [Eq, gq] = qq;
                  return Pq(Eq, gq)
                }))) return !0;
              for (const Oq of null !== (Bq = qq.accessors) && void 0 !== Bq ? Bq : []) {
                var Bq, Wq, Nq;
                if (Number.isInteger(Oq.count) && (!Number.isSafeInteger(Oq.count) || Object.is(Oq.count, -0)) || Pq(null !== (Wq = Oq.min) && void 0 !== Wq ? Wq : void 0, cq) || Pq(null !== (Nq = Oq.max) && void 0 !== Nq ? Nq : void 0, cq)) return !0
              }
              for (const Oq of null !== (aq = qq.scenes) && void 0 !== aq ? aq : []) {
                var aq;
                if (Pq(Oq.nodes, lq)) return !0
              }
              let Vq = 0;
              for (const Oq of null !== (dq = qq.nodes) && void 0 !== dq ? dq : []) {
                var dq, jq, Hq;
                if (Pq(Oq.children, mq)) return !0;
                Vq += null !== (jq = null === (Hq = Oq.children) || void 0 === Hq ? void 0 : Hq.length) && void 0 !== jq ? jq : 0
              }
              if (Vq > mq) return !0;
              let oq = 0;
              for (const Oq of null !== (yq = qq.meshes) && void 0 !== yq ? yq : []) {
                var yq;
                if (!Array.isArray(Oq.primitives)) return !0;
                if (oq += Oq.primitives.length, oq > mq) return !0;
                for (const qq of Oq.primitives) {
                  var tq;
                  const gq = Eq ? null === (tq = qq.extensions) || void 0 === tq ? void 0 : tq.KHR_draco_mesh_compression : void 0;
                  if (Qq(qq.attributes, uq) || Qq(null === gq || void 0 === gq ? void 0 : gq.attributes, uq)) return !0
                }
              }
              return !1
            }(qq, Rq)) return xq;
          const Uq = null === (gq = qq.asset) || void 0 === gq ? void 0 : gq.version;
          if ("string" !== typeof Uq || !/^2\.\d+/.test(Uq)) return `uses glTF version ${null!==Uq&&void 0!==Uq?Uq:"(none)"}`;
          const Fq = null === (mq = qq.asset) || void 0 === mq ? void 0 : mq.minVersion;
          if (void 0 !== Fq && "2.0" !== Fq) return `uses glTF version ${Fq}`;
          for (const Yq of null !== (sq = qq.extensionsRequired) && void 0 !== sq ? sq : []) {
            var sq;
            if (!cq.has(Yq)) return `requires the glTF extension ${Yq}`
          }
          if (null !== (Bq = qq.animations) && void 0 !== Bq && Bq.length) return "has animations";
          if (null !== (dq = qq.skins) && void 0 !== dq && dq.length) return "uses skins";
          const Xq = null !== (oq = qq.buffers) && void 0 !== oq ? oq : [];
          for (const [Yq, lq] of Xq.entries()) {
            if (void 0 !== lq.uri) return Aq;
            if (Yq > 0 || !Eq) return xq
          }
          for (const [Yq, lq] of(null !== (wq = qq.bufferViews) && void 0 !== wq ? wq : []).entries()) {
            var wq;
            if (!nq(qq, Eq, Yq) || !hq(lq)) return xq
          }
          const Kq = null !== (iq = qq.accessors) && void 0 !== iq ? iq : [];
          for (const Yq of Kq) {
            if (void 0 !== Yq.sparse) return "uses sparse accessors";
            const Eq = Number.isInteger(Yq.count) ? jq(Yq.count, lq.accessorElements, "elements in an accessor") : null;
            if (Eq) return Eq;
            if (!bq(qq, Yq)) return xq
          }
          const Cq = null !== (Zq = qq.scenes) && void 0 !== Zq ? Zq : [];
          if (1 !== Cq.length) return `has ${Cq.length} scenes`;
          const Iq = (0, Yq.u)(qq);
          if (void 0 !== Iq && 0 !== Iq) return xq;
          const eq = null !== (fq = qq.nodes) && void 0 !== fq ? fq : [],
            Dq = null !== (Mq = qq.meshes) && void 0 !== Mq ? Mq : [],
            qE = null !== (Tq = qq.materials) && void 0 !== Tq ? Tq : [],
            EE = null !== (zq = qq.textures) && void 0 !== zq ? zq : [],
            gE = null !== (Sq = qq.images) && void 0 !== Sq ? Sq : [],
            YE = null !== (pq = null !== (Gq = null !== (Lq = jq(eq.length, lq.nodes, "nodes")) && void 0 !== Lq ? Lq : jq(Dq.length, lq.meshes, "meshes")) && void 0 !== Gq ? Gq : jq(qE.length, lq.materials, "materials")) && void 0 !== pq ? pq : jq(gE.length, lq.images, "images");
          if (YE) return YE;
          const lE = new Set;
          for (const Yq of eq)
            for (const qq of null !== (OE = Yq.children) && void 0 !== OE ? OE : []) {
              var OE;
              if (!Hq(qq, eq.length) || lE.has(qq)) return xq;
              lE.add(qq)
            }
          const mE = new Set,
            xE = qq => {
              var Eq;
              return !mE.has(qq) && (mE.add(qq), (null !== (Eq = eq[qq].children) && void 0 !== Eq ? Eq : []).every(xE))
            };
          for (const Yq of null !== (AE = Cq[0].nodes) && void 0 !== AE ? AE : []) {
            var AE;
            if (!Hq(Yq, eq.length) || lE.has(Yq) || !xE(Yq)) return xq
          }
          for (const Yq of eq) {
            if (void 0 !== Yq.matrix) return "uses node matrices";
            if (void 0 !== Yq.skin) return "uses skins";
            if (void 0 !== Yq.weights) return "uses morph targets";
            if (void 0 !== Yq.mesh && !Hq(Yq.mesh, Dq.length)) return xq;
            const qq = [
              [Yq.translation, 3],
              [Yq.rotation, 4],
              [Yq.scale, 3]
            ];
            for (const [Eq, gq] of qq)
              if (void 0 !== Eq && (!Array.isArray(Eq) || Eq.length !== gq || !Eq.every((qq => Number.isFinite(qq))))) return xq
          }
          let cE = -1,
            uE = 0,
            BE = 0,
            WE = null;
          for (const lq of Dq) {
            if (void 0 !== lq.weights) return "uses morph targets";
            if (0 === lq.primitives.length) return xq;
            for (const gq of lq.primitives) {
              var NE, aE;
              const lq = null !== (NE = gq.mode) && void 0 !== NE ? NE : 4;
              var VE;
              if (4 !== lq && 0 !== lq) return `uses ${null!==(VE=aq[lq])&&void 0!==VE?VE:`mode ${lq}`} primitives`;
              if (void 0 !== gq.targets) return "uses morph targets";
              if (void 0 !== gq.material && !Hq(gq.material, qE.length)) return xq;
              const Oq = Rq ? null === (aE = gq.extensions) || void 0 === aE ? void 0 : aE.KHR_draco_mesh_compression : void 0;
              if (Oq) {
                if (4 !== lq) return "uses Draco-compressed points";
                if (!nq(qq, Eq, Oq.bufferView) || "object" !== typeof Oq.attributes) return xq
              }
              const mq = gq.attributes;
              if ("object" !== typeof mq || null === mq) return xq;
              if (void 0 === mq.POSITION) return "has a primitive with no positions";
              if (!Hq(mq.POSITION, Kq.length)) return xq;
              const Aq = Kq[mq.POSITION].count;
              for (const [qq, Eq] of Object.entries(mq)) {
                if (!Hq(Eq, Kq.length)) return xq;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(qq)) return "uses skins";
                const gq = Kq[Eq],
                  Yq = uq[qq];
                if (Yq && (gq.componentType !== Vq || gq.normalized || gq.type !== Yq)) return `stores ${qq} as ${yq(gq)}`;
                const lq = Wq[qq];
                if (lq && (gq.type !== lq.type || !lq.componentTypes.includes(gq.componentType) || gq.componentType === Vq === !!gq.normalized)) return `stores ${qq} as ${yq(gq)}`;
                if (Nq.has(qq) && gq.count !== Aq) return "has vertex attributes of different lengths"
              }
              if (Oq) {
                if (void 0 === gq.indices) return xq;
                for (const Eq in Oq.attributes)
                  if (Nq.has(Eq) && void 0 === mq[Eq]) return xq;
                if (void 0 === Oq.attributes.POSITION) return xq;
                const qq = Hq(gq.indices, Kq.length) ? Kq[gq.indices].count : -1;
                if (0 === qq) return xq;
                if (-1 === cE) cE = Oq.bufferView, uE = Aq, BE = qq;
                else {
                  WE ??= new Map([
                    [cE, [uE, BE]]
                  ]);
                  const Eq = WE.get(Oq.bufferView);
                  if (Eq && (Eq[0] !== Aq || Eq[1] !== qq)) return xq;
                  WE.set(Oq.bufferView, null !== Eq && void 0 !== Eq ? Eq : [Aq, qq])
                }
              }
              let cq = Aq;
              if (void 0 !== gq.indices) {
                if (!Hq(gq.indices, Kq.length)) return xq;
                const qq = Kq[gq.indices];
                if ("SCALAR" !== qq.type) return xq;
                if (5121 === qq.componentType) return "uses 8-bit indices";
                var dE;
                if (5123 !== qq.componentType && 5125 !== qq.componentType) return `stores indices as ${null!==(dE=Yq.g[qq.componentType])&&void 0!==dE?dE:qq.componentType}`;
                if (!Oq && void 0 === qq.bufferView) return xq;
                cq = qq.count
              }
              if (4 === lq && cq % 3 !== 0) return xq
            }
          }
          let jE = 0,
            HE = 0,
            oE = 0;
          for (let Yq = 0; Yq < eq.length; Yq++) {
            const qq = eq[Yq].mesh;
            if (void 0 !== qq && mE.has(Yq))
              for (const Eq of Dq[qq].primitives) oE++, jE += Kq[Eq.attributes.POSITION].count, void 0 !== Eq.indices && (HE += Kq[Eq.indices].count)
          }
          const PE = null !== (Jq = null !== (kq = jq(jE, lq.vertices, "vertices")) && void 0 !== kq ? kq : jq(HE, lq.indices, "indices")) && void 0 !== Jq ? Jq : jq(oE, lq.primitives, "primitives");
          if (PE) return PE;
          for (const Yq of qE) {
            var QE, yE;
            if (void 0 !== Yq.emissiveTexture) return "uses an emissive texture";
            const Eq = null !== (QE = Yq.alphaMode) && void 0 !== QE ? QE : "OPAQUE";
            if ("OPAQUE" !== Eq && "MASK" !== Eq && "BLEND" !== Eq) return xq;
            const gq = null === (yE = Yq.pbrMetallicRoughness) || void 0 === yE ? void 0 : yE.baseColorTexture;
            if (gq) {
              var tE, rE, vE, hE, nE;
              const Eq = null !== (tE = qq.extensionsUsed) && void 0 !== tE && tE.includes("KHR_texture_transform") ? null === (rE = gq.extensions) || void 0 === rE ? void 0 : rE.KHR_texture_transform : void 0;
              if (0 !== (null !== (vE = gq.texCoord) && void 0 !== vE ? vE : 0) || 0 !== (null !== (hE = null === Eq || void 0 === Eq ? void 0 : Eq.texCoord) && void 0 !== hE ? hE : 0)) return "uses a second UV set";
              const Yq = EE[gq.index];
              if (!Yq || !Hq(Yq.source, gE.length) || void 0 !== Yq.sampler && !Hq(Yq.sampler, null === (nE = qq.samplers) || void 0 === nE ? void 0 : nE.length)) return xq
            }
          }
          for (const Yq of gE) {
            if (void 0 !== Yq.uri) return Aq;
            if (void 0 === Yq.bufferView) return xq;
            const gq = nq(qq, Eq, Yq.bufferView);
            if (!gq) return xq;
            if ("image/png" !== Yq.mimeType) {
              var bE, iE, ZE;
              return `has ${vq(null!==(bE=null!==(iE={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(ZE=Yq.mimeType)&&void 0!==ZE?ZE:""])&&void 0!==iE?iE:Yq.mimeType)&&void 0!==bE?bE:"untyped")} image`
            }
            if (!rq(gq)) return `has ${vq(tq(gq))} image`;
            const Oq = new DataView(gq.buffer, gq.byteOffset, gq.byteLength),
              mq = Oq.getUint32(16),
              cq = Oq.getUint32(20);
            if (mq > lq.imageSide || cq > lq.imageSide) return `has a ${mq} \xd7 ${cq} image (the limit is ${lq.imageSide})`
          }
          return null
        }(qq, Eq)
      } catch {
        return xq
      }
    }

    function fq(qq) {
      const Eq = iq(qq.byteLength);
      if (Eq) return Eq;
      try {
        const {
          json: Eq,
          bin: gq
        } = (0, Yq.y)(qq);
        return Zq(Eq, gq)
      } catch (gq) {
        if (gq instanceof Yq.k) return gq.reason;
        throw gq
      }
    }
  },
  9358: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Nq,
      g: () => Wq,
      h: () => Vq,
      j: () => Oq,
      k: () => lq,
      m: () => aq,
      p: () => uq,
      q: () => Bq,
      u: () => mq,
      y: () => cq
    });
    var Yq = gq(9366);
    class lq extends Error {
      constructor(qq) {
        super(`GLB refused: it ${qq}`), this.reason = qq, this.name = "GlbRefused"
      }
    }
    class Oq extends Error {
      constructor(qq) {
        super(qq), this.name = "GlbError"
      }
    }

    function mq(qq) {
      return Reflect.get(qq, "scene")
    }
    const xq = 5130562,
      Aq = "is not a binary glTF 2.0 file";

    function cq(qq) {
      var Eq;
      const gq = qq instanceof Uint8Array ? qq : new Uint8Array(qq),
        Oq = (0, Yq.h)(gq);
      if (null === Oq) throw new lq(Aq);
      const mq = Oq.json,
        {
          jsonEnd: cq,
          length: uq
        } = Oq,
        Bq = new DataView(gq.buffer, gq.byteOffset, gq.byteLength);
      let Wq = -1,
        Nq = 0;
      for (let dq = cq; dq < uq;) {
        if (dq + 8 > uq) throw new lq(Aq);
        const qq = Bq.getUint32(dq, !0),
          Eq = Bq.getUint32(dq + 4, !0);
        if (dq + 8 + qq > uq || Eq === Yq.e || Eq === xq && -1 !== Wq) throw new lq(Aq);
        Eq === xq && (Wq = dq + 8, Nq = qq), dq += 8 + qq
      }
      let aq = null;
      const Vq = null === (Eq = mq.buffers) || void 0 === Eq ? void 0 : Eq[0];
      if (-1 !== Wq && Vq && void 0 === Vq.uri) {
        if (!(Vq.byteLength >= 0) || Vq.byteLength > Nq) throw new lq(Aq);
        aq = new Uint8Array(gq.buffer, gq.byteOffset + Wq, Vq.byteLength)
      }
      return {
        json: mq,
        bin: aq,
        fileBytes: gq.byteLength
      }
    }

    function uq(qq) {
      const Eq = qq.slice(qq.indexOf(",") + 1),
        gq = Uint8Array.fromBase64;
      if (gq) return gq(Eq).buffer;
      const Yq = atob(Eq),
        lq = new Uint8Array(Yq.length);
      for (let Oq = 0; Oq < Yq.length; Oq++) lq[Oq] = Yq.charCodeAt(Oq);
      return lq.buffer
    }
    async function Bq(qq) {
      if (qq.startsWith("data:")) return uq(qq);
      const Eq = await fetch(qq);
      if (!Eq.ok) throw new Oq(`fetching ${qq} failed: ${Eq.status} ${Eq.statusText}`);
      return await Eq.arrayBuffer()
    }
    const Wq = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      Nq = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      aq = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      Vq = [
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
  9366: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lq,
      h: () => Oq,
      j: () => mq
    });
    const Yq = 1179937895,
      lq = 1313821514;

    function Oq(qq) {
      const Eq = new DataView(qq.buffer, qq.byteOffset, qq.byteLength);
      if (qq.byteLength < 20 || Eq.getUint32(0, !0) !== Yq || 2 !== Eq.getUint32(4, !0)) return null;
      const gq = Math.min(Eq.getUint32(8, !0), qq.byteLength),
        Oq = Eq.getUint32(12, !0);
      if (Eq.getUint32(16, !0) !== lq || 20 + Oq > gq) return null;
      let mq;
      try {
        mq = JSON.parse((new TextDecoder).decode(qq.subarray(20, 20 + Oq)))
      } catch {
        return null
      }
      return "object" === typeof mq && null !== mq ? {
        json: mq,
        jsonEnd: 20 + Oq,
        length: gq
      } : null
    }

    function mq(qq) {
      var Eq;
      const gq = null === (Eq = Oq(qq)) || void 0 === Eq ? void 0 : Eq.json;
      if (void 0 === gq || !Array.isArray(gq.extensionsUsed) || !gq.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Yq = gq.meshes;
      return Array.isArray(Yq) && Yq.some((qq => {
        const Eq = null === qq || void 0 === qq ? void 0 : qq.primitives;
        return Array.isArray(Eq) && Eq.some((qq => {
          const Eq = null === qq || void 0 === qq ? void 0 : qq.extensions;
          return null != (null === Eq || void 0 === Eq ? void 0 : Eq.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);