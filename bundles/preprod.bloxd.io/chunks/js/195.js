export const id = 195;
export const ids = [195];
export const modules = {
  9058: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Gz,
      d: () => Pz,
      h: () => Lz
    });
    var Ez = bz(9063);
    const nz = {
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
      iz = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      lz = 1048576,
      Mz = "is not a binary glTF 2.0 file",
      tz = "loads data from outside the file",
      Hz = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      Oz = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      pz = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      dz = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: pz,
        TEXCOORD_2: pz,
        TEXCOORD_3: pz,
        TEXCOORD_4: pz,
        TEXCOORD_5: pz
      },
      Fz = new Set(Ez.i.map((zz => {
        let [uz] = zz;
        return uz
      }))),
      Zz = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      Rz = 5126;

    function Kz(zz) {
      return zz.toLocaleString("en-US")
    }

    function wz(zz, uz, bz) {
      return zz > uz ? `has ${Kz(zz)} ${bz} (the limit is ${Kz(uz)})` : null
    }

    function Xz(zz, uz) {
      return Number.isInteger(zz) && zz >= 0 && zz < (null !== uz && void 0 !== uz ? uz : 0)
    }

    function fz(zz) {
      return Number.isInteger(zz) && zz >= 0
    }

    function sz(zz, uz) {
      return void 0 !== zz && (!Array.isArray(zz) || zz.length > uz)
    }

    function rz(zz, uz) {
      return "object" === typeof zz && null !== zz && Object.keys(zz).length > uz
    }

    function oz(zz) {
      var uz;
      return `${zz.normalized?"normalized ":""}${null!==(uz=Ez.e[zz.componentType])&&void 0!==uz?uz:zz.componentType} ${zz.type}`
    }

    function Nz(zz) {
      const uz = uz => {
        var bz;
        return null !== (bz = zz[uz]) && void 0 !== bz ? bz : -1
      };
      return 255 === uz(0) && 216 === uz(1) ? "JPEG" : 82 === uz(0) && 73 === uz(1) && 87 === uz(8) && 69 === uz(9) ? "WebP" : 171 === uz(0) && 75 === uz(1) && 84 === uz(2) && 88 === uz(3) ? "KTX2" : "non-PNG"
    }

    function vz(zz) {
      return zz.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((uz, bz) => zz[bz] === uz)) && 73 === zz[12] && 72 === zz[13] && 68 === zz[14] && 82 === zz[15]
    }

    function xz(zz) {
      return /^[aeiou]/i.test(zz) ? `an ${zz}` : `a ${zz}`
    }

    function Jz(zz) {
      const uz = zz.byteStride;
      return void 0 === uz || Number.isInteger(uz) && uz >= 4 && uz <= 252 && uz % 4 === 0
    }

    function Az(zz, uz, bz) {
      var Ez, nz;
      const iz = null === (Ez = zz.bufferViews) || void 0 === Ez ? void 0 : Ez[bz];
      if (!iz || !uz || 0 !== iz.buffer) return null;
      const lz = null !== (nz = iz.byteOffset) && void 0 !== nz ? nz : 0;
      return !fz(lz) || !fz(iz.byteLength) || lz + iz.byteLength > uz.byteLength ? null : uz.subarray(lz, lz + iz.byteLength)
    }

    function Tz(zz, uz) {
      var bz, nz, iz;
      const lz = Ez.n[uz.type],
        Mz = Ez.c[uz.componentType];
      if (!lz || !Mz || !Number.isInteger(uz.count) || uz.count < 0) return !1;
      if (void 0 === uz.bufferView) return !0;
      const tz = null === (bz = zz.bufferViews) || void 0 === bz ? void 0 : bz[uz.bufferView],
        Hz = null !== (nz = uz.byteOffset) && void 0 !== nz ? nz : 0;
      if (!tz || !fz(Hz) || Hz % Mz !== 0) return !1;
      const Oz = lz * Mz,
        pz = null !== (iz = tz.byteStride) && void 0 !== iz ? iz : Oz;
      if (pz < Oz) return !1;
      return (0 === uz.count ? 0 : Hz + pz * (uz.count - 1) + Oz) <= tz.byteLength
    }

    function Lz(zz) {
      return zz > nz.fileBytes ? `is ${(zz/lz).toFixed(1)} MiB (the limit is ${nz.fileBytes/lz} MiB)` : null
    }

    function Pz(zz, uz) {
      try {
        return function(zz, uz) {
          var bz, lz, pz, Kz, fz, Lz, Pz, Gz, az, Vz, mz, qz, hz, Uz, cz, gz, Sz;
          const yz = Array.isArray(zz.extensionsUsed) && zz.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(zz, uz) {
              var bz, Ez;
              const {
                items: nz,
                perFile: lz,
                surfaces: Mz,
                few: tz,
                bounds: Hz,
                attributeMembers: Oz
              } = iz;
              if (sz(zz.extensionsRequired, tz) || sz(zz.animations, 1 / 0) || sz(zz.skins, 1 / 0)) return !0;
              if (null !== (bz = zz.animations) && void 0 !== bz && bz.length || null !== (Ez = zz.skins) && void 0 !== Ez && Ez.length) return !1;
              if ([
                  [zz.buffers, tz],
                  [zz.scenes, tz],
                  [zz.bufferViews, nz],
                  [zz.accessors, nz],
                  [zz.nodes, nz],
                  [zz.meshes, nz],
                  [zz.materials, Mz],
                  [zz.textures, Mz],
                  [zz.samplers, Mz],
                  [zz.images, Mz]
                ].some((zz => {
                  let [uz, bz] = zz;
                  return sz(uz, bz)
                }))) return !0;
              for (const iz of null !== (pz = zz.accessors) && void 0 !== pz ? pz : []) {
                var pz, dz, Fz;
                if (Number.isInteger(iz.count) && (!Number.isSafeInteger(iz.count) || Object.is(iz.count, -0)) || sz(null !== (dz = iz.min) && void 0 !== dz ? dz : void 0, Hz) || sz(null !== (Fz = iz.max) && void 0 !== Fz ? Fz : void 0, Hz)) return !0
              }
              for (const iz of null !== (Zz = zz.scenes) && void 0 !== Zz ? Zz : []) {
                var Zz;
                if (sz(iz.nodes, nz)) return !0
              }
              let Rz = 0;
              for (const iz of null !== (Kz = zz.nodes) && void 0 !== Kz ? Kz : []) {
                var Kz, wz, Xz;
                if (sz(iz.children, lz)) return !0;
                Rz += null !== (wz = null === (Xz = iz.children) || void 0 === Xz ? void 0 : Xz.length) && void 0 !== wz ? wz : 0
              }
              if (Rz > lz) return !0;
              let fz = 0;
              for (const iz of null !== (oz = zz.meshes) && void 0 !== oz ? oz : []) {
                var oz;
                if (!Array.isArray(iz.primitives)) return !0;
                if (fz += iz.primitives.length, fz > lz) return !0;
                for (const zz of iz.primitives) {
                  var Nz;
                  const bz = uz ? null === (Nz = zz.extensions) || void 0 === Nz ? void 0 : Nz.KHR_draco_mesh_compression : void 0;
                  if (rz(zz.attributes, Oz) || rz(null === bz || void 0 === bz ? void 0 : bz.attributes, Oz)) return !0
                }
              }
              return !1
            }(zz, yz)) return Mz;
          const Dz = null === (bz = zz.asset) || void 0 === bz ? void 0 : bz.version;
          if ("string" !== typeof Dz || !/^2\.\d+/.test(Dz)) return `uses glTF version ${null!==Dz&&void 0!==Dz?Dz:"(none)"}`;
          const Qz = null === (lz = zz.asset) || void 0 === lz ? void 0 : lz.minVersion;
          if (void 0 !== Qz && "2.0" !== Qz) return `uses glTF version ${Qz}`;
          for (const Ez of null !== (Wz = zz.extensionsRequired) && void 0 !== Wz ? Wz : []) {
            var Wz;
            if (!Hz.has(Ez)) return `requires the glTF extension ${Ez}`
          }
          if (null !== (pz = zz.animations) && void 0 !== pz && pz.length) return "has animations";
          if (null !== (Kz = zz.skins) && void 0 !== Kz && Kz.length) return "uses skins";
          const ez = null !== (fz = zz.buffers) && void 0 !== fz ? fz : [];
          for (const [Ez, nz] of ez.entries()) {
            if (void 0 !== nz.uri) return tz;
            if (Ez > 0 || !uz) return Mz
          }
          for (const [Ez, nz] of(null !== (jz = zz.bufferViews) && void 0 !== jz ? jz : []).entries()) {
            var jz;
            if (!Az(zz, uz, Ez) || !Jz(nz)) return Mz
          }
          const Iz = null !== (Lz = zz.accessors) && void 0 !== Lz ? Lz : [];
          for (const Ez of Iz) {
            if (void 0 !== Ez.sparse) return "uses sparse accessors";
            const uz = Number.isInteger(Ez.count) ? wz(Ez.count, nz.accessorElements, "elements in an accessor") : null;
            if (uz) return uz;
            if (!Tz(zz, Ez)) return Mz
          }
          const Bz = null !== (Pz = zz.scenes) && void 0 !== Pz ? Pz : [];
          if (1 !== Bz.length) return `has ${Bz.length} scenes`;
          const Cz = (0, Ez.w)(zz);
          if (void 0 !== Cz && 0 !== Cz) return Mz;
          const Yz = null !== (Gz = zz.nodes) && void 0 !== Gz ? Gz : [],
            kz = null !== (az = zz.meshes) && void 0 !== az ? az : [],
            zu = null !== (Vz = zz.materials) && void 0 !== Vz ? Vz : [],
            uu = null !== (mz = zz.textures) && void 0 !== mz ? mz : [],
            bu = null !== (qz = zz.images) && void 0 !== qz ? qz : [],
            Eu = null !== (hz = null !== (Uz = null !== (cz = wz(Yz.length, nz.nodes, "nodes")) && void 0 !== cz ? cz : wz(kz.length, nz.meshes, "meshes")) && void 0 !== Uz ? Uz : wz(zu.length, nz.materials, "materials")) && void 0 !== hz ? hz : wz(bu.length, nz.images, "images");
          if (Eu) return Eu;
          const nu = new Set;
          for (const Ez of Yz)
            for (const zz of null !== (iu = Ez.children) && void 0 !== iu ? iu : []) {
              var iu;
              if (!Xz(zz, Yz.length) || nu.has(zz)) return Mz;
              nu.add(zz)
            }
          const lu = new Set,
            Mu = zz => {
              var uz;
              return !lu.has(zz) && (lu.add(zz), (null !== (uz = Yz[zz].children) && void 0 !== uz ? uz : []).every(Mu))
            };
          for (const Ez of null !== (tu = Bz[0].nodes) && void 0 !== tu ? tu : []) {
            var tu;
            if (!Xz(Ez, Yz.length) || nu.has(Ez) || !Mu(Ez)) return Mz
          }
          for (const Ez of Yz) {
            if (void 0 !== Ez.matrix) return "uses node matrices";
            if (void 0 !== Ez.skin) return "uses skins";
            if (void 0 !== Ez.weights) return "uses morph targets";
            if (void 0 !== Ez.mesh && !Xz(Ez.mesh, kz.length)) return Mz;
            const zz = [
              [Ez.translation, 3],
              [Ez.rotation, 4],
              [Ez.scale, 3]
            ];
            for (const [uz, bz] of zz)
              if (void 0 !== uz && (!Array.isArray(uz) || uz.length !== bz || !uz.every((zz => Number.isFinite(zz))))) return Mz
          }
          let Hu = -1,
            Ou = 0,
            pu = 0,
            du = null;
          for (const nz of kz) {
            if (void 0 !== nz.weights) return "uses morph targets";
            if (0 === nz.primitives.length) return Mz;
            for (const bz of nz.primitives) {
              var Fu, Zu;
              const nz = null !== (Fu = bz.mode) && void 0 !== Fu ? Fu : 4;
              var Ru;
              if (4 !== nz && 0 !== nz) return `uses ${null!==(Ru=Zz[nz])&&void 0!==Ru?Ru:`mode ${nz}`} primitives`;
              if (void 0 !== bz.targets) return "uses morph targets";
              if (void 0 !== bz.material && !Xz(bz.material, zu.length)) return Mz;
              const iz = yz ? null === (Zu = bz.extensions) || void 0 === Zu ? void 0 : Zu.KHR_draco_mesh_compression : void 0;
              if (iz) {
                if (4 !== nz) return "uses Draco-compressed points";
                if (!Az(zz, uz, iz.bufferView) || "object" !== typeof iz.attributes) return Mz
              }
              const lz = bz.attributes;
              if ("object" !== typeof lz || null === lz) return Mz;
              if (void 0 === lz.POSITION) return "has a primitive with no positions";
              if (!Xz(lz.POSITION, Iz.length)) return Mz;
              const tz = Iz[lz.POSITION].count;
              for (const [zz, uz] of Object.entries(lz)) {
                if (!Xz(uz, Iz.length)) return Mz;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(zz)) return "uses skins";
                const bz = Iz[uz],
                  Ez = Oz[zz];
                if (Ez && (bz.componentType !== Rz || bz.normalized || bz.type !== Ez)) return `stores ${zz} as ${oz(bz)}`;
                const nz = dz[zz];
                if (nz && (bz.type !== nz.type || !nz.componentTypes.includes(bz.componentType) || bz.componentType === Rz === !!bz.normalized)) return `stores ${zz} as ${oz(bz)}`;
                if (Fz.has(zz) && bz.count !== tz) return "has vertex attributes of different lengths"
              }
              if (iz) {
                if (void 0 === bz.indices) return Mz;
                for (const uz in iz.attributes)
                  if (Fz.has(uz) && void 0 === lz[uz]) return Mz;
                if (void 0 === iz.attributes.POSITION) return Mz;
                const zz = Xz(bz.indices, Iz.length) ? Iz[bz.indices].count : -1;
                if (0 === zz) return Mz;
                if (-1 === Hu) Hu = iz.bufferView, Ou = tz, pu = zz;
                else {
                  du ??= new Map([
                    [Hu, [Ou, pu]]
                  ]);
                  const uz = du.get(iz.bufferView);
                  if (uz && (uz[0] !== tz || uz[1] !== zz)) return Mz;
                  du.set(iz.bufferView, null !== uz && void 0 !== uz ? uz : [tz, zz])
                }
              }
              let Hz = tz;
              if (void 0 !== bz.indices) {
                if (!Xz(bz.indices, Iz.length)) return Mz;
                const zz = Iz[bz.indices];
                if ("SCALAR" !== zz.type) return Mz;
                if (5121 === zz.componentType) return "uses 8-bit indices";
                var Ku;
                if (5123 !== zz.componentType && 5125 !== zz.componentType) return `stores indices as ${null!==(Ku=Ez.e[zz.componentType])&&void 0!==Ku?Ku:zz.componentType}`;
                if (!iz && void 0 === zz.bufferView) return Mz;
                Hz = zz.count
              }
              if (4 === nz && Hz % 3 !== 0) return Mz
            }
          }
          let wu = 0,
            Xu = 0,
            fu = 0;
          for (let Ez = 0; Ez < Yz.length; Ez++) {
            const zz = Yz[Ez].mesh;
            if (void 0 !== zz && lu.has(Ez))
              for (const uz of kz[zz].primitives) fu++, wu += Iz[uz.attributes.POSITION].count, void 0 !== uz.indices && (Xu += Iz[uz.indices].count)
          }
          const su = null !== (gz = null !== (Sz = wz(wu, nz.vertices, "vertices")) && void 0 !== Sz ? Sz : wz(Xu, nz.indices, "indices")) && void 0 !== gz ? gz : wz(fu, nz.primitives, "primitives");
          if (su) return su;
          for (const Ez of zu) {
            var ru, ou;
            if (void 0 !== Ez.emissiveTexture) return "uses an emissive texture";
            const uz = null !== (ru = Ez.alphaMode) && void 0 !== ru ? ru : "OPAQUE";
            if ("OPAQUE" !== uz && "MASK" !== uz && "BLEND" !== uz) return Mz;
            const bz = null === (ou = Ez.pbrMetallicRoughness) || void 0 === ou ? void 0 : ou.baseColorTexture;
            if (bz) {
              var Nu, vu, xu, Ju, Au;
              const uz = null !== (Nu = zz.extensionsUsed) && void 0 !== Nu && Nu.includes("KHR_texture_transform") ? null === (vu = bz.extensions) || void 0 === vu ? void 0 : vu.KHR_texture_transform : void 0;
              if (0 !== (null !== (xu = bz.texCoord) && void 0 !== xu ? xu : 0) || 0 !== (null !== (Ju = null === uz || void 0 === uz ? void 0 : uz.texCoord) && void 0 !== Ju ? Ju : 0)) return "uses a second UV set";
              const Ez = uu[bz.index];
              if (!Ez || !Xz(Ez.source, bu.length) || void 0 !== Ez.sampler && !Xz(Ez.sampler, null === (Au = zz.samplers) || void 0 === Au ? void 0 : Au.length)) return Mz
            }
          }
          for (const Ez of bu) {
            if (void 0 !== Ez.uri) return tz;
            if (void 0 === Ez.bufferView) return Mz;
            const bz = Az(zz, uz, Ez.bufferView);
            if (!bz) return Mz;
            if ("image/png" !== Ez.mimeType) {
              var Tu, Lu, Pu;
              return `has ${xz(null!==(Tu=null!==(Lu={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(Pu=Ez.mimeType)&&void 0!==Pu?Pu:""])&&void 0!==Lu?Lu:Ez.mimeType)&&void 0!==Tu?Tu:"untyped")} image`
            }
            if (!vz(bz)) return `has ${xz(Nz(bz))} image`;
            const iz = new DataView(bz.buffer, bz.byteOffset, bz.byteLength),
              lz = iz.getUint32(16),
              Hz = iz.getUint32(20);
            if (lz > nz.imageSide || Hz > nz.imageSide) return `has a ${lz} \xd7 ${Hz} image (the limit is ${nz.imageSide})`
          }
          return null
        }(zz, uz)
      } catch {
        return Mz
      }
    }

    function Gz(zz) {
      const uz = Lz(zz.byteLength);
      if (uz) return uz;
      try {
        const {
          json: uz,
          bin: bz
        } = (0, Ez.z)(zz);
        return Pz(uz, bz)
      } catch (bz) {
        if (bz instanceof Ez.m) return bz.reason;
        throw bz
      }
    }
  },
  9063: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Fz,
      e: () => dz,
      i: () => Rz,
      j: () => iz,
      m: () => nz,
      n: () => Zz,
      q: () => Oz,
      t: () => pz,
      w: () => lz,
      z: () => Hz
    });
    var Ez = bz(9067);
    class nz extends Error {
      constructor(zz) {
        super(`GLB refused: it ${zz}`), this.reason = zz, this.name = "GlbRefused"
      }
    }
    class iz extends Error {
      constructor(zz) {
        super(zz), this.name = "GlbError"
      }
    }

    function lz(zz) {
      return Reflect.get(zz, "scene")
    }
    const Mz = 5130562,
      tz = "is not a binary glTF 2.0 file";

    function Hz(zz) {
      var uz;
      const bz = zz instanceof Uint8Array ? zz : new Uint8Array(zz),
        iz = (0, Ez.d)(bz);
      if (null === iz) throw new nz(tz);
      const lz = iz.json,
        {
          jsonEnd: Hz,
          length: Oz
        } = iz,
        pz = new DataView(bz.buffer, bz.byteOffset, bz.byteLength);
      let dz = -1,
        Fz = 0;
      for (let Kz = Hz; Kz < Oz;) {
        if (Kz + 8 > Oz) throw new nz(tz);
        const zz = pz.getUint32(Kz, !0),
          uz = pz.getUint32(Kz + 4, !0);
        if (Kz + 8 + zz > Oz || uz === Ez.c || uz === Mz && -1 !== dz) throw new nz(tz);
        uz === Mz && (dz = Kz + 8, Fz = zz), Kz += 8 + zz
      }
      let Zz = null;
      const Rz = null === (uz = lz.buffers) || void 0 === uz ? void 0 : uz[0];
      if (-1 !== dz && Rz && void 0 === Rz.uri) {
        if (!(Rz.byteLength >= 0) || Rz.byteLength > Fz) throw new nz(tz);
        Zz = new Uint8Array(bz.buffer, bz.byteOffset + dz, Rz.byteLength)
      }
      return {
        json: lz,
        bin: Zz,
        fileBytes: bz.byteLength
      }
    }

    function Oz(zz) {
      const uz = zz.slice(zz.indexOf(",") + 1),
        bz = Uint8Array.fromBase64;
      if (bz) return bz(uz).buffer;
      const Ez = atob(uz),
        nz = new Uint8Array(Ez.length);
      for (let iz = 0; iz < Ez.length; iz++) nz[iz] = Ez.charCodeAt(iz);
      return nz.buffer
    }
    async function pz(zz) {
      if (zz.startsWith("data:")) return Oz(zz);
      const uz = await fetch(zz);
      if (!uz.ok) throw new iz(`fetching ${zz} failed: ${uz.status} ${uz.statusText}`);
      return await uz.arrayBuffer()
    }
    const dz = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      Fz = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      Zz = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      Rz = [
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
  9067: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz,
      d: () => iz,
      f: () => lz
    });
    const Ez = 1179937895,
      nz = 1313821514;

    function iz(zz) {
      const uz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength);
      if (zz.byteLength < 20 || uz.getUint32(0, !0) !== Ez || 2 !== uz.getUint32(4, !0)) return null;
      const bz = Math.min(uz.getUint32(8, !0), zz.byteLength),
        iz = uz.getUint32(12, !0);
      if (uz.getUint32(16, !0) !== nz || 20 + iz > bz) return null;
      let lz;
      try {
        lz = JSON.parse((new TextDecoder).decode(zz.subarray(20, 20 + iz)))
      } catch {
        return null
      }
      return "object" === typeof lz && null !== lz ? {
        json: lz,
        jsonEnd: 20 + iz,
        length: bz
      } : null
    }

    function lz(zz) {
      var uz;
      const bz = null === (uz = iz(zz)) || void 0 === uz ? void 0 : uz.json;
      if (void 0 === bz || !Array.isArray(bz.extensionsUsed) || !bz.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Ez = bz.meshes;
      return Array.isArray(Ez) && Ez.some((zz => {
        const uz = null === zz || void 0 === zz ? void 0 : zz.primitives;
        return Array.isArray(uz) && uz.some((zz => {
          const uz = null === zz || void 0 === zz ? void 0 : zz.extensions;
          return null != (null === uz || void 0 === uz ? void 0 : uz.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);