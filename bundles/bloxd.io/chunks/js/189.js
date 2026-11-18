export const id = 189;
export const ids = [189];
export const modules = {
  40230: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      loadGlbAsset: () => ET,
      loadGlbTree: () => HT
    });
    var VB = dB(36822),
      yB = dB(40235),
      pB = dB(35308),
      lB = dB.n(pB);

    function JB() {
      return lB()('(()=>{class BB extends Error{}function TB(TB,dB){const VB=TB._malloc(dB);if(0===VB)throw new BB(`Draco: the decoder\'s heap refused ${dB} bytes`);return VB}function dB(BB){return{[BB.DT_FLOAT32]:[Float32Array,5126],[BB.DT_INT8]:[Int8Array,5120],[BB.DT_INT16]:[Int16Array,5122],[BB.DT_INT32]:[Int32Array,5124],[BB.DT_UINT8]:[Uint8Array,5121],[BB.DT_UINT16]:[Uint16Array,5123],[BB.DT_UINT32]:[Uint32Array,5125]}}function VB(TB,VB,yB,pB,lB){let JB=null,YB=null,gB=null;try{JB=new TB.Decoder,YB=new TB.DecoderBuffer,YB.Init(VB,VB.byteLength);let oB=0;const kB=JB.GetEncodedGeometryType(YB);if(kB===TB.TRIANGULAR_MESH){const dB=new TB.Mesh;gB=dB;const VB=JB.DecodeBufferToMesh(YB,dB);if(!VB.ok()||0===dB.ptr)throw new BB(VB.error_msg());oB=3*dB.num_faces()}else{if(kB!==TB.POINT_CLOUD)throw new BB(`Draco: Cannot decode invalid geometry type ${kB}`);{const dB=new TB.PointCloud;gB=dB;const VB=JB.DecodeBufferToPointCloud(YB,dB);if(!VB.ok()||!dB.ptr)throw new BB(VB.error_msg())}}const LB=gB.num_points();if(LB!==pB.vertices||oB!==pB.indices)throw new BB(`Draco: decoded ${LB} vertices and ${oB} indices, the accessors declare ${pB.vertices} and ${pB.indices}`);const OB=dB(TB),DB=[];for(const{kind:TB,id:dB,components:VB}of yB){const yB=JB.GetAttributeByUniqueId(gB,dB);if(!yB||0===yB.ptr)throw new BB(`Draco: no attribute with id ${dB} (${TB})`);const pB=yB.data_type();if(!OB[pB])throw new BB(`Draco: Cannot decode invalid data type ${pB}`);if(yB.num_components()!==VB)throw new BB(`Draco: ${TB} decodes to ${yB.num_components()} components, its accessor declares ${VB}`);DB.push([TB,yB,pB])}return lB({dracoDecoder:JB,geometry:gB,triangles:kB===TB.TRIANGULAR_MESH,numPoints:LB,numIndices:oB,attributes:DB})}finally{gB&&TB.destroy(gB),YB&&TB.destroy(YB),JB&&TB.destroy(JB)}}const yB=self;let pB=null;self.onmessage=BB=>{let{data:lB}=BB;if("init"===lB.id){try{importScripts(lB.url),pB=DracoDecoderModule({wasmBinary:lB.wasmBinary}),yB.postMessage({id:"initDone"})}catch(kB){yB.postMessage({id:"initError",message:kB instanceof Error?kB.message:String(kB)})}return}const{seq:JB,data:YB,attributeIds:gB,expected:oB}=lB;pB?pB.then((BB=>{try{const pB=function(BB,yB,pB,lB){const JB=Object.keys(pB).map((BB=>({kind:BB,id:pB[BB],components:lB.components[BB]})));return VB(BB,yB,JB,lB,(VB=>{let{dracoDecoder:yB,geometry:pB,triangles:lB,numPoints:JB,numIndices:YB,attributes:gB}=VB;const oB=dB(BB);let kB=null;if(lB){const dB=4*YB,VB=TB(BB,dB);try{yB.GetTrianglesUInt32Array(pB,dB,VB),kB=new Uint32Array(YB),kB.set(new Uint32Array(BB.HEAPF32.buffer,VB,YB))}finally{BB._free(VB)}}const LB=[];for(const[dB,OB,DB]of gB){const[VB]=oB[DB],lB=OB.num_components(),YB=JB*lB,gB=YB*VB.BYTES_PER_ELEMENT,kB=TB(BB,gB);try{yB.GetAttributeDataArrayForAllPoints(pB,OB,DB,gB,kB),LB.push({kind:dB,data:new VB(BB.HEAPF32.buffer,kB,YB).slice(),size:lB,byteOffset:OB.byte_offset(),byteStride:OB.byte_stride(),normalized:OB.normalized()})}finally{BB._free(kB)}}return{indices:kB,attributes:LB,totalVertices:JB}}))}(BB,YB,gB,oB),lB=pB.attributes.map((BB=>BB.data.buffer));pB.indices&&lB.push(pB.indices.buffer),yB.postMessage({id:"decoded",seq:JB,...pB},lB)}catch(kB){yB.postMessage({id:"decodeError",seq:JB,message:kB instanceof Error?kB.message:String(kB)})}}),(BB=>{yB.postMessage({id:"decodeError",seq:JB,message:BB instanceof Error?BB.message:String(BB)})})):yB.postMessage({id:"decodeError",seq:JB,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, dB.p + "dracoDecode.worker.5148e5d9.worker.js")
    }
    const YB = 1e3;
    let gB = null,
      oB = null;
    const kB = [],
      LB = [];
    let OB = 0;
    const DB = {
      decodes: 0,
      workersStarted: 0,
      mostWorkers: 0
    };

    function uB() {
      if (!gB) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: BB,
        wasmBinaryUrl: TB
      } = gB;
      return oB ??= fetch(TB).then((BB => {
        if (!BB.ok) throw new Error(`Draco: fetching ${TB} failed: ${BB.status}`);
        return BB.arrayBuffer()
      })), oB.catch((() => {
        oB = null
      })), DB.workersStarted++, oB.then((TB => new Promise(((dB, VB) => {
        const yB = new JB;
        yB.onerror = BB => {
          yB.onmessage = null, yB.onerror = null, yB.terminate(), VB(new Error("Draco: the decode worker failed to start" + (BB.message ? `: ${BB.message}` : " (its script did not load)")))
        }, yB.onmessage = BB => {
          let {
            data: TB
          } = BB;
          yB.onmessage = null, yB.onerror = null, "initDone" === TB.id ? dB(yB) : (yB.terminate(), VB(new Error(`Draco: ${"initError"===TB.id?TB.message:"the worker did not start"}`)))
        };
        const pB = TB.slice(0),
          lB = {
            id: "init",
            url: BB,
            wasmBinary: pB
          };
        yB.postMessage(lB, [pB])
      }))))
    }

    function HB(BB) {
      const TB = kB.indexOf(BB); - 1 !== TB && kB.splice(TB, 1);
      const dB = LB.shift();
      dB && vB(dB)
    }

    function EB(BB, TB) {
      BB.busy = !0, BB.releaseTimer && (clearTimeout(BB.releaseTimer), BB.releaseTimer = null);
      BB.worker.then((dB => {
        const VB = OB++;
        dB.onmessage = yB => {
          let {
            data: pB
          } = yB;
          if (("decoded" === pB.id || "decodeError" === pB.id) && pB.seq === VB) {
            if (dB.onmessage = null, dB.onerror = null, "decoded" === pB.id) return DB.decodes++, TB.resolve({
              indices: pB.indices,
              attributes: pB.attributes,
              totalVertices: pB.totalVertices
            }), void(() => {
              const TB = LB.shift();
              TB ? EB(BB, TB) : (BB.busy = !1, BB.releaseTimer = setTimeout((() => {
                const TB = kB.indexOf(BB); - 1 !== TB && kB.splice(TB, 1), BB.worker.then((BB => {
                  BB.terminate()
                }))
              }), YB))
            })();
            dB.terminate(), TB.reject(new Error(pB.message)), HB(BB)
          }
        }, dB.onerror = VB => {
          dB.onmessage = null, dB.onerror = null, dB.terminate(), TB.reject(new Error(`Draco: the decode worker failed: ${VB.message}`)), HB(BB)
        };
        const yB = {
          id: "decode",
          seq: VB,
          data: TB.data,
          attributeIds: TB.attributeIds,
          expected: TB.expected
        };
        dB.postMessage(yB, [TB.data.buffer])
      }), (dB => {
        TB.reject(dB instanceof Error ? dB : new Error(String(dB))), HB(BB)
      }))
    }

    function vB(BB) {
      const TB = kB.find((BB => !BB.busy));
      if (TB) EB(TB, BB);
      else {
        if (kB.length < function() {
            const BB = "object" === typeof navigator ? navigator.hardwareConcurrency : 0;
            return BB ? Math.max(1, Math.min(Math.floor(.5 * BB), 4)) : 1
          }()) {
          const TB = {
            worker: uB(),
            busy: !0,
            releaseTimer: null
          };
          return kB.push(TB), DB.mostWorkers = Math.max(DB.mostWorkers, kB.length), void EB(TB, BB)
        }
        LB.push(BB)
      }
    }

    function mB(BB, TB, dB) {
      return new Promise(((VB, yB) => {
        vB({
          data: new Int8Array(BB.buffer, BB.byteOffset, BB.byteLength).slice(),
          attributeIds: TB,
          expected: dB,
          resolve: VB,
          reject: yB
        })
      }))
    }
    var iB = dB(36321),
      NB = dB(36331),
      tB = dB(8634),
      fB = dB(8629);
    const sB = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function MB(BB) {
      const TB = (0, fB.i)(BB.byteLength);
      if (TB) throw new tB.n(TB);
      const {
        json: dB,
        bin: VB
      } = (0, tB.y)(BB), yB = (0, fB.f)(dB, VB);
      if (yB) throw new tB.n(yB);
      try {
        return function(BB, TB) {
          var dB, VB, yB, pB, lB, JB, YB, gB, oB, kB, LB, OB, DB, uB, HB;
          const EB = new Map,
            vB = dB => {
              let VB = EB.get(dB);
              if (!VB) {
                var yB;
                const pB = BB.bufferViews[dB],
                  lB = null !== (yB = pB.byteOffset) && void 0 !== yB ? yB : 0;
                VB = {
                  index: dB,
                  bytes: TB.subarray(lB, lB + pB.byteLength),
                  byteStride: pB.byteStride
                }, EB.set(dB, VB)
              }
              return VB
            },
            mB = new Map,
            iB = TB => {
              let dB = mB.get(TB);
              if (!dB) {
                var VB;
                const yB = BB.accessors[TB];
                dB = {
                  index: TB,
                  count: yB.count,
                  type: yB.type,
                  numComponents: tB.r[yB.type],
                  componentType: yB.componentType,
                  normalized: null !== (VB = yB.normalized) && void 0 !== VB && VB,
                  byteOffset: yB.byteOffset,
                  bufferView: void 0 === yB.bufferView ? null : vB(yB.bufferView),
                  min: yB.min,
                  max: yB.max
                }, mB.set(TB, dB)
              }
              return dB
            },
            NB = null !== (dB = null === (VB = BB.extensionsUsed) || void 0 === VB ? void 0 : VB.includes("KHR_draco_mesh_compression")) && void 0 !== dB && dB,
            fB = (null !== (yB = BB.meshes) && void 0 !== yB ? yB : []).map(((TB, dB) => {
              const VB = TB.primitives.map(((TB, dB) => {
                var VB, yB, pB;
                const lB = NB ? null === (VB = TB.extensions) || void 0 === VB ? void 0 : VB.KHR_draco_mesh_compression : void 0;
                let JB = null;
                const YB = [];
                if (lB) {
                  const dB = {
                    vertices: BB.accessors[TB.attributes.POSITION].count,
                    indices: void 0 === TB.indices ? 0 : BB.accessors[TB.indices].count,
                    components: {}
                  };
                  JB = {
                    bufferView: vB(lB.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: dB
                  };
                  for (const [VB, yB] of tB.j) {
                    const pB = lB.attributes[VB];
                    if (void 0 === pB) continue;
                    JB.attributeIds[yB] = pB;
                    const YB = TB.attributes[VB];
                    var gB;
                    if (void 0 !== YB) JB.normalized[yB] = null !== (gB = BB.accessors[YB].normalized) && void 0 !== gB && gB, dB.components[yB] = tB.r[BB.accessors[YB].type]
                  }
                } else
                  for (const [BB, oB] of tB.j) {
                    const dB = TB.attributes[BB];
                    void 0 !== dB && YB.push({
                      semantic: BB,
                      kind: oB,
                      accessor: iB(dB)
                    })
                  }
                return {
                  index: dB,
                  mode: null !== (yB = TB.mode) && void 0 !== yB ? yB : 4,
                  attributes: YB,
                  indices: lB || void 0 === TB.indices ? null : iB(TB.indices),
                  position: void 0 === TB.attributes.POSITION ? null : iB(TB.attributes.POSITION),
                  material: null !== (pB = TB.material) && void 0 !== pB ? pB : null,
                  draco: JB
                }
              }));
              return {
                index: dB,
                name: TB.name,
                primitives: VB,
                extras: TB.extras
              }
            })),
            MB = (null !== (pB = BB.nodes) && void 0 !== pB ? pB : []).map(((BB, TB) => {
              var dB, VB;
              return {
                index: TB,
                name: BB.name,
                children: null !== (dB = BB.children) && void 0 !== dB ? dB : [],
                mesh: null !== (VB = BB.mesh) && void 0 !== VB ? VB : null,
                translation: BB.translation,
                rotation: BB.rotation,
                scale: BB.scale,
                hasCamera: void 0 !== BB.camera,
                extras: BB.extras
              }
            })),
            zB = null !== (lB = null === (JB = BB.extensionsUsed) || void 0 === JB ? void 0 : JB.includes("KHR_materials_unlit")) && void 0 !== lB && lB,
            wB = null !== (YB = null === (gB = BB.extensionsUsed) || void 0 === gB ? void 0 : gB.includes("KHR_texture_transform")) && void 0 !== YB && YB,
            UB = (null !== (oB = BB.materials) && void 0 !== oB ? oB : []).map(((BB, TB) => {
              var dB, VB, yB, pB;
              const lB = BB.pbrMetallicRoughness,
                JB = null === lB || void 0 === lB ? void 0 : lB.baseColorTexture;
              return {
                index: TB,
                name: BB.name,
                extras: BB.extras,
                unlit: zB && void 0 !== (null === (dB = BB.extensions) || void 0 === dB ? void 0 : dB.KHR_materials_unlit),
                pbr: lB ? {
                  baseColorFactor: lB.baseColorFactor,
                  metallicFactor: lB.metallicFactor,
                  roughnessFactor: lB.roughnessFactor
                } : null,
                baseColorTexture: JB ? {
                  texture: JB.index,
                  transform: wB && (null === (VB = JB.extensions) || void 0 === VB ? void 0 : VB.KHR_texture_transform) || null
                } : null,
                emissiveFactor: BB.emissiveFactor,
                alphaMode: null !== (yB = BB.alphaMode) && void 0 !== yB ? yB : "OPAQUE",
                alphaCutoff: BB.alphaCutoff,
                doubleSided: null !== (pB = BB.doubleSided) && void 0 !== pB && pB
              }
            })),
            FB = (null !== (kB = BB.textures) && void 0 !== kB ? kB : []).map(((TB, dB) => {
              var VB, yB;
              const pB = void 0 === TB.sampler ? sB : {
                index: TB.sampler,
                ...null === (VB = BB.samplers) || void 0 === VB ? void 0 : VB[TB.sampler]
              };
              return {
                index: dB,
                sampler: {
                  index: pB.index,
                  magFilter: pB.magFilter,
                  minFilter: pB.minFilter,
                  wrapS: pB.wrapS,
                  wrapT: pB.wrapT
                },
                image: null !== (yB = TB.source) && void 0 !== yB ? yB : -1
              }
            })),
            KB = (null !== (LB = BB.images) && void 0 !== LB ? LB : []).map(((BB, TB) => ({
              index: TB,
              name: BB.name,
              mimeType: BB.mimeType,
              bufferView: vB(BB.bufferView)
            }))),
            rB = null !== (OB = (0, tB.x)(BB)) && void 0 !== OB ? OB : 0;
          return {
            json: BB,
            rootNodes: null !== (DB = null === (uB = BB.scenes) || void 0 === uB || null === (HB = uB[rB]) || void 0 === HB ? void 0 : HB.nodes) && void 0 !== DB ? DB : [],
            nodes: MB,
            meshes: fB,
            materials: UB,
            textures: FB,
            images: KB
          }
        }(dB, VB)
      } catch (pB) {
        throw pB instanceof tB.l ? pB : new tB.l(`reading the GLB failed: ${pB instanceof Error?pB.message:String(pB)}`)
      }
    }
    async function zB(BB, TB) {
      var dB, VB;
      const yB = BB.draco;
      if (!yB) throw new tB.l("not a Draco primitive");
      let pB;
      try {
        pB = await TB(yB.bufferView.bytes, yB.attributeIds, yB.expected)
      } catch (gB) {
        throw new tB.l(`Draco decoding failed: ${gB instanceof Error?gB.message:String(gB)}`)
      }
      const {
        vertices: lB,
        indices: JB,
        components: YB
      } = yB.expected;
      if (pB.totalVertices !== lB || (null !== (dB = null === (VB = pB.indices) || void 0 === VB ? void 0 : VB.length) && void 0 !== dB ? dB : 0) !== JB || pB.attributes.some((BB => BB.size !== YB[BB.kind] || BB.data.length !== lB * BB.size))) throw new tB.l("Draco decoding gave other counts than the accessors declare");
      for (const oB of pB.attributes) {
        const BB = yB.normalized[oB.kind];
        void 0 !== BB && (oB.normalized = BB)
      }
      return pB
    }
    const wB = new WeakMap;

    function UB(BB, TB) {
      var dB;
      const VB = null !== (dB = wB.get(BB)) && void 0 !== dB ? dB : TB(BB);
      return wB.set(BB, VB), VB
    }

    function FB(BB) {
      const TB = BB.bufferView,
        dB = 5125 === BB.componentType ? Uint32Array : Uint16Array,
        VB = TB.bytes.buffer,
        yB = TB.bytes.byteOffset + (BB.byteOffset || 0);
      return yB % dB.BYTES_PER_ELEMENT !== 0 ? new dB(VB.slice(yB, yB + BB.count * dB.BYTES_PER_ELEMENT), 0) : new dB(VB, yB, BB.count)
    }

    function KB(BB, TB) {
      if (BB.min && BB.max) return [new Float64Array(BB.min), new Float64Array(BB.max)];
      const dB = TB.find((BB => {
          let {
            kind: TB
          } = BB;
          return "position" === TB
        })),
        VB = dB ? (0, NB.h)(dB, BB.count) : new Float32Array(0);
      return (0, NB.q)(VB.length / 3, ((BB, TB) => VB[3 * BB + TB]))
    }

    function rB(BB) {
      const TB = BB.attributes.map((BB => {
          var TB, dB;
          let {
            kind: VB,
            accessor: yB
          } = BB;
          const {
            bufferView: pB,
            numComponents: lB
          } = yB;
          if (!pB) {
            return {
              kind: VB,
              data: UB(yB, (() => new Float32Array(lB * yB.count))),
              offset: 0,
              stride: 4 * lB,
              components: lB,
              glType: 5126,
              isNormalized: !1
            }
          }
          const JB = null !== (TB = pB.byteStride) && void 0 !== TB ? TB : lB * tB.c[yB.componentType];
          return {
            kind: VB,
            data: pB.bytes,
            offset: null !== (dB = yB.byteOffset) && void 0 !== dB ? dB : 0,
            stride: JB,
            components: lB,
            glType: yB.componentType,
            isNormalized: yB.normalized
          }
        })),
        dB = BB.indices,
        VB = dB && UB(dB, FB),
        yB = BB.position;
      return new NB.g(TB, VB, yB.count, ...KB(yB, TB))
    }
    const IB = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function cB(BB, TB) {
      const dB = TB.attributes.map((BB => {
        let {
          kind: TB,
          data: dB,
          size: VB,
          byteOffset: yB,
          byteStride: pB,
          normalized: lB
        } = BB;
        return {
          kind: TB,
          data: dB,
          offset: yB,
          stride: pB,
          components: VB,
          glType: 5120 + IB.indexOf(dB.constructor),
          isNormalized: lB
        }
      }));
      return new NB.g(dB, TB.indices, TB.totalVertices, ...KB(BB.position, dB))
    }

    function SB(BB) {
      const TB = BB.lastIndexOf("/");
      return TB < 0 ? BB : BB.substring(TB + 1)
    }

    function PB(BB) {
      const TB = BB.lastIndexOf("/");
      return TB < 0 ? "" : BB.substring(0, TB + 1)
    }

    function QB(BB) {
      return BB.name || `node${BB.index}`
    }
    const RB = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      aB = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      ZB = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function XB(BB) {
      var TB, dB, VB, yB;
      const pB = null !== (TB = BB.minFilter) && void 0 !== TB ? TB : 9987;
      return 9729 === (null !== (dB = BB.magFilter) && void 0 !== dB ? dB : 9729) ? null !== (VB = aB[pB]) && void 0 !== VB ? VB : 3 : null !== (yB = ZB[pB]) && void 0 !== yB ? yB : 4
    }
    const WB = {
      33071: 0,
      33648: 2
    };

    function hB(BB) {
      var TB;
      return null !== (TB = WB[null !== BB && void 0 !== BB ? BB : 10497]) && void 0 !== TB ? TB : 1
    }

    function CB(BB) {
      return 9728 === BB.minFilter || 9729 === BB.minFilter
    }

    function GB(BB) {
      var TB, dB, VB;
      const yB = Float64Array.from(null !== (TB = BB.scale) && void 0 !== TB ? TB : [1, 1, 1]);
      return BB.hasCamera && (yB[0] = -1), {
        translation: Float64Array.from(null !== (dB = BB.translation) && void 0 !== dB ? dB : [0, 0, 0]),
        rotation: Float64Array.from(null !== (VB = BB.rotation) && void 0 !== VB ? VB : [0, 0, 0, 1]),
        scale: yB
      }
    }

    function qB(BB, TB) {
      let {
        translation: dB,
        rotation: VB,
        scale: yB
      } = BB;
      const pB = new Float32Array(16);
      return (0, iB.e)(yB, 0, VB, 0, dB, 0, pB), TB && (0, iB.n)(pB, TB, 0, pB), pB
    }
    class xB {
      constructor(BB, TB, dB, VB) {
        this.model = BB, this.decode = TB, this.fileInfo = dB, this.uniqueRootUrl = VB, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const yB = new Set,
          pB = (TB, dB) => {
            const VB = BB.nodes[TB];
            if (this.parents.has(VB)) throw new tB.l(`/nodes/${TB}: Invalid recursive node hierarchy`);
            this.parents.set(VB, dB);
            const lB = null === VB.mesh ? [] : BB.meshes[VB.mesh].primitives,
              JB = lB.map((BB => {
                const TB = lB.length > 1;
                return {
                  name: TB ? `${QB(VB)}_primitive${BB.index}` : QB(VB),
                  node: VB,
                  primitive: BB,
                  part: TB,
                  geometry: null
                }
              }));
            this.uses.set(VB, JB);
            const YB = null !== VB.mesh && yB.has(VB.mesh);
            yB.add(VB.mesh), this.own.set(VB, YB ? [] : JB);
            for (const BB of VB.children) pB(BB, VB)
          };
        for (const lB of BB.rootNodes) pB(lB, null);
        this.primitives = BB.nodes.flatMap((BB => {
          var TB;
          return null !== (TB = this.own.get(BB)) && void 0 !== TB ? TB : []
        }))
      }
      decodeGeometries() {
        const BB = new Map;
        return Promise.all(this.primitives.map((async TB => {
          const {
            primitive: dB
          } = TB, VB = dB.draco;
          let yB = VB ? BB.get(VB.bufferView.index) : Promise.resolve(rB(dB));
          yB || (yB = zB(dB, this.decode).then((BB => cB(dB, BB))), BB.set(VB.bufferView.index, yB)), TB.geometry = await yB
        })))
      }
      parentOf(BB) {
        var TB;
        return null !== (TB = this.parents.get(BB)) && void 0 !== TB ? TB : null
      }
      meshesUnder(BB) {
        const TB = this.model.nodes.filter((BB => this.uses.has(BB)));
        for (const VB of TB) {
          const TB = this.uses.get(VB),
            dB = TB.find((TB => TB.name === BB));
          if (dB) return 1 === TB.length ? this.subtree(VB) : this.own.get(VB).includes(dB) ? [dB] : []
        }
        const dB = TB.find((TB => 1 !== this.uses.get(TB).length && QB(TB) === BB));
        return dB ? this.subtree(dB) : null
      }
      subtree(BB) {
        return [...this.own.get(BB), ...BB.children.flatMap((BB => this.subtree(this.model.nodes[BB])))]
      }
      worldMatrix(BB, TB, dB) {
        let VB = qB(GB(TB ? RB : {}), null);
        const yB = [];
        for (let lB = BB.part ? BB.node : this.parentOf(BB.node); lB; lB = this.parentOf(lB)) yB.unshift(lB);
        for (const lB of yB) VB = qB(GB(lB), VB);
        const pB = GB(BB.part ? {} : BB.node);
        return void 0 !== dB && pB.scale.fill(dB), qB(pB, VB)
      }
      floats(BB) {
        const {
          vertexAttributes: TB,
          vertexCount: dB
        } = BB.geometry;
        return new Map(TB.map((BB => [BB.kind, (0, NB.h)(BB, dB)])))
      }
      imageUrl(BB) {
        return function(BB, TB, dB) {
          let {
            name: VB
          } = TB;
          return `data:${BB}${VB}#image${dB}`
        }(this.uniqueRootUrl, this.fileInfo, BB)
      }
      textureDesc(BB, TB) {
        var dB;
        let {
          texture: VB,
          transform: yB
        } = BB;
        const {
          sampler: pB,
          image: lB
        } = this.model.textures[VB], {
          bufferView: JB,
          mimeType: YB,
          name: gB
        } = this.model.images[lB], oB = yB && {
          ...yB.offset ? {
            uOffset: yB.offset[0],
            vOffset: yB.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...yB.rotation ? {
            wAng: -yB.rotation
          } : {},
          ...yB.scale ? {
            uScale: yB.scale[0],
            vScale: yB.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(lB),
          noMipmap: CB(pB),
          invertY: !1,
          samplingMode: XB(pB),
          data: {
            bytes: JB.bytes,
            mimeType: YB,
            label: gB,
            context: `/textures/${VB}`
          },
          sets: {
            wrapU: hB(pB.wrapS),
            wrapV: hB(pB.wrapT),
            ...oB,
            coordinatesIndex: null !== (dB = null === yB || void 0 === yB ? void 0 : yB.texCoord) && void 0 !== dB ? dB : 0,
            hasAlpha: TB
          }
        }
      }
    }
    async function jB(BB, TB, dB, VB, yB, pB) {
      let lB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const JB = function(BB, TB, dB) {
          return "string" !== typeof TB ? {
            url: "",
            rootUrl: BB,
            name: dB()
          } : TB ? TB.startsWith("data:") ? {
            url: TB,
            rootUrl: BB,
            name: ""
          } : BB ? {
            url: BB + TB,
            rootUrl: BB,
            name: TB
          } : {
            url: TB,
            rootUrl: PB(TB),
            name: SB(TB)
          } : {
            url: BB,
            rootUrl: PB(BB),
            name: SB(BB)
          }
        }(dB, BB, yB),
        YB = {};
      TB.addPendingData(YB);
      try {
        const dB = MB(await async function(BB, TB) {
            return "string" !== typeof TB ? TB : BB.url.startsWith("data:") ? (0, tB.u)(BB.url) : await (0, tB.v)(BB.url)
          }(JB, BB)),
          YB = new xB(dB, VB, JB, function(BB, TB) {
            let {
              rootUrl: dB,
              name: VB
            } = BB;
            return !dB.startsWith("file:") && VB ? dB : `${dB}${TB()}/`
          }(JB, yB));
        return await pB(YB), TB.importedMeshesFiles && (TB.loadingPluginName = "IU", lB && TB.importedMeshesFiles.push(JB.url)), YB
      } finally {
        TB.removePendingData(YB)
      }
    }
    var AB = dB(36450),
      bB = dB(36301),
      nB = dB(36805);

    function eB(BB) {
      if (null === BB || void 0 === BB || !BB.min || !BB.max) return null;
      const [TB, dB, VB] = BB.min, [yB, pB, lB] = BB.max, {
        BoundingInfo: JB,
        RD: YB
      } = (0, AB.b)();
      return new JB(new YB(TB, dB, VB), new YB(yB, pB, lB))
    }

    function BT(BB) {
      (0, bB.d)(BB) || (BB.geometry && BB.geometry.useBoundingInfoFromGeometry ? BB._updateBoundingInfo() : BB.refreshBoundingInfo(!0, !0))
    }
    class TT {
      constructor(BB, TB) {
        this.Gu = BB, this.decode = TB, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(BB) {
        let TB = this.viewData.get(BB.index);
        return TB || (TB = this.bufferData.then((() => BB.bytes)), this.viewData.set(BB.index, TB)), TB
      }
      viewBuffer(BB) {
        let TB = this.viewBuffers.get(BB.index);
        return TB || (TB = this.viewBytes(BB).then((BB => new((0, AB.b)().iD)(this.Gu.PD(), BB, !1))), this.viewBuffers.set(BB.index, TB)), TB
      }
      vertexBuffer(BB, TB) {
        const {
          kind: dB,
          data: VB
        } = TB, yB = `${BB.index}:${dB}`;
        let pB = this.vertexBuffers.get(yB);
        if (!pB) {
          const lB = BB.bufferView;
          pB = lB ? this.viewBuffer(lB).then((BB => this.layoutVertexBuffer(BB, TB))) : Promise.resolve(VB).then((BB => new((0, AB.b)().VertexBuffer)(this.Gu.PD(), BB, dB, !1))), this.vertexBuffers.set(yB, pB)
        }
        return pB
      }
      layoutVertexBuffer(BB, TB) {
        let {
          kind: dB,
          offset: VB,
          stride: yB,
          components: pB,
          glType: lB,
          isNormalized: JB
        } = TB;
        const YB = this.Gu.PD();
        return new((0, AB.b)().VertexBuffer)(YB, BB, dB, !1, void 0, yB, void 0, VB, pB, lB, JB, !0, void 0, !0)
      }
      load(BB, TB, dB) {
        const VB = (0, bB.d)(dB),
          yB = BB => {
            VB || (dB._delayInfo = dB._delayInfo || [], -1 === dB._delayInfo.indexOf(BB) && dB._delayInfo.push(BB))
          },
          pB = TB.draco;
        if (pB) {
          for (const BB in pB.attributeIds) yB(BB);
          let lB = this.dracoGeometry.get(pB.bufferView.index);
          return lB || (lB = this.viewBytes(pB.bufferView).then((async () => {
            let yB;
            try {
              yB = await zB(TB, this.decode)
            } catch (YB) {
              throw new tB.l(`${BB}: ${YB instanceof Error?YB.message:String(YB)}`)
            }
            const pB = cB(TB, yB);
            if (VB) return pB;
            const lB = eB(TB.position),
              JB = new((0, AB.b)().MirroredGeometry)(dB.name, this.Gu);
            lB && (JB._boundingInfo = lB, JB.useBoundingInfoFromGeometry = !0), pB.indexData && JB.setIndices(pB.indexData);
            for (const BB of pB.vertexAttributes) JB.setVerticesBuffer(this.layoutVertexBuffer(BB.data, BB), pB.vertexCount);
            return JB.link(pB), JB
          })), this.dracoGeometry.set(pB.bufferView.index, lB)), lB
        }
        const lB = [],
          JB = rB(TB);
        if (VB) return dB.isUnIndexed = !JB.indexData, dB.hasVertexAlpha = (0, nB.e)(TB), Promise.resolve(JB);
        const YB = new((0, AB.b)().MirroredGeometry)(dB.name, this.Gu),
          {
            indexData: gB
          } = JB;
        gB ? lB.push(this.viewBytes(TB.indices.bufferView).then((() => {
          YB.setIndices(gB)
        }))) : dB.isUnIndexed = !0;
        for (const [oB, {
            kind: kB,
            accessor: LB
          }] of TB.attributes.entries()) yB(kB), lB.push(this.vertexBuffer(LB, JB.vertexAttributes[oB]).then((BB => {
          if ("position" === BB.getKind()) {
            const BB = eB(LB);
            BB && (YB._boundingInfo = BB, YB.useBoundingInfoFromGeometry = !0)
          }
          YB.setVerticesBuffer(BB, JB.vertexCount)
        })));
        return (0, nB.e)(TB) && (dB.hasVertexAlpha = !0), Promise.all(lB).then((() => (YB.link(JB), YB)))
      }
    }
    var dT, VT = dB(36222),
      yT = dB(36119),
      pT = dB(36817),
      lT = dB(36174),
      JT = dB(36211),
      YT = dB(2385),
      gT = dB(36201);

    function oT(BB, TB) {
      BB.metadata = BB.metadata || {};
      const dB = BB._internalMetadata = BB._internalMetadata || {},
        VB = dB.IU = dB.IU || {};
      (VB.pointers = VB.pointers || []).push(TB)
    }

    function kT(BB, TB) {
      if (TB && Object.keys(TB).length > 0) {
        const dB = BB.metadata = BB.metadata || {};
        (dB.IU = dB.IU || {}).extras = TB
      }
    }

    function LT(BB, TB) {
      TB.position = BB.translation ? yT.RD.FromArray(BB.translation) : yT.RD.Zero(), TB.rotationQuaternion = BB.rotation ? yT.Quaternion.FromArray(BB.rotation) : yT.Quaternion.Identity(), TB.al = BB.scale ? yT.RD.FromArray(BB.scale) : yT.RD.One()
    }
    class OT {
      constructor(BB, TB) {
        if (this.Gu = BB, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, TB) {
          const TB = BB.PD(),
            dB = BB.lF.add((() => {
              this.dispose()
            })),
            VB = TB.onContextRestoredObservable.add((() => {
              for (const BB of [...this.geometries, ...this.meshes, ...this.textures]) BB._rebuild()
            }));
          this.release = () => {
            BB.lF.remove(dB), TB.onContextRestoredObservable.remove(VB)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const BB of this.meshes) this.Gu.MVB(BB);
          for (const BB of this.materials) this.Gu.addMaterial(BB);
          for (const BB of this.geometries) this.Gu.addGeometry(BB);
          for (const BB of this.transformNodes) this.Gu.addTransformNode(BB);
          for (const BB of this.textures) this.Gu.addTexture(BB)
        }
      }
      dispose() {
        var BB;
        for (const TB of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const BB of TB.slice()) BB.dispose();
          TB.length = 0
        }
        null === (BB = this.release) || void 0 === BB || BB.call(this), this.release = null
      }
    }
    class DT {
      constructor(BB, TB, dB, VB, yB, pB, lB) {
        this.asset = BB, this.Gu = TB, this.tree = dB, this.geometryData = yB, this.materials = pB, this.lite = lB, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = VB ? dB : null
      }
      create(BB) {
        if (this.lite) return BB();
        const TB = this.Gu;
        TB._blockEntityCollection = !!this.container;
        try {
          const TB = BB();
          return this.container && (TB._parentContainer = this.container), TB
        } finally {
          TB._blockEntityCollection = !1
        }
      }
      node(BB, TB) {
        return this.create((() => this.lite ? TB ? (0, pT.g)(this.lite, BB) : (0, pT.s)(this.lite, BB) : TB ? new((0, AB.b)().Mesh)(BB, this.Gu) : new((0, AB.b)().TransformNode)(BB, this.Gu)))
      }
      async load() {
        var BB;
        this.asset.model.json.nodes && this.createRoot();
        const TB = this.lite ? null : this.Gu,
          dB = null !== (BB = null === TB || void 0 === TB ? void 0 : TB.blockMaterialDirtyMechanism) && void 0 !== BB && BB;
        let VB;
        TB && (TB.blockMaterialDirtyMechanism = !0);
        try {
          VB = this.loadScene()
        } finally {
          null === TB || void 0 === TB || TB._forceBlockMaterialDirtyMechanism(dB)
        }
        await VB;
        const {
          root: yB,
          tree: pB
        } = this;
        yB && (yB.hN(!0), pB.meshes.push(yB), pB.rootNodes.push(yB));
        for (const JB of this.asset.model.nodes) {
          const BB = this.nodeObjects.get(JB.index);
          BB && ["TransformNode", "LiteNode"].includes(BB.getClassName()) && pB.transformNodes.push(BB);
          for (const TB of null !== (lB = this.nodePrimitives.get(JB.index)) && void 0 !== lB ? lB : []) {
            var lB;
            pB.meshes.push(TB);
            const BB = TB.geometry;
            BB && !pB.geometries.includes(BB) && pB.geometries.push(BB)
          }
        }
      }
      createRoot() {
        const BB = this.node("__root__", !0);
        this.root = BB, BB.hN(!1), this.Gu.useRightHandedSystem || LT(RB, BB)
      }
      loadScene() {
        const BB = [];
        for (const TB of this.asset.model.rootNodes) BB.push(this.loadNode(this.asset.model.nodes[TB], (BB => {
          BB.parent = this.root
        })));
        return BB.push(Promise.resolve()), Promise.all(BB).then((() => {}))
      }
      loadNode(BB, TB) {
        const dB = `/nodes/${BB.index}`,
          VB = [],
          yB = yB => {
            if (oT(yB, dB), LT(BB, yB), BB.hasCamera && !this.Gu.useRightHandedSystem) {
              const {
                al: BB
              } = yB;
              BB.set(-1, BB.y, BB.z)
            }
            for (const TB of BB.children) VB.push(this.loadNode(this.asset.model.nodes[TB], (BB => {
              BB.parent = yB
            })));
            (dB => {
              kT(dB, BB.extras), TB(dB)
            })(yB)
          };
        if (null === BB.mesh) {
          const TB = this.node(QB(BB), !1);
          this.nodeObjects.set(BB.index, TB), yB(TB)
        } else {
          const TB = this.asset.model.meshes[BB.mesh];
          VB.push(this.loadMesh(`/meshes/${TB.index}`, BB, TB, yB))
        }
        return Promise.all(VB).then((() => {
          for (const dB of null !== (TB = this.nodePrimitives.get(BB.index)) && void 0 !== TB ? TB : []) {
            var TB;
            BT(dB)
          }
          return this.nodeObjects.get(BB.index)
        }))
      }
      loadMesh(BB, TB, dB, VB) {
        const yB = [],
          pB = QB(TB);
        if (1 === dB.primitives.length) {
          const VB = dB.primitives[0];
          yB.push(this.loadPrimitive(`${BB}/primitives/${VB.index}`, pB, VB, (BB => {
            this.nodeObjects.set(TB.index, BB), this.nodePrimitives.set(TB.index, [BB])
          })))
        } else {
          const VB = this.node(pB, !1);
          this.nodeObjects.set(TB.index, VB);
          const lB = [];
          this.nodePrimitives.set(TB.index, lB);
          for (const TB of dB.primitives) yB.push(this.loadPrimitive(`${BB}/primitives/${TB.index}`, `${pB}_primitive${TB.index}`, TB, (BB => {
            BB.parent = VB, lB.push(BB)
          })))
        }
        const lB = this.nodeObjects.get(TB.index);
        return VB(lB), Promise.all(yB).then((() => lB))
      }
      loadPrimitive(BB, TB, dB, VB) {
        const yB = [],
          pB = this.node(TB, !0);
        if (pB.sideOrientation = this.Gu.useRightHandedSystem ? lT.c.CounterClockWiseSideOrientation : lT.c.ClockWiseSideOrientation, yB.push(this.geometryData.load(BB, dB, pB).then((BB => {
            if ((0, bB.d)(pB)) {
              var TB, dB;
              const VB = BB;
              pB.replaceModel(VB, Int32Array.of(0, null !== (TB = null === (dB = VB.indexData) || void 0 === dB ? void 0 : dB.length) && void 0 !== TB ? TB : VB.vertexCount, 0, VB.vertexCount))
            } else this.create((() => (BB.applyToMesh(pB), BB)))
          }))), this.materials) {
          const BB = 0 === dB.mode ? lT.c.PointListDrawMode : lT.c.TriangleFillMode,
            TB = null === dB.material ? null : this.asset.model.materials[dB.material];
          yB.push(this.loadMaterial(TB, BB, (BB => {
            pB.material = BB
          })))
        }
        return oT(pB, BB), VB(pB), Promise.all(yB).then((() => pB))
      }
      loadMaterial(BB, TB, dB) {
        var VB;
        const yB = `${null!==(VB=null===BB||void 0===BB?void 0:BB.index)&&void 0!==VB?VB:"default"}:${TB}`;
        let pB = this.materialData.get(yB);
        return pB || (pB = this.createMaterial(BB, TB), this.materialData.set(yB, pB)), dB(pB.material), pB.promise
      }
      createMaterial(BB, TB) {
        const dB = BB ? BB.name || `material${BB.index}` : "__GLTFLoader._default",
          {
            style: VB,
            unlit: yB
          } = this.materials;
        let pB;
        const lB = this.create((() => {
          const lB = (0, gT.d)({
            name: dB,
            Gu: this.Gu,
            sets: {
              ...(0, nB.b)(this.asset, BB, VB, yB),
              fillMode: TB
            },
            unrendered: !0
          });
          return pB = lB.model, lB.mirror
        }));
        let JB = Promise.resolve();
        if (BB) {
          const TB = `/materials/${BB.index}`,
            VB = pB.diffuseTexture;
          if (VB && !VB.mirror) JB = new Promise((BB => setTimeout(BB)));
          else if (VB) {
            const yB = VB.mirror;
            yB._parentContainer = this.container, yB.name = `${dB} (Base Color)`, oT(yB, `${TB}${BB.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(yB), JB = (0, JT.q)(VB)
          }
          kT(lB, BB.extras), oT(lB, TB)
        }
        return this.tree.materials.push(lB), {
          material: lB,
          promise: JB
        }
      }
    }

    function uT() {
      VT.i.dracoDecodes = DB.decodes, VT.i.dracoWorkersStarted = DB.workersStarted, VT.i.dracoMostWorkers = DB.mostWorkers
    }
    async function HT(BB, TB, dB, yB, pB) {
      try {
        return await async function(BB, TB, dB, yB, pB, lB) {
          var JB;
          let YB;
          const gB = null === (JB = (0, YT.d)()) || void 0 === JB ? void 0 : JB.yu,
            oB = null !== gB && void 0 !== gB && gB.pu && TB === gB.jU() ? gB : null,
            kB = pB && !oB;
          return await jB(BB, TB, dB, yB, VB.c, (BB => (YB = new OT(TB, kB), new DT(BB, TB, YB, kB, new TT(TB, yB), lB, oB).load())), !pB), YB
        }(BB, TB, dB, mB, yB, pB)
      } finally {
        uT()
      }
    }
    async function ET(BB, TB, dB, yB) {
      try {
        return await jB(BB, TB, dB, mB, VB.c, (BB => yB(BB, new TT(TB, mB))))
      } finally {
        uT()
      }
    }
    dT = yB.c, gB || (gB = {
      scriptUrl: new URL(dT.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(dT.wasmBinaryUrl, location.href).href
    })
  },
  40235: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB
    });
    var VB = dB(138),
      yB = dB(1092);

    function pB(BB) {
      return (0, VB.d)() ? `https://${yB.e.discordDomain}/${BB.href}` : BB.href
    }
    const lB = {
      scriptUrl: pB(new dB.U(dB(40238))),
      wasmBinaryUrl: pB(new dB.U(dB(40244)))
    }
  },
  35308: BB => {
    BB.exports = function(BB, TB, dB, VB) {
      var yB = self || window;
      try {
        try {
          var pB;
          try {
            pB = new yB.Blob([BB])
          } catch (gB) {
            (pB = new(yB.BlobBuilder || yB.WebKitBlobBuilder || yB.MozBlobBuilder || yB.MSBlobBuilder)).append(BB), pB = pB.getBlob()
          }
          var lB = yB.URL || yB.webkitURL,
            JB = lB.createObjectURL(pB),
            YB = new yB[TB](JB, dB);
          return lB.revokeObjectURL(JB), YB
        } catch (gB) {
          return new yB[TB]("data:application/javascript,".concat(encodeURIComponent(BB)), dB)
        }
      } catch (gB) {
        if (!VB) throw Error("Inline worker is not supported");
        return new yB[TB](VB, dB)
      }
    }
  },
  40244: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  40238: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);