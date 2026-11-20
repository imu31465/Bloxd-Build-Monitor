export const id = 195;
export const ids = [195];
export const modules = {
  8924: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => cz,
      g: () => Tz,
      h: () => Gz
    });
    var Fz = sz(8930);
    const Wz = {
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
      Xz = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      Oz = 1048576,
      oz = "is not a binary glTF 2.0 file",
      vz = "loads data from outside the file",
      Uz = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      Kz = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      uz = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      Nz = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: uz,
        TEXCOORD_2: uz,
        TEXCOORD_3: uz,
        TEXCOORD_4: uz,
        TEXCOORD_5: uz
      },
      bz = new Set(Fz.j.map((zz => {
        let [tz] = zz;
        return tz
      }))),
      wz = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      Dz = 5126;

    function gz(zz) {
      return zz.toLocaleString("en-US")
    }

    function Hz(zz, tz, sz) {
      return zz > tz ? `has ${gz(zz)} ${sz} (the limit is ${gz(tz)})` : null
    }

    function Bz(zz, tz) {
      return Number.isInteger(zz) && zz >= 0 && zz < (null !== tz && void 0 !== tz ? tz : 0)
    }

    function Pz(zz) {
      return Number.isInteger(zz) && zz >= 0
    }

    function rz(zz, tz) {
      return void 0 !== zz && (!Array.isArray(zz) || zz.length > tz)
    }

    function Yz(zz, tz) {
      return "object" === typeof zz && null !== zz && Object.keys(zz).length > tz
    }

    function xz(zz) {
      var tz;
      return `${zz.normalized?"normalized ":""}${null!==(tz=Fz.f[zz.componentType])&&void 0!==tz?tz:zz.componentType} ${zz.type}`
    }

    function mz(zz) {
      const tz = tz => {
        var sz;
        return null !== (sz = zz[tz]) && void 0 !== sz ? sz : -1
      };
      return 255 === tz(0) && 216 === tz(1) ? "JPEG" : 82 === tz(0) && 73 === tz(1) && 87 === tz(8) && 69 === tz(9) ? "WebP" : 171 === tz(0) && 75 === tz(1) && 84 === tz(2) && 88 === tz(3) ? "KTX2" : "non-PNG"
    }

    function Jz(zz) {
      return zz.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((tz, sz) => zz[sz] === tz)) && 73 === zz[12] && 72 === zz[13] && 68 === zz[14] && 82 === zz[15]
    }

    function Iz(zz) {
      return /^[aeiou]/i.test(zz) ? `an ${zz}` : `a ${zz}`
    }

    function Cz(zz) {
      const tz = zz.byteStride;
      return void 0 === tz || Number.isInteger(tz) && tz >= 4 && tz <= 252 && tz % 4 === 0
    }

    function ez(zz, tz, sz) {
      var Fz, Wz;
      const Xz = null === (Fz = zz.bufferViews) || void 0 === Fz ? void 0 : Fz[sz];
      if (!Xz || !tz || 0 !== Xz.buffer) return null;
      const Oz = null !== (Wz = Xz.byteOffset) && void 0 !== Wz ? Wz : 0;
      return !Pz(Oz) || !Pz(Xz.byteLength) || Oz + Xz.byteLength > tz.byteLength ? null : tz.subarray(Oz, Oz + Xz.byteLength)
    }

    function Zz(zz, tz) {
      var sz, Wz, Xz;
      const Oz = Fz.n[tz.type],
        oz = Fz.e[tz.componentType];
      if (!Oz || !oz || !Number.isInteger(tz.count) || tz.count < 0) return !1;
      if (void 0 === tz.bufferView) return !0;
      const vz = null === (sz = zz.bufferViews) || void 0 === sz ? void 0 : sz[tz.bufferView],
        Uz = null !== (Wz = tz.byteOffset) && void 0 !== Wz ? Wz : 0;
      if (!vz || !Pz(Uz) || Uz % oz !== 0) return !1;
      const Kz = Oz * oz,
        uz = null !== (Xz = vz.byteStride) && void 0 !== Xz ? Xz : Kz;
      if (uz < Kz) return !1;
      return (0 === tz.count ? 0 : Uz + uz * (tz.count - 1) + Kz) <= vz.byteLength
    }

    function Gz(zz) {
      return zz > Wz.fileBytes ? `is ${(zz/Oz).toFixed(1)} MiB (the limit is ${Wz.fileBytes/Oz} MiB)` : null
    }

    function Tz(zz, tz) {
      try {
        return function(zz, tz) {
          var sz, Oz, uz, gz, Pz, Gz, Tz, cz, jz, Az, yz, Mz, dz, hz, Qz, kz, iz;
          const Lz = Array.isArray(zz.extensionsUsed) && zz.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(zz, tz) {
              var sz, Fz;
              const {
                items: Wz,
                perFile: Oz,
                surfaces: oz,
                few: vz,
                bounds: Uz,
                attributeMembers: Kz
              } = Xz;
              if (rz(zz.extensionsRequired, vz) || rz(zz.animations, 1 / 0) || rz(zz.skins, 1 / 0)) return !0;
              if (null !== (sz = zz.animations) && void 0 !== sz && sz.length || null !== (Fz = zz.skins) && void 0 !== Fz && Fz.length) return !1;
              if ([
                  [zz.buffers, vz],
                  [zz.scenes, vz],
                  [zz.bufferViews, Wz],
                  [zz.accessors, Wz],
                  [zz.nodes, Wz],
                  [zz.meshes, Wz],
                  [zz.materials, oz],
                  [zz.textures, oz],
                  [zz.samplers, oz],
                  [zz.images, oz]
                ].some((zz => {
                  let [tz, sz] = zz;
                  return rz(tz, sz)
                }))) return !0;
              for (const Xz of null !== (uz = zz.accessors) && void 0 !== uz ? uz : []) {
                var uz, Nz, bz;
                if (Number.isInteger(Xz.count) && (!Number.isSafeInteger(Xz.count) || Object.is(Xz.count, -0)) || rz(null !== (Nz = Xz.min) && void 0 !== Nz ? Nz : void 0, Uz) || rz(null !== (bz = Xz.max) && void 0 !== bz ? bz : void 0, Uz)) return !0
              }
              for (const Xz of null !== (wz = zz.scenes) && void 0 !== wz ? wz : []) {
                var wz;
                if (rz(Xz.nodes, Wz)) return !0
              }
              let Dz = 0;
              for (const Xz of null !== (gz = zz.nodes) && void 0 !== gz ? gz : []) {
                var gz, Hz, Bz;
                if (rz(Xz.children, Oz)) return !0;
                Dz += null !== (Hz = null === (Bz = Xz.children) || void 0 === Bz ? void 0 : Bz.length) && void 0 !== Hz ? Hz : 0
              }
              if (Dz > Oz) return !0;
              let Pz = 0;
              for (const Xz of null !== (xz = zz.meshes) && void 0 !== xz ? xz : []) {
                var xz;
                if (!Array.isArray(Xz.primitives)) return !0;
                if (Pz += Xz.primitives.length, Pz > Oz) return !0;
                for (const zz of Xz.primitives) {
                  var mz;
                  const sz = tz ? null === (mz = zz.extensions) || void 0 === mz ? void 0 : mz.KHR_draco_mesh_compression : void 0;
                  if (Yz(zz.attributes, Kz) || Yz(null === sz || void 0 === sz ? void 0 : sz.attributes, Kz)) return !0
                }
              }
              return !1
            }(zz, Lz)) return oz;
          const lz = null === (sz = zz.asset) || void 0 === sz ? void 0 : sz.version;
          if ("string" !== typeof lz || !/^2\.\d+/.test(lz)) return `uses glTF version ${null!==lz&&void 0!==lz?lz:"(none)"}`;
          const nz = null === (Oz = zz.asset) || void 0 === Oz ? void 0 : Oz.minVersion;
          if (void 0 !== nz && "2.0" !== nz) return `uses glTF version ${nz}`;
          for (const Fz of null !== (az = zz.extensionsRequired) && void 0 !== az ? az : []) {
            var az;
            if (!Uz.has(Fz)) return `requires the glTF extension ${Fz}`
          }
          if (null !== (uz = zz.animations) && void 0 !== uz && uz.length) return "has animations";
          if (null !== (gz = zz.skins) && void 0 !== gz && gz.length) return "uses skins";
          const qz = null !== (Pz = zz.buffers) && void 0 !== Pz ? Pz : [];
          for (const [Fz, Wz] of qz.entries()) {
            if (void 0 !== Wz.uri) return vz;
            if (Fz > 0 || !tz) return oz
          }
          for (const [Fz, Wz] of(null !== (Sz = zz.bufferViews) && void 0 !== Sz ? Sz : []).entries()) {
            var Sz;
            if (!ez(zz, tz, Fz) || !Cz(Wz)) return oz
          }
          const Vz = null !== (Gz = zz.accessors) && void 0 !== Gz ? Gz : [];
          for (const Fz of Vz) {
            if (void 0 !== Fz.sparse) return "uses sparse accessors";
            const tz = Number.isInteger(Fz.count) ? Hz(Fz.count, Wz.accessorElements, "elements in an accessor") : null;
            if (tz) return tz;
            if (!Zz(zz, Fz)) return oz
          }
          const Rz = null !== (Tz = zz.scenes) && void 0 !== Tz ? Tz : [];
          if (1 !== Rz.length) return `has ${Rz.length} scenes`;
          const pz = (0, Fz.u)(zz);
          if (void 0 !== pz && 0 !== pz) return oz;
          const fz = null !== (cz = zz.nodes) && void 0 !== cz ? cz : [],
            Ez = null !== (jz = zz.meshes) && void 0 !== jz ? jz : [],
            zt = null !== (Az = zz.materials) && void 0 !== Az ? Az : [],
            tt = null !== (yz = zz.textures) && void 0 !== yz ? yz : [],
            st = null !== (Mz = zz.images) && void 0 !== Mz ? Mz : [],
            Ft = null !== (dz = null !== (hz = null !== (Qz = Hz(fz.length, Wz.nodes, "nodes")) && void 0 !== Qz ? Qz : Hz(Ez.length, Wz.meshes, "meshes")) && void 0 !== hz ? hz : Hz(zt.length, Wz.materials, "materials")) && void 0 !== dz ? dz : Hz(st.length, Wz.images, "images");
          if (Ft) return Ft;
          const Wt = new Set;
          for (const Fz of fz)
            for (const zz of null !== (Xt = Fz.children) && void 0 !== Xt ? Xt : []) {
              var Xt;
              if (!Bz(zz, fz.length) || Wt.has(zz)) return oz;
              Wt.add(zz)
            }
          const Ot = new Set,
            ot = zz => {
              var tz;
              return !Ot.has(zz) && (Ot.add(zz), (null !== (tz = fz[zz].children) && void 0 !== tz ? tz : []).every(ot))
            };
          for (const Fz of null !== (vt = Rz[0].nodes) && void 0 !== vt ? vt : []) {
            var vt;
            if (!Bz(Fz, fz.length) || Wt.has(Fz) || !ot(Fz)) return oz
          }
          for (const Fz of fz) {
            if (void 0 !== Fz.matrix) return "uses node matrices";
            if (void 0 !== Fz.skin) return "uses skins";
            if (void 0 !== Fz.weights) return "uses morph targets";
            if (void 0 !== Fz.mesh && !Bz(Fz.mesh, Ez.length)) return oz;
            const zz = [
              [Fz.translation, 3],
              [Fz.rotation, 4],
              [Fz.scale, 3]
            ];
            for (const [tz, sz] of zz)
              if (void 0 !== tz && (!Array.isArray(tz) || tz.length !== sz || !tz.every((zz => Number.isFinite(zz))))) return oz
          }
          let Ut = -1,
            Kt = 0,
            ut = 0,
            Nt = null;
          for (const Wz of Ez) {
            if (void 0 !== Wz.weights) return "uses morph targets";
            if (0 === Wz.primitives.length) return oz;
            for (const sz of Wz.primitives) {
              var bt, wt;
              const Wz = null !== (bt = sz.mode) && void 0 !== bt ? bt : 4;
              var Dt;
              if (4 !== Wz && 0 !== Wz) return `uses ${null!==(Dt=wz[Wz])&&void 0!==Dt?Dt:`mode ${Wz}`} primitives`;
              if (void 0 !== sz.targets) return "uses morph targets";
              if (void 0 !== sz.material && !Bz(sz.material, zt.length)) return oz;
              const Xz = Lz ? null === (wt = sz.extensions) || void 0 === wt ? void 0 : wt.KHR_draco_mesh_compression : void 0;
              if (Xz) {
                if (4 !== Wz) return "uses Draco-compressed points";
                if (!ez(zz, tz, Xz.bufferView) || "object" !== typeof Xz.attributes) return oz
              }
              const Oz = sz.attributes;
              if ("object" !== typeof Oz || null === Oz) return oz;
              if (void 0 === Oz.POSITION) return "has a primitive with no positions";
              if (!Bz(Oz.POSITION, Vz.length)) return oz;
              const vz = Vz[Oz.POSITION].count;
              for (const [zz, tz] of Object.entries(Oz)) {
                if (!Bz(tz, Vz.length)) return oz;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(zz)) return "uses skins";
                const sz = Vz[tz],
                  Fz = Kz[zz];
                if (Fz && (sz.componentType !== Dz || sz.normalized || sz.type !== Fz)) return `stores ${zz} as ${xz(sz)}`;
                const Wz = Nz[zz];
                if (Wz && (sz.type !== Wz.type || !Wz.componentTypes.includes(sz.componentType) || sz.componentType === Dz === !!sz.normalized)) return `stores ${zz} as ${xz(sz)}`;
                if (bz.has(zz) && sz.count !== vz) return "has vertex attributes of different lengths"
              }
              if (Xz) {
                if (void 0 === sz.indices) return oz;
                for (const tz in Xz.attributes)
                  if (bz.has(tz) && void 0 === Oz[tz]) return oz;
                if (void 0 === Xz.attributes.POSITION) return oz;
                const zz = Bz(sz.indices, Vz.length) ? Vz[sz.indices].count : -1;
                if (0 === zz) return oz;
                if (-1 === Ut) Ut = Xz.bufferView, Kt = vz, ut = zz;
                else {
                  Nt ??= new Map([
                    [Ut, [Kt, ut]]
                  ]);
                  const tz = Nt.get(Xz.bufferView);
                  if (tz && (tz[0] !== vz || tz[1] !== zz)) return oz;
                  Nt.set(Xz.bufferView, null !== tz && void 0 !== tz ? tz : [vz, zz])
                }
              }
              let Uz = vz;
              if (void 0 !== sz.indices) {
                if (!Bz(sz.indices, Vz.length)) return oz;
                const zz = Vz[sz.indices];
                if ("SCALAR" !== zz.type) return oz;
                if (5121 === zz.componentType) return "uses 8-bit indices";
                var gt;
                if (5123 !== zz.componentType && 5125 !== zz.componentType) return `stores indices as ${null!==(gt=Fz.f[zz.componentType])&&void 0!==gt?gt:zz.componentType}`;
                if (!Xz && void 0 === zz.bufferView) return oz;
                Uz = zz.count
              }
              if (4 === Wz && Uz % 3 !== 0) return oz
            }
          }
          let Ht = 0,
            Bt = 0,
            Pt = 0;
          for (let Fz = 0; Fz < fz.length; Fz++) {
            const zz = fz[Fz].mesh;
            if (void 0 !== zz && Ot.has(Fz))
              for (const tz of Ez[zz].primitives) Pt++, Ht += Vz[tz.attributes.POSITION].count, void 0 !== tz.indices && (Bt += Vz[tz.indices].count)
          }
          const rt = null !== (kz = null !== (iz = Hz(Ht, Wz.vertices, "vertices")) && void 0 !== iz ? iz : Hz(Bt, Wz.indices, "indices")) && void 0 !== kz ? kz : Hz(Pt, Wz.primitives, "primitives");
          if (rt) return rt;
          for (const Fz of zt) {
            var Yt, xt;
            if (void 0 !== Fz.emissiveTexture) return "uses an emissive texture";
            const tz = null !== (Yt = Fz.alphaMode) && void 0 !== Yt ? Yt : "OPAQUE";
            if ("OPAQUE" !== tz && "MASK" !== tz && "BLEND" !== tz) return oz;
            const sz = null === (xt = Fz.pbrMetallicRoughness) || void 0 === xt ? void 0 : xt.baseColorTexture;
            if (sz) {
              var mt, Jt, It, Ct, et;
              const tz = null !== (mt = zz.extensionsUsed) && void 0 !== mt && mt.includes("KHR_texture_transform") ? null === (Jt = sz.extensions) || void 0 === Jt ? void 0 : Jt.KHR_texture_transform : void 0;
              if (0 !== (null !== (It = sz.texCoord) && void 0 !== It ? It : 0) || 0 !== (null !== (Ct = null === tz || void 0 === tz ? void 0 : tz.texCoord) && void 0 !== Ct ? Ct : 0)) return "uses a second UV set";
              const Fz = tt[sz.index];
              if (!Fz || !Bz(Fz.source, st.length) || void 0 !== Fz.sampler && !Bz(Fz.sampler, null === (et = zz.samplers) || void 0 === et ? void 0 : et.length)) return oz
            }
          }
          for (const Fz of st) {
            if (void 0 !== Fz.uri) return vz;
            if (void 0 === Fz.bufferView) return oz;
            const sz = ez(zz, tz, Fz.bufferView);
            if (!sz) return oz;
            if ("image/png" !== Fz.mimeType) {
              var Zt, Gt, Tt;
              return `has ${Iz(null!==(Zt=null!==(Gt={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(Tt=Fz.mimeType)&&void 0!==Tt?Tt:""])&&void 0!==Gt?Gt:Fz.mimeType)&&void 0!==Zt?Zt:"untyped")} image`
            }
            if (!Jz(sz)) return `has ${Iz(mz(sz))} image`;
            const Xz = new DataView(sz.buffer, sz.byteOffset, sz.byteLength),
              Oz = Xz.getUint32(16),
              Uz = Xz.getUint32(20);
            if (Oz > Wz.imageSide || Uz > Wz.imageSide) return `has a ${Oz} \xd7 ${Uz} image (the limit is ${Wz.imageSide})`
          }
          return null
        }(zz, tz)
      } catch {
        return oz
      }
    }

    function cz(zz) {
      const tz = Gz(zz.byteLength);
      if (tz) return tz;
      try {
        const {
          json: tz,
          bin: sz
        } = (0, Fz.y)(zz);
        return Tz(tz, sz)
      } catch (sz) {
        if (sz instanceof Fz.m) return sz.reason;
        throw sz
      }
    }
  },
  8930: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => bz,
      f: () => Nz,
      j: () => Dz,
      l: () => Xz,
      m: () => Wz,
      n: () => wz,
      o: () => Kz,
      r: () => uz,
      u: () => Oz,
      y: () => Uz
    });
    var Fz = sz(8934);
    class Wz extends Error {
      constructor(zz) {
        super(`GLB refused: it ${zz}`), this.reason = zz, this.name = "GlbRefused"
      }
    }
    class Xz extends Error {
      constructor(zz) {
        super(zz), this.name = "GlbError"
      }
    }

    function Oz(zz) {
      return Reflect.get(zz, "scene")
    }
    const oz = 5130562,
      vz = "is not a binary glTF 2.0 file";

    function Uz(zz) {
      var tz;
      const sz = zz instanceof Uint8Array ? zz : new Uint8Array(zz),
        Xz = (0, Fz.f)(sz);
      if (null === Xz) throw new Wz(vz);
      const Oz = Xz.json,
        {
          jsonEnd: Uz,
          length: Kz
        } = Xz,
        uz = new DataView(sz.buffer, sz.byteOffset, sz.byteLength);
      let Nz = -1,
        bz = 0;
      for (let gz = Uz; gz < Kz;) {
        if (gz + 8 > Kz) throw new Wz(vz);
        const zz = uz.getUint32(gz, !0),
          tz = uz.getUint32(gz + 4, !0);
        if (gz + 8 + zz > Kz || tz === Fz.b || tz === oz && -1 !== Nz) throw new Wz(vz);
        tz === oz && (Nz = gz + 8, bz = zz), gz += 8 + zz
      }
      let wz = null;
      const Dz = null === (tz = Oz.buffers) || void 0 === tz ? void 0 : tz[0];
      if (-1 !== Nz && Dz && void 0 === Dz.uri) {
        if (!(Dz.byteLength >= 0) || Dz.byteLength > bz) throw new Wz(vz);
        wz = new Uint8Array(sz.buffer, sz.byteOffset + Nz, Dz.byteLength)
      }
      return {
        json: Oz,
        bin: wz,
        fileBytes: sz.byteLength
      }
    }

    function Kz(zz) {
      const tz = zz.slice(zz.indexOf(",") + 1),
        sz = Uint8Array.fromBase64;
      if (sz) return sz(tz).buffer;
      const Fz = atob(tz),
        Wz = new Uint8Array(Fz.length);
      for (let Xz = 0; Xz < Fz.length; Xz++) Wz[Xz] = Fz.charCodeAt(Xz);
      return Wz.buffer
    }
    async function uz(zz) {
      if (zz.startsWith("data:")) return Kz(zz);
      const tz = await fetch(zz);
      if (!tz.ok) throw new Xz(`fetching ${zz} failed: ${tz.status} ${tz.statusText}`);
      return await tz.arrayBuffer()
    }
    const Nz = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      bz = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      wz = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      Dz = [
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
  8934: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz,
      f: () => Xz,
      i: () => Oz
    });
    const Fz = 1179937895,
      Wz = 1313821514;

    function Xz(zz) {
      const tz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength);
      if (zz.byteLength < 20 || tz.getUint32(0, !0) !== Fz || 2 !== tz.getUint32(4, !0)) return null;
      const sz = Math.min(tz.getUint32(8, !0), zz.byteLength),
        Xz = tz.getUint32(12, !0);
      if (tz.getUint32(16, !0) !== Wz || 20 + Xz > sz) return null;
      let Oz;
      try {
        Oz = JSON.parse((new TextDecoder).decode(zz.subarray(20, 20 + Xz)))
      } catch {
        return null
      }
      return "object" === typeof Oz && null !== Oz ? {
        json: Oz,
        jsonEnd: 20 + Xz,
        length: sz
      } : null
    }

    function Oz(zz) {
      var tz;
      const sz = null === (tz = Xz(zz)) || void 0 === tz ? void 0 : tz.json;
      if (void 0 === sz || !Array.isArray(sz.extensionsUsed) || !sz.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Fz = sz.meshes;
      return Array.isArray(Fz) && Fz.some((zz => {
        const tz = null === zz || void 0 === zz ? void 0 : zz.primitives;
        return Array.isArray(tz) && tz.some((zz => {
          const tz = null === zz || void 0 === zz ? void 0 : zz.extensions;
          return null != (null === tz || void 0 === tz ? void 0 : tz.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);