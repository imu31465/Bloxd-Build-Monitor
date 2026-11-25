export const id = 210;
export const ids = [210];
export const modules = {
  44153: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      loadGlbAsset: () => Er,
      loadGlbTree: () => lr
    });
    var OM = iM(38885),
      SM = iM(44160),
      jM = iM(34814),
      aM = iM.n(jM);

    function PM() {
      return aM()('(()=>{class MM extends Error{}function rM(rM,iM){const OM=rM._malloc(iM);if(0===OM)throw new MM(`Draco: the decoder\'s heap refused ${iM} bytes`);return OM}function iM(MM){return{[MM.DT_FLOAT32]:[Float32Array,5126],[MM.DT_INT8]:[Int8Array,5120],[MM.DT_INT16]:[Int16Array,5122],[MM.DT_INT32]:[Int32Array,5124],[MM.DT_UINT8]:[Uint8Array,5121],[MM.DT_UINT16]:[Uint16Array,5123],[MM.DT_UINT32]:[Uint32Array,5125]}}function OM(rM,OM,SM,jM,aM){let PM=null,nM=null,QM=null;try{PM=new rM.Decoder,nM=new rM.DecoderBuffer,nM.Init(OM,OM.byteLength);let zM=0;const LM=PM.GetEncodedGeometryType(nM);if(LM===rM.TRIANGULAR_MESH){const iM=new rM.Mesh;QM=iM;const OM=PM.DecodeBufferToMesh(nM,iM);if(!OM.ok()||0===iM.ptr)throw new MM(OM.error_msg());zM=3*iM.num_faces()}else{if(LM!==rM.POINT_CLOUD)throw new MM(`Draco: Cannot decode invalid geometry type ${LM}`);{const iM=new rM.PointCloud;QM=iM;const OM=PM.DecodeBufferToPointCloud(nM,iM);if(!OM.ok()||!iM.ptr)throw new MM(OM.error_msg())}}const mM=QM.num_points();if(mM!==jM.vertices||zM!==jM.indices)throw new MM(`Draco: decoded ${mM} vertices and ${zM} indices, the accessors declare ${jM.vertices} and ${jM.indices}`);const HM=iM(rM),hM=[];for(const{kind:rM,id:iM,components:OM}of SM){const SM=PM.GetAttributeByUniqueId(QM,iM);if(!SM||0===SM.ptr)throw new MM(`Draco: no attribute with id ${iM} (${rM})`);const jM=SM.data_type();if(!HM[jM])throw new MM(`Draco: Cannot decode invalid data type ${jM}`);if(SM.num_components()!==OM)throw new MM(`Draco: ${rM} decodes to ${SM.num_components()} components, its accessor declares ${OM}`);hM.push([rM,SM,jM])}return aM({dracoDecoder:PM,geometry:QM,triangles:LM===rM.TRIANGULAR_MESH,numPoints:mM,numIndices:zM,attributes:hM})}finally{QM&&rM.destroy(QM),nM&&rM.destroy(nM),PM&&rM.destroy(PM)}}const SM=self;let jM=null;self.onmessage=MM=>{let{data:aM}=MM;if("init"===aM.id){try{importScripts(aM.url),jM=DracoDecoderModule({wasmBinary:aM.wasmBinary}),SM.postMessage({id:"initDone"})}catch(LM){SM.postMessage({id:"initError",message:LM instanceof Error?LM.message:String(LM)})}return}const{seq:PM,data:nM,attributeIds:QM,expected:zM}=aM;jM?jM.then((MM=>{try{const jM=function(MM,SM,jM,aM){const PM=Object.keys(jM).map((MM=>({kind:MM,id:jM[MM],components:aM.components[MM]})));return OM(MM,SM,PM,aM,(OM=>{let{dracoDecoder:SM,geometry:jM,triangles:aM,numPoints:PM,numIndices:nM,attributes:QM}=OM;const zM=iM(MM);let LM=null;if(aM){const iM=4*nM,OM=rM(MM,iM);try{SM.GetTrianglesUInt32Array(jM,iM,OM),LM=new Uint32Array(nM),LM.set(new Uint32Array(MM.HEAPF32.buffer,OM,nM))}finally{MM._free(OM)}}const mM=[];for(const[iM,HM,hM]of QM){const[OM]=zM[hM],aM=HM.num_components(),nM=PM*aM,QM=nM*OM.BYTES_PER_ELEMENT,LM=rM(MM,QM);try{SM.GetAttributeDataArrayForAllPoints(jM,HM,hM,QM,LM),mM.push({kind:iM,data:new OM(MM.HEAPF32.buffer,LM,nM).slice(),size:aM,byteOffset:HM.byte_offset(),byteStride:HM.byte_stride(),normalized:HM.normalized()})}finally{MM._free(LM)}}return{indices:LM,attributes:mM,totalVertices:PM}}))}(MM,nM,QM,zM),aM=jM.attributes.map((MM=>MM.data.buffer));jM.indices&&aM.push(jM.indices.buffer),SM.postMessage({id:"decoded",seq:PM,...jM},aM)}catch(LM){SM.postMessage({id:"decodeError",seq:PM,message:LM instanceof Error?LM.message:String(LM)})}}),(MM=>{SM.postMessage({id:"decodeError",seq:PM,message:MM instanceof Error?MM.message:String(MM)})})):SM.postMessage({id:"decodeError",seq:PM,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, iM.p + "dracoDecode.worker.a264d6a6.worker.js")
    }
    var nM = iM(83);
    const QM = 1e3;
    let zM = null,
      LM = null;
    const mM = [],
      HM = [];
    let hM = 0;
    const JM = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      dM = function(MM, rM) {
        const iM = MM ? Math.max(1, Math.min(Math.floor(.5 * MM), 4)) : 1;
        return rM ? Math.min(iM, 2) : iM
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, nM.isMobile)());

    function yM() {
      if (!zM) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: MM,
        wasmBinaryUrl: rM
      } = zM;
      return LM ??= fetch(rM).then((MM => {
        if (!MM.ok) throw new Error(`Draco: fetching ${rM} failed: ${MM.status}`);
        return MM.arrayBuffer()
      })), LM.catch((() => {
        LM = null
      })), JM.workersStarted++, LM.then((rM => new Promise(((iM, OM) => {
        const SM = new PM;
        SM.onerror = MM => {
          SM.onmessage = null, SM.onerror = null, SM.terminate(), OM(new Error("Draco: the decode worker failed to start" + (MM.message ? `: ${MM.message}` : " (its script did not load)")))
        }, SM.onmessage = MM => {
          let {
            data: rM
          } = MM;
          SM.onmessage = null, SM.onerror = null, "initDone" === rM.id ? iM(SM) : (SM.terminate(), OM(new Error(`Draco: ${"initError"===rM.id?rM.message:"the worker did not start"}`)))
        };
        const jM = rM.slice(0),
          aM = {
            id: "init",
            url: MM,
            wasmBinary: jM
          };
        SM.postMessage(aM, [jM])
      }))))
    }

    function lM(MM) {
      const rM = mM.indexOf(MM); - 1 !== rM && mM.splice(rM, 1);
      const iM = HM.shift();
      iM && UM(iM)
    }

    function EM(MM, rM) {
      MM.busy = !0, MM.releaseTimer && (clearTimeout(MM.releaseTimer), MM.releaseTimer = null);
      MM.worker.then((iM => {
        const OM = hM++;
        iM.onmessage = SM => {
          let {
            data: jM
          } = SM;
          if (("decoded" === jM.id || "decodeError" === jM.id) && jM.seq === OM) {
            if (iM.onmessage = null, iM.onerror = null, "decoded" === jM.id) return JM.decodes++, rM.resolve({
              indices: jM.indices,
              attributes: jM.attributes,
              totalVertices: jM.totalVertices
            }), void(() => {
              const rM = HM.shift();
              rM ? EM(MM, rM) : (MM.busy = !1, MM.releaseTimer = setTimeout((() => {
                const rM = mM.indexOf(MM); - 1 !== rM && mM.splice(rM, 1), MM.worker.then((MM => {
                  MM.terminate()
                }))
              }), QM))
            })();
            iM.terminate(), rM.reject(new Error(jM.message)), lM(MM)
          }
        }, iM.onerror = OM => {
          iM.onmessage = null, iM.onerror = null, iM.terminate(), rM.reject(new Error(`Draco: the decode worker failed: ${OM.message}`)), lM(MM)
        };
        const SM = {
          id: "decode",
          seq: OM,
          data: rM.data,
          attributeIds: rM.attributeIds,
          expected: rM.expected
        };
        iM.postMessage(SM, [rM.data.buffer])
      }), (iM => {
        rM.reject(iM instanceof Error ? iM : new Error(String(iM))), lM(MM)
      }))
    }

    function UM(MM) {
      const rM = mM.find((MM => !MM.busy));
      if (rM) EM(rM, MM);
      else {
        if (mM.length < dM) {
          const rM = {
            worker: yM(),
            busy: !0,
            releaseTimer: null
          };
          return mM.push(rM), JM.mostWorkers = Math.max(JM.mostWorkers, mM.length), void EM(rM, MM)
        }
        HM.push(MM)
      }
    }

    function GM(MM, rM, iM) {
      return new Promise(((OM, SM) => {
        UM({
          data: new Int8Array(MM.buffer, MM.byteOffset, MM.byteLength).slice(),
          attributeIds: rM,
          expected: iM,
          resolve: OM,
          reject: SM
        })
      }))
    }
    var CM = iM(38340),
      eM = iM(38347),
      bM = iM(35120),
      wM = iM(35113);
    const tM = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function gM(MM) {
      const rM = (0, wM.j)(MM.byteLength);
      if (rM) throw new bM.p(rM);
      const {
        json: iM,
        bin: OM
      } = (0, bM.E)(MM), SM = (0, wM.g)(iM, OM);
      if (SM) throw new bM.p(SM);
      try {
        return function(MM, rM) {
          var iM, OM, SM, jM, aM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM;
          const yM = new Map,
            lM = iM => {
              let OM = yM.get(iM);
              if (!OM) {
                var SM;
                const jM = MM.bufferViews[iM],
                  aM = null !== (SM = jM.byteOffset) && void 0 !== SM ? SM : 0;
                OM = {
                  index: iM,
                  bytes: rM.subarray(aM, aM + jM.byteLength),
                  byteStride: jM.byteStride
                }, yM.set(iM, OM)
              }
              return OM
            },
            EM = new Map,
            UM = rM => {
              let iM = EM.get(rM);
              if (!iM) {
                var OM;
                const SM = MM.accessors[rM];
                iM = {
                  index: rM,
                  count: SM.count,
                  type: SM.type,
                  numComponents: bM.s[SM.type],
                  componentType: SM.componentType,
                  normalized: null !== (OM = SM.normalized) && void 0 !== OM && OM,
                  byteOffset: SM.byteOffset,
                  bufferView: void 0 === SM.bufferView ? null : lM(SM.bufferView),
                  min: SM.min,
                  max: SM.max
                }, EM.set(rM, iM)
              }
              return iM
            },
            GM = null !== (iM = null === (OM = MM.extensionsUsed) || void 0 === OM ? void 0 : OM.includes("KHR_draco_mesh_compression")) && void 0 !== iM && iM,
            CM = (null !== (SM = MM.meshes) && void 0 !== SM ? SM : []).map(((rM, iM) => {
              const OM = rM.primitives.map(((rM, iM) => {
                var OM, SM, jM;
                const aM = GM ? null === (OM = rM.extensions) || void 0 === OM ? void 0 : OM.KHR_draco_mesh_compression : void 0;
                let PM = null;
                const nM = [];
                if (aM) {
                  const iM = {
                    vertices: MM.accessors[rM.attributes.POSITION].count,
                    indices: void 0 === rM.indices ? 0 : MM.accessors[rM.indices].count,
                    components: {}
                  };
                  PM = {
                    bufferView: lM(aM.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: iM
                  };
                  for (const [OM, SM] of bM.h) {
                    const jM = aM.attributes[OM];
                    if (void 0 === jM) continue;
                    PM.attributeIds[SM] = jM;
                    const nM = rM.attributes[OM];
                    var QM;
                    if (void 0 !== nM) PM.normalized[SM] = null !== (QM = MM.accessors[nM].normalized) && void 0 !== QM && QM, iM.components[SM] = bM.s[MM.accessors[nM].type]
                  }
                } else
                  for (const [MM, zM] of bM.h) {
                    const iM = rM.attributes[MM];
                    void 0 !== iM && nM.push({
                      semantic: MM,
                      kind: zM,
                      accessor: UM(iM)
                    })
                  }
                return {
                  index: iM,
                  mode: null !== (SM = rM.mode) && void 0 !== SM ? SM : 4,
                  attributes: nM,
                  indices: aM || void 0 === rM.indices ? null : UM(rM.indices),
                  position: void 0 === rM.attributes.POSITION ? null : UM(rM.attributes.POSITION),
                  material: null !== (jM = rM.material) && void 0 !== jM ? jM : null,
                  draco: PM
                }
              }));
              return {
                index: iM,
                name: rM.name,
                primitives: OM,
                extras: rM.extras
              }
            })),
            eM = (null !== (jM = MM.nodes) && void 0 !== jM ? jM : []).map(((MM, rM) => {
              var iM, OM;
              return {
                index: rM,
                name: MM.name,
                children: null !== (iM = MM.children) && void 0 !== iM ? iM : [],
                mesh: null !== (OM = MM.mesh) && void 0 !== OM ? OM : null,
                translation: MM.translation,
                rotation: MM.rotation,
                scale: MM.scale,
                hasCamera: void 0 !== MM.camera,
                extras: MM.extras
              }
            })),
            wM = null !== (aM = null === (PM = MM.extensionsUsed) || void 0 === PM ? void 0 : PM.includes("KHR_materials_unlit")) && void 0 !== aM && aM,
            gM = null !== (nM = null === (QM = MM.extensionsUsed) || void 0 === QM ? void 0 : QM.includes("KHR_texture_transform")) && void 0 !== nM && nM,
            uM = (null !== (zM = MM.materials) && void 0 !== zM ? zM : []).map(((MM, rM) => {
              var iM, OM, SM, jM;
              const aM = MM.pbrMetallicRoughness,
                PM = null === aM || void 0 === aM ? void 0 : aM.baseColorTexture;
              return {
                index: rM,
                name: MM.name,
                extras: MM.extras,
                unlit: wM && void 0 !== (null === (iM = MM.extensions) || void 0 === iM ? void 0 : iM.KHR_materials_unlit),
                pbr: aM ? {
                  baseColorFactor: aM.baseColorFactor,
                  metallicFactor: aM.metallicFactor,
                  roughnessFactor: aM.roughnessFactor
                } : null,
                baseColorTexture: PM ? {
                  texture: PM.index,
                  transform: gM && (null === (OM = PM.extensions) || void 0 === OM ? void 0 : OM.KHR_texture_transform) || null
                } : null,
                emissiveFactor: MM.emissiveFactor,
                alphaMode: null !== (SM = MM.alphaMode) && void 0 !== SM ? SM : "OPAQUE",
                alphaCutoff: MM.alphaCutoff,
                doubleSided: null !== (jM = MM.doubleSided) && void 0 !== jM && jM
              }
            })),
            RM = (null !== (LM = MM.textures) && void 0 !== LM ? LM : []).map(((rM, iM) => {
              var OM, SM;
              const jM = void 0 === rM.sampler ? tM : {
                index: rM.sampler,
                ...null === (OM = MM.samplers) || void 0 === OM ? void 0 : OM[rM.sampler]
              };
              return {
                index: iM,
                sampler: {
                  index: jM.index,
                  magFilter: jM.magFilter,
                  minFilter: jM.minFilter,
                  wrapS: jM.wrapS,
                  wrapT: jM.wrapT
                },
                image: null !== (SM = rM.source) && void 0 !== SM ? SM : -1
              }
            })),
            pM = (null !== (mM = MM.images) && void 0 !== mM ? mM : []).map(((MM, rM) => ({
              index: rM,
              name: MM.name,
              mimeType: MM.mimeType,
              bufferView: lM(MM.bufferView)
            }))),
            WM = null !== (HM = (0, bM.B)(MM)) && void 0 !== HM ? HM : 0;
          return {
            json: MM,
            rootNodes: null !== (hM = null === (JM = MM.scenes) || void 0 === JM || null === (dM = JM[WM]) || void 0 === dM ? void 0 : dM.nodes) && void 0 !== hM ? hM : [],
            nodes: eM,
            meshes: CM,
            materials: uM,
            textures: RM,
            images: pM
          }
        }(iM, OM)
      } catch (jM) {
        throw jM instanceof bM.l ? jM : new bM.l(`reading the GLB failed: ${jM instanceof Error?jM.message:String(jM)}`)
      }
    }
    async function uM(MM, rM) {
      var iM, OM;
      const SM = MM.draco;
      if (!SM) throw new bM.l("not a Draco primitive");
      let jM;
      try {
        jM = await rM(SM.bufferView.bytes, SM.attributeIds, SM.expected)
      } catch (QM) {
        throw new bM.l(`Draco decoding failed: ${QM instanceof Error?QM.message:String(QM)}`)
      }
      const {
        vertices: aM,
        indices: PM,
        components: nM
      } = SM.expected;
      if (jM.totalVertices !== aM || (null !== (iM = null === (OM = jM.indices) || void 0 === OM ? void 0 : OM.length) && void 0 !== iM ? iM : 0) !== PM || jM.attributes.some((MM => MM.size !== nM[MM.kind] || MM.data.length !== aM * MM.size))) throw new bM.l("Draco decoding gave other counts than the accessors declare");
      for (const zM of jM.attributes) {
        const MM = SM.normalized[zM.kind];
        void 0 !== MM && (zM.normalized = MM)
      }
      return jM
    }
    const RM = new WeakMap;

    function pM(MM, rM) {
      var iM;
      const OM = null !== (iM = RM.get(MM)) && void 0 !== iM ? iM : rM(MM);
      return RM.set(MM, OM), OM
    }

    function WM(MM) {
      const rM = MM.bufferView,
        iM = 5125 === MM.componentType ? Uint32Array : Uint16Array,
        OM = rM.bytes.buffer,
        SM = rM.bytes.byteOffset + (MM.byteOffset || 0);
      return SM % iM.BYTES_PER_ELEMENT !== 0 ? new iM(OM.slice(SM, SM + MM.count * iM.BYTES_PER_ELEMENT), 0) : new iM(OM, SM, MM.count)
    }

    function sM(MM, rM) {
      if (MM.min && MM.max) return [new Float64Array(MM.min), new Float64Array(MM.max)];
      const iM = rM.find((MM => {
          let {
            kind: rM
          } = MM;
          return "position" === rM
        })),
        OM = iM ? (0, eM.f)(iM, MM.count) : new Float32Array(0);
      return (0, eM.n)(OM.length / 3, ((MM, rM) => OM[3 * MM + rM]))
    }

    function DM(MM) {
      const rM = MM.attributes.map((MM => {
          var rM, iM;
          let {
            kind: OM,
            accessor: SM
          } = MM;
          const {
            bufferView: jM,
            numComponents: aM
          } = SM;
          if (!jM) {
            return {
              kind: OM,
              data: pM(SM, (() => new Float32Array(aM * SM.count))),
              offset: 0,
              stride: 4 * aM,
              components: aM,
              glType: 5126,
              isNormalized: !1
            }
          }
          const PM = null !== (rM = jM.byteStride) && void 0 !== rM ? rM : aM * bM.c[SM.componentType];
          return {
            kind: OM,
            data: jM.bytes,
            offset: null !== (iM = SM.byteOffset) && void 0 !== iM ? iM : 0,
            stride: PM,
            components: aM,
            glType: SM.componentType,
            isNormalized: SM.normalized
          }
        })),
        iM = MM.indices,
        OM = iM && pM(iM, WM),
        SM = MM.position;
      return new eM.e(rM, OM, SM.count, ...sM(SM, rM))
    }
    const kM = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function ZM(MM, rM) {
      const iM = rM.attributes.map((MM => {
        let {
          kind: rM,
          data: iM,
          size: OM,
          byteOffset: SM,
          byteStride: jM,
          normalized: aM
        } = MM;
        return {
          kind: rM,
          data: iM,
          offset: SM,
          stride: jM,
          components: OM,
          glType: 5120 + kM.indexOf(iM.constructor),
          isNormalized: aM
        }
      }));
      return new eM.e(iM, rM.indices, rM.totalVertices, ...sM(MM.position, iM))
    }

    function oM(MM) {
      const rM = MM.lastIndexOf("/");
      return rM < 0 ? MM : MM.substring(rM + 1)
    }

    function fM(MM) {
      const rM = MM.lastIndexOf("/");
      return rM < 0 ? "" : MM.substring(0, rM + 1)
    }

    function YM(MM) {
      return MM.name || `node${MM.index}`
    }
    const NM = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      AM = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      xM = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function vM(MM) {
      var rM, iM, OM, SM;
      const jM = null !== (rM = MM.minFilter) && void 0 !== rM ? rM : 9987;
      return 9729 === (null !== (iM = MM.magFilter) && void 0 !== iM ? iM : 9729) ? null !== (OM = AM[jM]) && void 0 !== OM ? OM : 3 : null !== (SM = xM[jM]) && void 0 !== SM ? SM : 4
    }
    const FM = {
      33071: 0,
      33648: 2
    };

    function BM(MM) {
      var rM;
      return null !== (rM = FM[null !== MM && void 0 !== MM ? MM : 10497]) && void 0 !== rM ? rM : 1
    }

    function XM(MM) {
      return 9728 === MM.minFilter || 9729 === MM.minFilter
    }

    function IM(MM) {
      var rM, iM, OM;
      const SM = Float64Array.from(null !== (rM = MM.scale) && void 0 !== rM ? rM : [1, 1, 1]);
      return MM.hasCamera && (SM[0] = -1), {
        translation: Float64Array.from(null !== (iM = MM.translation) && void 0 !== iM ? iM : [0, 0, 0]),
        rotation: Float64Array.from(null !== (OM = MM.rotation) && void 0 !== OM ? OM : [0, 0, 0, 1]),
        scale: SM
      }
    }

    function KM(MM, rM) {
      let {
        translation: iM,
        rotation: OM,
        scale: SM
      } = MM;
      const jM = new Float32Array(16);
      return (0, CM.d)(SM, 0, OM, 0, iM, 0, jM), rM && (0, CM.j)(jM, rM, 0, jM), jM
    }
    class qM {
      constructor(MM, rM, iM, OM) {
        this.model = MM, this.decode = rM, this.fileInfo = iM, this.uniqueRootUrl = OM, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const SM = new Set,
          jM = (rM, iM) => {
            const OM = MM.nodes[rM];
            if (this.parents.has(OM)) throw new bM.l(`/nodes/${rM}: Invalid recursive node hierarchy`);
            this.parents.set(OM, iM);
            const aM = null === OM.mesh ? [] : MM.meshes[OM.mesh].primitives,
              PM = aM.map((MM => {
                const rM = aM.length > 1;
                return {
                  name: rM ? `${YM(OM)}_primitive${MM.index}` : YM(OM),
                  node: OM,
                  primitive: MM,
                  part: rM,
                  geometry: null
                }
              }));
            this.uses.set(OM, PM);
            const nM = null !== OM.mesh && SM.has(OM.mesh);
            SM.add(OM.mesh), this.own.set(OM, nM ? [] : PM);
            for (const MM of OM.children) jM(MM, OM)
          };
        for (const aM of MM.rootNodes) jM(aM, null);
        this.primitives = MM.nodes.flatMap((MM => {
          var rM;
          return null !== (rM = this.own.get(MM)) && void 0 !== rM ? rM : []
        }))
      }
      decodeGeometries() {
        const MM = new Map;
        return Promise.all(this.primitives.map((async rM => {
          const {
            primitive: iM
          } = rM, OM = iM.draco;
          let SM = OM ? MM.get(OM.bufferView.index) : Promise.resolve(DM(iM));
          SM || (SM = uM(iM, this.decode).then((MM => ZM(iM, MM))), MM.set(OM.bufferView.index, SM)), rM.geometry = await SM
        })))
      }
      parentOf(MM) {
        var rM;
        return null !== (rM = this.parents.get(MM)) && void 0 !== rM ? rM : null
      }
      meshesUnder(MM) {
        const rM = this.model.nodes.filter((MM => this.uses.has(MM)));
        for (const OM of rM) {
          const rM = this.uses.get(OM),
            iM = rM.find((rM => rM.name === MM));
          if (iM) return 1 === rM.length ? this.subtree(OM) : this.own.get(OM).includes(iM) ? [iM] : []
        }
        const iM = rM.find((rM => 1 !== this.uses.get(rM).length && YM(rM) === MM));
        return iM ? this.subtree(iM) : null
      }
      subtree(MM) {
        return [...this.own.get(MM), ...MM.children.flatMap((MM => this.subtree(this.model.nodes[MM])))]
      }
      worldMatrix(MM, rM, iM) {
        let OM = KM(IM(rM ? NM : {}), null);
        const SM = [];
        for (let aM = MM.part ? MM.node : this.parentOf(MM.node); aM; aM = this.parentOf(aM)) SM.unshift(aM);
        for (const aM of SM) OM = KM(IM(aM), OM);
        const jM = IM(MM.part ? {} : MM.node);
        return void 0 !== iM && jM.scale.fill(iM), KM(jM, OM)
      }
      floats(MM) {
        const {
          vertexAttributes: rM,
          vertexCount: iM
        } = MM.geometry;
        return new Map(rM.map((MM => [MM.kind, (0, eM.f)(MM, iM)])))
      }
      imageUrl(MM) {
        return function(MM, rM, iM) {
          let {
            name: OM
          } = rM;
          return `data:${MM}${OM}#image${iM}`
        }(this.uniqueRootUrl, this.fileInfo, MM)
      }
      textureDesc(MM, rM) {
        var iM;
        let {
          texture: OM,
          transform: SM
        } = MM;
        const {
          sampler: jM,
          image: aM
        } = this.model.textures[OM], {
          bufferView: PM,
          mimeType: nM,
          name: QM
        } = this.model.images[aM], zM = SM && {
          ...SM.offset ? {
            uOffset: SM.offset[0],
            vOffset: SM.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...SM.rotation ? {
            wAng: -SM.rotation
          } : {},
          ...SM.scale ? {
            uScale: SM.scale[0],
            vScale: SM.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(aM),
          noMipmap: XM(jM),
          invertY: !1,
          samplingMode: vM(jM),
          data: {
            bytes: PM.bytes,
            mimeType: nM,
            label: QM,
            context: `/textures/${OM}`
          },
          sets: {
            wrapU: BM(jM.wrapS),
            wrapV: BM(jM.wrapT),
            ...zM,
            coordinatesIndex: null !== (iM = null === SM || void 0 === SM ? void 0 : SM.texCoord) && void 0 !== iM ? iM : 0,
            hasAlpha: rM
          }
        }
      }
    }
    async function TM(MM, rM, iM, OM, SM, jM) {
      let aM = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const PM = function(MM, rM, iM) {
          return "string" !== typeof rM ? {
            url: "",
            rootUrl: MM,
            name: iM()
          } : rM ? rM.startsWith("data:") ? {
            url: rM,
            rootUrl: MM,
            name: ""
          } : MM ? {
            url: MM + rM,
            rootUrl: MM,
            name: rM
          } : {
            url: rM,
            rootUrl: fM(rM),
            name: oM(rM)
          } : {
            url: MM,
            rootUrl: fM(MM),
            name: oM(MM)
          }
        }(iM, MM, SM),
        nM = {};
      rM.addPendingData(nM);
      try {
        const iM = gM(await async function(MM, rM) {
            return "string" !== typeof rM ? rM : MM.url.startsWith("data:") ? (0, bM.v)(MM.url) : await (0, bM.x)(MM.url)
          }(PM, MM)),
          nM = new qM(iM, OM, PM, function(MM, rM) {
            let {
              rootUrl: iM,
              name: OM
            } = MM;
            return !iM.startsWith("file:") && OM ? iM : `${iM}${rM()}/`
          }(PM, SM));
        return await jM(nM), rM.importedMeshesFiles && (rM.loadingPluginName = "dD", aM && rM.importedMeshesFiles.push(PM.url)), nM
      } finally {
        rM.removePendingData(nM)
      }
    }
    var VM = iM(38457),
      cM = iM(38316),
      Mr = iM(38864);

    function rr(MM) {
      if (null === MM || void 0 === MM || !MM.min || !MM.max) return null;
      const [rM, iM, OM] = MM.min, [SM, jM, aM] = MM.max, {
        BoundingInfo: PM,
        sh: nM
      } = (0, VM.c)();
      return new PM(new nM(rM, iM, OM), new nM(SM, jM, aM))
    }

    function ir(MM) {
      (0, cM.f)(MM) || (MM.geometry && MM.geometry.useBoundingInfoFromGeometry ? MM._updateBoundingInfo() : MM.refreshBoundingInfo(!0, !0))
    }
    class Or {
      constructor(MM, rM) {
        this.YJ = MM, this.decode = rM, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(MM) {
        let rM = this.viewData.get(MM.index);
        return rM || (rM = this.bufferData.then((() => MM.bytes)), this.viewData.set(MM.index, rM)), rM
      }
      viewBuffer(MM) {
        let rM = this.viewBuffers.get(MM.index);
        return rM || (rM = this.viewBytes(MM).then((MM => new((0, VM.c)().Vz)(this.YJ.ph(), MM, !1))), this.viewBuffers.set(MM.index, rM)), rM
      }
      vertexBuffer(MM, rM) {
        const {
          kind: iM,
          data: OM
        } = rM, SM = `${MM.index}:${iM}`;
        let jM = this.vertexBuffers.get(SM);
        if (!jM) {
          const aM = MM.bufferView;
          jM = aM ? this.viewBuffer(aM).then((MM => this.layoutVertexBuffer(MM, rM))) : Promise.resolve(OM).then((MM => new((0, VM.c)().VertexBuffer)(this.YJ.ph(), MM, iM, !1))), this.vertexBuffers.set(SM, jM)
        }
        return jM
      }
      layoutVertexBuffer(MM, rM) {
        let {
          kind: iM,
          offset: OM,
          stride: SM,
          components: jM,
          glType: aM,
          isNormalized: PM
        } = rM;
        const nM = this.YJ.ph();
        return new((0, VM.c)().VertexBuffer)(nM, MM, iM, !1, void 0, SM, void 0, OM, jM, aM, PM, !0, void 0, !0)
      }
      load(MM, rM, iM) {
        const OM = (0, cM.f)(iM),
          SM = MM => {
            OM || (iM._delayInfo = iM._delayInfo || [], -1 === iM._delayInfo.indexOf(MM) && iM._delayInfo.push(MM))
          },
          jM = rM.draco;
        if (jM) {
          for (const MM in jM.attributeIds) SM(MM);
          let aM = this.dracoGeometry.get(jM.bufferView.index);
          return aM || (aM = this.viewBytes(jM.bufferView).then((async () => {
            let SM;
            try {
              SM = await uM(rM, this.decode)
            } catch (nM) {
              throw new bM.l(`${MM}: ${nM instanceof Error?nM.message:String(nM)}`)
            }
            const jM = ZM(rM, SM);
            if (OM) return jM;
            const aM = rr(rM.position),
              PM = new((0, VM.c)().MirroredGeometry)(iM.name, this.YJ);
            aM && (PM._boundingInfo = aM, PM.useBoundingInfoFromGeometry = !0), jM.indexData && PM.setIndices(jM.indexData);
            for (const MM of jM.vertexAttributes) PM.setVerticesBuffer(this.layoutVertexBuffer(MM.data, MM), jM.vertexCount);
            return PM.link(jM), PM
          })), this.dracoGeometry.set(jM.bufferView.index, aM)), aM
        }
        const aM = [],
          PM = DM(rM);
        if (OM) return iM.isUnIndexed = !PM.indexData, iM.hasVertexAlpha = (0, Mr.g)(rM), Promise.resolve(PM);
        const nM = new((0, VM.c)().MirroredGeometry)(iM.name, this.YJ),
          {
            indexData: QM
          } = PM;
        QM ? aM.push(this.viewBytes(rM.indices.bufferView).then((() => {
          nM.setIndices(QM)
        }))) : iM.isUnIndexed = !0;
        for (const [zM, {
            kind: LM,
            accessor: mM
          }] of rM.attributes.entries()) SM(LM), aM.push(this.vertexBuffer(mM, PM.vertexAttributes[zM]).then((MM => {
          if ("position" === MM.getKind()) {
            const MM = rr(mM);
            MM && (nM._boundingInfo = MM, nM.useBoundingInfoFromGeometry = !0)
          }
          nM.setVerticesBuffer(MM, PM.vertexCount)
        })));
        return (0, Mr.g)(rM) && (iM.hasVertexAlpha = !0), Promise.all(aM).then((() => (nM.link(PM), nM)))
      }
    }
    var Sr, jr = iM(38261),
      ar = iM(38034),
      Pr = iM(38878),
      nr = iM(38158),
      Qr = iM(38235),
      zr = iM(3063),
      Lr = iM(38205);

    function mr(MM, rM) {
      MM.metadata = MM.metadata || {};
      const iM = MM._internalMetadata = MM._internalMetadata || {},
        OM = iM.dD = iM.dD || {};
      (OM.pointers = OM.pointers || []).push(rM)
    }

    function Hr(MM, rM) {
      if (rM && Object.keys(rM).length > 0) {
        const iM = MM.metadata = MM.metadata || {};
        (iM.dD = iM.dD || {}).extras = rM
      }
    }

    function hr(MM, rM) {
      rM.position = MM.translation ? ar.sh.FromArray(MM.translation) : ar.sh.Zero(), rM.rotationQuaternion = MM.rotation ? ar.Quaternion.FromArray(MM.rotation) : ar.Quaternion.Identity(), rM.UL = MM.scale ? ar.sh.FromArray(MM.scale) : ar.sh.One()
    }
    class Jr {
      constructor(MM, rM) {
        if (this.YJ = MM, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, rM) {
          const rM = MM.ph(),
            iM = MM.Rk.add((() => {
              this.dispose()
            })),
            OM = rM.Rh.add((() => {
              for (const MM of [...this.geometries, ...this.meshes, ...this.textures]) MM._rebuild()
            }));
          this.release = () => {
            MM.Rk.remove(iM), rM.Rh.remove(OM)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const MM of this.meshes) this.YJ.JOM(MM);
          for (const MM of this.materials) this.YJ.addMaterial(MM);
          for (const MM of this.geometries) this.YJ.addGeometry(MM);
          for (const MM of this.transformNodes) this.YJ.addTransformNode(MM);
          for (const MM of this.textures) this.YJ.addTexture(MM)
        }
      }
      dispose() {
        var MM;
        for (const rM of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const MM of rM.slice()) MM.dispose();
          rM.length = 0
        }
        null === (MM = this.release) || void 0 === MM || MM.call(this), this.release = null
      }
    }
    class dr {
      constructor(MM, rM, iM, OM, SM, jM, aM) {
        this.asset = MM, this.YJ = rM, this.tree = iM, this.geometryData = SM, this.materials = jM, this.lite = aM, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = OM ? iM : null
      }
      create(MM) {
        if (this.lite) return MM();
        const rM = this.YJ;
        rM._blockEntityCollection = !!this.container;
        try {
          const rM = MM();
          return this.container && (rM._parentContainer = this.container), rM
        } finally {
          rM._blockEntityCollection = !1
        }
      }
      node(MM, rM) {
        return this.create((() => this.lite ? rM ? (0, Pr.e)(this.lite, MM) : (0, Pr.p)(this.lite, MM) : rM ? new((0, VM.c)().Mesh)(MM, this.YJ) : new((0, VM.c)().TransformNode)(MM, this.YJ)))
      }
      async load() {
        var MM;
        this.asset.model.json.nodes && this.createRoot();
        const rM = this.lite ? null : this.YJ,
          iM = null !== (MM = null === rM || void 0 === rM ? void 0 : rM.blockMaterialDirtyMechanism) && void 0 !== MM && MM;
        let OM;
        rM && (rM.blockMaterialDirtyMechanism = !0);
        try {
          OM = this.loadScene()
        } finally {
          null === rM || void 0 === rM || rM._forceBlockMaterialDirtyMechanism(iM)
        }
        await OM;
        const {
          root: SM,
          tree: jM
        } = this;
        SM && (SM.kR(!0), jM.meshes.push(SM), jM.rootNodes.push(SM));
        for (const PM of this.asset.model.nodes) {
          const MM = this.nodeObjects.get(PM.index);
          MM && ["TransformNode", "LiteNode"].includes(MM.getClassName()) && jM.transformNodes.push(MM);
          for (const rM of null !== (aM = this.nodePrimitives.get(PM.index)) && void 0 !== aM ? aM : []) {
            var aM;
            jM.meshes.push(rM);
            const MM = rM.geometry;
            MM && !jM.geometries.includes(MM) && jM.geometries.push(MM)
          }
        }
      }
      createRoot() {
        const MM = this.node("__root__", !0);
        this.root = MM, MM.kR(!1), this.YJ.useRightHandedSystem || hr(NM, MM)
      }
      loadScene() {
        const MM = [];
        for (const rM of this.asset.model.rootNodes) MM.push(this.loadNode(this.asset.model.nodes[rM], (MM => {
          MM.parent = this.root
        })));
        return MM.push(Promise.resolve()), Promise.all(MM).then((() => {}))
      }
      loadNode(MM, rM) {
        const iM = `/nodes/${MM.index}`,
          OM = [],
          SM = SM => {
            if (mr(SM, iM), hr(MM, SM), MM.hasCamera && !this.YJ.useRightHandedSystem) {
              const {
                UL: MM
              } = SM;
              MM.set(-1, MM.y, MM.z)
            }
            for (const rM of MM.children) OM.push(this.loadNode(this.asset.model.nodes[rM], (MM => {
              MM.parent = SM
            })));
            (iM => {
              Hr(iM, MM.extras), rM(iM)
            })(SM)
          };
        if (null === MM.mesh) {
          const rM = this.node(YM(MM), !1);
          this.nodeObjects.set(MM.index, rM), SM(rM)
        } else {
          const rM = this.asset.model.meshes[MM.mesh];
          OM.push(this.loadMesh(`/meshes/${rM.index}`, MM, rM, SM))
        }
        return Promise.all(OM).then((() => {
          for (const iM of null !== (rM = this.nodePrimitives.get(MM.index)) && void 0 !== rM ? rM : []) {
            var rM;
            ir(iM)
          }
          return this.nodeObjects.get(MM.index)
        }))
      }
      loadMesh(MM, rM, iM, OM) {
        const SM = [],
          jM = YM(rM);
        if (1 === iM.primitives.length) {
          const OM = iM.primitives[0];
          SM.push(this.loadPrimitive(`${MM}/primitives/${OM.index}`, jM, OM, (MM => {
            this.nodeObjects.set(rM.index, MM), this.nodePrimitives.set(rM.index, [MM])
          })))
        } else {
          const OM = this.node(jM, !1);
          this.nodeObjects.set(rM.index, OM);
          const aM = [];
          this.nodePrimitives.set(rM.index, aM);
          for (const rM of iM.primitives) SM.push(this.loadPrimitive(`${MM}/primitives/${rM.index}`, `${jM}_primitive${rM.index}`, rM, (MM => {
            MM.parent = OM, aM.push(MM)
          })))
        }
        const aM = this.nodeObjects.get(rM.index);
        return OM(aM), Promise.all(SM).then((() => aM))
      }
      loadPrimitive(MM, rM, iM, OM) {
        const SM = [],
          jM = this.node(rM, !0);
        if (jM.sideOrientation = this.YJ.useRightHandedSystem ? nr.c.CounterClockWiseSideOrientation : nr.c.ClockWiseSideOrientation, SM.push(this.geometryData.load(MM, iM, jM).then((MM => {
            if ((0, cM.f)(jM)) {
              var rM, iM;
              const OM = MM;
              jM.replaceModel(OM, Int32Array.of(0, null !== (rM = null === (iM = OM.indexData) || void 0 === iM ? void 0 : iM.length) && void 0 !== rM ? rM : OM.vertexCount, 0, OM.vertexCount))
            } else this.create((() => (MM.applyToMesh(jM), MM)))
          }))), this.materials) {
          const MM = 0 === iM.mode ? nr.c.PointListDrawMode : nr.c.TriangleFillMode,
            rM = null === iM.material ? null : this.asset.model.materials[iM.material];
          SM.push(this.loadMaterial(rM, MM, (MM => {
            jM.material = MM
          })))
        }
        return mr(jM, MM), OM(jM), Promise.all(SM).then((() => jM))
      }
      loadMaterial(MM, rM, iM) {
        var OM;
        const SM = `${null!==(OM=null===MM||void 0===MM?void 0:MM.index)&&void 0!==OM?OM:"default"}:${rM}`;
        let jM = this.materialData.get(SM);
        return jM || (jM = this.createMaterial(MM, rM), this.materialData.set(SM, jM)), iM(jM.material), jM.promise
      }
      createMaterial(MM, rM) {
        const iM = MM ? MM.name || `material${MM.index}` : "__GLTFLoader._default",
          {
            style: OM,
            unlit: SM
          } = this.materials;
        let jM;
        const aM = this.create((() => {
          const aM = (0, Lr.d)({
            name: iM,
            YJ: this.YJ,
            sets: {
              ...(0, Mr.d)(this.asset, MM, OM, SM),
              fillMode: rM
            },
            unrendered: !0
          });
          return jM = aM.model, aM.mirror
        }));
        let PM = Promise.resolve();
        if (MM) {
          const rM = `/materials/${MM.index}`,
            OM = jM.diffuseTexture;
          if (OM && !OM.mirror) PM = new Promise((MM => setTimeout(MM)));
          else if (OM) {
            const SM = OM.mirror;
            SM._parentContainer = this.container, SM.name = `${iM} (Base Color)`, mr(SM, `${rM}${MM.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(SM), PM = (0, Qr.x)(OM)
          }
          Hr(aM, MM.extras), mr(aM, rM)
        }
        return this.tree.materials.push(aM), {
          material: aM,
          promise: PM
        }
      }
    }

    function yr() {
      jr.h.dracoDecodes = JM.decodes, jr.h.dracoWorkersStarted = JM.workersStarted, jr.h.dracoMostWorkers = JM.mostWorkers
    }
    async function lr(MM, rM, iM, SM, jM) {
      try {
        return await async function(MM, rM, iM, SM, jM, aM) {
          var PM;
          let nM;
          const QM = null === (PM = (0, zr.f)()) || void 0 === PM ? void 0 : PM.CL,
            zM = null !== QM && void 0 !== QM && QM.MJ && rM === QM.Hk() ? QM : null,
            LM = jM && !zM;
          return await TM(MM, rM, iM, SM, OM.d, (MM => (nM = new Jr(rM, LM), new dr(MM, rM, nM, LM, new Or(rM, SM), aM, zM).load())), !jM), nM
        }(MM, rM, iM, GM, SM, jM)
      } finally {
        yr()
      }
    }
    async function Er(MM, rM, iM, SM) {
      try {
        return await TM(MM, rM, iM, GM, OM.d, (MM => SM(MM, new Or(rM, GM))))
      } finally {
        yr()
      }
    }
    Sr = SM.b, zM || (zM = {
      scriptUrl: new URL(Sr.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(Sr.wasmBinaryUrl, location.href).href
    })
  },
  44160: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM
    });
    var OM = iM(119),
      SM = iM(1211);

    function jM(MM) {
      return (0, OM.isDiscordClient)() ? `https://${SM.e.discordDomain}/${MM.href}` : MM.href
    }
    const aM = {
      scriptUrl: jM(new iM.U(iM(44167))),
      wasmBinaryUrl: jM(new iM.U(iM(44169)))
    }
  },
  34814: MM => {
    MM.exports = function(MM, rM, iM, OM) {
      var SM = self || window;
      try {
        try {
          var jM;
          try {
            jM = new SM.Blob([MM])
          } catch (QM) {
            (jM = new(SM.BlobBuilder || SM.WebKitBlobBuilder || SM.MozBlobBuilder || SM.MSBlobBuilder)).append(MM), jM = jM.getBlob()
          }
          var aM = SM.URL || SM.webkitURL,
            PM = aM.createObjectURL(jM),
            nM = new SM[rM](PM, iM);
          return aM.revokeObjectURL(PM), nM
        } catch (QM) {
          return new SM[rM]("data:application/javascript,".concat(encodeURIComponent(MM)), iM)
        }
      } catch (QM) {
        if (!OM) throw Error("Inline worker is not supported");
        return new SM[rM](OM, iM)
      }
    }
  },
  44169: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  44167: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);