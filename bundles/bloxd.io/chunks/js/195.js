export const id = 195;
export const ids = [195];
export const modules = {
  9078: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Rv,
      g: () => Uv,
      i: () => Vv
    });
    var hv = Pv(9087);
    const Sv = {
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
      ev = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      gv = 1048576,
      pv = "is not a binary glTF 2.0 file",
      dv = "loads data from outside the file",
      Nv = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      lv = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      Tv = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      Wv = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: Tv,
        TEXCOORD_2: Tv,
        TEXCOORD_3: Tv,
        TEXCOORD_4: Tv,
        TEXCOORD_5: Tv
      },
      wv = new Set(hv.j.map((vv => {
        let [zv] = vv;
        return zv
      }))),
      av = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      sv = 5126;

    function Cv(vv) {
      return vv.toLocaleString("en-US")
    }

    function iv(vv, zv, Pv) {
      return vv > zv ? `has ${Cv(vv)} ${Pv} (the limit is ${Cv(zv)})` : null
    }

    function cv(vv, zv) {
      return Number.isInteger(vv) && vv >= 0 && vv < (null !== zv && void 0 !== zv ? zv : 0)
    }

    function Gv(vv) {
      return Number.isInteger(vv) && vv >= 0
    }

    function mv(vv, zv) {
      return void 0 !== vv && (!Array.isArray(vv) || vv.length > zv)
    }

    function jv(vv, zv) {
      return "object" === typeof vv && null !== vv && Object.keys(vv).length > zv
    }

    function fv(vv) {
      var zv;
      return `${vv.normalized?"normalized ":""}${null!==(zv=hv.g[vv.componentType])&&void 0!==zv?zv:vv.componentType} ${vv.type}`
    }

    function Fv(vv) {
      const zv = zv => {
        var Pv;
        return null !== (Pv = vv[zv]) && void 0 !== Pv ? Pv : -1
      };
      return 255 === zv(0) && 216 === zv(1) ? "JPEG" : 82 === zv(0) && 73 === zv(1) && 87 === zv(8) && 69 === zv(9) ? "WebP" : 171 === zv(0) && 75 === zv(1) && 84 === zv(2) && 88 === zv(3) ? "KTX2" : "non-PNG"
    }

    function Yv(vv) {
      return vv.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((zv, Pv) => vv[Pv] === zv)) && 73 === vv[12] && 72 === vv[13] && 68 === vv[14] && 82 === vv[15]
    }

    function nv(vv) {
      return /^[aeiou]/i.test(vv) ? `an ${vv}` : `a ${vv}`
    }

    function Ov(vv) {
      const zv = vv.byteStride;
      return void 0 === zv || Number.isInteger(zv) && zv >= 4 && zv <= 252 && zv % 4 === 0
    }

    function Dv(vv, zv, Pv) {
      var hv, Sv;
      const ev = null === (hv = vv.bufferViews) || void 0 === hv ? void 0 : hv[Pv];
      if (!ev || !zv || 0 !== ev.buffer) return null;
      const gv = null !== (Sv = ev.byteOffset) && void 0 !== Sv ? Sv : 0;
      return !Gv(gv) || !Gv(ev.byteLength) || gv + ev.byteLength > zv.byteLength ? null : zv.subarray(gv, gv + ev.byteLength)
    }

    function Kv(vv, zv) {
      var Pv, Sv, ev;
      const gv = hv.t[zv.type],
        pv = hv.d[zv.componentType];
      if (!gv || !pv || !Number.isInteger(zv.count) || zv.count < 0) return !1;
      if (void 0 === zv.bufferView) return !0;
      const dv = null === (Pv = vv.bufferViews) || void 0 === Pv ? void 0 : Pv[zv.bufferView],
        Nv = null !== (Sv = zv.byteOffset) && void 0 !== Sv ? Sv : 0;
      if (!dv || !Gv(Nv) || Nv % pv !== 0) return !1;
      const lv = gv * pv,
        Tv = null !== (ev = dv.byteStride) && void 0 !== ev ? ev : lv;
      if (Tv < lv) return !1;
      return (0 === zv.count ? 0 : Nv + Tv * (zv.count - 1) + lv) <= dv.byteLength
    }

    function Vv(vv) {
      return vv > Sv.fileBytes ? `is ${(vv/gv).toFixed(1)} MiB (the limit is ${Sv.fileBytes/gv} MiB)` : null
    }

    function Uv(vv, zv) {
      try {
        return function(vv, zv) {
          var Pv, gv, Tv, Cv, Gv, Vv, Uv, Rv, xv, tv, qv, Iv, Qv, Zv, Av, Lv, Hv;
          const Mv = Array.isArray(vv.extensionsUsed) && vv.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(vv, zv) {
              var Pv, hv;
              const {
                items: Sv,
                perFile: gv,
                surfaces: pv,
                few: dv,
                bounds: Nv,
                attributeMembers: lv
              } = ev;
              if (mv(vv.extensionsRequired, dv) || mv(vv.animations, 1 / 0) || mv(vv.skins, 1 / 0)) return !0;
              if (null !== (Pv = vv.animations) && void 0 !== Pv && Pv.length || null !== (hv = vv.skins) && void 0 !== hv && hv.length) return !1;
              if ([
                  [vv.buffers, dv],
                  [vv.scenes, dv],
                  [vv.bufferViews, Sv],
                  [vv.accessors, Sv],
                  [vv.nodes, Sv],
                  [vv.meshes, Sv],
                  [vv.materials, pv],
                  [vv.textures, pv],
                  [vv.samplers, pv],
                  [vv.images, pv]
                ].some((vv => {
                  let [zv, Pv] = vv;
                  return mv(zv, Pv)
                }))) return !0;
              for (const ev of null !== (Tv = vv.accessors) && void 0 !== Tv ? Tv : []) {
                var Tv, Wv, wv;
                if (Number.isInteger(ev.count) && (!Number.isSafeInteger(ev.count) || Object.is(ev.count, -0)) || mv(null !== (Wv = ev.min) && void 0 !== Wv ? Wv : void 0, Nv) || mv(null !== (wv = ev.max) && void 0 !== wv ? wv : void 0, Nv)) return !0
              }
              for (const ev of null !== (av = vv.scenes) && void 0 !== av ? av : []) {
                var av;
                if (mv(ev.nodes, Sv)) return !0
              }
              let sv = 0;
              for (const ev of null !== (Cv = vv.nodes) && void 0 !== Cv ? Cv : []) {
                var Cv, iv, cv;
                if (mv(ev.children, gv)) return !0;
                sv += null !== (iv = null === (cv = ev.children) || void 0 === cv ? void 0 : cv.length) && void 0 !== iv ? iv : 0
              }
              if (sv > gv) return !0;
              let Gv = 0;
              for (const ev of null !== (fv = vv.meshes) && void 0 !== fv ? fv : []) {
                var fv;
                if (!Array.isArray(ev.primitives)) return !0;
                if (Gv += ev.primitives.length, Gv > gv) return !0;
                for (const vv of ev.primitives) {
                  var Fv;
                  const Pv = zv ? null === (Fv = vv.extensions) || void 0 === Fv ? void 0 : Fv.KHR_draco_mesh_compression : void 0;
                  if (jv(vv.attributes, lv) || jv(null === Pv || void 0 === Pv ? void 0 : Pv.attributes, lv)) return !0
                }
              }
              return !1
            }(vv, Mv)) return pv;
          const yv = null === (Pv = vv.asset) || void 0 === Pv ? void 0 : Pv.version;
          if ("string" !== typeof yv || !/^2\.\d+/.test(yv)) return `uses glTF version ${null!==yv&&void 0!==yv?yv:"(none)"}`;
          const Bv = null === (gv = vv.asset) || void 0 === gv ? void 0 : gv.minVersion;
          if (void 0 !== Bv && "2.0" !== Bv) return `uses glTF version ${Bv}`;
          for (const hv of null !== (Jv = vv.extensionsRequired) && void 0 !== Jv ? Jv : []) {
            var Jv;
            if (!Nv.has(hv)) return `requires the glTF extension ${hv}`
          }
          if (null !== (Tv = vv.animations) && void 0 !== Tv && Tv.length) return "has animations";
          if (null !== (Cv = vv.skins) && void 0 !== Cv && Cv.length) return "uses skins";
          const Ev = null !== (Gv = vv.buffers) && void 0 !== Gv ? Gv : [];
          for (const [hv, Sv] of Ev.entries()) {
            if (void 0 !== Sv.uri) return dv;
            if (hv > 0 || !zv) return pv
          }
          for (const [hv, Sv] of(null !== (ov = vv.bufferViews) && void 0 !== ov ? ov : []).entries()) {
            var ov;
            if (!Dv(vv, zv, hv) || !Ov(Sv)) return pv
          }
          const bv = null !== (Vv = vv.accessors) && void 0 !== Vv ? Vv : [];
          for (const hv of bv) {
            if (void 0 !== hv.sparse) return "uses sparse accessors";
            const zv = Number.isInteger(hv.count) ? iv(hv.count, Sv.accessorElements, "elements in an accessor") : null;
            if (zv) return zv;
            if (!Kv(vv, hv)) return pv
          }
          const rv = null !== (Uv = vv.scenes) && void 0 !== Uv ? Uv : [];
          if (1 !== rv.length) return `has ${rv.length} scenes`;
          const kv = (0, hv.D)(vv);
          if (void 0 !== kv && 0 !== kv) return pv;
          const Xv = null !== (Rv = vv.nodes) && void 0 !== Rv ? Rv : [],
            uv = null !== (xv = vv.meshes) && void 0 !== xv ? xv : [],
            vz = null !== (tv = vv.materials) && void 0 !== tv ? tv : [],
            zz = null !== (qv = vv.textures) && void 0 !== qv ? qv : [],
            Pz = null !== (Iv = vv.images) && void 0 !== Iv ? Iv : [],
            hz = null !== (Qv = null !== (Zv = null !== (Av = iv(Xv.length, Sv.nodes, "nodes")) && void 0 !== Av ? Av : iv(uv.length, Sv.meshes, "meshes")) && void 0 !== Zv ? Zv : iv(vz.length, Sv.materials, "materials")) && void 0 !== Qv ? Qv : iv(Pz.length, Sv.images, "images");
          if (hz) return hz;
          const Sz = new Set;
          for (const hv of Xv)
            for (const vv of null !== (ez = hv.children) && void 0 !== ez ? ez : []) {
              var ez;
              if (!cv(vv, Xv.length) || Sz.has(vv)) return pv;
              Sz.add(vv)
            }
          const gz = new Set,
            pz = vv => {
              var zv;
              return !gz.has(vv) && (gz.add(vv), (null !== (zv = Xv[vv].children) && void 0 !== zv ? zv : []).every(pz))
            };
          for (const hv of null !== (dz = rv[0].nodes) && void 0 !== dz ? dz : []) {
            var dz;
            if (!cv(hv, Xv.length) || Sz.has(hv) || !pz(hv)) return pv
          }
          for (const hv of Xv) {
            if (void 0 !== hv.matrix) return "uses node matrices";
            if (void 0 !== hv.skin) return "uses skins";
            if (void 0 !== hv.weights) return "uses morph targets";
            if (void 0 !== hv.mesh && !cv(hv.mesh, uv.length)) return pv;
            const vv = [
              [hv.translation, 3],
              [hv.rotation, 4],
              [hv.scale, 3]
            ];
            for (const [zv, Pv] of vv)
              if (void 0 !== zv && (!Array.isArray(zv) || zv.length !== Pv || !zv.every((vv => Number.isFinite(vv))))) return pv
          }
          let Nz = -1,
            lz = 0,
            Tz = 0,
            Wz = null;
          for (const Sv of uv) {
            if (void 0 !== Sv.weights) return "uses morph targets";
            if (0 === Sv.primitives.length) return pv;
            for (const Pv of Sv.primitives) {
              var wz, az;
              const Sv = null !== (wz = Pv.mode) && void 0 !== wz ? wz : 4;
              var sz;
              if (4 !== Sv && 0 !== Sv) return `uses ${null!==(sz=av[Sv])&&void 0!==sz?sz:`mode ${Sv}`} primitives`;
              if (void 0 !== Pv.targets) return "uses morph targets";
              if (void 0 !== Pv.material && !cv(Pv.material, vz.length)) return pv;
              const ev = Mv ? null === (az = Pv.extensions) || void 0 === az ? void 0 : az.KHR_draco_mesh_compression : void 0;
              if (ev) {
                if (4 !== Sv) return "uses Draco-compressed points";
                if (!Dv(vv, zv, ev.bufferView) || "object" !== typeof ev.attributes) return pv
              }
              const gv = Pv.attributes;
              if ("object" !== typeof gv || null === gv) return pv;
              if (void 0 === gv.POSITION) return "has a primitive with no positions";
              if (!cv(gv.POSITION, bv.length)) return pv;
              const dv = bv[gv.POSITION].count;
              for (const [vv, zv] of Object.entries(gv)) {
                if (!cv(zv, bv.length)) return pv;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(vv)) return "uses skins";
                const Pv = bv[zv],
                  hv = lv[vv];
                if (hv && (Pv.componentType !== sv || Pv.normalized || Pv.type !== hv)) return `stores ${vv} as ${fv(Pv)}`;
                const Sv = Wv[vv];
                if (Sv && (Pv.type !== Sv.type || !Sv.componentTypes.includes(Pv.componentType) || Pv.componentType === sv === !!Pv.normalized)) return `stores ${vv} as ${fv(Pv)}`;
                if (wv.has(vv) && Pv.count !== dv) return "has vertex attributes of different lengths"
              }
              if (ev) {
                if (void 0 === Pv.indices) return pv;
                for (const zv in ev.attributes)
                  if (wv.has(zv) && void 0 === gv[zv]) return pv;
                if (void 0 === ev.attributes.POSITION) return pv;
                const vv = cv(Pv.indices, bv.length) ? bv[Pv.indices].count : -1;
                if (0 === vv) return pv;
                if (-1 === Nz) Nz = ev.bufferView, lz = dv, Tz = vv;
                else {
                  Wz ??= new Map([
                    [Nz, [lz, Tz]]
                  ]);
                  const zv = Wz.get(ev.bufferView);
                  if (zv && (zv[0] !== dv || zv[1] !== vv)) return pv;
                  Wz.set(ev.bufferView, null !== zv && void 0 !== zv ? zv : [dv, vv])
                }
              }
              let Nv = dv;
              if (void 0 !== Pv.indices) {
                if (!cv(Pv.indices, bv.length)) return pv;
                const vv = bv[Pv.indices];
                if ("SCALAR" !== vv.type) return pv;
                if (5121 === vv.componentType) return "uses 8-bit indices";
                var Cz;
                if (5123 !== vv.componentType && 5125 !== vv.componentType) return `stores indices as ${null!==(Cz=hv.g[vv.componentType])&&void 0!==Cz?Cz:vv.componentType}`;
                if (!ev && void 0 === vv.bufferView) return pv;
                Nv = vv.count
              }
              if (4 === Sv && Nv % 3 !== 0) return pv
            }
          }
          let iz = 0,
            cz = 0,
            Gz = 0;
          for (let hv = 0; hv < Xv.length; hv++) {
            const vv = Xv[hv].mesh;
            if (void 0 !== vv && gz.has(hv))
              for (const zv of uv[vv].primitives) Gz++, iz += bv[zv.attributes.POSITION].count, void 0 !== zv.indices && (cz += bv[zv.indices].count)
          }
          const mz = null !== (Lv = null !== (Hv = iv(iz, Sv.vertices, "vertices")) && void 0 !== Hv ? Hv : iv(cz, Sv.indices, "indices")) && void 0 !== Lv ? Lv : iv(Gz, Sv.primitives, "primitives");
          if (mz) return mz;
          for (const hv of vz) {
            var jz, fz;
            if (void 0 !== hv.emissiveTexture) return "uses an emissive texture";
            const zv = null !== (jz = hv.alphaMode) && void 0 !== jz ? jz : "OPAQUE";
            if ("OPAQUE" !== zv && "MASK" !== zv && "BLEND" !== zv) return pv;
            const Pv = null === (fz = hv.pbrMetallicRoughness) || void 0 === fz ? void 0 : fz.baseColorTexture;
            if (Pv) {
              var Fz, Yz, nz, Oz, Dz;
              const zv = null !== (Fz = vv.extensionsUsed) && void 0 !== Fz && Fz.includes("KHR_texture_transform") ? null === (Yz = Pv.extensions) || void 0 === Yz ? void 0 : Yz.KHR_texture_transform : void 0;
              if (0 !== (null !== (nz = Pv.texCoord) && void 0 !== nz ? nz : 0) || 0 !== (null !== (Oz = null === zv || void 0 === zv ? void 0 : zv.texCoord) && void 0 !== Oz ? Oz : 0)) return "uses a second UV set";
              const hv = zz[Pv.index];
              if (!hv || !cv(hv.source, Pz.length) || void 0 !== hv.sampler && !cv(hv.sampler, null === (Dz = vv.samplers) || void 0 === Dz ? void 0 : Dz.length)) return pv
            }
          }
          for (const hv of Pz) {
            if (void 0 !== hv.uri) return dv;
            if (void 0 === hv.bufferView) return pv;
            const Pv = Dv(vv, zv, hv.bufferView);
            if (!Pv) return pv;
            if ("image/png" !== hv.mimeType) {
              var Kz, Vz, Uz;
              return `has ${nv(null!==(Kz=null!==(Vz={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(Uz=hv.mimeType)&&void 0!==Uz?Uz:""])&&void 0!==Vz?Vz:hv.mimeType)&&void 0!==Kz?Kz:"untyped")} image`
            }
            if (!Yv(Pv)) return `has ${nv(Fv(Pv))} image`;
            const ev = new DataView(Pv.buffer, Pv.byteOffset, Pv.byteLength),
              gv = ev.getUint32(16),
              Nv = ev.getUint32(20);
            if (gv > Sv.imageSide || Nv > Sv.imageSide) return `has a ${gv} \xd7 ${Nv} image (the limit is ${Sv.imageSide})`
          }
          return null
        }(vv, zv)
      } catch {
        return pv
      }
    }

    function Rv(vv) {
      const zv = Vv(vv.byteLength);
      if (zv) return zv;
      try {
        const {
          json: zv,
          bin: Pv
        } = (0, hv.H)(vv);
        return Uv(zv, Pv)
      } catch (Pv) {
        if (Pv instanceof hv.q) return Pv.reason;
        throw Pv
      }
    }
  },
  9087: (vv, zv, Pv) => {
    Pv.d(zv, {
      A: () => Tv,
      D: () => gv,
      H: () => Nv,
      d: () => wv,
      g: () => Wv,
      j: () => sv,
      n: () => ev,
      q: () => Sv,
      t: () => av,
      x: () => lv
    });
    var hv = Pv(9093);
    class Sv extends Error {
      constructor(vv) {
        super(`GLB refused: it ${vv}`), this.reason = vv, this.name = "GlbRefused"
      }
    }
    class ev extends Error {
      constructor(vv) {
        super(vv), this.name = "GlbError"
      }
    }

    function gv(vv) {
      return Reflect.get(vv, "scene")
    }
    const pv = 5130562,
      dv = "is not a binary glTF 2.0 file";

    function Nv(vv) {
      var zv;
      const Pv = vv instanceof Uint8Array ? vv : new Uint8Array(vv),
        ev = (0, hv.g)(Pv);
      if (null === ev) throw new Sv(dv);
      const gv = ev.json,
        {
          jsonEnd: Nv,
          length: lv
        } = ev,
        Tv = new DataView(Pv.buffer, Pv.byteOffset, Pv.byteLength);
      let Wv = -1,
        wv = 0;
      for (let Cv = Nv; Cv < lv;) {
        if (Cv + 8 > lv) throw new Sv(dv);
        const vv = Tv.getUint32(Cv, !0),
          zv = Tv.getUint32(Cv + 4, !0);
        if (Cv + 8 + vv > lv || zv === hv.d || zv === pv && -1 !== Wv) throw new Sv(dv);
        zv === pv && (Wv = Cv + 8, wv = vv), Cv += 8 + vv
      }
      let av = null;
      const sv = null === (zv = gv.buffers) || void 0 === zv ? void 0 : zv[0];
      if (-1 !== Wv && sv && void 0 === sv.uri) {
        if (!(sv.byteLength >= 0) || sv.byteLength > wv) throw new Sv(dv);
        av = new Uint8Array(Pv.buffer, Pv.byteOffset + Wv, sv.byteLength)
      }
      return {
        json: gv,
        bin: av,
        fileBytes: Pv.byteLength
      }
    }

    function lv(vv) {
      const zv = vv.slice(vv.indexOf(",") + 1),
        Pv = Uint8Array.fromBase64;
      if (Pv) return Pv(zv).buffer;
      const hv = atob(zv),
        Sv = new Uint8Array(hv.length);
      for (let ev = 0; ev < hv.length; ev++) Sv[ev] = hv.charCodeAt(ev);
      return Sv.buffer
    }
    async function Tv(vv) {
      if (vv.startsWith("data:")) return lv(vv);
      const zv = await fetch(vv);
      if (!zv.ok) throw new ev(`fetching ${vv} failed: ${zv.status} ${zv.statusText}`);
      return await zv.arrayBuffer()
    }
    const Wv = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      wv = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      av = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      sv = [
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
  9093: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv,
      g: () => ev,
      k: () => gv
    });
    const hv = 1179937895,
      Sv = 1313821514;

    function ev(vv) {
      const zv = new DataView(vv.buffer, vv.byteOffset, vv.byteLength);
      if (vv.byteLength < 20 || zv.getUint32(0, !0) !== hv || 2 !== zv.getUint32(4, !0)) return null;
      const Pv = Math.min(zv.getUint32(8, !0), vv.byteLength),
        ev = zv.getUint32(12, !0);
      if (zv.getUint32(16, !0) !== Sv || 20 + ev > Pv) return null;
      let gv;
      try {
        gv = JSON.parse((new TextDecoder).decode(vv.subarray(20, 20 + ev)))
      } catch {
        return null
      }
      return "object" === typeof gv && null !== gv ? {
        json: gv,
        jsonEnd: 20 + ev,
        length: Pv
      } : null
    }

    function gv(vv) {
      var zv;
      const Pv = null === (zv = ev(vv)) || void 0 === zv ? void 0 : zv.json;
      if (void 0 === Pv || !Array.isArray(Pv.extensionsUsed) || !Pv.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const hv = Pv.meshes;
      return Array.isArray(hv) && hv.some((vv => {
        const zv = null === vv || void 0 === vv ? void 0 : vv.primitives;
        return Array.isArray(zv) && zv.some((vv => {
          const zv = null === vv || void 0 === vv ? void 0 : vv.extensions;
          return null != (null === zv || void 0 === zv ? void 0 : zv.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);