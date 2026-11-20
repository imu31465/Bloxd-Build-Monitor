export const id = 203;
export const ids = [203];
export const modules = {
  40602: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      loadGlbAsset: () => Pt,
      loadGlbTree: () => Bt
    });
    var Fz = sz(37333),
      Wz = sz(40607),
      Xz = sz(35778),
      Oz = sz.n(Xz);

    function oz() {
      return Oz()('(()=>{class zz extends Error{}function tz(tz,sz){const Fz=tz._malloc(sz);if(0===Fz)throw new zz(`Draco: the decoder\'s heap refused ${sz} bytes`);return Fz}function sz(zz){return{[zz.DT_FLOAT32]:[Float32Array,5126],[zz.DT_INT8]:[Int8Array,5120],[zz.DT_INT16]:[Int16Array,5122],[zz.DT_INT32]:[Int32Array,5124],[zz.DT_UINT8]:[Uint8Array,5121],[zz.DT_UINT16]:[Uint16Array,5123],[zz.DT_UINT32]:[Uint32Array,5125]}}function Fz(tz,Fz,Wz,Xz,Oz){let oz=null,vz=null,Uz=null;try{oz=new tz.Decoder,vz=new tz.DecoderBuffer,vz.Init(Fz,Fz.byteLength);let Kz=0;const uz=oz.GetEncodedGeometryType(vz);if(uz===tz.TRIANGULAR_MESH){const sz=new tz.Mesh;Uz=sz;const Fz=oz.DecodeBufferToMesh(vz,sz);if(!Fz.ok()||0===sz.ptr)throw new zz(Fz.error_msg());Kz=3*sz.num_faces()}else{if(uz!==tz.POINT_CLOUD)throw new zz(`Draco: Cannot decode invalid geometry type ${uz}`);{const sz=new tz.PointCloud;Uz=sz;const Fz=oz.DecodeBufferToPointCloud(vz,sz);if(!Fz.ok()||!sz.ptr)throw new zz(Fz.error_msg())}}const Nz=Uz.num_points();if(Nz!==Xz.vertices||Kz!==Xz.indices)throw new zz(`Draco: decoded ${Nz} vertices and ${Kz} indices, the accessors declare ${Xz.vertices} and ${Xz.indices}`);const bz=sz(tz),wz=[];for(const{kind:tz,id:sz,components:Fz}of Wz){const Wz=oz.GetAttributeByUniqueId(Uz,sz);if(!Wz||0===Wz.ptr)throw new zz(`Draco: no attribute with id ${sz} (${tz})`);const Xz=Wz.data_type();if(!bz[Xz])throw new zz(`Draco: Cannot decode invalid data type ${Xz}`);if(Wz.num_components()!==Fz)throw new zz(`Draco: ${tz} decodes to ${Wz.num_components()} components, its accessor declares ${Fz}`);wz.push([tz,Wz,Xz])}return Oz({dracoDecoder:oz,geometry:Uz,triangles:uz===tz.TRIANGULAR_MESH,numPoints:Nz,numIndices:Kz,attributes:wz})}finally{Uz&&tz.destroy(Uz),vz&&tz.destroy(vz),oz&&tz.destroy(oz)}}const Wz=self;let Xz=null;self.onmessage=zz=>{let{data:Oz}=zz;if("init"===Oz.id){try{importScripts(Oz.url),Xz=DracoDecoderModule({wasmBinary:Oz.wasmBinary}),Wz.postMessage({id:"initDone"})}catch(uz){Wz.postMessage({id:"initError",message:uz instanceof Error?uz.message:String(uz)})}return}const{seq:oz,data:vz,attributeIds:Uz,expected:Kz}=Oz;Xz?Xz.then((zz=>{try{const Xz=function(zz,Wz,Xz,Oz){const oz=Object.keys(Xz).map((zz=>({kind:zz,id:Xz[zz],components:Oz.components[zz]})));return Fz(zz,Wz,oz,Oz,(Fz=>{let{dracoDecoder:Wz,geometry:Xz,triangles:Oz,numPoints:oz,numIndices:vz,attributes:Uz}=Fz;const Kz=sz(zz);let uz=null;if(Oz){const sz=4*vz,Fz=tz(zz,sz);try{Wz.GetTrianglesUInt32Array(Xz,sz,Fz),uz=new Uint32Array(vz),uz.set(new Uint32Array(zz.HEAPF32.buffer,Fz,vz))}finally{zz._free(Fz)}}const Nz=[];for(const[sz,bz,wz]of Uz){const[Fz]=Kz[wz],Oz=bz.num_components(),vz=oz*Oz,Uz=vz*Fz.BYTES_PER_ELEMENT,uz=tz(zz,Uz);try{Wz.GetAttributeDataArrayForAllPoints(Xz,bz,wz,Uz,uz),Nz.push({kind:sz,data:new Fz(zz.HEAPF32.buffer,uz,vz).slice(),size:Oz,byteOffset:bz.byte_offset(),byteStride:bz.byte_stride(),normalized:bz.normalized()})}finally{zz._free(uz)}}return{indices:uz,attributes:Nz,totalVertices:oz}}))}(zz,vz,Uz,Kz),Oz=Xz.attributes.map((zz=>zz.data.buffer));Xz.indices&&Oz.push(Xz.indices.buffer),Wz.postMessage({id:"decoded",seq:oz,...Xz},Oz)}catch(uz){Wz.postMessage({id:"decodeError",seq:oz,message:uz instanceof Error?uz.message:String(uz)})}}),(zz=>{Wz.postMessage({id:"decodeError",seq:oz,message:zz instanceof Error?zz.message:String(zz)})})):Wz.postMessage({id:"decodeError",seq:oz,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, sz.p + "dracoDecode.worker.2a885e8f.worker.js")
    }
    var vz = sz(106);
    const Uz = 1e3;
    let Kz = null,
      uz = null;
    const Nz = [],
      bz = [];
    let wz = 0;
    const Dz = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      gz = function(zz, tz) {
        const sz = zz ? Math.max(1, Math.min(Math.floor(.5 * zz), 4)) : 1;
        return tz ? Math.min(sz, 2) : sz
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, vz.isMobile)());

    function Hz() {
      if (!Kz) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: zz,
        wasmBinaryUrl: tz
      } = Kz;
      return uz ??= fetch(tz).then((zz => {
        if (!zz.ok) throw new Error(`Draco: fetching ${tz} failed: ${zz.status}`);
        return zz.arrayBuffer()
      })), uz.catch((() => {
        uz = null
      })), Dz.workersStarted++, uz.then((tz => new Promise(((sz, Fz) => {
        const Wz = new oz;
        Wz.onerror = zz => {
          Wz.onmessage = null, Wz.onerror = null, Wz.terminate(), Fz(new Error("Draco: the decode worker failed to start" + (zz.message ? `: ${zz.message}` : " (its script did not load)")))
        }, Wz.onmessage = zz => {
          let {
            data: tz
          } = zz;
          Wz.onmessage = null, Wz.onerror = null, "initDone" === tz.id ? sz(Wz) : (Wz.terminate(), Fz(new Error(`Draco: ${"initError"===tz.id?tz.message:"the worker did not start"}`)))
        };
        const Xz = tz.slice(0),
          Oz = {
            id: "init",
            url: zz,
            wasmBinary: Xz
          };
        Wz.postMessage(Oz, [Xz])
      }))))
    }

    function Bz(zz) {
      const tz = Nz.indexOf(zz); - 1 !== tz && Nz.splice(tz, 1);
      const sz = bz.shift();
      sz && rz(sz)
    }

    function Pz(zz, tz) {
      zz.busy = !0, zz.releaseTimer && (clearTimeout(zz.releaseTimer), zz.releaseTimer = null);
      zz.worker.then((sz => {
        const Fz = wz++;
        sz.onmessage = Wz => {
          let {
            data: Xz
          } = Wz;
          if (("decoded" === Xz.id || "decodeError" === Xz.id) && Xz.seq === Fz) {
            if (sz.onmessage = null, sz.onerror = null, "decoded" === Xz.id) return Dz.decodes++, tz.resolve({
              indices: Xz.indices,
              attributes: Xz.attributes,
              totalVertices: Xz.totalVertices
            }), void(() => {
              const tz = bz.shift();
              tz ? Pz(zz, tz) : (zz.busy = !1, zz.releaseTimer = setTimeout((() => {
                const tz = Nz.indexOf(zz); - 1 !== tz && Nz.splice(tz, 1), zz.worker.then((zz => {
                  zz.terminate()
                }))
              }), Uz))
            })();
            sz.terminate(), tz.reject(new Error(Xz.message)), Bz(zz)
          }
        }, sz.onerror = Fz => {
          sz.onmessage = null, sz.onerror = null, sz.terminate(), tz.reject(new Error(`Draco: the decode worker failed: ${Fz.message}`)), Bz(zz)
        };
        const Wz = {
          id: "decode",
          seq: Fz,
          data: tz.data,
          attributeIds: tz.attributeIds,
          expected: tz.expected
        };
        sz.postMessage(Wz, [tz.data.buffer])
      }), (sz => {
        tz.reject(sz instanceof Error ? sz : new Error(String(sz))), Bz(zz)
      }))
    }

    function rz(zz) {
      const tz = Nz.find((zz => !zz.busy));
      if (tz) Pz(tz, zz);
      else {
        if (Nz.length < gz) {
          const tz = {
            worker: Hz(),
            busy: !0,
            releaseTimer: null
          };
          return Nz.push(tz), Dz.mostWorkers = Math.max(Dz.mostWorkers, Nz.length), void Pz(tz, zz)
        }
        bz.push(zz)
      }
    }

    function Yz(zz, tz, sz) {
      return new Promise(((Fz, Wz) => {
        rz({
          data: new Int8Array(zz.buffer, zz.byteOffset, zz.byteLength).slice(),
          attributeIds: tz,
          expected: sz,
          resolve: Fz,
          reject: Wz
        })
      }))
    }
    var xz = sz(36850),
      mz = sz(36860),
      Jz = sz(8930),
      Iz = sz(8924);
    const Cz = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function ez(zz) {
      const tz = (0, Iz.h)(zz.byteLength);
      if (tz) throw new Jz.m(tz);
      const {
        json: sz,
        bin: Fz
      } = (0, Jz.y)(zz), Wz = (0, Iz.g)(sz, Fz);
      if (Wz) throw new Jz.m(Wz);
      try {
        return function(zz, tz) {
          var sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz, gz;
          const Hz = new Map,
            Bz = sz => {
              let Fz = Hz.get(sz);
              if (!Fz) {
                var Wz;
                const Xz = zz.bufferViews[sz],
                  Oz = null !== (Wz = Xz.byteOffset) && void 0 !== Wz ? Wz : 0;
                Fz = {
                  index: sz,
                  bytes: tz.subarray(Oz, Oz + Xz.byteLength),
                  byteStride: Xz.byteStride
                }, Hz.set(sz, Fz)
              }
              return Fz
            },
            Pz = new Map,
            rz = tz => {
              let sz = Pz.get(tz);
              if (!sz) {
                var Fz;
                const Wz = zz.accessors[tz];
                sz = {
                  index: tz,
                  count: Wz.count,
                  type: Wz.type,
                  numComponents: Jz.n[Wz.type],
                  componentType: Wz.componentType,
                  normalized: null !== (Fz = Wz.normalized) && void 0 !== Fz && Fz,
                  byteOffset: Wz.byteOffset,
                  bufferView: void 0 === Wz.bufferView ? null : Bz(Wz.bufferView),
                  min: Wz.min,
                  max: Wz.max
                }, Pz.set(tz, sz)
              }
              return sz
            },
            Yz = null !== (sz = null === (Fz = zz.extensionsUsed) || void 0 === Fz ? void 0 : Fz.includes("KHR_draco_mesh_compression")) && void 0 !== sz && sz,
            xz = (null !== (Wz = zz.meshes) && void 0 !== Wz ? Wz : []).map(((tz, sz) => {
              const Fz = tz.primitives.map(((tz, sz) => {
                var Fz, Wz, Xz;
                const Oz = Yz ? null === (Fz = tz.extensions) || void 0 === Fz ? void 0 : Fz.KHR_draco_mesh_compression : void 0;
                let oz = null;
                const vz = [];
                if (Oz) {
                  const sz = {
                    vertices: zz.accessors[tz.attributes.POSITION].count,
                    indices: void 0 === tz.indices ? 0 : zz.accessors[tz.indices].count,
                    components: {}
                  };
                  oz = {
                    bufferView: Bz(Oz.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: sz
                  };
                  for (const [Fz, Wz] of Jz.j) {
                    const Xz = Oz.attributes[Fz];
                    if (void 0 === Xz) continue;
                    oz.attributeIds[Wz] = Xz;
                    const vz = tz.attributes[Fz];
                    var Uz;
                    if (void 0 !== vz) oz.normalized[Wz] = null !== (Uz = zz.accessors[vz].normalized) && void 0 !== Uz && Uz, sz.components[Wz] = Jz.n[zz.accessors[vz].type]
                  }
                } else
                  for (const [zz, Kz] of Jz.j) {
                    const sz = tz.attributes[zz];
                    void 0 !== sz && vz.push({
                      semantic: zz,
                      kind: Kz,
                      accessor: rz(sz)
                    })
                  }
                return {
                  index: sz,
                  mode: null !== (Wz = tz.mode) && void 0 !== Wz ? Wz : 4,
                  attributes: vz,
                  indices: Oz || void 0 === tz.indices ? null : rz(tz.indices),
                  position: void 0 === tz.attributes.POSITION ? null : rz(tz.attributes.POSITION),
                  material: null !== (Xz = tz.material) && void 0 !== Xz ? Xz : null,
                  draco: oz
                }
              }));
              return {
                index: sz,
                name: tz.name,
                primitives: Fz,
                extras: tz.extras
              }
            })),
            mz = (null !== (Xz = zz.nodes) && void 0 !== Xz ? Xz : []).map(((zz, tz) => {
              var sz, Fz;
              return {
                index: tz,
                name: zz.name,
                children: null !== (sz = zz.children) && void 0 !== sz ? sz : [],
                mesh: null !== (Fz = zz.mesh) && void 0 !== Fz ? Fz : null,
                translation: zz.translation,
                rotation: zz.rotation,
                scale: zz.scale,
                hasCamera: void 0 !== zz.camera,
                extras: zz.extras
              }
            })),
            Iz = null !== (Oz = null === (oz = zz.extensionsUsed) || void 0 === oz ? void 0 : oz.includes("KHR_materials_unlit")) && void 0 !== Oz && Oz,
            ez = null !== (vz = null === (Uz = zz.extensionsUsed) || void 0 === Uz ? void 0 : Uz.includes("KHR_texture_transform")) && void 0 !== vz && vz,
            Zz = (null !== (Kz = zz.materials) && void 0 !== Kz ? Kz : []).map(((zz, tz) => {
              var sz, Fz, Wz, Xz;
              const Oz = zz.pbrMetallicRoughness,
                oz = null === Oz || void 0 === Oz ? void 0 : Oz.baseColorTexture;
              return {
                index: tz,
                name: zz.name,
                extras: zz.extras,
                unlit: Iz && void 0 !== (null === (sz = zz.extensions) || void 0 === sz ? void 0 : sz.KHR_materials_unlit),
                pbr: Oz ? {
                  baseColorFactor: Oz.baseColorFactor,
                  metallicFactor: Oz.metallicFactor,
                  roughnessFactor: Oz.roughnessFactor
                } : null,
                baseColorTexture: oz ? {
                  texture: oz.index,
                  transform: ez && (null === (Fz = oz.extensions) || void 0 === Fz ? void 0 : Fz.KHR_texture_transform) || null
                } : null,
                emissiveFactor: zz.emissiveFactor,
                alphaMode: null !== (Wz = zz.alphaMode) && void 0 !== Wz ? Wz : "OPAQUE",
                alphaCutoff: zz.alphaCutoff,
                doubleSided: null !== (Xz = zz.doubleSided) && void 0 !== Xz && Xz
              }
            })),
            Gz = (null !== (uz = zz.textures) && void 0 !== uz ? uz : []).map(((tz, sz) => {
              var Fz, Wz;
              const Xz = void 0 === tz.sampler ? Cz : {
                index: tz.sampler,
                ...null === (Fz = zz.samplers) || void 0 === Fz ? void 0 : Fz[tz.sampler]
              };
              return {
                index: sz,
                sampler: {
                  index: Xz.index,
                  magFilter: Xz.magFilter,
                  minFilter: Xz.minFilter,
                  wrapS: Xz.wrapS,
                  wrapT: Xz.wrapT
                },
                image: null !== (Wz = tz.source) && void 0 !== Wz ? Wz : -1
              }
            })),
            Tz = (null !== (Nz = zz.images) && void 0 !== Nz ? Nz : []).map(((zz, tz) => ({
              index: tz,
              name: zz.name,
              mimeType: zz.mimeType,
              bufferView: Bz(zz.bufferView)
            }))),
            cz = null !== (bz = (0, Jz.u)(zz)) && void 0 !== bz ? bz : 0;
          return {
            json: zz,
            rootNodes: null !== (wz = null === (Dz = zz.scenes) || void 0 === Dz || null === (gz = Dz[cz]) || void 0 === gz ? void 0 : gz.nodes) && void 0 !== wz ? wz : [],
            nodes: mz,
            meshes: xz,
            materials: Zz,
            textures: Gz,
            images: Tz
          }
        }(sz, Fz)
      } catch (Xz) {
        throw Xz instanceof Jz.l ? Xz : new Jz.l(`reading the GLB failed: ${Xz instanceof Error?Xz.message:String(Xz)}`)
      }
    }
    async function Zz(zz, tz) {
      var sz, Fz;
      const Wz = zz.draco;
      if (!Wz) throw new Jz.l("not a Draco primitive");
      let Xz;
      try {
        Xz = await tz(Wz.bufferView.bytes, Wz.attributeIds, Wz.expected)
      } catch (Uz) {
        throw new Jz.l(`Draco decoding failed: ${Uz instanceof Error?Uz.message:String(Uz)}`)
      }
      const {
        vertices: Oz,
        indices: oz,
        components: vz
      } = Wz.expected;
      if (Xz.totalVertices !== Oz || (null !== (sz = null === (Fz = Xz.indices) || void 0 === Fz ? void 0 : Fz.length) && void 0 !== sz ? sz : 0) !== oz || Xz.attributes.some((zz => zz.size !== vz[zz.kind] || zz.data.length !== Oz * zz.size))) throw new Jz.l("Draco decoding gave other counts than the accessors declare");
      for (const Kz of Xz.attributes) {
        const zz = Wz.normalized[Kz.kind];
        void 0 !== zz && (Kz.normalized = zz)
      }
      return Xz
    }
    const Gz = new WeakMap;

    function Tz(zz, tz) {
      var sz;
      const Fz = null !== (sz = Gz.get(zz)) && void 0 !== sz ? sz : tz(zz);
      return Gz.set(zz, Fz), Fz
    }

    function cz(zz) {
      const tz = zz.bufferView,
        sz = 5125 === zz.componentType ? Uint32Array : Uint16Array,
        Fz = tz.bytes.buffer,
        Wz = tz.bytes.byteOffset + (zz.byteOffset || 0);
      return Wz % sz.BYTES_PER_ELEMENT !== 0 ? new sz(Fz.slice(Wz, Wz + zz.count * sz.BYTES_PER_ELEMENT), 0) : new sz(Fz, Wz, zz.count)
    }

    function jz(zz, tz) {
      if (zz.min && zz.max) return [new Float64Array(zz.min), new Float64Array(zz.max)];
      const sz = tz.find((zz => {
          let {
            kind: tz
          } = zz;
          return "position" === tz
        })),
        Fz = sz ? (0, mz.k)(sz, zz.count) : new Float32Array(0);
      return (0, mz.t)(Fz.length / 3, ((zz, tz) => Fz[3 * zz + tz]))
    }

    function Az(zz) {
      const tz = zz.attributes.map((zz => {
          var tz, sz;
          let {
            kind: Fz,
            accessor: Wz
          } = zz;
          const {
            bufferView: Xz,
            numComponents: Oz
          } = Wz;
          if (!Xz) {
            return {
              kind: Fz,
              data: Tz(Wz, (() => new Float32Array(Oz * Wz.count))),
              offset: 0,
              stride: 4 * Oz,
              components: Oz,
              glType: 5126,
              isNormalized: !1
            }
          }
          const oz = null !== (tz = Xz.byteStride) && void 0 !== tz ? tz : Oz * Jz.e[Wz.componentType];
          return {
            kind: Fz,
            data: Xz.bytes,
            offset: null !== (sz = Wz.byteOffset) && void 0 !== sz ? sz : 0,
            stride: oz,
            components: Oz,
            glType: Wz.componentType,
            isNormalized: Wz.normalized
          }
        })),
        sz = zz.indices,
        Fz = sz && Tz(sz, cz),
        Wz = zz.position;
      return new mz.g(tz, Fz, Wz.count, ...jz(Wz, tz))
    }
    const yz = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function Mz(zz, tz) {
      const sz = tz.attributes.map((zz => {
        let {
          kind: tz,
          data: sz,
          size: Fz,
          byteOffset: Wz,
          byteStride: Xz,
          normalized: Oz
        } = zz;
        return {
          kind: tz,
          data: sz,
          offset: Wz,
          stride: Xz,
          components: Fz,
          glType: 5120 + yz.indexOf(sz.constructor),
          isNormalized: Oz
        }
      }));
      return new mz.g(sz, tz.indices, tz.totalVertices, ...jz(zz.position, sz))
    }

    function dz(zz) {
      const tz = zz.lastIndexOf("/");
      return tz < 0 ? zz : zz.substring(tz + 1)
    }

    function hz(zz) {
      const tz = zz.lastIndexOf("/");
      return tz < 0 ? "" : zz.substring(0, tz + 1)
    }

    function Qz(zz) {
      return zz.name || `node${zz.index}`
    }
    const kz = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      iz = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      Lz = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function lz(zz) {
      var tz, sz, Fz, Wz;
      const Xz = null !== (tz = zz.minFilter) && void 0 !== tz ? tz : 9987;
      return 9729 === (null !== (sz = zz.magFilter) && void 0 !== sz ? sz : 9729) ? null !== (Fz = iz[Xz]) && void 0 !== Fz ? Fz : 3 : null !== (Wz = Lz[Xz]) && void 0 !== Wz ? Wz : 4
    }
    const nz = {
      33071: 0,
      33648: 2
    };

    function az(zz) {
      var tz;
      return null !== (tz = nz[null !== zz && void 0 !== zz ? zz : 10497]) && void 0 !== tz ? tz : 1
    }

    function qz(zz) {
      return 9728 === zz.minFilter || 9729 === zz.minFilter
    }

    function Sz(zz) {
      var tz, sz, Fz;
      const Wz = Float64Array.from(null !== (tz = zz.scale) && void 0 !== tz ? tz : [1, 1, 1]);
      return zz.hasCamera && (Wz[0] = -1), {
        translation: Float64Array.from(null !== (sz = zz.translation) && void 0 !== sz ? sz : [0, 0, 0]),
        rotation: Float64Array.from(null !== (Fz = zz.rotation) && void 0 !== Fz ? Fz : [0, 0, 0, 1]),
        scale: Wz
      }
    }

    function Vz(zz, tz) {
      let {
        translation: sz,
        rotation: Fz,
        scale: Wz
      } = zz;
      const Xz = new Float32Array(16);
      return (0, xz.e)(Wz, 0, Fz, 0, sz, 0, Xz), tz && (0, xz.k)(Xz, tz, 0, Xz), Xz
    }
    class Rz {
      constructor(zz, tz, sz, Fz) {
        this.model = zz, this.decode = tz, this.fileInfo = sz, this.uniqueRootUrl = Fz, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const Wz = new Set,
          Xz = (tz, sz) => {
            const Fz = zz.nodes[tz];
            if (this.parents.has(Fz)) throw new Jz.l(`/nodes/${tz}: Invalid recursive node hierarchy`);
            this.parents.set(Fz, sz);
            const Oz = null === Fz.mesh ? [] : zz.meshes[Fz.mesh].primitives,
              oz = Oz.map((zz => {
                const tz = Oz.length > 1;
                return {
                  name: tz ? `${Qz(Fz)}_primitive${zz.index}` : Qz(Fz),
                  node: Fz,
                  primitive: zz,
                  part: tz,
                  geometry: null
                }
              }));
            this.uses.set(Fz, oz);
            const vz = null !== Fz.mesh && Wz.has(Fz.mesh);
            Wz.add(Fz.mesh), this.own.set(Fz, vz ? [] : oz);
            for (const zz of Fz.children) Xz(zz, Fz)
          };
        for (const Oz of zz.rootNodes) Xz(Oz, null);
        this.primitives = zz.nodes.flatMap((zz => {
          var tz;
          return null !== (tz = this.own.get(zz)) && void 0 !== tz ? tz : []
        }))
      }
      decodeGeometries() {
        const zz = new Map;
        return Promise.all(this.primitives.map((async tz => {
          const {
            primitive: sz
          } = tz, Fz = sz.draco;
          let Wz = Fz ? zz.get(Fz.bufferView.index) : Promise.resolve(Az(sz));
          Wz || (Wz = Zz(sz, this.decode).then((zz => Mz(sz, zz))), zz.set(Fz.bufferView.index, Wz)), tz.geometry = await Wz
        })))
      }
      parentOf(zz) {
        var tz;
        return null !== (tz = this.parents.get(zz)) && void 0 !== tz ? tz : null
      }
      meshesUnder(zz) {
        const tz = this.model.nodes.filter((zz => this.uses.has(zz)));
        for (const Fz of tz) {
          const tz = this.uses.get(Fz),
            sz = tz.find((tz => tz.name === zz));
          if (sz) return 1 === tz.length ? this.subtree(Fz) : this.own.get(Fz).includes(sz) ? [sz] : []
        }
        const sz = tz.find((tz => 1 !== this.uses.get(tz).length && Qz(tz) === zz));
        return sz ? this.subtree(sz) : null
      }
      subtree(zz) {
        return [...this.own.get(zz), ...zz.children.flatMap((zz => this.subtree(this.model.nodes[zz])))]
      }
      worldMatrix(zz, tz, sz) {
        let Fz = Vz(Sz(tz ? kz : {}), null);
        const Wz = [];
        for (let Oz = zz.part ? zz.node : this.parentOf(zz.node); Oz; Oz = this.parentOf(Oz)) Wz.unshift(Oz);
        for (const Oz of Wz) Fz = Vz(Sz(Oz), Fz);
        const Xz = Sz(zz.part ? {} : zz.node);
        return void 0 !== sz && Xz.scale.fill(sz), Vz(Xz, Fz)
      }
      floats(zz) {
        const {
          vertexAttributes: tz,
          vertexCount: sz
        } = zz.geometry;
        return new Map(tz.map((zz => [zz.kind, (0, mz.k)(zz, sz)])))
      }
      imageUrl(zz) {
        return function(zz, tz, sz) {
          let {
            name: Fz
          } = tz;
          return `data:${zz}${Fz}#image${sz}`
        }(this.uniqueRootUrl, this.fileInfo, zz)
      }
      textureDesc(zz, tz) {
        var sz;
        let {
          texture: Fz,
          transform: Wz
        } = zz;
        const {
          sampler: Xz,
          image: Oz
        } = this.model.textures[Fz], {
          bufferView: oz,
          mimeType: vz,
          name: Uz
        } = this.model.images[Oz], Kz = Wz && {
          ...Wz.offset ? {
            uOffset: Wz.offset[0],
            vOffset: Wz.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...Wz.rotation ? {
            wAng: -Wz.rotation
          } : {},
          ...Wz.scale ? {
            uScale: Wz.scale[0],
            vScale: Wz.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(Oz),
          noMipmap: qz(Xz),
          invertY: !1,
          samplingMode: lz(Xz),
          data: {
            bytes: oz.bytes,
            mimeType: vz,
            label: Uz,
            context: `/textures/${Fz}`
          },
          sets: {
            wrapU: az(Xz.wrapS),
            wrapV: az(Xz.wrapT),
            ...Kz,
            coordinatesIndex: null !== (sz = null === Wz || void 0 === Wz ? void 0 : Wz.texCoord) && void 0 !== sz ? sz : 0,
            hasAlpha: tz
          }
        }
      }
    }
    async function pz(zz, tz, sz, Fz, Wz, Xz) {
      let Oz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const oz = function(zz, tz, sz) {
          return "string" !== typeof tz ? {
            url: "",
            rootUrl: zz,
            name: sz()
          } : tz ? tz.startsWith("data:") ? {
            url: tz,
            rootUrl: zz,
            name: ""
          } : zz ? {
            url: zz + tz,
            rootUrl: zz,
            name: tz
          } : {
            url: tz,
            rootUrl: hz(tz),
            name: dz(tz)
          } : {
            url: zz,
            rootUrl: hz(zz),
            name: dz(zz)
          }
        }(sz, zz, Wz),
        vz = {};
      tz.addPendingData(vz);
      try {
        const sz = ez(await async function(zz, tz) {
            return "string" !== typeof tz ? tz : zz.url.startsWith("data:") ? (0, Jz.o)(zz.url) : await (0, Jz.r)(zz.url)
          }(oz, zz)),
          vz = new Rz(sz, Fz, oz, function(zz, tz) {
            let {
              rootUrl: sz,
              name: Fz
            } = zz;
            return !sz.startsWith("file:") && Fz ? sz : `${sz}${tz()}/`
          }(oz, Wz));
        return await Xz(vz), tz.importedMeshesFiles && (tz.loadingPluginName = "MJ", Oz && tz.importedMeshesFiles.push(oz.url)), vz
      } finally {
        tz.removePendingData(vz)
      }
    }
    var fz = sz(36969),
      Ez = sz(36825),
      zt = sz(37322);

    function tt(zz) {
      if (null === zz || void 0 === zz || !zz.min || !zz.max) return null;
      const [tz, sz, Fz] = zz.min, [Wz, Xz, Oz] = zz.max, {
        BoundingInfo: oz,
        XD: vz
      } = (0, fz.e)();
      return new oz(new vz(tz, sz, Fz), new vz(Wz, Xz, Oz))
    }

    function st(zz) {
      (0, Ez.e)(zz) || (zz.geometry && zz.geometry.useBoundingInfoFromGeometry ? zz._updateBoundingInfo() : zz.refreshBoundingInfo(!0, !0))
    }
    class Ft {
      constructor(zz, tz) {
        this.Kg = zz, this.decode = tz, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(zz) {
        let tz = this.viewData.get(zz.index);
        return tz || (tz = this.bufferData.then((() => zz.bytes)), this.viewData.set(zz.index, tz)), tz
      }
      viewBuffer(zz) {
        let tz = this.viewBuffers.get(zz.index);
        return tz || (tz = this.viewBytes(zz).then((zz => new((0, fz.e)().Lw)(this.Kg.FD(), zz, !1))), this.viewBuffers.set(zz.index, tz)), tz
      }
      vertexBuffer(zz, tz) {
        const {
          kind: sz,
          data: Fz
        } = tz, Wz = `${zz.index}:${sz}`;
        let Xz = this.vertexBuffers.get(Wz);
        if (!Xz) {
          const Oz = zz.bufferView;
          Xz = Oz ? this.viewBuffer(Oz).then((zz => this.layoutVertexBuffer(zz, tz))) : Promise.resolve(Fz).then((zz => new((0, fz.e)().VertexBuffer)(this.Kg.FD(), zz, sz, !1))), this.vertexBuffers.set(Wz, Xz)
        }
        return Xz
      }
      layoutVertexBuffer(zz, tz) {
        let {
          kind: sz,
          offset: Fz,
          stride: Wz,
          components: Xz,
          glType: Oz,
          isNormalized: oz
        } = tz;
        const vz = this.Kg.FD();
        return new((0, fz.e)().VertexBuffer)(vz, zz, sz, !1, void 0, Wz, void 0, Fz, Xz, Oz, oz, !0, void 0, !0)
      }
      load(zz, tz, sz) {
        const Fz = (0, Ez.e)(sz),
          Wz = zz => {
            Fz || (sz._delayInfo = sz._delayInfo || [], -1 === sz._delayInfo.indexOf(zz) && sz._delayInfo.push(zz))
          },
          Xz = tz.draco;
        if (Xz) {
          for (const zz in Xz.attributeIds) Wz(zz);
          let Oz = this.dracoGeometry.get(Xz.bufferView.index);
          return Oz || (Oz = this.viewBytes(Xz.bufferView).then((async () => {
            let Wz;
            try {
              Wz = await Zz(tz, this.decode)
            } catch (vz) {
              throw new Jz.l(`${zz}: ${vz instanceof Error?vz.message:String(vz)}`)
            }
            const Xz = Mz(tz, Wz);
            if (Fz) return Xz;
            const Oz = tt(tz.position),
              oz = new((0, fz.e)().MirroredGeometry)(sz.name, this.Kg);
            Oz && (oz._boundingInfo = Oz, oz.useBoundingInfoFromGeometry = !0), Xz.indexData && oz.setIndices(Xz.indexData);
            for (const zz of Xz.vertexAttributes) oz.setVerticesBuffer(this.layoutVertexBuffer(zz.data, zz), Xz.vertexCount);
            return oz.link(Xz), oz
          })), this.dracoGeometry.set(Xz.bufferView.index, Oz)), Oz
        }
        const Oz = [],
          oz = Az(tz);
        if (Fz) return sz.isUnIndexed = !oz.indexData, sz.hasVertexAlpha = (0, zt.c)(tz), Promise.resolve(oz);
        const vz = new((0, fz.e)().MirroredGeometry)(sz.name, this.Kg),
          {
            indexData: Uz
          } = oz;
        Uz ? Oz.push(this.viewBytes(tz.indices.bufferView).then((() => {
          vz.setIndices(Uz)
        }))) : sz.isUnIndexed = !0;
        for (const [Kz, {
            kind: uz,
            accessor: Nz
          }] of tz.attributes.entries()) Wz(uz), Oz.push(this.vertexBuffer(Nz, oz.vertexAttributes[Kz]).then((zz => {
          if ("position" === zz.getKind()) {
            const zz = tt(Nz);
            zz && (vz._boundingInfo = zz, vz.useBoundingInfoFromGeometry = !0)
          }
          vz.setVerticesBuffer(zz, oz.vertexCount)
        })));
        return (0, zt.c)(tz) && (sz.hasVertexAlpha = !0), Promise.all(Oz).then((() => (vz.link(oz), vz)))
      }
    }
    var Wt, Xt = sz(36699),
      Ot = sz(36473),
      ot = sz(37329),
      vt = sz(36643),
      Ut = sz(36682),
      Kt = sz(2555),
      ut = sz(36669);

    function Nt(zz, tz) {
      zz.metadata = zz.metadata || {};
      const sz = zz._internalMetadata = zz._internalMetadata || {},
        Fz = sz.MJ = sz.MJ || {};
      (Fz.pointers = Fz.pointers || []).push(tz)
    }

    function bt(zz, tz) {
      if (tz && Object.keys(tz).length > 0) {
        const sz = zz.metadata = zz.metadata || {};
        (sz.MJ = sz.MJ || {}).extras = tz
      }
    }

    function wt(zz, tz) {
      tz.position = zz.translation ? Ot.XD.FromArray(zz.translation) : Ot.XD.Zero(), tz.rotationQuaternion = zz.rotation ? Ot.Quaternion.FromArray(zz.rotation) : Ot.Quaternion.Identity(), tz.nX = zz.scale ? Ot.XD.FromArray(zz.scale) : Ot.XD.One()
    }
    class Dt {
      constructor(zz, tz) {
        if (this.Kg = zz, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, tz) {
          const tz = zz.FD(),
            sz = zz.qJ.add((() => {
              this.dispose()
            })),
            Fz = tz.onContextRestoredObservable.add((() => {
              for (const zz of [...this.geometries, ...this.meshes, ...this.textures]) zz._rebuild()
            }));
          this.release = () => {
            zz.qJ.remove(sz), tz.onContextRestoredObservable.remove(Fz)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const zz of this.meshes) this.Kg.ksz(zz);
          for (const zz of this.materials) this.Kg.addMaterial(zz);
          for (const zz of this.geometries) this.Kg.addGeometry(zz);
          for (const zz of this.transformNodes) this.Kg.addTransformNode(zz);
          for (const zz of this.textures) this.Kg.addTexture(zz)
        }
      }
      dispose() {
        var zz;
        for (const tz of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const zz of tz.slice()) zz.dispose();
          tz.length = 0
        }
        null === (zz = this.release) || void 0 === zz || zz.call(this), this.release = null
      }
    }
    class gt {
      constructor(zz, tz, sz, Fz, Wz, Xz, Oz) {
        this.asset = zz, this.Kg = tz, this.tree = sz, this.geometryData = Wz, this.materials = Xz, this.lite = Oz, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = Fz ? sz : null
      }
      create(zz) {
        if (this.lite) return zz();
        const tz = this.Kg;
        tz._blockEntityCollection = !!this.container;
        try {
          const tz = zz();
          return this.container && (tz._parentContainer = this.container), tz
        } finally {
          tz._blockEntityCollection = !1
        }
      }
      node(zz, tz) {
        return this.create((() => this.lite ? tz ? (0, ot.i)(this.lite, zz) : (0, ot.t)(this.lite, zz) : tz ? new((0, fz.e)().Mesh)(zz, this.Kg) : new((0, fz.e)().TransformNode)(zz, this.Kg)))
      }
      async load() {
        var zz;
        this.asset.model.json.nodes && this.createRoot();
        const tz = this.lite ? null : this.Kg,
          sz = null !== (zz = null === tz || void 0 === tz ? void 0 : tz.blockMaterialDirtyMechanism) && void 0 !== zz && zz;
        let Fz;
        tz && (tz.blockMaterialDirtyMechanism = !0);
        try {
          Fz = this.loadScene()
        } finally {
          null === tz || void 0 === tz || tz._forceBlockMaterialDirtyMechanism(sz)
        }
        await Fz;
        const {
          root: Wz,
          tree: Xz
        } = this;
        Wz && (Wz.Xx(!0), Xz.meshes.push(Wz), Xz.rootNodes.push(Wz));
        for (const oz of this.asset.model.nodes) {
          const zz = this.nodeObjects.get(oz.index);
          zz && ["TransformNode", "LiteNode"].includes(zz.getClassName()) && Xz.transformNodes.push(zz);
          for (const tz of null !== (Oz = this.nodePrimitives.get(oz.index)) && void 0 !== Oz ? Oz : []) {
            var Oz;
            Xz.meshes.push(tz);
            const zz = tz.geometry;
            zz && !Xz.geometries.includes(zz) && Xz.geometries.push(zz)
          }
        }
      }
      createRoot() {
        const zz = this.node("__root__", !0);
        this.root = zz, zz.Xx(!1), this.Kg.useRightHandedSystem || wt(kz, zz)
      }
      loadScene() {
        const zz = [];
        for (const tz of this.asset.model.rootNodes) zz.push(this.loadNode(this.asset.model.nodes[tz], (zz => {
          zz.parent = this.root
        })));
        return zz.push(Promise.resolve()), Promise.all(zz).then((() => {}))
      }
      loadNode(zz, tz) {
        const sz = `/nodes/${zz.index}`,
          Fz = [],
          Wz = Wz => {
            if (Nt(Wz, sz), wt(zz, Wz), zz.hasCamera && !this.Kg.useRightHandedSystem) {
              const {
                nX: zz
              } = Wz;
              zz.set(-1, zz.y, zz.z)
            }
            for (const tz of zz.children) Fz.push(this.loadNode(this.asset.model.nodes[tz], (zz => {
              zz.parent = Wz
            })));
            (sz => {
              bt(sz, zz.extras), tz(sz)
            })(Wz)
          };
        if (null === zz.mesh) {
          const tz = this.node(Qz(zz), !1);
          this.nodeObjects.set(zz.index, tz), Wz(tz)
        } else {
          const tz = this.asset.model.meshes[zz.mesh];
          Fz.push(this.loadMesh(`/meshes/${tz.index}`, zz, tz, Wz))
        }
        return Promise.all(Fz).then((() => {
          for (const sz of null !== (tz = this.nodePrimitives.get(zz.index)) && void 0 !== tz ? tz : []) {
            var tz;
            st(sz)
          }
          return this.nodeObjects.get(zz.index)
        }))
      }
      loadMesh(zz, tz, sz, Fz) {
        const Wz = [],
          Xz = Qz(tz);
        if (1 === sz.primitives.length) {
          const Fz = sz.primitives[0];
          Wz.push(this.loadPrimitive(`${zz}/primitives/${Fz.index}`, Xz, Fz, (zz => {
            this.nodeObjects.set(tz.index, zz), this.nodePrimitives.set(tz.index, [zz])
          })))
        } else {
          const Fz = this.node(Xz, !1);
          this.nodeObjects.set(tz.index, Fz);
          const Oz = [];
          this.nodePrimitives.set(tz.index, Oz);
          for (const tz of sz.primitives) Wz.push(this.loadPrimitive(`${zz}/primitives/${tz.index}`, `${Xz}_primitive${tz.index}`, tz, (zz => {
            zz.parent = Fz, Oz.push(zz)
          })))
        }
        const Oz = this.nodeObjects.get(tz.index);
        return Fz(Oz), Promise.all(Wz).then((() => Oz))
      }
      loadPrimitive(zz, tz, sz, Fz) {
        const Wz = [],
          Xz = this.node(tz, !0);
        if (Xz.sideOrientation = this.Kg.useRightHandedSystem ? vt.c.CounterClockWiseSideOrientation : vt.c.ClockWiseSideOrientation, Wz.push(this.geometryData.load(zz, sz, Xz).then((zz => {
            if ((0, Ez.e)(Xz)) {
              var tz, sz;
              const Fz = zz;
              Xz.replaceModel(Fz, Int32Array.of(0, null !== (tz = null === (sz = Fz.indexData) || void 0 === sz ? void 0 : sz.length) && void 0 !== tz ? tz : Fz.vertexCount, 0, Fz.vertexCount))
            } else this.create((() => (zz.applyToMesh(Xz), zz)))
          }))), this.materials) {
          const zz = 0 === sz.mode ? vt.c.PointListDrawMode : vt.c.TriangleFillMode,
            tz = null === sz.material ? null : this.asset.model.materials[sz.material];
          Wz.push(this.loadMaterial(tz, zz, (zz => {
            Xz.material = zz
          })))
        }
        return Nt(Xz, zz), Fz(Xz), Promise.all(Wz).then((() => Xz))
      }
      loadMaterial(zz, tz, sz) {
        var Fz;
        const Wz = `${null!==(Fz=null===zz||void 0===zz?void 0:zz.index)&&void 0!==Fz?Fz:"default"}:${tz}`;
        let Xz = this.materialData.get(Wz);
        return Xz || (Xz = this.createMaterial(zz, tz), this.materialData.set(Wz, Xz)), sz(Xz.material), Xz.promise
      }
      createMaterial(zz, tz) {
        const sz = zz ? zz.name || `material${zz.index}` : "__GLTFLoader._default",
          {
            style: Fz,
            unlit: Wz
          } = this.materials;
        let Xz;
        const Oz = this.create((() => {
          const Oz = (0, ut.d)({
            name: sz,
            Kg: this.Kg,
            sets: {
              ...(0, zt.b)(this.asset, zz, Fz, Wz),
              fillMode: tz
            },
            unrendered: !0
          });
          return Xz = Oz.model, Oz.mirror
        }));
        let oz = Promise.resolve();
        if (zz) {
          const tz = `/materials/${zz.index}`,
            Fz = Xz.diffuseTexture;
          if (Fz && !Fz.mirror) oz = new Promise((zz => setTimeout(zz)));
          else if (Fz) {
            const Wz = Fz.mirror;
            Wz._parentContainer = this.container, Wz.name = `${sz} (Base Color)`, Nt(Wz, `${tz}${zz.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(Wz), oz = (0, Ut.s)(Fz)
          }
          bt(Oz, zz.extras), Nt(Oz, tz)
        }
        return this.tree.materials.push(Oz), {
          material: Oz,
          promise: oz
        }
      }
    }

    function Ht() {
      Xt.f.dracoDecodes = Dz.decodes, Xt.f.dracoWorkersStarted = Dz.workersStarted, Xt.f.dracoMostWorkers = Dz.mostWorkers
    }
    async function Bt(zz, tz, sz, Wz, Xz) {
      try {
        return await async function(zz, tz, sz, Wz, Xz, Oz) {
          var oz;
          let vz;
          const Uz = null === (oz = (0, Kt.e)()) || void 0 === oz ? void 0 : oz.mD,
            Kz = null !== Uz && void 0 !== Uz && Uz.JD && tz === Uz.aJ() ? Uz : null,
            uz = Xz && !Kz;
          return await pz(zz, tz, sz, Wz, Fz.d, (zz => (vz = new Dt(tz, uz), new gt(zz, tz, vz, uz, new Ft(tz, Wz), Oz, Kz).load())), !Xz), vz
        }(zz, tz, sz, Yz, Wz, Xz)
      } finally {
        Ht()
      }
    }
    async function Pt(zz, tz, sz, Wz) {
      try {
        return await pz(zz, tz, sz, Yz, Fz.d, (zz => Wz(zz, new Ft(tz, Yz))))
      } finally {
        Ht()
      }
    }
    Wt = Wz.e, Kz || (Kz = {
      scriptUrl: new URL(Wt.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(Wt.wasmBinaryUrl, location.href).href
    })
  },
  40607: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Oz
    });
    var Fz = sz(133),
      Wz = sz(1198);

    function Xz(zz) {
      return (0, Fz.e)() ? `https://${Wz.c.discordDomain}/${zz.href}` : zz.href
    }
    const Oz = {
      scriptUrl: Xz(new sz.U(sz(40613))),
      wasmBinaryUrl: Xz(new sz.U(sz(40620)))
    }
  },
  35778: zz => {
    zz.exports = function(zz, tz, sz, Fz) {
      var Wz = self || window;
      try {
        try {
          var Xz;
          try {
            Xz = new Wz.Blob([zz])
          } catch (Uz) {
            (Xz = new(Wz.BlobBuilder || Wz.WebKitBlobBuilder || Wz.MozBlobBuilder || Wz.MSBlobBuilder)).append(zz), Xz = Xz.getBlob()
          }
          var Oz = Wz.URL || Wz.webkitURL,
            oz = Oz.createObjectURL(Xz),
            vz = new Wz[tz](oz, sz);
          return Oz.revokeObjectURL(oz), vz
        } catch (Uz) {
          return new Wz[tz]("data:application/javascript,".concat(encodeURIComponent(zz)), sz)
        }
      } catch (Uz) {
        if (!Fz) throw Error("Inline worker is not supported");
        return new Wz[tz](Fz, sz)
      }
    }
  },
  40613: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  40620: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);