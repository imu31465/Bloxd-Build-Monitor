export const id = 203;
export const ids = [203];
export const modules = {
  40710: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      loadGlbAsset: () => fu,
      loadGlbTree: () => Xu
    });
    var Ez = bz(37335),
      nz = bz(40719),
      iz = bz(35766),
      lz = bz.n(iz);

    function Mz() {
      return lz()('(()=>{class zz extends Error{}function uz(uz,bz){const Ez=uz._malloc(bz);if(0===Ez)throw new zz(`Draco: the decoder\'s heap refused ${bz} bytes`);return Ez}function bz(zz){return{[zz.DT_FLOAT32]:[Float32Array,5126],[zz.DT_INT8]:[Int8Array,5120],[zz.DT_INT16]:[Int16Array,5122],[zz.DT_INT32]:[Int32Array,5124],[zz.DT_UINT8]:[Uint8Array,5121],[zz.DT_UINT16]:[Uint16Array,5123],[zz.DT_UINT32]:[Uint32Array,5125]}}function Ez(uz,Ez,nz,iz,lz){let Mz=null,tz=null,Hz=null;try{Mz=new uz.Decoder,tz=new uz.DecoderBuffer,tz.Init(Ez,Ez.byteLength);let Oz=0;const pz=Mz.GetEncodedGeometryType(tz);if(pz===uz.TRIANGULAR_MESH){const bz=new uz.Mesh;Hz=bz;const Ez=Mz.DecodeBufferToMesh(tz,bz);if(!Ez.ok()||0===bz.ptr)throw new zz(Ez.error_msg());Oz=3*bz.num_faces()}else{if(pz!==uz.POINT_CLOUD)throw new zz(`Draco: Cannot decode invalid geometry type ${pz}`);{const bz=new uz.PointCloud;Hz=bz;const Ez=Mz.DecodeBufferToPointCloud(tz,bz);if(!Ez.ok()||!bz.ptr)throw new zz(Ez.error_msg())}}const dz=Hz.num_points();if(dz!==iz.vertices||Oz!==iz.indices)throw new zz(`Draco: decoded ${dz} vertices and ${Oz} indices, the accessors declare ${iz.vertices} and ${iz.indices}`);const Fz=bz(uz),Zz=[];for(const{kind:uz,id:bz,components:Ez}of nz){const nz=Mz.GetAttributeByUniqueId(Hz,bz);if(!nz||0===nz.ptr)throw new zz(`Draco: no attribute with id ${bz} (${uz})`);const iz=nz.data_type();if(!Fz[iz])throw new zz(`Draco: Cannot decode invalid data type ${iz}`);if(nz.num_components()!==Ez)throw new zz(`Draco: ${uz} decodes to ${nz.num_components()} components, its accessor declares ${Ez}`);Zz.push([uz,nz,iz])}return lz({dracoDecoder:Mz,geometry:Hz,triangles:pz===uz.TRIANGULAR_MESH,numPoints:dz,numIndices:Oz,attributes:Zz})}finally{Hz&&uz.destroy(Hz),tz&&uz.destroy(tz),Mz&&uz.destroy(Mz)}}const nz=self;let iz=null;self.onmessage=zz=>{let{data:lz}=zz;if("init"===lz.id){try{importScripts(lz.url),iz=DracoDecoderModule({wasmBinary:lz.wasmBinary}),nz.postMessage({id:"initDone"})}catch(pz){nz.postMessage({id:"initError",message:pz instanceof Error?pz.message:String(pz)})}return}const{seq:Mz,data:tz,attributeIds:Hz,expected:Oz}=lz;iz?iz.then((zz=>{try{const iz=function(zz,nz,iz,lz){const Mz=Object.keys(iz).map((zz=>({kind:zz,id:iz[zz],components:lz.components[zz]})));return Ez(zz,nz,Mz,lz,(Ez=>{let{dracoDecoder:nz,geometry:iz,triangles:lz,numPoints:Mz,numIndices:tz,attributes:Hz}=Ez;const Oz=bz(zz);let pz=null;if(lz){const bz=4*tz,Ez=uz(zz,bz);try{nz.GetTrianglesUInt32Array(iz,bz,Ez),pz=new Uint32Array(tz),pz.set(new Uint32Array(zz.HEAPF32.buffer,Ez,tz))}finally{zz._free(Ez)}}const dz=[];for(const[bz,Fz,Zz]of Hz){const[Ez]=Oz[Zz],lz=Fz.num_components(),tz=Mz*lz,Hz=tz*Ez.BYTES_PER_ELEMENT,pz=uz(zz,Hz);try{nz.GetAttributeDataArrayForAllPoints(iz,Fz,Zz,Hz,pz),dz.push({kind:bz,data:new Ez(zz.HEAPF32.buffer,pz,tz).slice(),size:lz,byteOffset:Fz.byte_offset(),byteStride:Fz.byte_stride(),normalized:Fz.normalized()})}finally{zz._free(pz)}}return{indices:pz,attributes:dz,totalVertices:Mz}}))}(zz,tz,Hz,Oz),lz=iz.attributes.map((zz=>zz.data.buffer));iz.indices&&lz.push(iz.indices.buffer),nz.postMessage({id:"decoded",seq:Mz,...iz},lz)}catch(pz){nz.postMessage({id:"decodeError",seq:Mz,message:pz instanceof Error?pz.message:String(pz)})}}),(zz=>{nz.postMessage({id:"decodeError",seq:Mz,message:zz instanceof Error?zz.message:String(zz)})})):nz.postMessage({id:"decodeError",seq:Mz,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, bz.p + "dracoDecode.worker.3cc1e7b6.worker.js")
    }
    var tz = bz(96);
    const Hz = 1e3;
    let Oz = null,
      pz = null;
    const dz = [],
      Fz = [];
    let Zz = 0;
    const Rz = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      Kz = function(zz, uz) {
        const bz = zz ? Math.max(1, Math.min(Math.floor(.5 * zz), 4)) : 1;
        return uz ? Math.min(bz, 2) : bz
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, tz.isMobile)());

    function wz() {
      if (!Oz) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: zz,
        wasmBinaryUrl: uz
      } = Oz;
      return pz ??= fetch(uz).then((zz => {
        if (!zz.ok) throw new Error(`Draco: fetching ${uz} failed: ${zz.status}`);
        return zz.arrayBuffer()
      })), pz.catch((() => {
        pz = null
      })), Rz.workersStarted++, pz.then((uz => new Promise(((bz, Ez) => {
        const nz = new Mz;
        nz.onerror = zz => {
          nz.onmessage = null, nz.onerror = null, nz.terminate(), Ez(new Error("Draco: the decode worker failed to start" + (zz.message ? `: ${zz.message}` : " (its script did not load)")))
        }, nz.onmessage = zz => {
          let {
            data: uz
          } = zz;
          nz.onmessage = null, nz.onerror = null, "initDone" === uz.id ? bz(nz) : (nz.terminate(), Ez(new Error(`Draco: ${"initError"===uz.id?uz.message:"the worker did not start"}`)))
        };
        const iz = uz.slice(0),
          lz = {
            id: "init",
            url: zz,
            wasmBinary: iz
          };
        nz.postMessage(lz, [iz])
      }))))
    }

    function Xz(zz) {
      const uz = dz.indexOf(zz); - 1 !== uz && dz.splice(uz, 1);
      const bz = Fz.shift();
      bz && sz(bz)
    }

    function fz(zz, uz) {
      zz.busy = !0, zz.releaseTimer && (clearTimeout(zz.releaseTimer), zz.releaseTimer = null);
      zz.worker.then((bz => {
        const Ez = Zz++;
        bz.onmessage = nz => {
          let {
            data: iz
          } = nz;
          if (("decoded" === iz.id || "decodeError" === iz.id) && iz.seq === Ez) {
            if (bz.onmessage = null, bz.onerror = null, "decoded" === iz.id) return Rz.decodes++, uz.resolve({
              indices: iz.indices,
              attributes: iz.attributes,
              totalVertices: iz.totalVertices
            }), void(() => {
              const uz = Fz.shift();
              uz ? fz(zz, uz) : (zz.busy = !1, zz.releaseTimer = setTimeout((() => {
                const uz = dz.indexOf(zz); - 1 !== uz && dz.splice(uz, 1), zz.worker.then((zz => {
                  zz.terminate()
                }))
              }), Hz))
            })();
            bz.terminate(), uz.reject(new Error(iz.message)), Xz(zz)
          }
        }, bz.onerror = Ez => {
          bz.onmessage = null, bz.onerror = null, bz.terminate(), uz.reject(new Error(`Draco: the decode worker failed: ${Ez.message}`)), Xz(zz)
        };
        const nz = {
          id: "decode",
          seq: Ez,
          data: uz.data,
          attributeIds: uz.attributeIds,
          expected: uz.expected
        };
        bz.postMessage(nz, [uz.data.buffer])
      }), (bz => {
        uz.reject(bz instanceof Error ? bz : new Error(String(bz))), Xz(zz)
      }))
    }

    function sz(zz) {
      const uz = dz.find((zz => !zz.busy));
      if (uz) fz(uz, zz);
      else {
        if (dz.length < Kz) {
          const uz = {
            worker: wz(),
            busy: !0,
            releaseTimer: null
          };
          return dz.push(uz), Rz.mostWorkers = Math.max(Rz.mostWorkers, dz.length), void fz(uz, zz)
        }
        Fz.push(zz)
      }
    }

    function rz(zz, uz, bz) {
      return new Promise(((Ez, nz) => {
        sz({
          data: new Int8Array(zz.buffer, zz.byteOffset, zz.byteLength).slice(),
          attributeIds: uz,
          expected: bz,
          resolve: Ez,
          reject: nz
        })
      }))
    }
    var oz = bz(36920),
      Nz = bz(36930),
      vz = bz(9063),
      xz = bz(9058);
    const Jz = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function Az(zz) {
      const uz = (0, xz.h)(zz.byteLength);
      if (uz) throw new vz.m(uz);
      const {
        json: bz,
        bin: Ez
      } = (0, vz.z)(zz), nz = (0, xz.d)(bz, Ez);
      if (nz) throw new vz.m(nz);
      try {
        return function(zz, uz) {
          var bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz, Kz;
          const wz = new Map,
            Xz = bz => {
              let Ez = wz.get(bz);
              if (!Ez) {
                var nz;
                const iz = zz.bufferViews[bz],
                  lz = null !== (nz = iz.byteOffset) && void 0 !== nz ? nz : 0;
                Ez = {
                  index: bz,
                  bytes: uz.subarray(lz, lz + iz.byteLength),
                  byteStride: iz.byteStride
                }, wz.set(bz, Ez)
              }
              return Ez
            },
            fz = new Map,
            sz = uz => {
              let bz = fz.get(uz);
              if (!bz) {
                var Ez;
                const nz = zz.accessors[uz];
                bz = {
                  index: uz,
                  count: nz.count,
                  type: nz.type,
                  numComponents: vz.n[nz.type],
                  componentType: nz.componentType,
                  normalized: null !== (Ez = nz.normalized) && void 0 !== Ez && Ez,
                  byteOffset: nz.byteOffset,
                  bufferView: void 0 === nz.bufferView ? null : Xz(nz.bufferView),
                  min: nz.min,
                  max: nz.max
                }, fz.set(uz, bz)
              }
              return bz
            },
            rz = null !== (bz = null === (Ez = zz.extensionsUsed) || void 0 === Ez ? void 0 : Ez.includes("KHR_draco_mesh_compression")) && void 0 !== bz && bz,
            oz = (null !== (nz = zz.meshes) && void 0 !== nz ? nz : []).map(((uz, bz) => {
              const Ez = uz.primitives.map(((uz, bz) => {
                var Ez, nz, iz;
                const lz = rz ? null === (Ez = uz.extensions) || void 0 === Ez ? void 0 : Ez.KHR_draco_mesh_compression : void 0;
                let Mz = null;
                const tz = [];
                if (lz) {
                  const bz = {
                    vertices: zz.accessors[uz.attributes.POSITION].count,
                    indices: void 0 === uz.indices ? 0 : zz.accessors[uz.indices].count,
                    components: {}
                  };
                  Mz = {
                    bufferView: Xz(lz.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: bz
                  };
                  for (const [Ez, nz] of vz.i) {
                    const iz = lz.attributes[Ez];
                    if (void 0 === iz) continue;
                    Mz.attributeIds[nz] = iz;
                    const tz = uz.attributes[Ez];
                    var Hz;
                    if (void 0 !== tz) Mz.normalized[nz] = null !== (Hz = zz.accessors[tz].normalized) && void 0 !== Hz && Hz, bz.components[nz] = vz.n[zz.accessors[tz].type]
                  }
                } else
                  for (const [zz, Oz] of vz.i) {
                    const bz = uz.attributes[zz];
                    void 0 !== bz && tz.push({
                      semantic: zz,
                      kind: Oz,
                      accessor: sz(bz)
                    })
                  }
                return {
                  index: bz,
                  mode: null !== (nz = uz.mode) && void 0 !== nz ? nz : 4,
                  attributes: tz,
                  indices: lz || void 0 === uz.indices ? null : sz(uz.indices),
                  position: void 0 === uz.attributes.POSITION ? null : sz(uz.attributes.POSITION),
                  material: null !== (iz = uz.material) && void 0 !== iz ? iz : null,
                  draco: Mz
                }
              }));
              return {
                index: bz,
                name: uz.name,
                primitives: Ez,
                extras: uz.extras
              }
            })),
            Nz = (null !== (iz = zz.nodes) && void 0 !== iz ? iz : []).map(((zz, uz) => {
              var bz, Ez;
              return {
                index: uz,
                name: zz.name,
                children: null !== (bz = zz.children) && void 0 !== bz ? bz : [],
                mesh: null !== (Ez = zz.mesh) && void 0 !== Ez ? Ez : null,
                translation: zz.translation,
                rotation: zz.rotation,
                scale: zz.scale,
                hasCamera: void 0 !== zz.camera,
                extras: zz.extras
              }
            })),
            xz = null !== (lz = null === (Mz = zz.extensionsUsed) || void 0 === Mz ? void 0 : Mz.includes("KHR_materials_unlit")) && void 0 !== lz && lz,
            Az = null !== (tz = null === (Hz = zz.extensionsUsed) || void 0 === Hz ? void 0 : Hz.includes("KHR_texture_transform")) && void 0 !== tz && tz,
            Tz = (null !== (Oz = zz.materials) && void 0 !== Oz ? Oz : []).map(((zz, uz) => {
              var bz, Ez, nz, iz;
              const lz = zz.pbrMetallicRoughness,
                Mz = null === lz || void 0 === lz ? void 0 : lz.baseColorTexture;
              return {
                index: uz,
                name: zz.name,
                extras: zz.extras,
                unlit: xz && void 0 !== (null === (bz = zz.extensions) || void 0 === bz ? void 0 : bz.KHR_materials_unlit),
                pbr: lz ? {
                  baseColorFactor: lz.baseColorFactor,
                  metallicFactor: lz.metallicFactor,
                  roughnessFactor: lz.roughnessFactor
                } : null,
                baseColorTexture: Mz ? {
                  texture: Mz.index,
                  transform: Az && (null === (Ez = Mz.extensions) || void 0 === Ez ? void 0 : Ez.KHR_texture_transform) || null
                } : null,
                emissiveFactor: zz.emissiveFactor,
                alphaMode: null !== (nz = zz.alphaMode) && void 0 !== nz ? nz : "OPAQUE",
                alphaCutoff: zz.alphaCutoff,
                doubleSided: null !== (iz = zz.doubleSided) && void 0 !== iz && iz
              }
            })),
            Lz = (null !== (pz = zz.textures) && void 0 !== pz ? pz : []).map(((uz, bz) => {
              var Ez, nz;
              const iz = void 0 === uz.sampler ? Jz : {
                index: uz.sampler,
                ...null === (Ez = zz.samplers) || void 0 === Ez ? void 0 : Ez[uz.sampler]
              };
              return {
                index: bz,
                sampler: {
                  index: iz.index,
                  magFilter: iz.magFilter,
                  minFilter: iz.minFilter,
                  wrapS: iz.wrapS,
                  wrapT: iz.wrapT
                },
                image: null !== (nz = uz.source) && void 0 !== nz ? nz : -1
              }
            })),
            Pz = (null !== (dz = zz.images) && void 0 !== dz ? dz : []).map(((zz, uz) => ({
              index: uz,
              name: zz.name,
              mimeType: zz.mimeType,
              bufferView: Xz(zz.bufferView)
            }))),
            Gz = null !== (Fz = (0, vz.w)(zz)) && void 0 !== Fz ? Fz : 0;
          return {
            json: zz,
            rootNodes: null !== (Zz = null === (Rz = zz.scenes) || void 0 === Rz || null === (Kz = Rz[Gz]) || void 0 === Kz ? void 0 : Kz.nodes) && void 0 !== Zz ? Zz : [],
            nodes: Nz,
            meshes: oz,
            materials: Tz,
            textures: Lz,
            images: Pz
          }
        }(bz, Ez)
      } catch (iz) {
        throw iz instanceof vz.j ? iz : new vz.j(`reading the GLB failed: ${iz instanceof Error?iz.message:String(iz)}`)
      }
    }
    async function Tz(zz, uz) {
      var bz, Ez;
      const nz = zz.draco;
      if (!nz) throw new vz.j("not a Draco primitive");
      let iz;
      try {
        iz = await uz(nz.bufferView.bytes, nz.attributeIds, nz.expected)
      } catch (Hz) {
        throw new vz.j(`Draco decoding failed: ${Hz instanceof Error?Hz.message:String(Hz)}`)
      }
      const {
        vertices: lz,
        indices: Mz,
        components: tz
      } = nz.expected;
      if (iz.totalVertices !== lz || (null !== (bz = null === (Ez = iz.indices) || void 0 === Ez ? void 0 : Ez.length) && void 0 !== bz ? bz : 0) !== Mz || iz.attributes.some((zz => zz.size !== tz[zz.kind] || zz.data.length !== lz * zz.size))) throw new vz.j("Draco decoding gave other counts than the accessors declare");
      for (const Oz of iz.attributes) {
        const zz = nz.normalized[Oz.kind];
        void 0 !== zz && (Oz.normalized = zz)
      }
      return iz
    }
    const Lz = new WeakMap;

    function Pz(zz, uz) {
      var bz;
      const Ez = null !== (bz = Lz.get(zz)) && void 0 !== bz ? bz : uz(zz);
      return Lz.set(zz, Ez), Ez
    }

    function Gz(zz) {
      const uz = zz.bufferView,
        bz = 5125 === zz.componentType ? Uint32Array : Uint16Array,
        Ez = uz.bytes.buffer,
        nz = uz.bytes.byteOffset + (zz.byteOffset || 0);
      return nz % bz.BYTES_PER_ELEMENT !== 0 ? new bz(Ez.slice(nz, nz + zz.count * bz.BYTES_PER_ELEMENT), 0) : new bz(Ez, nz, zz.count)
    }

    function az(zz, uz) {
      if (zz.min && zz.max) return [new Float64Array(zz.min), new Float64Array(zz.max)];
      const bz = uz.find((zz => {
          let {
            kind: uz
          } = zz;
          return "position" === uz
        })),
        Ez = bz ? (0, Nz.g)(bz, zz.count) : new Float32Array(0);
      return (0, Nz.r)(Ez.length / 3, ((zz, uz) => Ez[3 * zz + uz]))
    }

    function Vz(zz) {
      const uz = zz.attributes.map((zz => {
          var uz, bz;
          let {
            kind: Ez,
            accessor: nz
          } = zz;
          const {
            bufferView: iz,
            numComponents: lz
          } = nz;
          if (!iz) {
            return {
              kind: Ez,
              data: Pz(nz, (() => new Float32Array(lz * nz.count))),
              offset: 0,
              stride: 4 * lz,
              components: lz,
              glType: 5126,
              isNormalized: !1
            }
          }
          const Mz = null !== (uz = iz.byteStride) && void 0 !== uz ? uz : lz * vz.c[nz.componentType];
          return {
            kind: Ez,
            data: iz.bytes,
            offset: null !== (bz = nz.byteOffset) && void 0 !== bz ? bz : 0,
            stride: Mz,
            components: lz,
            glType: nz.componentType,
            isNormalized: nz.normalized
          }
        })),
        bz = zz.indices,
        Ez = bz && Pz(bz, Gz),
        nz = zz.position;
      return new Nz.d(uz, Ez, nz.count, ...az(nz, uz))
    }
    const mz = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function qz(zz, uz) {
      const bz = uz.attributes.map((zz => {
        let {
          kind: uz,
          data: bz,
          size: Ez,
          byteOffset: nz,
          byteStride: iz,
          normalized: lz
        } = zz;
        return {
          kind: uz,
          data: bz,
          offset: nz,
          stride: iz,
          components: Ez,
          glType: 5120 + mz.indexOf(bz.constructor),
          isNormalized: lz
        }
      }));
      return new Nz.d(bz, uz.indices, uz.totalVertices, ...az(zz.position, bz))
    }

    function hz(zz) {
      const uz = zz.lastIndexOf("/");
      return uz < 0 ? zz : zz.substring(uz + 1)
    }

    function Uz(zz) {
      const uz = zz.lastIndexOf("/");
      return uz < 0 ? "" : zz.substring(0, uz + 1)
    }

    function cz(zz) {
      return zz.name || `node${zz.index}`
    }
    const gz = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      Sz = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      yz = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function Dz(zz) {
      var uz, bz, Ez, nz;
      const iz = null !== (uz = zz.minFilter) && void 0 !== uz ? uz : 9987;
      return 9729 === (null !== (bz = zz.magFilter) && void 0 !== bz ? bz : 9729) ? null !== (Ez = Sz[iz]) && void 0 !== Ez ? Ez : 3 : null !== (nz = yz[iz]) && void 0 !== nz ? nz : 4
    }
    const Qz = {
      33071: 0,
      33648: 2
    };

    function Wz(zz) {
      var uz;
      return null !== (uz = Qz[null !== zz && void 0 !== zz ? zz : 10497]) && void 0 !== uz ? uz : 1
    }

    function ez(zz) {
      return 9728 === zz.minFilter || 9729 === zz.minFilter
    }

    function jz(zz) {
      var uz, bz, Ez;
      const nz = Float64Array.from(null !== (uz = zz.scale) && void 0 !== uz ? uz : [1, 1, 1]);
      return zz.hasCamera && (nz[0] = -1), {
        translation: Float64Array.from(null !== (bz = zz.translation) && void 0 !== bz ? bz : [0, 0, 0]),
        rotation: Float64Array.from(null !== (Ez = zz.rotation) && void 0 !== Ez ? Ez : [0, 0, 0, 1]),
        scale: nz
      }
    }

    function Iz(zz, uz) {
      let {
        translation: bz,
        rotation: Ez,
        scale: nz
      } = zz;
      const iz = new Float32Array(16);
      return (0, oz.c)(nz, 0, Ez, 0, bz, 0, iz), uz && (0, oz.o)(iz, uz, 0, iz), iz
    }
    class Bz {
      constructor(zz, uz, bz, Ez) {
        this.model = zz, this.decode = uz, this.fileInfo = bz, this.uniqueRootUrl = Ez, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const nz = new Set,
          iz = (uz, bz) => {
            const Ez = zz.nodes[uz];
            if (this.parents.has(Ez)) throw new vz.j(`/nodes/${uz}: Invalid recursive node hierarchy`);
            this.parents.set(Ez, bz);
            const lz = null === Ez.mesh ? [] : zz.meshes[Ez.mesh].primitives,
              Mz = lz.map((zz => {
                const uz = lz.length > 1;
                return {
                  name: uz ? `${cz(Ez)}_primitive${zz.index}` : cz(Ez),
                  node: Ez,
                  primitive: zz,
                  part: uz,
                  geometry: null
                }
              }));
            this.uses.set(Ez, Mz);
            const tz = null !== Ez.mesh && nz.has(Ez.mesh);
            nz.add(Ez.mesh), this.own.set(Ez, tz ? [] : Mz);
            for (const zz of Ez.children) iz(zz, Ez)
          };
        for (const lz of zz.rootNodes) iz(lz, null);
        this.primitives = zz.nodes.flatMap((zz => {
          var uz;
          return null !== (uz = this.own.get(zz)) && void 0 !== uz ? uz : []
        }))
      }
      decodeGeometries() {
        const zz = new Map;
        return Promise.all(this.primitives.map((async uz => {
          const {
            primitive: bz
          } = uz, Ez = bz.draco;
          let nz = Ez ? zz.get(Ez.bufferView.index) : Promise.resolve(Vz(bz));
          nz || (nz = Tz(bz, this.decode).then((zz => qz(bz, zz))), zz.set(Ez.bufferView.index, nz)), uz.geometry = await nz
        })))
      }
      parentOf(zz) {
        var uz;
        return null !== (uz = this.parents.get(zz)) && void 0 !== uz ? uz : null
      }
      meshesUnder(zz) {
        const uz = this.model.nodes.filter((zz => this.uses.has(zz)));
        for (const Ez of uz) {
          const uz = this.uses.get(Ez),
            bz = uz.find((uz => uz.name === zz));
          if (bz) return 1 === uz.length ? this.subtree(Ez) : this.own.get(Ez).includes(bz) ? [bz] : []
        }
        const bz = uz.find((uz => 1 !== this.uses.get(uz).length && cz(uz) === zz));
        return bz ? this.subtree(bz) : null
      }
      subtree(zz) {
        return [...this.own.get(zz), ...zz.children.flatMap((zz => this.subtree(this.model.nodes[zz])))]
      }
      worldMatrix(zz, uz, bz) {
        let Ez = Iz(jz(uz ? gz : {}), null);
        const nz = [];
        for (let lz = zz.part ? zz.node : this.parentOf(zz.node); lz; lz = this.parentOf(lz)) nz.unshift(lz);
        for (const lz of nz) Ez = Iz(jz(lz), Ez);
        const iz = jz(zz.part ? {} : zz.node);
        return void 0 !== bz && iz.scale.fill(bz), Iz(iz, Ez)
      }
      floats(zz) {
        const {
          vertexAttributes: uz,
          vertexCount: bz
        } = zz.geometry;
        return new Map(uz.map((zz => [zz.kind, (0, Nz.g)(zz, bz)])))
      }
      imageUrl(zz) {
        return function(zz, uz, bz) {
          let {
            name: Ez
          } = uz;
          return `data:${zz}${Ez}#image${bz}`
        }(this.uniqueRootUrl, this.fileInfo, zz)
      }
      textureDesc(zz, uz) {
        var bz;
        let {
          texture: Ez,
          transform: nz
        } = zz;
        const {
          sampler: iz,
          image: lz
        } = this.model.textures[Ez], {
          bufferView: Mz,
          mimeType: tz,
          name: Hz
        } = this.model.images[lz], Oz = nz && {
          ...nz.offset ? {
            uOffset: nz.offset[0],
            vOffset: nz.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...nz.rotation ? {
            wAng: -nz.rotation
          } : {},
          ...nz.scale ? {
            uScale: nz.scale[0],
            vScale: nz.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(lz),
          noMipmap: ez(iz),
          invertY: !1,
          samplingMode: Dz(iz),
          data: {
            bytes: Mz.bytes,
            mimeType: tz,
            label: Hz,
            context: `/textures/${Ez}`
          },
          sets: {
            wrapU: Wz(iz.wrapS),
            wrapV: Wz(iz.wrapT),
            ...Oz,
            coordinatesIndex: null !== (bz = null === nz || void 0 === nz ? void 0 : nz.texCoord) && void 0 !== bz ? bz : 0,
            hasAlpha: uz
          }
        }
      }
    }
    async function Cz(zz, uz, bz, Ez, nz, iz) {
      let lz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const Mz = function(zz, uz, bz) {
          return "string" !== typeof uz ? {
            url: "",
            rootUrl: zz,
            name: bz()
          } : uz ? uz.startsWith("data:") ? {
            url: uz,
            rootUrl: zz,
            name: ""
          } : zz ? {
            url: zz + uz,
            rootUrl: zz,
            name: uz
          } : {
            url: uz,
            rootUrl: Uz(uz),
            name: hz(uz)
          } : {
            url: zz,
            rootUrl: Uz(zz),
            name: hz(zz)
          }
        }(bz, zz, nz),
        tz = {};
      uz.addPendingData(tz);
      try {
        const bz = Az(await async function(zz, uz) {
            return "string" !== typeof uz ? uz : zz.url.startsWith("data:") ? (0, vz.q)(zz.url) : await (0, vz.t)(zz.url)
          }(Mz, zz)),
          tz = new Bz(bz, Ez, Mz, function(zz, uz) {
            let {
              rootUrl: bz,
              name: Ez
            } = zz;
            return !bz.startsWith("file:") && Ez ? bz : `${bz}${uz()}/`
          }(Mz, nz));
        return await iz(tz), uz.importedMeshesFiles && (uz.loadingPluginName = "JA", lz && uz.importedMeshesFiles.push(Mz.url)), tz
      } finally {
        uz.removePendingData(tz)
      }
    }
    var Yz = bz(37046),
      kz = bz(36901),
      zu = bz(37325);

    function uu(zz) {
      if (null === zz || void 0 === zz || !zz.min || !zz.max) return null;
      const [uz, bz, Ez] = zz.min, [nz, iz, lz] = zz.max, {
        BoundingInfo: Mz,
        ER: tz
      } = (0, Yz.c)();
      return new Mz(new tz(uz, bz, Ez), new tz(nz, iz, lz))
    }

    function bu(zz) {
      (0, kz.c)(zz) || (zz.geometry && zz.geometry.useBoundingInfoFromGeometry ? zz._updateBoundingInfo() : zz.refreshBoundingInfo(!0, !0))
    }
    class Eu {
      constructor(zz, uz) {
        this.tK = zz, this.decode = uz, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(zz) {
        let uz = this.viewData.get(zz.index);
        return uz || (uz = this.bufferData.then((() => zz.bytes)), this.viewData.set(zz.index, uz)), uz
      }
      viewBuffer(zz) {
        let uz = this.viewBuffers.get(zz.index);
        return uz || (uz = this.viewBytes(zz).then((zz => new((0, Yz.c)().gZ)(this.tK.uR(), zz, !1))), this.viewBuffers.set(zz.index, uz)), uz
      }
      vertexBuffer(zz, uz) {
        const {
          kind: bz,
          data: Ez
        } = uz, nz = `${zz.index}:${bz}`;
        let iz = this.vertexBuffers.get(nz);
        if (!iz) {
          const lz = zz.bufferView;
          iz = lz ? this.viewBuffer(lz).then((zz => this.layoutVertexBuffer(zz, uz))) : Promise.resolve(Ez).then((zz => new((0, Yz.c)().VertexBuffer)(this.tK.uR(), zz, bz, !1))), this.vertexBuffers.set(nz, iz)
        }
        return iz
      }
      layoutVertexBuffer(zz, uz) {
        let {
          kind: bz,
          offset: Ez,
          stride: nz,
          components: iz,
          glType: lz,
          isNormalized: Mz
        } = uz;
        const tz = this.tK.uR();
        return new((0, Yz.c)().VertexBuffer)(tz, zz, bz, !1, void 0, nz, void 0, Ez, iz, lz, Mz, !0, void 0, !0)
      }
      load(zz, uz, bz) {
        const Ez = (0, kz.c)(bz),
          nz = zz => {
            Ez || (bz._delayInfo = bz._delayInfo || [], -1 === bz._delayInfo.indexOf(zz) && bz._delayInfo.push(zz))
          },
          iz = uz.draco;
        if (iz) {
          for (const zz in iz.attributeIds) nz(zz);
          let lz = this.dracoGeometry.get(iz.bufferView.index);
          return lz || (lz = this.viewBytes(iz.bufferView).then((async () => {
            let nz;
            try {
              nz = await Tz(uz, this.decode)
            } catch (tz) {
              throw new vz.j(`${zz}: ${tz instanceof Error?tz.message:String(tz)}`)
            }
            const iz = qz(uz, nz);
            if (Ez) return iz;
            const lz = uu(uz.position),
              Mz = new((0, Yz.c)().MirroredGeometry)(bz.name, this.tK);
            lz && (Mz._boundingInfo = lz, Mz.useBoundingInfoFromGeometry = !0), iz.indexData && Mz.setIndices(iz.indexData);
            for (const zz of iz.vertexAttributes) Mz.setVerticesBuffer(this.layoutVertexBuffer(zz.data, zz), iz.vertexCount);
            return Mz.link(iz), Mz
          })), this.dracoGeometry.set(iz.bufferView.index, lz)), lz
        }
        const lz = [],
          Mz = Vz(uz);
        if (Ez) return bz.isUnIndexed = !Mz.indexData, bz.hasVertexAlpha = (0, zu.h)(uz), Promise.resolve(Mz);
        const tz = new((0, Yz.c)().MirroredGeometry)(bz.name, this.tK),
          {
            indexData: Hz
          } = Mz;
        Hz ? lz.push(this.viewBytes(uz.indices.bufferView).then((() => {
          tz.setIndices(Hz)
        }))) : bz.isUnIndexed = !0;
        for (const [Oz, {
            kind: pz,
            accessor: dz
          }] of uz.attributes.entries()) nz(pz), lz.push(this.vertexBuffer(dz, Mz.vertexAttributes[Oz]).then((zz => {
          if ("position" === zz.getKind()) {
            const zz = uu(dz);
            zz && (tz._boundingInfo = zz, tz.useBoundingInfoFromGeometry = !0)
          }
          tz.setVerticesBuffer(zz, Mz.vertexCount)
        })));
        return (0, zu.h)(uz) && (bz.hasVertexAlpha = !0), Promise.all(lz).then((() => (tz.link(Mz), tz)))
      }
    }
    var nu, iu = bz(36758),
      lu = bz(36514),
      Mu = bz(37332),
      tu = bz(36700),
      Hu = bz(36743),
      Ou = bz(2623),
      pu = bz(36734);

    function du(zz, uz) {
      zz.metadata = zz.metadata || {};
      const bz = zz._internalMetadata = zz._internalMetadata || {},
        Ez = bz.JA = bz.JA || {};
      (Ez.pointers = Ez.pointers || []).push(uz)
    }

    function Fu(zz, uz) {
      if (uz && Object.keys(uz).length > 0) {
        const bz = zz.metadata = zz.metadata || {};
        (bz.JA = bz.JA || {}).extras = uz
      }
    }

    function Zu(zz, uz) {
      uz.position = zz.translation ? lu.ER.FromArray(zz.translation) : lu.ER.Zero(), uz.rotationQuaternion = zz.rotation ? lu.Quaternion.FromArray(zz.rotation) : lu.Quaternion.Identity(), uz.ti = zz.scale ? lu.ER.FromArray(zz.scale) : lu.ER.One()
    }
    class Ru {
      constructor(zz, uz) {
        if (this.tK = zz, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, uz) {
          const uz = zz.uR(),
            bz = zz.aT.add((() => {
              this.dispose()
            })),
            Ez = uz.onContextRestoredObservable.add((() => {
              for (const zz of [...this.geometries, ...this.meshes, ...this.textures]) zz._rebuild()
            }));
          this.release = () => {
            zz.aT.remove(bz), uz.onContextRestoredObservable.remove(Ez)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const zz of this.meshes) this.tK.vbz(zz);
          for (const zz of this.materials) this.tK.addMaterial(zz);
          for (const zz of this.geometries) this.tK.addGeometry(zz);
          for (const zz of this.transformNodes) this.tK.addTransformNode(zz);
          for (const zz of this.textures) this.tK.addTexture(zz)
        }
      }
      dispose() {
        var zz;
        for (const uz of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const zz of uz.slice()) zz.dispose();
          uz.length = 0
        }
        null === (zz = this.release) || void 0 === zz || zz.call(this), this.release = null
      }
    }
    class Ku {
      constructor(zz, uz, bz, Ez, nz, iz, lz) {
        this.asset = zz, this.tK = uz, this.tree = bz, this.geometryData = nz, this.materials = iz, this.lite = lz, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = Ez ? bz : null
      }
      create(zz) {
        if (this.lite) return zz();
        const uz = this.tK;
        uz._blockEntityCollection = !!this.container;
        try {
          const uz = zz();
          return this.container && (uz._parentContainer = this.container), uz
        } finally {
          uz._blockEntityCollection = !1
        }
      }
      node(zz, uz) {
        return this.create((() => this.lite ? uz ? (0, Mu.i)(this.lite, zz) : (0, Mu.t)(this.lite, zz) : uz ? new((0, Yz.c)().Mesh)(zz, this.tK) : new((0, Yz.c)().TransformNode)(zz, this.tK)))
      }
      async load() {
        var zz;
        this.asset.model.json.nodes && this.createRoot();
        const uz = this.lite ? null : this.tK,
          bz = null !== (zz = null === uz || void 0 === uz ? void 0 : uz.blockMaterialDirtyMechanism) && void 0 !== zz && zz;
        let Ez;
        uz && (uz.blockMaterialDirtyMechanism = !0);
        try {
          Ez = this.loadScene()
        } finally {
          null === uz || void 0 === uz || uz._forceBlockMaterialDirtyMechanism(bz)
        }
        await Ez;
        const {
          root: nz,
          tree: iz
        } = this;
        nz && (nz.Zx(!0), iz.meshes.push(nz), iz.rootNodes.push(nz));
        for (const Mz of this.asset.model.nodes) {
          const zz = this.nodeObjects.get(Mz.index);
          zz && ["TransformNode", "LiteNode"].includes(zz.getClassName()) && iz.transformNodes.push(zz);
          for (const uz of null !== (lz = this.nodePrimitives.get(Mz.index)) && void 0 !== lz ? lz : []) {
            var lz;
            iz.meshes.push(uz);
            const zz = uz.geometry;
            zz && !iz.geometries.includes(zz) && iz.geometries.push(zz)
          }
        }
      }
      createRoot() {
        const zz = this.node("__root__", !0);
        this.root = zz, zz.Zx(!1), this.tK.useRightHandedSystem || Zu(gz, zz)
      }
      loadScene() {
        const zz = [];
        for (const uz of this.asset.model.rootNodes) zz.push(this.loadNode(this.asset.model.nodes[uz], (zz => {
          zz.parent = this.root
        })));
        return zz.push(Promise.resolve()), Promise.all(zz).then((() => {}))
      }
      loadNode(zz, uz) {
        const bz = `/nodes/${zz.index}`,
          Ez = [],
          nz = nz => {
            if (du(nz, bz), Zu(zz, nz), zz.hasCamera && !this.tK.useRightHandedSystem) {
              const {
                ti: zz
              } = nz;
              zz.set(-1, zz.y, zz.z)
            }
            for (const uz of zz.children) Ez.push(this.loadNode(this.asset.model.nodes[uz], (zz => {
              zz.parent = nz
            })));
            (bz => {
              Fu(bz, zz.extras), uz(bz)
            })(nz)
          };
        if (null === zz.mesh) {
          const uz = this.node(cz(zz), !1);
          this.nodeObjects.set(zz.index, uz), nz(uz)
        } else {
          const uz = this.asset.model.meshes[zz.mesh];
          Ez.push(this.loadMesh(`/meshes/${uz.index}`, zz, uz, nz))
        }
        return Promise.all(Ez).then((() => {
          for (const bz of null !== (uz = this.nodePrimitives.get(zz.index)) && void 0 !== uz ? uz : []) {
            var uz;
            bu(bz)
          }
          return this.nodeObjects.get(zz.index)
        }))
      }
      loadMesh(zz, uz, bz, Ez) {
        const nz = [],
          iz = cz(uz);
        if (1 === bz.primitives.length) {
          const Ez = bz.primitives[0];
          nz.push(this.loadPrimitive(`${zz}/primitives/${Ez.index}`, iz, Ez, (zz => {
            this.nodeObjects.set(uz.index, zz), this.nodePrimitives.set(uz.index, [zz])
          })))
        } else {
          const Ez = this.node(iz, !1);
          this.nodeObjects.set(uz.index, Ez);
          const lz = [];
          this.nodePrimitives.set(uz.index, lz);
          for (const uz of bz.primitives) nz.push(this.loadPrimitive(`${zz}/primitives/${uz.index}`, `${iz}_primitive${uz.index}`, uz, (zz => {
            zz.parent = Ez, lz.push(zz)
          })))
        }
        const lz = this.nodeObjects.get(uz.index);
        return Ez(lz), Promise.all(nz).then((() => lz))
      }
      loadPrimitive(zz, uz, bz, Ez) {
        const nz = [],
          iz = this.node(uz, !0);
        if (iz.sideOrientation = this.tK.useRightHandedSystem ? tu.c.CounterClockWiseSideOrientation : tu.c.ClockWiseSideOrientation, nz.push(this.geometryData.load(zz, bz, iz).then((zz => {
            if ((0, kz.c)(iz)) {
              var uz, bz;
              const Ez = zz;
              iz.replaceModel(Ez, Int32Array.of(0, null !== (uz = null === (bz = Ez.indexData) || void 0 === bz ? void 0 : bz.length) && void 0 !== uz ? uz : Ez.vertexCount, 0, Ez.vertexCount))
            } else this.create((() => (zz.applyToMesh(iz), zz)))
          }))), this.materials) {
          const zz = 0 === bz.mode ? tu.c.PointListDrawMode : tu.c.TriangleFillMode,
            uz = null === bz.material ? null : this.asset.model.materials[bz.material];
          nz.push(this.loadMaterial(uz, zz, (zz => {
            iz.material = zz
          })))
        }
        return du(iz, zz), Ez(iz), Promise.all(nz).then((() => iz))
      }
      loadMaterial(zz, uz, bz) {
        var Ez;
        const nz = `${null!==(Ez=null===zz||void 0===zz?void 0:zz.index)&&void 0!==Ez?Ez:"default"}:${uz}`;
        let iz = this.materialData.get(nz);
        return iz || (iz = this.createMaterial(zz, uz), this.materialData.set(nz, iz)), bz(iz.material), iz.promise
      }
      createMaterial(zz, uz) {
        const bz = zz ? zz.name || `material${zz.index}` : "__GLTFLoader._default",
          {
            style: Ez,
            unlit: nz
          } = this.materials;
        let iz;
        const lz = this.create((() => {
          const lz = (0, pu.d)({
            name: bz,
            tK: this.tK,
            sets: {
              ...(0, zu.e)(this.asset, zz, Ez, nz),
              fillMode: uz
            },
            unrendered: !0
          });
          return iz = lz.model, lz.mirror
        }));
        let Mz = Promise.resolve();
        if (zz) {
          const uz = `/materials/${zz.index}`,
            Ez = iz.diffuseTexture;
          if (Ez && !Ez.mirror) Mz = new Promise((zz => setTimeout(zz)));
          else if (Ez) {
            const nz = Ez.mirror;
            nz._parentContainer = this.container, nz.name = `${bz} (Base Color)`, du(nz, `${uz}${zz.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(nz), Mz = (0, Hu.u)(Ez)
          }
          Fu(lz, zz.extras), du(lz, uz)
        }
        return this.tree.materials.push(lz), {
          material: lz,
          promise: Mz
        }
      }
    }

    function wu() {
      iu.g.dracoDecodes = Rz.decodes, iu.g.dracoWorkersStarted = Rz.workersStarted, iu.g.dracoMostWorkers = Rz.mostWorkers
    }
    async function Xu(zz, uz, bz, nz, iz) {
      try {
        return await async function(zz, uz, bz, nz, iz, lz) {
          var Mz;
          let tz;
          const Hz = null === (Mz = (0, Ou.g)()) || void 0 === Mz ? void 0 : Mz.oR,
            Oz = null !== Hz && void 0 !== Hz && Hz.NR && uz === Hz.XT() ? Hz : null,
            pz = iz && !Oz;
          return await Cz(zz, uz, bz, nz, Ez.c, (zz => (tz = new Ru(uz, pz), new Ku(zz, uz, tz, pz, new Eu(uz, nz), lz, Oz).load())), !iz), tz
        }(zz, uz, bz, rz, nz, iz)
      } finally {
        wu()
      }
    }
    async function fu(zz, uz, bz, nz) {
      try {
        return await Cz(zz, uz, bz, rz, Ez.c, (zz => nz(zz, new Eu(uz, rz))))
      } finally {
        wu()
      }
    }
    nu = nz.e, Oz || (Oz = {
      scriptUrl: new URL(nu.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(nu.wasmBinaryUrl, location.href).href
    })
  },
  40719: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz
    });
    var Ez = bz(128),
      nz = bz(1197);

    function iz(zz) {
      return (0, Ez.d)() ? `https://${nz.c.discordDomain}/${zz.href}` : zz.href
    }
    const lz = {
      scriptUrl: iz(new bz.U(bz(40723))),
      wasmBinaryUrl: iz(new bz.U(bz(40729)))
    }
  },
  35766: zz => {
    zz.exports = function(zz, uz, bz, Ez) {
      var nz = self || window;
      try {
        try {
          var iz;
          try {
            iz = new nz.Blob([zz])
          } catch (Hz) {
            (iz = new(nz.BlobBuilder || nz.WebKitBlobBuilder || nz.MozBlobBuilder || nz.MSBlobBuilder)).append(zz), iz = iz.getBlob()
          }
          var lz = nz.URL || nz.webkitURL,
            Mz = lz.createObjectURL(iz),
            tz = new nz[uz](Mz, bz);
          return lz.revokeObjectURL(Mz), tz
        } catch (Hz) {
          return new nz[uz]("data:application/javascript,".concat(encodeURIComponent(zz)), bz)
        }
      } catch (Hz) {
        if (!Ez) throw Error("Inline worker is not supported");
        return new nz[uz](Ez, bz)
      }
    }
  },
  40729: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  40723: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);