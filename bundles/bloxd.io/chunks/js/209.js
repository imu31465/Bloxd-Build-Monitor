export const id = 209;
export const ids = [209];
export const modules = {
  41591: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      loadGlbAsset: () => Lj,
      loadGlbTree: () => Gj
    });
    var QB = zB(37987),
      nB = zB(41598),
      dB = zB(36327),
      IB = zB.n(dB);

    function NB() {
      return IB()('(()=>{class BB extends Error{}function jB(jB,zB){const QB=jB._malloc(zB);if(0===QB)throw new BB(`Draco: the decoder\'s heap refused ${zB} bytes`);return QB}function zB(BB){return{[BB.DT_FLOAT32]:[Float32Array,5126],[BB.DT_INT8]:[Int8Array,5120],[BB.DT_INT16]:[Int16Array,5122],[BB.DT_INT32]:[Int32Array,5124],[BB.DT_UINT8]:[Uint8Array,5121],[BB.DT_UINT16]:[Uint16Array,5123],[BB.DT_UINT32]:[Uint32Array,5125]}}function QB(jB,QB,nB,dB,IB){let NB=null,uB=null,UB=null;try{NB=new jB.Decoder,uB=new jB.DecoderBuffer,uB.Init(QB,QB.byteLength);let aB=0;const pB=NB.GetEncodedGeometryType(uB);if(pB===jB.TRIANGULAR_MESH){const zB=new jB.Mesh;UB=zB;const QB=NB.DecodeBufferToMesh(uB,zB);if(!QB.ok()||0===zB.ptr)throw new BB(QB.error_msg());aB=3*zB.num_faces()}else{if(pB!==jB.POINT_CLOUD)throw new BB(`Draco: Cannot decode invalid geometry type ${pB}`);{const zB=new jB.PointCloud;UB=zB;const QB=NB.DecodeBufferToPointCloud(uB,zB);if(!QB.ok()||!zB.ptr)throw new BB(QB.error_msg())}}const rB=UB.num_points();if(rB!==dB.vertices||aB!==dB.indices)throw new BB(`Draco: decoded ${rB} vertices and ${aB} indices, the accessors declare ${dB.vertices} and ${dB.indices}`);const sB=zB(jB),JB=[];for(const{kind:jB,id:zB,components:QB}of nB){const nB=NB.GetAttributeByUniqueId(UB,zB);if(!nB||0===nB.ptr)throw new BB(`Draco: no attribute with id ${zB} (${jB})`);const dB=nB.data_type();if(!sB[dB])throw new BB(`Draco: Cannot decode invalid data type ${dB}`);if(nB.num_components()!==QB)throw new BB(`Draco: ${jB} decodes to ${nB.num_components()} components, its accessor declares ${QB}`);JB.push([jB,nB,dB])}return IB({dracoDecoder:NB,geometry:UB,triangles:pB===jB.TRIANGULAR_MESH,numPoints:rB,numIndices:aB,attributes:JB})}finally{UB&&jB.destroy(UB),uB&&jB.destroy(uB),NB&&jB.destroy(NB)}}const nB=self;let dB=null;self.onmessage=BB=>{let{data:IB}=BB;if("init"===IB.id){try{importScripts(IB.url),dB=DracoDecoderModule({wasmBinary:IB.wasmBinary}),nB.postMessage({id:"initDone"})}catch(pB){nB.postMessage({id:"initError",message:pB instanceof Error?pB.message:String(pB)})}return}const{seq:NB,data:uB,attributeIds:UB,expected:aB}=IB;dB?dB.then((BB=>{try{const dB=function(BB,nB,dB,IB){const NB=Object.keys(dB).map((BB=>({kind:BB,id:dB[BB],components:IB.components[BB]})));return QB(BB,nB,NB,IB,(QB=>{let{dracoDecoder:nB,geometry:dB,triangles:IB,numPoints:NB,numIndices:uB,attributes:UB}=QB;const aB=zB(BB);let pB=null;if(IB){const zB=4*uB,QB=jB(BB,zB);try{nB.GetTrianglesUInt32Array(dB,zB,QB),pB=new Uint32Array(uB),pB.set(new Uint32Array(BB.HEAPF32.buffer,QB,uB))}finally{BB._free(QB)}}const rB=[];for(const[zB,sB,JB]of UB){const[QB]=aB[JB],IB=sB.num_components(),uB=NB*IB,UB=uB*QB.BYTES_PER_ELEMENT,pB=jB(BB,UB);try{nB.GetAttributeDataArrayForAllPoints(dB,sB,JB,UB,pB),rB.push({kind:zB,data:new QB(BB.HEAPF32.buffer,pB,uB).slice(),size:IB,byteOffset:sB.byte_offset(),byteStride:sB.byte_stride(),normalized:sB.normalized()})}finally{BB._free(pB)}}return{indices:pB,attributes:rB,totalVertices:NB}}))}(BB,uB,UB,aB),IB=dB.attributes.map((BB=>BB.data.buffer));dB.indices&&IB.push(dB.indices.buffer),nB.postMessage({id:"decoded",seq:NB,...dB},IB)}catch(pB){nB.postMessage({id:"decodeError",seq:NB,message:pB instanceof Error?pB.message:String(pB)})}}),(BB=>{nB.postMessage({id:"decodeError",seq:NB,message:BB instanceof Error?BB.message:String(BB)})})):nB.postMessage({id:"decodeError",seq:NB,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, zB.p + "dracoDecode.worker.8c9b0d48.worker.js")
    }
    var uB = zB(106);
    const UB = 1e3;
    let aB = null,
      pB = null;
    const rB = [],
      sB = [];
    let JB = 0;
    const mB = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      yB = function(BB, jB) {
        const zB = BB ? Math.max(1, Math.min(Math.floor(.5 * BB), 4)) : 1;
        return jB ? Math.min(zB, 2) : zB
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, uB.isMobile)());

    function kB() {
      if (!aB) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: BB,
        wasmBinaryUrl: jB
      } = aB;
      return pB ??= fetch(jB).then((BB => {
        if (!BB.ok) throw new Error(`Draco: fetching ${jB} failed: ${BB.status}`);
        return BB.arrayBuffer()
      })), pB.catch((() => {
        pB = null
      })), mB.workersStarted++, pB.then((jB => new Promise(((zB, QB) => {
        const nB = new NB;
        nB.onerror = BB => {
          nB.onmessage = null, nB.onerror = null, nB.terminate(), QB(new Error("Draco: the decode worker failed to start" + (BB.message ? `: ${BB.message}` : " (its script did not load)")))
        }, nB.onmessage = BB => {
          let {
            data: jB
          } = BB;
          nB.onmessage = null, nB.onerror = null, "initDone" === jB.id ? zB(nB) : (nB.terminate(), QB(new Error(`Draco: ${"initError"===jB.id?jB.message:"the worker did not start"}`)))
        };
        const dB = jB.slice(0),
          IB = {
            id: "init",
            url: BB,
            wasmBinary: dB
          };
        nB.postMessage(IB, [dB])
      }))))
    }

    function GB(BB) {
      const jB = rB.indexOf(BB); - 1 !== jB && rB.splice(jB, 1);
      const zB = sB.shift();
      zB && gB(zB)
    }

    function LB(BB, jB) {
      BB.busy = !0, BB.releaseTimer && (clearTimeout(BB.releaseTimer), BB.releaseTimer = null);
      BB.worker.then((zB => {
        const QB = JB++;
        zB.onmessage = nB => {
          let {
            data: dB
          } = nB;
          if (("decoded" === dB.id || "decodeError" === dB.id) && dB.seq === QB) {
            if (zB.onmessage = null, zB.onerror = null, "decoded" === dB.id) return mB.decodes++, jB.resolve({
              indices: dB.indices,
              attributes: dB.attributes,
              totalVertices: dB.totalVertices
            }), void(() => {
              const jB = sB.shift();
              jB ? LB(BB, jB) : (BB.busy = !1, BB.releaseTimer = setTimeout((() => {
                const jB = rB.indexOf(BB); - 1 !== jB && rB.splice(jB, 1), BB.worker.then((BB => {
                  BB.terminate()
                }))
              }), UB))
            })();
            zB.terminate(), jB.reject(new Error(dB.message)), GB(BB)
          }
        }, zB.onerror = QB => {
          zB.onmessage = null, zB.onerror = null, zB.terminate(), jB.reject(new Error(`Draco: the decode worker failed: ${QB.message}`)), GB(BB)
        };
        const nB = {
          id: "decode",
          seq: QB,
          data: jB.data,
          attributeIds: jB.attributeIds,
          expected: jB.expected
        };
        zB.postMessage(nB, [jB.data.buffer])
      }), (zB => {
        jB.reject(zB instanceof Error ? zB : new Error(String(zB))), GB(BB)
      }))
    }

    function gB(BB) {
      const jB = rB.find((BB => !BB.busy));
      if (jB) LB(jB, BB);
      else {
        if (rB.length < yB) {
          const jB = {
            worker: kB(),
            busy: !0,
            releaseTimer: null
          };
          return rB.push(jB), mB.mostWorkers = Math.max(mB.mostWorkers, rB.length), void LB(jB, BB)
        }
        sB.push(BB)
      }
    }

    function tB(BB, jB, zB) {
      return new Promise(((QB, nB) => {
        gB({
          data: new Int8Array(BB.buffer, BB.byteOffset, BB.byteLength).slice(),
          attributeIds: jB,
          expected: zB,
          resolve: QB,
          reject: nB
        })
      }))
    }
    var SB = zB(37568),
      MB = zB(37578),
      EB = zB(34325),
      iB = zB(34319);
    const qB = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function fB(BB) {
      const jB = (0, iB.j)(BB.byteLength);
      if (jB) throw new EB.n(jB);
      const {
        json: zB,
        bin: QB
      } = (0, EB.z)(BB), nB = (0, iB.f)(zB, QB);
      if (nB) throw new EB.n(nB);
      try {
        return function(BB, jB) {
          var zB, QB, nB, dB, IB, NB, uB, UB, aB, pB, rB, sB, JB, mB, yB;
          const kB = new Map,
            GB = zB => {
              let QB = kB.get(zB);
              if (!QB) {
                var nB;
                const dB = BB.bufferViews[zB],
                  IB = null !== (nB = dB.byteOffset) && void 0 !== nB ? nB : 0;
                QB = {
                  index: zB,
                  bytes: jB.subarray(IB, IB + dB.byteLength),
                  byteStride: dB.byteStride
                }, kB.set(zB, QB)
              }
              return QB
            },
            LB = new Map,
            gB = jB => {
              let zB = LB.get(jB);
              if (!zB) {
                var QB;
                const nB = BB.accessors[jB];
                zB = {
                  index: jB,
                  count: nB.count,
                  type: nB.type,
                  numComponents: EB.p[nB.type],
                  componentType: nB.componentType,
                  normalized: null !== (QB = nB.normalized) && void 0 !== QB && QB,
                  byteOffset: nB.byteOffset,
                  bufferView: void 0 === nB.bufferView ? null : GB(nB.bufferView),
                  min: nB.min,
                  max: nB.max
                }, LB.set(jB, zB)
              }
              return zB
            },
            tB = null !== (zB = null === (QB = BB.extensionsUsed) || void 0 === QB ? void 0 : QB.includes("KHR_draco_mesh_compression")) && void 0 !== zB && zB,
            SB = (null !== (nB = BB.meshes) && void 0 !== nB ? nB : []).map(((jB, zB) => {
              const QB = jB.primitives.map(((jB, zB) => {
                var QB, nB, dB;
                const IB = tB ? null === (QB = jB.extensions) || void 0 === QB ? void 0 : QB.KHR_draco_mesh_compression : void 0;
                let NB = null;
                const uB = [];
                if (IB) {
                  const zB = {
                    vertices: BB.accessors[jB.attributes.POSITION].count,
                    indices: void 0 === jB.indices ? 0 : BB.accessors[jB.indices].count,
                    components: {}
                  };
                  NB = {
                    bufferView: GB(IB.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: zB
                  };
                  for (const [QB, nB] of EB.j) {
                    const dB = IB.attributes[QB];
                    if (void 0 === dB) continue;
                    NB.attributeIds[nB] = dB;
                    const uB = jB.attributes[QB];
                    var UB;
                    if (void 0 !== uB) NB.normalized[nB] = null !== (UB = BB.accessors[uB].normalized) && void 0 !== UB && UB, zB.components[nB] = EB.p[BB.accessors[uB].type]
                  }
                } else
                  for (const [BB, aB] of EB.j) {
                    const zB = jB.attributes[BB];
                    void 0 !== zB && uB.push({
                      semantic: BB,
                      kind: aB,
                      accessor: gB(zB)
                    })
                  }
                return {
                  index: zB,
                  mode: null !== (nB = jB.mode) && void 0 !== nB ? nB : 4,
                  attributes: uB,
                  indices: IB || void 0 === jB.indices ? null : gB(jB.indices),
                  position: void 0 === jB.attributes.POSITION ? null : gB(jB.attributes.POSITION),
                  material: null !== (dB = jB.material) && void 0 !== dB ? dB : null,
                  draco: NB
                }
              }));
              return {
                index: zB,
                name: jB.name,
                primitives: QB,
                extras: jB.extras
              }
            })),
            MB = (null !== (dB = BB.nodes) && void 0 !== dB ? dB : []).map(((BB, jB) => {
              var zB, QB;
              return {
                index: jB,
                name: BB.name,
                children: null !== (zB = BB.children) && void 0 !== zB ? zB : [],
                mesh: null !== (QB = BB.mesh) && void 0 !== QB ? QB : null,
                translation: BB.translation,
                rotation: BB.rotation,
                scale: BB.scale,
                hasCamera: void 0 !== BB.camera,
                extras: BB.extras
              }
            })),
            iB = null !== (IB = null === (NB = BB.extensionsUsed) || void 0 === NB ? void 0 : NB.includes("KHR_materials_unlit")) && void 0 !== IB && IB,
            fB = null !== (uB = null === (UB = BB.extensionsUsed) || void 0 === UB ? void 0 : UB.includes("KHR_texture_transform")) && void 0 !== uB && uB,
            oB = (null !== (aB = BB.materials) && void 0 !== aB ? aB : []).map(((BB, jB) => {
              var zB, QB, nB, dB;
              const IB = BB.pbrMetallicRoughness,
                NB = null === IB || void 0 === IB ? void 0 : IB.baseColorTexture;
              return {
                index: jB,
                name: BB.name,
                extras: BB.extras,
                unlit: iB && void 0 !== (null === (zB = BB.extensions) || void 0 === zB ? void 0 : zB.KHR_materials_unlit),
                pbr: IB ? {
                  baseColorFactor: IB.baseColorFactor,
                  metallicFactor: IB.metallicFactor,
                  roughnessFactor: IB.roughnessFactor
                } : null,
                baseColorTexture: NB ? {
                  texture: NB.index,
                  transform: fB && (null === (QB = NB.extensions) || void 0 === QB ? void 0 : QB.KHR_texture_transform) || null
                } : null,
                emissiveFactor: BB.emissiveFactor,
                alphaMode: null !== (nB = BB.alphaMode) && void 0 !== nB ? nB : "OPAQUE",
                alphaCutoff: BB.alphaCutoff,
                doubleSided: null !== (dB = BB.doubleSided) && void 0 !== dB && dB
              }
            })),
            HB = (null !== (pB = BB.textures) && void 0 !== pB ? pB : []).map(((jB, zB) => {
              var QB, nB;
              const dB = void 0 === jB.sampler ? qB : {
                index: jB.sampler,
                ...null === (QB = BB.samplers) || void 0 === QB ? void 0 : QB[jB.sampler]
              };
              return {
                index: zB,
                sampler: {
                  index: dB.index,
                  magFilter: dB.magFilter,
                  minFilter: dB.minFilter,
                  wrapS: dB.wrapS,
                  wrapT: dB.wrapT
                },
                image: null !== (nB = jB.source) && void 0 !== nB ? nB : -1
              }
            })),
            DB = (null !== (rB = BB.images) && void 0 !== rB ? rB : []).map(((BB, jB) => ({
              index: jB,
              name: BB.name,
              mimeType: BB.mimeType,
              bufferView: GB(BB.bufferView)
            }))),
            FB = null !== (sB = (0, EB.y)(BB)) && void 0 !== sB ? sB : 0;
          return {
            json: BB,
            rootNodes: null !== (JB = null === (mB = BB.scenes) || void 0 === mB || null === (yB = mB[FB]) || void 0 === yB ? void 0 : yB.nodes) && void 0 !== JB ? JB : [],
            nodes: MB,
            meshes: SB,
            materials: oB,
            textures: HB,
            images: DB
          }
        }(zB, QB)
      } catch (dB) {
        throw dB instanceof EB.l ? dB : new EB.l(`reading the GLB failed: ${dB instanceof Error?dB.message:String(dB)}`)
      }
    }
    async function oB(BB, jB) {
      var zB, QB;
      const nB = BB.draco;
      if (!nB) throw new EB.l("not a Draco primitive");
      let dB;
      try {
        dB = await jB(nB.bufferView.bytes, nB.attributeIds, nB.expected)
      } catch (UB) {
        throw new EB.l(`Draco decoding failed: ${UB instanceof Error?UB.message:String(UB)}`)
      }
      const {
        vertices: IB,
        indices: NB,
        components: uB
      } = nB.expected;
      if (dB.totalVertices !== IB || (null !== (zB = null === (QB = dB.indices) || void 0 === QB ? void 0 : QB.length) && void 0 !== zB ? zB : 0) !== NB || dB.attributes.some((BB => BB.size !== uB[BB.kind] || BB.data.length !== IB * BB.size))) throw new EB.l("Draco decoding gave other counts than the accessors declare");
      for (const aB of dB.attributes) {
        const BB = nB.normalized[aB.kind];
        void 0 !== BB && (aB.normalized = BB)
      }
      return dB
    }
    const HB = new WeakMap;

    function DB(BB, jB) {
      var zB;
      const QB = null !== (zB = HB.get(BB)) && void 0 !== zB ? zB : jB(BB);
      return HB.set(BB, QB), QB
    }

    function FB(BB) {
      const jB = BB.bufferView,
        zB = 5125 === BB.componentType ? Uint32Array : Uint16Array,
        QB = jB.bytes.buffer,
        nB = jB.bytes.byteOffset + (BB.byteOffset || 0);
      return nB % zB.BYTES_PER_ELEMENT !== 0 ? new zB(QB.slice(nB, nB + BB.count * zB.BYTES_PER_ELEMENT), 0) : new zB(QB, nB, BB.count)
    }

    function YB(BB, jB) {
      if (BB.min && BB.max) return [new Float64Array(BB.min), new Float64Array(BB.max)];
      const zB = jB.find((BB => {
          let {
            kind: jB
          } = BB;
          return "position" === jB
        })),
        QB = zB ? (0, MB.k)(zB, BB.count) : new Float32Array(0);
      return (0, MB.v)(QB.length / 3, ((BB, jB) => QB[3 * BB + jB]))
    }

    function VB(BB) {
      const jB = BB.attributes.map((BB => {
          var jB, zB;
          let {
            kind: QB,
            accessor: nB
          } = BB;
          const {
            bufferView: dB,
            numComponents: IB
          } = nB;
          if (!dB) {
            return {
              kind: QB,
              data: DB(nB, (() => new Float32Array(IB * nB.count))),
              offset: 0,
              stride: 4 * IB,
              components: IB,
              glType: 5126,
              isNormalized: !1
            }
          }
          const NB = null !== (jB = dB.byteStride) && void 0 !== jB ? jB : IB * EB.e[nB.componentType];
          return {
            kind: QB,
            data: dB.bytes,
            offset: null !== (zB = nB.byteOffset) && void 0 !== zB ? zB : 0,
            stride: NB,
            components: IB,
            glType: nB.componentType,
            isNormalized: nB.normalized
          }
        })),
        zB = BB.indices,
        QB = zB && DB(zB, FB),
        nB = BB.position;
      return new MB.h(jB, QB, nB.count, ...YB(nB, jB))
    }
    const hB = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function XB(BB, jB) {
      const zB = jB.attributes.map((BB => {
        let {
          kind: jB,
          data: zB,
          size: QB,
          byteOffset: nB,
          byteStride: dB,
          normalized: IB
        } = BB;
        return {
          kind: jB,
          data: zB,
          offset: nB,
          stride: dB,
          components: QB,
          glType: 5120 + hB.indexOf(zB.constructor),
          isNormalized: IB
        }
      }));
      return new MB.h(zB, jB.indices, jB.totalVertices, ...YB(BB.position, zB))
    }

    function ZB(BB) {
      const jB = BB.lastIndexOf("/");
      return jB < 0 ? BB : BB.substring(jB + 1)
    }

    function AB(BB) {
      const jB = BB.lastIndexOf("/");
      return jB < 0 ? "" : BB.substring(0, jB + 1)
    }

    function TB(BB) {
      return BB.name || `node${BB.index}`
    }
    const PB = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      WB = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      eB = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function lB(BB) {
      var jB, zB, QB, nB;
      const dB = null !== (jB = BB.minFilter) && void 0 !== jB ? jB : 9987;
      return 9729 === (null !== (zB = BB.magFilter) && void 0 !== zB ? zB : 9729) ? null !== (QB = WB[dB]) && void 0 !== QB ? QB : 3 : null !== (nB = eB[dB]) && void 0 !== nB ? nB : 4
    }
    const wB = {
      33071: 0,
      33648: 2
    };

    function xB(BB) {
      var jB;
      return null !== (jB = wB[null !== BB && void 0 !== BB ? BB : 10497]) && void 0 !== jB ? jB : 1
    }

    function KB(BB) {
      return 9728 === BB.minFilter || 9729 === BB.minFilter
    }

    function CB(BB) {
      var jB, zB, QB;
      const nB = Float64Array.from(null !== (jB = BB.scale) && void 0 !== jB ? jB : [1, 1, 1]);
      return BB.hasCamera && (nB[0] = -1), {
        translation: Float64Array.from(null !== (zB = BB.translation) && void 0 !== zB ? zB : [0, 0, 0]),
        rotation: Float64Array.from(null !== (QB = BB.rotation) && void 0 !== QB ? QB : [0, 0, 0, 1]),
        scale: nB
      }
    }

    function cB(BB, jB) {
      let {
        translation: zB,
        rotation: QB,
        scale: nB
      } = BB;
      const dB = new Float32Array(16);
      return (0, SB.e)(nB, 0, QB, 0, zB, 0, dB), jB && (0, SB.q)(dB, jB, 0, dB), dB
    }
    class bB {
      constructor(BB, jB, zB, QB) {
        this.model = BB, this.decode = jB, this.fileInfo = zB, this.uniqueRootUrl = QB, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const nB = new Set,
          dB = (jB, zB) => {
            const QB = BB.nodes[jB];
            if (this.parents.has(QB)) throw new EB.l(`/nodes/${jB}: Invalid recursive node hierarchy`);
            this.parents.set(QB, zB);
            const IB = null === QB.mesh ? [] : BB.meshes[QB.mesh].primitives,
              NB = IB.map((BB => {
                const jB = IB.length > 1;
                return {
                  name: jB ? `${TB(QB)}_primitive${BB.index}` : TB(QB),
                  node: QB,
                  primitive: BB,
                  part: jB,
                  geometry: null
                }
              }));
            this.uses.set(QB, NB);
            const uB = null !== QB.mesh && nB.has(QB.mesh);
            nB.add(QB.mesh), this.own.set(QB, uB ? [] : NB);
            for (const BB of QB.children) dB(BB, QB)
          };
        for (const IB of BB.rootNodes) dB(IB, null);
        this.primitives = BB.nodes.flatMap((BB => {
          var jB;
          return null !== (jB = this.own.get(BB)) && void 0 !== jB ? jB : []
        }))
      }
      decodeGeometries() {
        const BB = new Map;
        return Promise.all(this.primitives.map((async jB => {
          const {
            primitive: zB
          } = jB, QB = zB.draco;
          let nB = QB ? BB.get(QB.bufferView.index) : Promise.resolve(VB(zB));
          nB || (nB = oB(zB, this.decode).then((BB => XB(zB, BB))), BB.set(QB.bufferView.index, nB)), jB.geometry = await nB
        })))
      }
      parentOf(BB) {
        var jB;
        return null !== (jB = this.parents.get(BB)) && void 0 !== jB ? jB : null
      }
      meshesUnder(BB) {
        const jB = this.model.nodes.filter((BB => this.uses.has(BB)));
        for (const QB of jB) {
          const jB = this.uses.get(QB),
            zB = jB.find((jB => jB.name === BB));
          if (zB) return 1 === jB.length ? this.subtree(QB) : this.own.get(QB).includes(zB) ? [zB] : []
        }
        const zB = jB.find((jB => 1 !== this.uses.get(jB).length && TB(jB) === BB));
        return zB ? this.subtree(zB) : null
      }
      subtree(BB) {
        return [...this.own.get(BB), ...BB.children.flatMap((BB => this.subtree(this.model.nodes[BB])))]
      }
      worldMatrix(BB, jB, zB) {
        let QB = cB(CB(jB ? PB : {}), null);
        const nB = [];
        for (let IB = BB.part ? BB.node : this.parentOf(BB.node); IB; IB = this.parentOf(IB)) nB.unshift(IB);
        for (const IB of nB) QB = cB(CB(IB), QB);
        const dB = CB(BB.part ? {} : BB.node);
        return void 0 !== zB && dB.scale.fill(zB), cB(dB, QB)
      }
      floats(BB) {
        const {
          vertexAttributes: jB,
          vertexCount: zB
        } = BB.geometry;
        return new Map(jB.map((BB => [BB.kind, (0, MB.k)(BB, zB)])))
      }
      imageUrl(BB) {
        return function(BB, jB, zB) {
          let {
            name: QB
          } = jB;
          return `data:${BB}${QB}#image${zB}`
        }(this.uniqueRootUrl, this.fileInfo, BB)
      }
      textureDesc(BB, jB) {
        var zB;
        let {
          texture: QB,
          transform: nB
        } = BB;
        const {
          sampler: dB,
          image: IB
        } = this.model.textures[QB], {
          bufferView: NB,
          mimeType: uB,
          name: UB
        } = this.model.images[IB], aB = nB && {
          ...nB.offset ? {
            uOffset: nB.offset[0],
            vOffset: nB.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...nB.rotation ? {
            wAng: -nB.rotation
          } : {},
          ...nB.scale ? {
            uScale: nB.scale[0],
            vScale: nB.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(IB),
          noMipmap: KB(dB),
          invertY: !1,
          samplingMode: lB(dB),
          data: {
            bytes: NB.bytes,
            mimeType: uB,
            label: UB,
            context: `/textures/${QB}`
          },
          sets: {
            wrapU: xB(dB.wrapS),
            wrapV: xB(dB.wrapT),
            ...aB,
            coordinatesIndex: null !== (zB = null === nB || void 0 === nB ? void 0 : nB.texCoord) && void 0 !== zB ? zB : 0,
            hasAlpha: jB
          }
        }
      }
    }
    async function vB(BB, jB, zB, QB, nB, dB) {
      let IB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const NB = function(BB, jB, zB) {
          return "string" !== typeof jB ? {
            url: "",
            rootUrl: BB,
            name: zB()
          } : jB ? jB.startsWith("data:") ? {
            url: jB,
            rootUrl: BB,
            name: ""
          } : BB ? {
            url: BB + jB,
            rootUrl: BB,
            name: jB
          } : {
            url: jB,
            rootUrl: AB(jB),
            name: ZB(jB)
          } : {
            url: BB,
            rootUrl: AB(BB),
            name: ZB(BB)
          }
        }(zB, BB, nB),
        uB = {};
      jB.addPendingData(uB);
      try {
        const zB = fB(await async function(BB, jB) {
            return "string" !== typeof jB ? jB : BB.url.startsWith("data:") ? (0, EB.t)(BB.url) : await (0, EB.v)(BB.url)
          }(NB, BB)),
          uB = new bB(zB, QB, NB, function(BB, jB) {
            let {
              rootUrl: zB,
              name: QB
            } = BB;
            return !zB.startsWith("file:") && QB ? zB : `${zB}${jB()}/`
          }(NB, nB));
        return await dB(uB), jB.importedMeshesFiles && (jB.loadingPluginName = "sF", IB && jB.importedMeshesFiles.push(NB.url)), uB
      } finally {
        jB.removePendingData(uB)
      }
    }
    var RB = zB(37687),
      OB = zB(37551),
      Bj = zB(37971);

    function jj(BB) {
      if (null === BB || void 0 === BB || !BB.min || !BB.max) return null;
      const [jB, zB, QB] = BB.min, [nB, dB, IB] = BB.max, {
        BoundingInfo: NB,
        KJ: uB
      } = (0, RB.e)();
      return new NB(new uB(jB, zB, QB), new uB(nB, dB, IB))
    }

    function zj(BB) {
      (0, OB.e)(BB) || (BB.geometry && BB.geometry.useBoundingInfoFromGeometry ? BB._updateBoundingInfo() : BB.refreshBoundingInfo(!0, !0))
    }
    class Qj {
      constructor(BB, jB) {
        this.ny = BB, this.decode = jB, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(BB) {
        let jB = this.viewData.get(BB.index);
        return jB || (jB = this.bufferData.then((() => BB.bytes)), this.viewData.set(BB.index, jB)), jB
      }
      viewBuffer(BB) {
        let jB = this.viewBuffers.get(BB.index);
        return jB || (jB = this.viewBytes(BB).then((BB => new((0, RB.e)().oJ)(this.ny.wJ(), BB, !1))), this.viewBuffers.set(BB.index, jB)), jB
      }
      vertexBuffer(BB, jB) {
        const {
          kind: zB,
          data: QB
        } = jB, nB = `${BB.index}:${zB}`;
        let dB = this.vertexBuffers.get(nB);
        if (!dB) {
          const IB = BB.bufferView;
          dB = IB ? this.viewBuffer(IB).then((BB => this.layoutVertexBuffer(BB, jB))) : Promise.resolve(QB).then((BB => new((0, RB.e)().VertexBuffer)(this.ny.wJ(), BB, zB, !1))), this.vertexBuffers.set(nB, dB)
        }
        return dB
      }
      layoutVertexBuffer(BB, jB) {
        let {
          kind: zB,
          offset: QB,
          stride: nB,
          components: dB,
          glType: IB,
          isNormalized: NB
        } = jB;
        const uB = this.ny.wJ();
        return new((0, RB.e)().VertexBuffer)(uB, BB, zB, !1, void 0, nB, void 0, QB, dB, IB, NB, !0, void 0, !0)
      }
      load(BB, jB, zB) {
        const QB = (0, OB.e)(zB),
          nB = BB => {
            QB || (zB._delayInfo = zB._delayInfo || [], -1 === zB._delayInfo.indexOf(BB) && zB._delayInfo.push(BB))
          },
          dB = jB.draco;
        if (dB) {
          for (const BB in dB.attributeIds) nB(BB);
          let IB = this.dracoGeometry.get(dB.bufferView.index);
          return IB || (IB = this.viewBytes(dB.bufferView).then((async () => {
            let nB;
            try {
              nB = await oB(jB, this.decode)
            } catch (uB) {
              throw new EB.l(`${BB}: ${uB instanceof Error?uB.message:String(uB)}`)
            }
            const dB = XB(jB, nB);
            if (QB) return dB;
            const IB = jj(jB.position),
              NB = new((0, RB.e)().MirroredGeometry)(zB.name, this.ny);
            IB && (NB._boundingInfo = IB, NB.useBoundingInfoFromGeometry = !0), dB.indexData && NB.setIndices(dB.indexData);
            for (const BB of dB.vertexAttributes) NB.setVerticesBuffer(this.layoutVertexBuffer(BB.data, BB), dB.vertexCount);
            return NB.link(dB), NB
          })), this.dracoGeometry.set(dB.bufferView.index, IB)), IB
        }
        const IB = [],
          NB = VB(jB);
        if (QB) return zB.isUnIndexed = !NB.indexData, zB.hasVertexAlpha = (0, Bj.c)(jB), Promise.resolve(NB);
        const uB = new((0, RB.e)().MirroredGeometry)(zB.name, this.ny),
          {
            indexData: UB
          } = NB;
        UB ? IB.push(this.viewBytes(jB.indices.bufferView).then((() => {
          uB.setIndices(UB)
        }))) : zB.isUnIndexed = !0;
        for (const [aB, {
            kind: pB,
            accessor: rB
          }] of jB.attributes.entries()) nB(pB), IB.push(this.vertexBuffer(rB, NB.vertexAttributes[aB]).then((BB => {
          if ("position" === BB.getKind()) {
            const BB = jj(rB);
            BB && (uB._boundingInfo = BB, uB.useBoundingInfoFromGeometry = !0)
          }
          uB.setVerticesBuffer(BB, NB.vertexCount)
        })));
        return (0, Bj.c)(jB) && (zB.hasVertexAlpha = !0), Promise.all(IB).then((() => (uB.link(NB), uB)))
      }
    }
    var nj, dj = zB(37430),
      Ij = zB(37166),
      Nj = zB(37983),
      uj = zB(37365),
      Uj = zB(37408),
      aj = zB(2863),
      pj = zB(37394);

    function rj(BB, jB) {
      BB.metadata = BB.metadata || {};
      const zB = BB._internalMetadata = BB._internalMetadata || {},
        QB = zB.sF = zB.sF || {};
      (QB.pointers = QB.pointers || []).push(jB)
    }

    function sj(BB, jB) {
      if (jB && Object.keys(jB).length > 0) {
        const zB = BB.metadata = BB.metadata || {};
        (zB.sF = zB.sF || {}).extras = jB
      }
    }

    function Jj(BB, jB) {
      jB.position = BB.translation ? Ij.KJ.FromArray(BB.translation) : Ij.KJ.Zero(), jB.rotationQuaternion = BB.rotation ? Ij.Quaternion.FromArray(BB.rotation) : Ij.Quaternion.Identity(), jB.pp = BB.scale ? Ij.KJ.FromArray(BB.scale) : Ij.KJ.One()
    }
    class mj {
      constructor(BB, jB) {
        if (this.ny = BB, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, jB) {
          const jB = BB.wJ(),
            zB = BB.pY.add((() => {
              this.dispose()
            })),
            QB = jB.lJ.add((() => {
              for (const BB of [...this.geometries, ...this.meshes, ...this.textures]) BB._rebuild()
            }));
          this.release = () => {
            BB.pY.remove(zB), jB.lJ.remove(QB)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const BB of this.meshes) this.ny.IQB(BB);
          for (const BB of this.materials) this.ny.addMaterial(BB);
          for (const BB of this.geometries) this.ny.addGeometry(BB);
          for (const BB of this.transformNodes) this.ny.addTransformNode(BB);
          for (const BB of this.textures) this.ny.addTexture(BB)
        }
      }
      dispose() {
        var BB;
        for (const jB of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const BB of jB.slice()) BB.dispose();
          jB.length = 0
        }
        null === (BB = this.release) || void 0 === BB || BB.call(this), this.release = null
      }
    }
    class yj {
      constructor(BB, jB, zB, QB, nB, dB, IB) {
        this.asset = BB, this.ny = jB, this.tree = zB, this.geometryData = nB, this.materials = dB, this.lite = IB, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = QB ? zB : null
      }
      create(BB) {
        if (this.lite) return BB();
        const jB = this.ny;
        jB._blockEntityCollection = !!this.container;
        try {
          const jB = BB();
          return this.container && (jB._parentContainer = this.container), jB
        } finally {
          jB._blockEntityCollection = !1
        }
      }
      node(BB, jB) {
        return this.create((() => this.lite ? jB ? (0, Nj.f)(this.lite, BB) : (0, Nj.p)(this.lite, BB) : jB ? new((0, RB.e)().Mesh)(BB, this.ny) : new((0, RB.e)().TransformNode)(BB, this.ny)))
      }
      async load() {
        var BB;
        this.asset.model.json.nodes && this.createRoot();
        const jB = this.lite ? null : this.ny,
          zB = null !== (BB = null === jB || void 0 === jB ? void 0 : jB.blockMaterialDirtyMechanism) && void 0 !== BB && BB;
        let QB;
        jB && (jB.blockMaterialDirtyMechanism = !0);
        try {
          QB = this.loadScene()
        } finally {
          null === jB || void 0 === jB || jB._forceBlockMaterialDirtyMechanism(zB)
        }
        await QB;
        const {
          root: nB,
          tree: dB
        } = this;
        nB && (nB.mH(!0), dB.meshes.push(nB), dB.rootNodes.push(nB));
        for (const NB of this.asset.model.nodes) {
          const BB = this.nodeObjects.get(NB.index);
          BB && ["TransformNode", "LiteNode"].includes(BB.getClassName()) && dB.transformNodes.push(BB);
          for (const jB of null !== (IB = this.nodePrimitives.get(NB.index)) && void 0 !== IB ? IB : []) {
            var IB;
            dB.meshes.push(jB);
            const BB = jB.geometry;
            BB && !dB.geometries.includes(BB) && dB.geometries.push(BB)
          }
        }
      }
      createRoot() {
        const BB = this.node("__root__", !0);
        this.root = BB, BB.mH(!1), this.ny.useRightHandedSystem || Jj(PB, BB)
      }
      loadScene() {
        const BB = [];
        for (const jB of this.asset.model.rootNodes) BB.push(this.loadNode(this.asset.model.nodes[jB], (BB => {
          BB.parent = this.root
        })));
        return BB.push(Promise.resolve()), Promise.all(BB).then((() => {}))
      }
      loadNode(BB, jB) {
        const zB = `/nodes/${BB.index}`,
          QB = [],
          nB = nB => {
            if (rj(nB, zB), Jj(BB, nB), BB.hasCamera && !this.ny.useRightHandedSystem) {
              const {
                pp: BB
              } = nB;
              BB.set(-1, BB.y, BB.z)
            }
            for (const jB of BB.children) QB.push(this.loadNode(this.asset.model.nodes[jB], (BB => {
              BB.parent = nB
            })));
            (zB => {
              sj(zB, BB.extras), jB(zB)
            })(nB)
          };
        if (null === BB.mesh) {
          const jB = this.node(TB(BB), !1);
          this.nodeObjects.set(BB.index, jB), nB(jB)
        } else {
          const jB = this.asset.model.meshes[BB.mesh];
          QB.push(this.loadMesh(`/meshes/${jB.index}`, BB, jB, nB))
        }
        return Promise.all(QB).then((() => {
          for (const zB of null !== (jB = this.nodePrimitives.get(BB.index)) && void 0 !== jB ? jB : []) {
            var jB;
            zj(zB)
          }
          return this.nodeObjects.get(BB.index)
        }))
      }
      loadMesh(BB, jB, zB, QB) {
        const nB = [],
          dB = TB(jB);
        if (1 === zB.primitives.length) {
          const QB = zB.primitives[0];
          nB.push(this.loadPrimitive(`${BB}/primitives/${QB.index}`, dB, QB, (BB => {
            this.nodeObjects.set(jB.index, BB), this.nodePrimitives.set(jB.index, [BB])
          })))
        } else {
          const QB = this.node(dB, !1);
          this.nodeObjects.set(jB.index, QB);
          const IB = [];
          this.nodePrimitives.set(jB.index, IB);
          for (const jB of zB.primitives) nB.push(this.loadPrimitive(`${BB}/primitives/${jB.index}`, `${dB}_primitive${jB.index}`, jB, (BB => {
            BB.parent = QB, IB.push(BB)
          })))
        }
        const IB = this.nodeObjects.get(jB.index);
        return QB(IB), Promise.all(nB).then((() => IB))
      }
      loadPrimitive(BB, jB, zB, QB) {
        const nB = [],
          dB = this.node(jB, !0);
        if (dB.sideOrientation = this.ny.useRightHandedSystem ? uj.e.CounterClockWiseSideOrientation : uj.e.ClockWiseSideOrientation, nB.push(this.geometryData.load(BB, zB, dB).then((BB => {
            if ((0, OB.e)(dB)) {
              var jB, zB;
              const QB = BB;
              dB.replaceModel(QB, Int32Array.of(0, null !== (jB = null === (zB = QB.indexData) || void 0 === zB ? void 0 : zB.length) && void 0 !== jB ? jB : QB.vertexCount, 0, QB.vertexCount))
            } else this.create((() => (BB.applyToMesh(dB), BB)))
          }))), this.materials) {
          const BB = 0 === zB.mode ? uj.e.PointListDrawMode : uj.e.TriangleFillMode,
            jB = null === zB.material ? null : this.asset.model.materials[zB.material];
          nB.push(this.loadMaterial(jB, BB, (BB => {
            dB.material = BB
          })))
        }
        return rj(dB, BB), QB(dB), Promise.all(nB).then((() => dB))
      }
      loadMaterial(BB, jB, zB) {
        var QB;
        const nB = `${null!==(QB=null===BB||void 0===BB?void 0:BB.index)&&void 0!==QB?QB:"default"}:${jB}`;
        let dB = this.materialData.get(nB);
        return dB || (dB = this.createMaterial(BB, jB), this.materialData.set(nB, dB)), zB(dB.material), dB.promise
      }
      createMaterial(BB, jB) {
        const zB = BB ? BB.name || `material${BB.index}` : "__GLTFLoader._default",
          {
            style: QB,
            unlit: nB
          } = this.materials;
        let dB;
        const IB = this.create((() => {
          const IB = (0, pj.d)({
            name: zB,
            ny: this.ny,
            sets: {
              ...(0, Bj.b)(this.asset, BB, QB, nB),
              fillMode: jB
            },
            unrendered: !0
          });
          return dB = IB.model, IB.mirror
        }));
        let NB = Promise.resolve();
        if (BB) {
          const jB = `/materials/${BB.index}`,
            QB = dB.diffuseTexture;
          if (QB && !QB.mirror) NB = new Promise((BB => setTimeout(BB)));
          else if (QB) {
            const nB = QB.mirror;
            nB._parentContainer = this.container, nB.name = `${zB} (Base Color)`, rj(nB, `${jB}${BB.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(nB), NB = (0, Uj.p)(QB)
          }
          sj(IB, BB.extras), rj(IB, jB)
        }
        return this.tree.materials.push(IB), {
          material: IB,
          promise: NB
        }
      }
    }

    function kj() {
      dj.c.dracoDecodes = mB.decodes, dj.c.dracoWorkersStarted = mB.workersStarted, dj.c.dracoMostWorkers = mB.mostWorkers
    }
    async function Gj(BB, jB, zB, nB, dB) {
      try {
        return await async function(BB, jB, zB, nB, dB, IB) {
          var NB;
          let uB;
          const UB = null === (NB = (0, aj.g)()) || void 0 === NB ? void 0 : NB.pm,
            aB = null !== UB && void 0 !== UB && UB.rm && jB === UB.aY() ? UB : null,
            pB = dB && !aB;
          return await vB(BB, jB, zB, nB, QB.d, (BB => (uB = new mj(jB, pB), new yj(BB, jB, uB, pB, new Qj(jB, nB), IB, aB).load())), !dB), uB
        }(BB, jB, zB, tB, nB, dB)
      } finally {
        kj()
      }
    }
    async function Lj(BB, jB, zB, nB) {
      try {
        return await vB(BB, jB, zB, tB, QB.d, (BB => nB(BB, new Qj(jB, tB))))
      } finally {
        kj()
      }
    }
    nj = nB.e, aB || (aB = {
      scriptUrl: new URL(nj.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(nj.wasmBinaryUrl, location.href).href
    })
  },
  41598: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB
    });
    var QB = zB(145),
      nB = zB(1126);

    function dB(BB) {
      return (0, QB.isDiscordClient)() ? `https://${nB.e.discordDomain}/${BB.href}` : BB.href
    }
    const IB = {
      scriptUrl: dB(new zB.U(zB(41604))),
      wasmBinaryUrl: dB(new zB.U(zB(41608)))
    }
  },
  36327: BB => {
    BB.exports = function(BB, jB, zB, QB) {
      var nB = self || window;
      try {
        try {
          var dB;
          try {
            dB = new nB.Blob([BB])
          } catch (UB) {
            (dB = new(nB.BlobBuilder || nB.WebKitBlobBuilder || nB.MozBlobBuilder || nB.MSBlobBuilder)).append(BB), dB = dB.getBlob()
          }
          var IB = nB.URL || nB.webkitURL,
            NB = IB.createObjectURL(dB),
            uB = new nB[jB](NB, zB);
          return IB.revokeObjectURL(NB), uB
        } catch (UB) {
          return new nB[jB]("data:application/javascript,".concat(encodeURIComponent(BB)), zB)
        }
      } catch (UB) {
        if (!QB) throw Error("Inline worker is not supported");
        return new nB[jB](QB, zB)
      }
    }
  },
  41608: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  41604: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);