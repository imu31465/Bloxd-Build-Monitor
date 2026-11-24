export const id = 209;
export const ids = [209];
export const modules = {
  41522: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      loadGlbAsset: () => WI,
      loadGlbTree: () => UI
    });
    var TB = ZB(37964),
      JB = ZB(41530),
      oB = ZB(36267),
      GB = ZB.n(oB);

    function vB() {
      return GB()('(()=>{class BB extends Error{}function IB(IB,ZB){const TB=IB._malloc(ZB);if(0===TB)throw new BB(`Draco: the decoder\'s heap refused ${ZB} bytes`);return TB}function ZB(BB){return{[BB.DT_FLOAT32]:[Float32Array,5126],[BB.DT_INT8]:[Int8Array,5120],[BB.DT_INT16]:[Int16Array,5122],[BB.DT_INT32]:[Int32Array,5124],[BB.DT_UINT8]:[Uint8Array,5121],[BB.DT_UINT16]:[Uint16Array,5123],[BB.DT_UINT32]:[Uint32Array,5125]}}function TB(IB,TB,JB,oB,GB){let vB=null,kB=null,cB=null;try{vB=new IB.Decoder,kB=new IB.DecoderBuffer,kB.Init(TB,TB.byteLength);let nB=0;const hB=vB.GetEncodedGeometryType(kB);if(hB===IB.TRIANGULAR_MESH){const ZB=new IB.Mesh;cB=ZB;const TB=vB.DecodeBufferToMesh(kB,ZB);if(!TB.ok()||0===ZB.ptr)throw new BB(TB.error_msg());nB=3*ZB.num_faces()}else{if(hB!==IB.POINT_CLOUD)throw new BB(`Draco: Cannot decode invalid geometry type ${hB}`);{const ZB=new IB.PointCloud;cB=ZB;const TB=vB.DecodeBufferToPointCloud(kB,ZB);if(!TB.ok()||!ZB.ptr)throw new BB(TB.error_msg())}}const zB=cB.num_points();if(zB!==oB.vertices||nB!==oB.indices)throw new BB(`Draco: decoded ${zB} vertices and ${nB} indices, the accessors declare ${oB.vertices} and ${oB.indices}`);const FB=ZB(IB),NB=[];for(const{kind:IB,id:ZB,components:TB}of JB){const JB=vB.GetAttributeByUniqueId(cB,ZB);if(!JB||0===JB.ptr)throw new BB(`Draco: no attribute with id ${ZB} (${IB})`);const oB=JB.data_type();if(!FB[oB])throw new BB(`Draco: Cannot decode invalid data type ${oB}`);if(JB.num_components()!==TB)throw new BB(`Draco: ${IB} decodes to ${JB.num_components()} components, its accessor declares ${TB}`);NB.push([IB,JB,oB])}return GB({dracoDecoder:vB,geometry:cB,triangles:hB===IB.TRIANGULAR_MESH,numPoints:zB,numIndices:nB,attributes:NB})}finally{cB&&IB.destroy(cB),kB&&IB.destroy(kB),vB&&IB.destroy(vB)}}const JB=self;let oB=null;self.onmessage=BB=>{let{data:GB}=BB;if("init"===GB.id){try{importScripts(GB.url),oB=DracoDecoderModule({wasmBinary:GB.wasmBinary}),JB.postMessage({id:"initDone"})}catch(hB){JB.postMessage({id:"initError",message:hB instanceof Error?hB.message:String(hB)})}return}const{seq:vB,data:kB,attributeIds:cB,expected:nB}=GB;oB?oB.then((BB=>{try{const oB=function(BB,JB,oB,GB){const vB=Object.keys(oB).map((BB=>({kind:BB,id:oB[BB],components:GB.components[BB]})));return TB(BB,JB,vB,GB,(TB=>{let{dracoDecoder:JB,geometry:oB,triangles:GB,numPoints:vB,numIndices:kB,attributes:cB}=TB;const nB=ZB(BB);let hB=null;if(GB){const ZB=4*kB,TB=IB(BB,ZB);try{JB.GetTrianglesUInt32Array(oB,ZB,TB),hB=new Uint32Array(kB),hB.set(new Uint32Array(BB.HEAPF32.buffer,TB,kB))}finally{BB._free(TB)}}const zB=[];for(const[ZB,FB,NB]of cB){const[TB]=nB[NB],GB=FB.num_components(),kB=vB*GB,cB=kB*TB.BYTES_PER_ELEMENT,hB=IB(BB,cB);try{JB.GetAttributeDataArrayForAllPoints(oB,FB,NB,cB,hB),zB.push({kind:ZB,data:new TB(BB.HEAPF32.buffer,hB,kB).slice(),size:GB,byteOffset:FB.byte_offset(),byteStride:FB.byte_stride(),normalized:FB.normalized()})}finally{BB._free(hB)}}return{indices:hB,attributes:zB,totalVertices:vB}}))}(BB,kB,cB,nB),GB=oB.attributes.map((BB=>BB.data.buffer));oB.indices&&GB.push(oB.indices.buffer),JB.postMessage({id:"decoded",seq:vB,...oB},GB)}catch(hB){JB.postMessage({id:"decodeError",seq:vB,message:hB instanceof Error?hB.message:String(hB)})}}),(BB=>{JB.postMessage({id:"decodeError",seq:vB,message:BB instanceof Error?BB.message:String(BB)})})):JB.postMessage({id:"decodeError",seq:vB,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, ZB.p + "dracoDecode.worker.c157e042.worker.js")
    }
    var kB = ZB(105);
    const cB = 1e3;
    let nB = null,
      hB = null;
    const zB = [],
      FB = [];
    let NB = 0;
    const gB = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      qB = function(BB, IB) {
        const ZB = BB ? Math.max(1, Math.min(Math.floor(.5 * BB), 4)) : 1;
        return IB ? Math.min(ZB, 2) : ZB
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, kB.isMobile)());

    function yB() {
      if (!nB) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: BB,
        wasmBinaryUrl: IB
      } = nB;
      return hB ??= fetch(IB).then((BB => {
        if (!BB.ok) throw new Error(`Draco: fetching ${IB} failed: ${BB.status}`);
        return BB.arrayBuffer()
      })), hB.catch((() => {
        hB = null
      })), gB.workersStarted++, hB.then((IB => new Promise(((ZB, TB) => {
        const JB = new vB;
        JB.onerror = BB => {
          JB.onmessage = null, JB.onerror = null, JB.terminate(), TB(new Error("Draco: the decode worker failed to start" + (BB.message ? `: ${BB.message}` : " (its script did not load)")))
        }, JB.onmessage = BB => {
          let {
            data: IB
          } = BB;
          JB.onmessage = null, JB.onerror = null, "initDone" === IB.id ? ZB(JB) : (JB.terminate(), TB(new Error(`Draco: ${"initError"===IB.id?IB.message:"the worker did not start"}`)))
        };
        const oB = IB.slice(0),
          GB = {
            id: "init",
            url: BB,
            wasmBinary: oB
          };
        JB.postMessage(GB, [oB])
      }))))
    }

    function UB(BB) {
      const IB = zB.indexOf(BB); - 1 !== IB && zB.splice(IB, 1);
      const ZB = FB.shift();
      ZB && dB(ZB)
    }

    function WB(BB, IB) {
      BB.busy = !0, BB.releaseTimer && (clearTimeout(BB.releaseTimer), BB.releaseTimer = null);
      BB.worker.then((ZB => {
        const TB = NB++;
        ZB.onmessage = JB => {
          let {
            data: oB
          } = JB;
          if (("decoded" === oB.id || "decodeError" === oB.id) && oB.seq === TB) {
            if (ZB.onmessage = null, ZB.onerror = null, "decoded" === oB.id) return gB.decodes++, IB.resolve({
              indices: oB.indices,
              attributes: oB.attributes,
              totalVertices: oB.totalVertices
            }), void(() => {
              const IB = FB.shift();
              IB ? WB(BB, IB) : (BB.busy = !1, BB.releaseTimer = setTimeout((() => {
                const IB = zB.indexOf(BB); - 1 !== IB && zB.splice(IB, 1), BB.worker.then((BB => {
                  BB.terminate()
                }))
              }), cB))
            })();
            ZB.terminate(), IB.reject(new Error(oB.message)), UB(BB)
          }
        }, ZB.onerror = TB => {
          ZB.onmessage = null, ZB.onerror = null, ZB.terminate(), IB.reject(new Error(`Draco: the decode worker failed: ${TB.message}`)), UB(BB)
        };
        const JB = {
          id: "decode",
          seq: TB,
          data: IB.data,
          attributeIds: IB.attributeIds,
          expected: IB.expected
        };
        ZB.postMessage(JB, [IB.data.buffer])
      }), (ZB => {
        IB.reject(ZB instanceof Error ? ZB : new Error(String(ZB))), UB(BB)
      }))
    }

    function dB(BB) {
      const IB = zB.find((BB => !BB.busy));
      if (IB) WB(IB, BB);
      else {
        if (zB.length < qB) {
          const IB = {
            worker: yB(),
            busy: !0,
            releaseTimer: null
          };
          return zB.push(IB), gB.mostWorkers = Math.max(gB.mostWorkers, zB.length), void WB(IB, BB)
        }
        FB.push(BB)
      }
    }

    function CB(BB, IB, ZB) {
      return new Promise(((TB, JB) => {
        dB({
          data: new Int8Array(BB.buffer, BB.byteOffset, BB.byteLength).slice(),
          attributeIds: IB,
          expected: ZB,
          resolve: TB,
          reject: JB
        })
      }))
    }
    var QB = ZB(37516),
      sB = ZB(37525),
      wB = ZB(34269),
      OB = ZB(34261);
    const YB = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function iB(BB) {
      const IB = (0, OB.f)(BB.byteLength);
      if (IB) throw new wB.p(IB);
      const {
        json: ZB,
        bin: TB
      } = (0, wB.C)(BB), JB = (0, OB.d)(ZB, TB);
      if (JB) throw new wB.p(JB);
      try {
        return function(BB, IB) {
          var ZB, TB, JB, oB, GB, vB, kB, cB, nB, hB, zB, FB, NB, gB, qB;
          const yB = new Map,
            UB = ZB => {
              let TB = yB.get(ZB);
              if (!TB) {
                var JB;
                const oB = BB.bufferViews[ZB],
                  GB = null !== (JB = oB.byteOffset) && void 0 !== JB ? JB : 0;
                TB = {
                  index: ZB,
                  bytes: IB.subarray(GB, GB + oB.byteLength),
                  byteStride: oB.byteStride
                }, yB.set(ZB, TB)
              }
              return TB
            },
            WB = new Map,
            dB = IB => {
              let ZB = WB.get(IB);
              if (!ZB) {
                var TB;
                const JB = BB.accessors[IB];
                ZB = {
                  index: IB,
                  count: JB.count,
                  type: JB.type,
                  numComponents: wB.t[JB.type],
                  componentType: JB.componentType,
                  normalized: null !== (TB = JB.normalized) && void 0 !== TB && TB,
                  byteOffset: JB.byteOffset,
                  bufferView: void 0 === JB.bufferView ? null : UB(JB.bufferView),
                  min: JB.min,
                  max: JB.max
                }, WB.set(IB, ZB)
              }
              return ZB
            },
            CB = null !== (ZB = null === (TB = BB.extensionsUsed) || void 0 === TB ? void 0 : TB.includes("KHR_draco_mesh_compression")) && void 0 !== ZB && ZB,
            QB = (null !== (JB = BB.meshes) && void 0 !== JB ? JB : []).map(((IB, ZB) => {
              const TB = IB.primitives.map(((IB, ZB) => {
                var TB, JB, oB;
                const GB = CB ? null === (TB = IB.extensions) || void 0 === TB ? void 0 : TB.KHR_draco_mesh_compression : void 0;
                let vB = null;
                const kB = [];
                if (GB) {
                  const ZB = {
                    vertices: BB.accessors[IB.attributes.POSITION].count,
                    indices: void 0 === IB.indices ? 0 : BB.accessors[IB.indices].count,
                    components: {}
                  };
                  vB = {
                    bufferView: UB(GB.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: ZB
                  };
                  for (const [TB, JB] of wB.k) {
                    const oB = GB.attributes[TB];
                    if (void 0 === oB) continue;
                    vB.attributeIds[JB] = oB;
                    const kB = IB.attributes[TB];
                    var cB;
                    if (void 0 !== kB) vB.normalized[JB] = null !== (cB = BB.accessors[kB].normalized) && void 0 !== cB && cB, ZB.components[JB] = wB.t[BB.accessors[kB].type]
                  }
                } else
                  for (const [BB, nB] of wB.k) {
                    const ZB = IB.attributes[BB];
                    void 0 !== ZB && kB.push({
                      semantic: BB,
                      kind: nB,
                      accessor: dB(ZB)
                    })
                  }
                return {
                  index: ZB,
                  mode: null !== (JB = IB.mode) && void 0 !== JB ? JB : 4,
                  attributes: kB,
                  indices: GB || void 0 === IB.indices ? null : dB(IB.indices),
                  position: void 0 === IB.attributes.POSITION ? null : dB(IB.attributes.POSITION),
                  material: null !== (oB = IB.material) && void 0 !== oB ? oB : null,
                  draco: vB
                }
              }));
              return {
                index: ZB,
                name: IB.name,
                primitives: TB,
                extras: IB.extras
              }
            })),
            sB = (null !== (oB = BB.nodes) && void 0 !== oB ? oB : []).map(((BB, IB) => {
              var ZB, TB;
              return {
                index: IB,
                name: BB.name,
                children: null !== (ZB = BB.children) && void 0 !== ZB ? ZB : [],
                mesh: null !== (TB = BB.mesh) && void 0 !== TB ? TB : null,
                translation: BB.translation,
                rotation: BB.rotation,
                scale: BB.scale,
                hasCamera: void 0 !== BB.camera,
                extras: BB.extras
              }
            })),
            OB = null !== (GB = null === (vB = BB.extensionsUsed) || void 0 === vB ? void 0 : vB.includes("KHR_materials_unlit")) && void 0 !== GB && GB,
            iB = null !== (kB = null === (cB = BB.extensionsUsed) || void 0 === cB ? void 0 : cB.includes("KHR_texture_transform")) && void 0 !== kB && kB,
            pB = (null !== (nB = BB.materials) && void 0 !== nB ? nB : []).map(((BB, IB) => {
              var ZB, TB, JB, oB;
              const GB = BB.pbrMetallicRoughness,
                vB = null === GB || void 0 === GB ? void 0 : GB.baseColorTexture;
              return {
                index: IB,
                name: BB.name,
                extras: BB.extras,
                unlit: OB && void 0 !== (null === (ZB = BB.extensions) || void 0 === ZB ? void 0 : ZB.KHR_materials_unlit),
                pbr: GB ? {
                  baseColorFactor: GB.baseColorFactor,
                  metallicFactor: GB.metallicFactor,
                  roughnessFactor: GB.roughnessFactor
                } : null,
                baseColorTexture: vB ? {
                  texture: vB.index,
                  transform: iB && (null === (TB = vB.extensions) || void 0 === TB ? void 0 : TB.KHR_texture_transform) || null
                } : null,
                emissiveFactor: BB.emissiveFactor,
                alphaMode: null !== (JB = BB.alphaMode) && void 0 !== JB ? JB : "OPAQUE",
                alphaCutoff: BB.alphaCutoff,
                doubleSided: null !== (oB = BB.doubleSided) && void 0 !== oB && oB
              }
            })),
            aB = (null !== (hB = BB.textures) && void 0 !== hB ? hB : []).map(((IB, ZB) => {
              var TB, JB;
              const oB = void 0 === IB.sampler ? YB : {
                index: IB.sampler,
                ...null === (TB = BB.samplers) || void 0 === TB ? void 0 : TB[IB.sampler]
              };
              return {
                index: ZB,
                sampler: {
                  index: oB.index,
                  magFilter: oB.magFilter,
                  minFilter: oB.minFilter,
                  wrapS: oB.wrapS,
                  wrapT: oB.wrapT
                },
                image: null !== (JB = IB.source) && void 0 !== JB ? JB : -1
              }
            })),
            HB = (null !== (zB = BB.images) && void 0 !== zB ? zB : []).map(((BB, IB) => ({
              index: IB,
              name: BB.name,
              mimeType: BB.mimeType,
              bufferView: UB(BB.bufferView)
            }))),
            MB = null !== (FB = (0, wB.A)(BB)) && void 0 !== FB ? FB : 0;
          return {
            json: BB,
            rootNodes: null !== (NB = null === (gB = BB.scenes) || void 0 === gB || null === (qB = gB[MB]) || void 0 === qB ? void 0 : qB.nodes) && void 0 !== NB ? NB : [],
            nodes: sB,
            meshes: QB,
            materials: pB,
            textures: aB,
            images: HB
          }
        }(ZB, TB)
      } catch (oB) {
        throw oB instanceof wB.m ? oB : new wB.m(`reading the GLB failed: ${oB instanceof Error?oB.message:String(oB)}`)
      }
    }
    async function pB(BB, IB) {
      var ZB, TB;
      const JB = BB.draco;
      if (!JB) throw new wB.m("not a Draco primitive");
      let oB;
      try {
        oB = await IB(JB.bufferView.bytes, JB.attributeIds, JB.expected)
      } catch (cB) {
        throw new wB.m(`Draco decoding failed: ${cB instanceof Error?cB.message:String(cB)}`)
      }
      const {
        vertices: GB,
        indices: vB,
        components: kB
      } = JB.expected;
      if (oB.totalVertices !== GB || (null !== (ZB = null === (TB = oB.indices) || void 0 === TB ? void 0 : TB.length) && void 0 !== ZB ? ZB : 0) !== vB || oB.attributes.some((BB => BB.size !== kB[BB.kind] || BB.data.length !== GB * BB.size))) throw new wB.m("Draco decoding gave other counts than the accessors declare");
      for (const nB of oB.attributes) {
        const BB = JB.normalized[nB.kind];
        void 0 !== BB && (nB.normalized = BB)
      }
      return oB
    }
    const aB = new WeakMap;

    function HB(BB, IB) {
      var ZB;
      const TB = null !== (ZB = aB.get(BB)) && void 0 !== ZB ? ZB : IB(BB);
      return aB.set(BB, TB), TB
    }

    function MB(BB) {
      const IB = BB.bufferView,
        ZB = 5125 === BB.componentType ? Uint32Array : Uint16Array,
        TB = IB.bytes.buffer,
        JB = IB.bytes.byteOffset + (BB.byteOffset || 0);
      return JB % ZB.BYTES_PER_ELEMENT !== 0 ? new ZB(TB.slice(JB, JB + BB.count * ZB.BYTES_PER_ELEMENT), 0) : new ZB(TB, JB, BB.count)
    }

    function jB(BB, IB) {
      if (BB.min && BB.max) return [new Float64Array(BB.min), new Float64Array(BB.max)];
      const ZB = IB.find((BB => {
          let {
            kind: IB
          } = BB;
          return "position" === IB
        })),
        TB = ZB ? (0, sB.f)(ZB, BB.count) : new Float32Array(0);
      return (0, sB.n)(TB.length / 3, ((BB, IB) => TB[3 * BB + IB]))
    }

    function PB(BB) {
      const IB = BB.attributes.map((BB => {
          var IB, ZB;
          let {
            kind: TB,
            accessor: JB
          } = BB;
          const {
            bufferView: oB,
            numComponents: GB
          } = JB;
          if (!oB) {
            return {
              kind: TB,
              data: HB(JB, (() => new Float32Array(GB * JB.count))),
              offset: 0,
              stride: 4 * GB,
              components: GB,
              glType: 5126,
              isNormalized: !1
            }
          }
          const vB = null !== (IB = oB.byteStride) && void 0 !== IB ? IB : GB * wB.c[JB.componentType];
          return {
            kind: TB,
            data: oB.bytes,
            offset: null !== (ZB = JB.byteOffset) && void 0 !== ZB ? ZB : 0,
            stride: vB,
            components: GB,
            glType: JB.componentType,
            isNormalized: JB.normalized
          }
        })),
        ZB = BB.indices,
        TB = ZB && HB(ZB, MB),
        JB = BB.position;
      return new sB.e(IB, TB, JB.count, ...jB(JB, IB))
    }
    const RB = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function rB(BB, IB) {
      const ZB = IB.attributes.map((BB => {
        let {
          kind: IB,
          data: ZB,
          size: TB,
          byteOffset: JB,
          byteStride: oB,
          normalized: GB
        } = BB;
        return {
          kind: IB,
          data: ZB,
          offset: JB,
          stride: oB,
          components: TB,
          glType: 5120 + RB.indexOf(ZB.constructor),
          isNormalized: GB
        }
      }));
      return new sB.e(ZB, IB.indices, IB.totalVertices, ...jB(BB.position, ZB))
    }

    function mB(BB) {
      const IB = BB.lastIndexOf("/");
      return IB < 0 ? BB : BB.substring(IB + 1)
    }

    function XB(BB) {
      const IB = BB.lastIndexOf("/");
      return IB < 0 ? "" : BB.substring(0, IB + 1)
    }

    function LB(BB) {
      return BB.name || `node${BB.index}`
    }
    const eB = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      uB = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      fB = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function lB(BB) {
      var IB, ZB, TB, JB;
      const oB = null !== (IB = BB.minFilter) && void 0 !== IB ? IB : 9987;
      return 9729 === (null !== (ZB = BB.magFilter) && void 0 !== ZB ? ZB : 9729) ? null !== (TB = uB[oB]) && void 0 !== TB ? TB : 3 : null !== (JB = fB[oB]) && void 0 !== JB ? JB : 4
    }
    const AB = {
      33071: 0,
      33648: 2
    };

    function tB(BB) {
      var IB;
      return null !== (IB = AB[null !== BB && void 0 !== BB ? BB : 10497]) && void 0 !== IB ? IB : 1
    }

    function bB(BB) {
      return 9728 === BB.minFilter || 9729 === BB.minFilter
    }

    function xB(BB) {
      var IB, ZB, TB;
      const JB = Float64Array.from(null !== (IB = BB.scale) && void 0 !== IB ? IB : [1, 1, 1]);
      return BB.hasCamera && (JB[0] = -1), {
        translation: Float64Array.from(null !== (ZB = BB.translation) && void 0 !== ZB ? ZB : [0, 0, 0]),
        rotation: Float64Array.from(null !== (TB = BB.rotation) && void 0 !== TB ? TB : [0, 0, 0, 1]),
        scale: JB
      }
    }

    function EB(BB, IB) {
      let {
        translation: ZB,
        rotation: TB,
        scale: JB
      } = BB;
      const oB = new Float32Array(16);
      return (0, QB.b)(JB, 0, TB, 0, ZB, 0, oB), IB && (0, QB.j)(oB, IB, 0, oB), oB
    }
    class DB {
      constructor(BB, IB, ZB, TB) {
        this.model = BB, this.decode = IB, this.fileInfo = ZB, this.uniqueRootUrl = TB, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const JB = new Set,
          oB = (IB, ZB) => {
            const TB = BB.nodes[IB];
            if (this.parents.has(TB)) throw new wB.m(`/nodes/${IB}: Invalid recursive node hierarchy`);
            this.parents.set(TB, ZB);
            const GB = null === TB.mesh ? [] : BB.meshes[TB.mesh].primitives,
              vB = GB.map((BB => {
                const IB = GB.length > 1;
                return {
                  name: IB ? `${LB(TB)}_primitive${BB.index}` : LB(TB),
                  node: TB,
                  primitive: BB,
                  part: IB,
                  geometry: null
                }
              }));
            this.uses.set(TB, vB);
            const kB = null !== TB.mesh && JB.has(TB.mesh);
            JB.add(TB.mesh), this.own.set(TB, kB ? [] : vB);
            for (const BB of TB.children) oB(BB, TB)
          };
        for (const GB of BB.rootNodes) oB(GB, null);
        this.primitives = BB.nodes.flatMap((BB => {
          var IB;
          return null !== (IB = this.own.get(BB)) && void 0 !== IB ? IB : []
        }))
      }
      decodeGeometries() {
        const BB = new Map;
        return Promise.all(this.primitives.map((async IB => {
          const {
            primitive: ZB
          } = IB, TB = ZB.draco;
          let JB = TB ? BB.get(TB.bufferView.index) : Promise.resolve(PB(ZB));
          JB || (JB = pB(ZB, this.decode).then((BB => rB(ZB, BB))), BB.set(TB.bufferView.index, JB)), IB.geometry = await JB
        })))
      }
      parentOf(BB) {
        var IB;
        return null !== (IB = this.parents.get(BB)) && void 0 !== IB ? IB : null
      }
      meshesUnder(BB) {
        const IB = this.model.nodes.filter((BB => this.uses.has(BB)));
        for (const TB of IB) {
          const IB = this.uses.get(TB),
            ZB = IB.find((IB => IB.name === BB));
          if (ZB) return 1 === IB.length ? this.subtree(TB) : this.own.get(TB).includes(ZB) ? [ZB] : []
        }
        const ZB = IB.find((IB => 1 !== this.uses.get(IB).length && LB(IB) === BB));
        return ZB ? this.subtree(ZB) : null
      }
      subtree(BB) {
        return [...this.own.get(BB), ...BB.children.flatMap((BB => this.subtree(this.model.nodes[BB])))]
      }
      worldMatrix(BB, IB, ZB) {
        let TB = EB(xB(IB ? eB : {}), null);
        const JB = [];
        for (let GB = BB.part ? BB.node : this.parentOf(BB.node); GB; GB = this.parentOf(GB)) JB.unshift(GB);
        for (const GB of JB) TB = EB(xB(GB), TB);
        const oB = xB(BB.part ? {} : BB.node);
        return void 0 !== ZB && oB.scale.fill(ZB), EB(oB, TB)
      }
      floats(BB) {
        const {
          vertexAttributes: IB,
          vertexCount: ZB
        } = BB.geometry;
        return new Map(IB.map((BB => [BB.kind, (0, sB.f)(BB, ZB)])))
      }
      imageUrl(BB) {
        return function(BB, IB, ZB) {
          let {
            name: TB
          } = IB;
          return `data:${BB}${TB}#image${ZB}`
        }(this.uniqueRootUrl, this.fileInfo, BB)
      }
      textureDesc(BB, IB) {
        var ZB;
        let {
          texture: TB,
          transform: JB
        } = BB;
        const {
          sampler: oB,
          image: GB
        } = this.model.textures[TB], {
          bufferView: vB,
          mimeType: kB,
          name: cB
        } = this.model.images[GB], nB = JB && {
          ...JB.offset ? {
            uOffset: JB.offset[0],
            vOffset: JB.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...JB.rotation ? {
            wAng: -JB.rotation
          } : {},
          ...JB.scale ? {
            uScale: JB.scale[0],
            vScale: JB.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(GB),
          noMipmap: bB(oB),
          invertY: !1,
          samplingMode: lB(oB),
          data: {
            bytes: vB.bytes,
            mimeType: kB,
            label: cB,
            context: `/textures/${TB}`
          },
          sets: {
            wrapU: tB(oB.wrapS),
            wrapV: tB(oB.wrapT),
            ...nB,
            coordinatesIndex: null !== (ZB = null === JB || void 0 === JB ? void 0 : JB.texCoord) && void 0 !== ZB ? ZB : 0,
            hasAlpha: IB
          }
        }
      }
    }
    async function KB(BB, IB, ZB, TB, JB, oB) {
      let GB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const vB = function(BB, IB, ZB) {
          return "string" !== typeof IB ? {
            url: "",
            rootUrl: BB,
            name: ZB()
          } : IB ? IB.startsWith("data:") ? {
            url: IB,
            rootUrl: BB,
            name: ""
          } : BB ? {
            url: BB + IB,
            rootUrl: BB,
            name: IB
          } : {
            url: IB,
            rootUrl: XB(IB),
            name: mB(IB)
          } : {
            url: BB,
            rootUrl: XB(BB),
            name: mB(BB)
          }
        }(ZB, BB, JB),
        kB = {};
      IB.addPendingData(kB);
      try {
        const ZB = iB(await async function(BB, IB) {
            return "string" !== typeof IB ? IB : BB.url.startsWith("data:") ? (0, wB.u)(BB.url) : await (0, wB.w)(BB.url)
          }(vB, BB)),
          kB = new DB(ZB, TB, vB, function(BB, IB) {
            let {
              rootUrl: ZB,
              name: TB
            } = BB;
            return !ZB.startsWith("file:") && TB ? ZB : `${ZB}${IB()}/`
          }(vB, JB));
        return await oB(kB), IB.importedMeshesFiles && (IB.loadingPluginName = "uH", GB && IB.importedMeshesFiles.push(vB.url)), kB
      } finally {
        IB.removePendingData(kB)
      }
    }
    var VB = ZB(37650),
      SB = ZB(37495),
      BI = ZB(37947);

    function II(BB) {
      if (null === BB || void 0 === BB || !BB.min || !BB.max) return null;
      const [IB, ZB, TB] = BB.min, [JB, oB, GB] = BB.max, {
        BoundingInfo: vB,
        rN: kB
      } = (0, VB.e)();
      return new vB(new kB(IB, ZB, TB), new kB(JB, oB, GB))
    }

    function ZI(BB) {
      (0, SB.d)(BB) || (BB.geometry && BB.geometry.useBoundingInfoFromGeometry ? BB._updateBoundingInfo() : BB.refreshBoundingInfo(!0, !0))
    }
    class TI {
      constructor(BB, IB) {
        this.lg = BB, this.decode = IB, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(BB) {
        let IB = this.viewData.get(BB.index);
        return IB || (IB = this.bufferData.then((() => BB.bytes)), this.viewData.set(BB.index, IB)), IB
      }
      viewBuffer(BB) {
        let IB = this.viewBuffers.get(BB.index);
        return IB || (IB = this.viewBytes(BB).then((BB => new((0, VB.e)().UN)(this.lg.PN(), BB, !1))), this.viewBuffers.set(BB.index, IB)), IB
      }
      vertexBuffer(BB, IB) {
        const {
          kind: ZB,
          data: TB
        } = IB, JB = `${BB.index}:${ZB}`;
        let oB = this.vertexBuffers.get(JB);
        if (!oB) {
          const GB = BB.bufferView;
          oB = GB ? this.viewBuffer(GB).then((BB => this.layoutVertexBuffer(BB, IB))) : Promise.resolve(TB).then((BB => new((0, VB.e)().VertexBuffer)(this.lg.PN(), BB, ZB, !1))), this.vertexBuffers.set(JB, oB)
        }
        return oB
      }
      layoutVertexBuffer(BB, IB) {
        let {
          kind: ZB,
          offset: TB,
          stride: JB,
          components: oB,
          glType: GB,
          isNormalized: vB
        } = IB;
        const kB = this.lg.PN();
        return new((0, VB.e)().VertexBuffer)(kB, BB, ZB, !1, void 0, JB, void 0, TB, oB, GB, vB, !0, void 0, !0)
      }
      load(BB, IB, ZB) {
        const TB = (0, SB.d)(ZB),
          JB = BB => {
            TB || (ZB._delayInfo = ZB._delayInfo || [], -1 === ZB._delayInfo.indexOf(BB) && ZB._delayInfo.push(BB))
          },
          oB = IB.draco;
        if (oB) {
          for (const BB in oB.attributeIds) JB(BB);
          let GB = this.dracoGeometry.get(oB.bufferView.index);
          return GB || (GB = this.viewBytes(oB.bufferView).then((async () => {
            let JB;
            try {
              JB = await pB(IB, this.decode)
            } catch (kB) {
              throw new wB.m(`${BB}: ${kB instanceof Error?kB.message:String(kB)}`)
            }
            const oB = rB(IB, JB);
            if (TB) return oB;
            const GB = II(IB.position),
              vB = new((0, VB.e)().MirroredGeometry)(ZB.name, this.lg);
            GB && (vB._boundingInfo = GB, vB.useBoundingInfoFromGeometry = !0), oB.indexData && vB.setIndices(oB.indexData);
            for (const BB of oB.vertexAttributes) vB.setVerticesBuffer(this.layoutVertexBuffer(BB.data, BB), oB.vertexCount);
            return vB.link(oB), vB
          })), this.dracoGeometry.set(oB.bufferView.index, GB)), GB
        }
        const GB = [],
          vB = PB(IB);
        if (TB) return ZB.isUnIndexed = !vB.indexData, ZB.hasVertexAlpha = (0, BI.c)(IB), Promise.resolve(vB);
        const kB = new((0, VB.e)().MirroredGeometry)(ZB.name, this.lg),
          {
            indexData: cB
          } = vB;
        cB ? GB.push(this.viewBytes(IB.indices.bufferView).then((() => {
          kB.setIndices(cB)
        }))) : ZB.isUnIndexed = !0;
        for (const [nB, {
            kind: hB,
            accessor: zB
          }] of IB.attributes.entries()) JB(hB), GB.push(this.vertexBuffer(zB, vB.vertexAttributes[nB]).then((BB => {
          if ("position" === BB.getKind()) {
            const BB = II(zB);
            BB && (kB._boundingInfo = BB, kB.useBoundingInfoFromGeometry = !0)
          }
          kB.setVerticesBuffer(BB, vB.vertexCount)
        })));
        return (0, BI.c)(IB) && (ZB.hasVertexAlpha = !0), Promise.all(GB).then((() => (kB.link(vB), kB)))
      }
    }
    var JI, oI = ZB(37359),
      GI = ZB(37113),
      vI = ZB(37956),
      kI = ZB(37296),
      cI = ZB(37336),
      nI = ZB(2912),
      hI = ZB(37328);

    function zI(BB, IB) {
      BB.metadata = BB.metadata || {};
      const ZB = BB._internalMetadata = BB._internalMetadata || {},
        TB = ZB.uH = ZB.uH || {};
      (TB.pointers = TB.pointers || []).push(IB)
    }

    function FI(BB, IB) {
      if (IB && Object.keys(IB).length > 0) {
        const ZB = BB.metadata = BB.metadata || {};
        (ZB.uH = ZB.uH || {}).extras = IB
      }
    }

    function NI(BB, IB) {
      IB.position = BB.translation ? GI.rN.FromArray(BB.translation) : GI.rN.Zero(), IB.rotationQuaternion = BB.rotation ? GI.Quaternion.FromArray(BB.rotation) : GI.Quaternion.Identity(), IB.ek = BB.scale ? GI.rN.FromArray(BB.scale) : GI.rN.One()
    }
    class gI {
      constructor(BB, IB) {
        if (this.lg = BB, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, IB) {
          const IB = BB.PN(),
            ZB = BB.oR.add((() => {
              this.dispose()
            })),
            TB = IB.jN.add((() => {
              for (const BB of [...this.geometries, ...this.meshes, ...this.textures]) BB._rebuild()
            }));
          this.release = () => {
            BB.oR.remove(ZB), IB.jN.remove(TB)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const BB of this.meshes) this.lg.jTB(BB);
          for (const BB of this.materials) this.lg.addMaterial(BB);
          for (const BB of this.geometries) this.lg.addGeometry(BB);
          for (const BB of this.transformNodes) this.lg.addTransformNode(BB);
          for (const BB of this.textures) this.lg.addTexture(BB)
        }
      }
      dispose() {
        var BB;
        for (const IB of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const BB of IB.slice()) BB.dispose();
          IB.length = 0
        }
        null === (BB = this.release) || void 0 === BB || BB.call(this), this.release = null
      }
    }
    class qI {
      constructor(BB, IB, ZB, TB, JB, oB, GB) {
        this.asset = BB, this.lg = IB, this.tree = ZB, this.geometryData = JB, this.materials = oB, this.lite = GB, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = TB ? ZB : null
      }
      create(BB) {
        if (this.lite) return BB();
        const IB = this.lg;
        IB._blockEntityCollection = !!this.container;
        try {
          const IB = BB();
          return this.container && (IB._parentContainer = this.container), IB
        } finally {
          IB._blockEntityCollection = !1
        }
      }
      node(BB, IB) {
        return this.create((() => this.lite ? IB ? (0, vI.e)(this.lite, BB) : (0, vI.p)(this.lite, BB) : IB ? new((0, VB.e)().Mesh)(BB, this.lg) : new((0, VB.e)().TransformNode)(BB, this.lg)))
      }
      async load() {
        var BB;
        this.asset.model.json.nodes && this.createRoot();
        const IB = this.lite ? null : this.lg,
          ZB = null !== (BB = null === IB || void 0 === IB ? void 0 : IB.blockMaterialDirtyMechanism) && void 0 !== BB && BB;
        let TB;
        IB && (IB.blockMaterialDirtyMechanism = !0);
        try {
          TB = this.loadScene()
        } finally {
          null === IB || void 0 === IB || IB._forceBlockMaterialDirtyMechanism(ZB)
        }
        await TB;
        const {
          root: JB,
          tree: oB
        } = this;
        JB && (JB.qY(!0), oB.meshes.push(JB), oB.rootNodes.push(JB));
        for (const vB of this.asset.model.nodes) {
          const BB = this.nodeObjects.get(vB.index);
          BB && ["TransformNode", "LiteNode"].includes(BB.getClassName()) && oB.transformNodes.push(BB);
          for (const IB of null !== (GB = this.nodePrimitives.get(vB.index)) && void 0 !== GB ? GB : []) {
            var GB;
            oB.meshes.push(IB);
            const BB = IB.geometry;
            BB && !oB.geometries.includes(BB) && oB.geometries.push(BB)
          }
        }
      }
      createRoot() {
        const BB = this.node("__root__", !0);
        this.root = BB, BB.qY(!1), this.lg.useRightHandedSystem || NI(eB, BB)
      }
      loadScene() {
        const BB = [];
        for (const IB of this.asset.model.rootNodes) BB.push(this.loadNode(this.asset.model.nodes[IB], (BB => {
          BB.parent = this.root
        })));
        return BB.push(Promise.resolve()), Promise.all(BB).then((() => {}))
      }
      loadNode(BB, IB) {
        const ZB = `/nodes/${BB.index}`,
          TB = [],
          JB = JB => {
            if (zI(JB, ZB), NI(BB, JB), BB.hasCamera && !this.lg.useRightHandedSystem) {
              const {
                ek: BB
              } = JB;
              BB.set(-1, BB.y, BB.z)
            }
            for (const IB of BB.children) TB.push(this.loadNode(this.asset.model.nodes[IB], (BB => {
              BB.parent = JB
            })));
            (ZB => {
              FI(ZB, BB.extras), IB(ZB)
            })(JB)
          };
        if (null === BB.mesh) {
          const IB = this.node(LB(BB), !1);
          this.nodeObjects.set(BB.index, IB), JB(IB)
        } else {
          const IB = this.asset.model.meshes[BB.mesh];
          TB.push(this.loadMesh(`/meshes/${IB.index}`, BB, IB, JB))
        }
        return Promise.all(TB).then((() => {
          for (const ZB of null !== (IB = this.nodePrimitives.get(BB.index)) && void 0 !== IB ? IB : []) {
            var IB;
            ZI(ZB)
          }
          return this.nodeObjects.get(BB.index)
        }))
      }
      loadMesh(BB, IB, ZB, TB) {
        const JB = [],
          oB = LB(IB);
        if (1 === ZB.primitives.length) {
          const TB = ZB.primitives[0];
          JB.push(this.loadPrimitive(`${BB}/primitives/${TB.index}`, oB, TB, (BB => {
            this.nodeObjects.set(IB.index, BB), this.nodePrimitives.set(IB.index, [BB])
          })))
        } else {
          const TB = this.node(oB, !1);
          this.nodeObjects.set(IB.index, TB);
          const GB = [];
          this.nodePrimitives.set(IB.index, GB);
          for (const IB of ZB.primitives) JB.push(this.loadPrimitive(`${BB}/primitives/${IB.index}`, `${oB}_primitive${IB.index}`, IB, (BB => {
            BB.parent = TB, GB.push(BB)
          })))
        }
        const GB = this.nodeObjects.get(IB.index);
        return TB(GB), Promise.all(JB).then((() => GB))
      }
      loadPrimitive(BB, IB, ZB, TB) {
        const JB = [],
          oB = this.node(IB, !0);
        if (oB.sideOrientation = this.lg.useRightHandedSystem ? kI.d.CounterClockWiseSideOrientation : kI.d.ClockWiseSideOrientation, JB.push(this.geometryData.load(BB, ZB, oB).then((BB => {
            if ((0, SB.d)(oB)) {
              var IB, ZB;
              const TB = BB;
              oB.replaceModel(TB, Int32Array.of(0, null !== (IB = null === (ZB = TB.indexData) || void 0 === ZB ? void 0 : ZB.length) && void 0 !== IB ? IB : TB.vertexCount, 0, TB.vertexCount))
            } else this.create((() => (BB.applyToMesh(oB), BB)))
          }))), this.materials) {
          const BB = 0 === ZB.mode ? kI.d.PointListDrawMode : kI.d.TriangleFillMode,
            IB = null === ZB.material ? null : this.asset.model.materials[ZB.material];
          JB.push(this.loadMaterial(IB, BB, (BB => {
            oB.material = BB
          })))
        }
        return zI(oB, BB), TB(oB), Promise.all(JB).then((() => oB))
      }
      loadMaterial(BB, IB, ZB) {
        var TB;
        const JB = `${null!==(TB=null===BB||void 0===BB?void 0:BB.index)&&void 0!==TB?TB:"default"}:${IB}`;
        let oB = this.materialData.get(JB);
        return oB || (oB = this.createMaterial(BB, IB), this.materialData.set(JB, oB)), ZB(oB.material), oB.promise
      }
      createMaterial(BB, IB) {
        const ZB = BB ? BB.name || `material${BB.index}` : "__GLTFLoader._default",
          {
            style: TB,
            unlit: JB
          } = this.materials;
        let oB;
        const GB = this.create((() => {
          const GB = (0, hI.d)({
            name: ZB,
            lg: this.lg,
            sets: {
              ...(0, BI.b)(this.asset, BB, TB, JB),
              fillMode: IB
            },
            unrendered: !0
          });
          return oB = GB.model, GB.mirror
        }));
        let vB = Promise.resolve();
        if (BB) {
          const IB = `/materials/${BB.index}`,
            TB = oB.diffuseTexture;
          if (TB && !TB.mirror) vB = new Promise((BB => setTimeout(BB)));
          else if (TB) {
            const JB = TB.mirror;
            JB._parentContainer = this.container, JB.name = `${ZB} (Base Color)`, zI(JB, `${IB}${BB.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(JB), vB = (0, cI.v)(TB)
          }
          FI(GB, BB.extras), zI(GB, IB)
        }
        return this.tree.materials.push(GB), {
          material: GB,
          promise: vB
        }
      }
    }

    function yI() {
      oI.e.dracoDecodes = gB.decodes, oI.e.dracoWorkersStarted = gB.workersStarted, oI.e.dracoMostWorkers = gB.mostWorkers
    }
    async function UI(BB, IB, ZB, JB, oB) {
      try {
        return await async function(BB, IB, ZB, JB, oB, GB) {
          var vB;
          let kB;
          const cB = null === (vB = (0, nI.h)()) || void 0 === vB ? void 0 : vB.Ig,
            nB = null !== cB && void 0 !== cB && cB.Zg && IB === cB.JR() ? cB : null,
            hB = oB && !nB;
          return await KB(BB, IB, ZB, JB, TB.d, (BB => (kB = new gI(IB, hB), new qI(BB, IB, kB, hB, new TI(IB, JB), GB, nB).load())), !oB), kB
        }(BB, IB, ZB, CB, JB, oB)
      } finally {
        yI()
      }
    }
    async function WI(BB, IB, ZB, JB) {
      try {
        return await KB(BB, IB, ZB, CB, TB.d, (BB => JB(BB, new TI(IB, CB))))
      } finally {
        yI()
      }
    }
    JI = JB.c, nB || (nB = {
      scriptUrl: new URL(JI.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(JI.wasmBinaryUrl, location.href).href
    })
  },
  41530: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB
    });
    var TB = ZB(140),
      JB = ZB(1131);

    function oB(BB) {
      return (0, TB.isDiscordClient)() ? `https://${JB.e.discordDomain}/${BB.href}` : BB.href
    }
    const GB = {
      scriptUrl: oB(new ZB.U(ZB(41539))),
      wasmBinaryUrl: oB(new ZB.U(ZB(41544)))
    }
  },
  36267: BB => {
    BB.exports = function(BB, IB, ZB, TB) {
      var JB = self || window;
      try {
        try {
          var oB;
          try {
            oB = new JB.Blob([BB])
          } catch (cB) {
            (oB = new(JB.BlobBuilder || JB.WebKitBlobBuilder || JB.MozBlobBuilder || JB.MSBlobBuilder)).append(BB), oB = oB.getBlob()
          }
          var GB = JB.URL || JB.webkitURL,
            vB = GB.createObjectURL(oB),
            kB = new JB[IB](vB, ZB);
          return GB.revokeObjectURL(vB), kB
        } catch (cB) {
          return new JB[IB]("data:application/javascript,".concat(encodeURIComponent(BB)), ZB)
        }
      } catch (cB) {
        if (!TB) throw Error("Inline worker is not supported");
        return new JB[IB](TB, ZB)
      }
    }
  },
  41539: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41544: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);