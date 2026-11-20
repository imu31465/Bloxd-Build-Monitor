export const id = 203;
export const ids = [203];
export const modules = {
  41093: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      loadGlbAsset: () => Sk,
      loadGlbTree: () => Qk
    });
    var lT = cT(37760),
      MT = cT(41101),
      KT = cT(36063),
      OT = cT.n(KT);

    function yT() {
      return OT()('(()=>{class TT extends Error{}function kT(kT,cT){const lT=kT._malloc(cT);if(0===lT)throw new TT(`Draco: the decoder\'s heap refused ${cT} bytes`);return lT}function cT(TT){return{[TT.DT_FLOAT32]:[Float32Array,5126],[TT.DT_INT8]:[Int8Array,5120],[TT.DT_INT16]:[Int16Array,5122],[TT.DT_INT32]:[Int32Array,5124],[TT.DT_UINT8]:[Uint8Array,5121],[TT.DT_UINT16]:[Uint16Array,5123],[TT.DT_UINT32]:[Uint32Array,5125]}}function lT(kT,lT,MT,KT,OT){let yT=null,fT=null,xT=null;try{yT=new kT.Decoder,fT=new kT.DecoderBuffer,fT.Init(lT,lT.byteLength);let IT=0;const AT=yT.GetEncodedGeometryType(fT);if(AT===kT.TRIANGULAR_MESH){const cT=new kT.Mesh;xT=cT;const lT=yT.DecodeBufferToMesh(fT,cT);if(!lT.ok()||0===cT.ptr)throw new TT(lT.error_msg());IT=3*cT.num_faces()}else{if(AT!==kT.POINT_CLOUD)throw new TT(`Draco: Cannot decode invalid geometry type ${AT}`);{const cT=new kT.PointCloud;xT=cT;const lT=yT.DecodeBufferToPointCloud(fT,cT);if(!lT.ok()||!cT.ptr)throw new TT(lT.error_msg())}}const CT=xT.num_points();if(CT!==KT.vertices||IT!==KT.indices)throw new TT(`Draco: decoded ${CT} vertices and ${IT} indices, the accessors declare ${KT.vertices} and ${KT.indices}`);const jT=cT(kT),vT=[];for(const{kind:kT,id:cT,components:lT}of MT){const MT=yT.GetAttributeByUniqueId(xT,cT);if(!MT||0===MT.ptr)throw new TT(`Draco: no attribute with id ${cT} (${kT})`);const KT=MT.data_type();if(!jT[KT])throw new TT(`Draco: Cannot decode invalid data type ${KT}`);if(MT.num_components()!==lT)throw new TT(`Draco: ${kT} decodes to ${MT.num_components()} components, its accessor declares ${lT}`);vT.push([kT,MT,KT])}return OT({dracoDecoder:yT,geometry:xT,triangles:AT===kT.TRIANGULAR_MESH,numPoints:CT,numIndices:IT,attributes:vT})}finally{xT&&kT.destroy(xT),fT&&kT.destroy(fT),yT&&kT.destroy(yT)}}const MT=self;let KT=null;self.onmessage=TT=>{let{data:OT}=TT;if("init"===OT.id){try{importScripts(OT.url),KT=DracoDecoderModule({wasmBinary:OT.wasmBinary}),MT.postMessage({id:"initDone"})}catch(AT){MT.postMessage({id:"initError",message:AT instanceof Error?AT.message:String(AT)})}return}const{seq:yT,data:fT,attributeIds:xT,expected:IT}=OT;KT?KT.then((TT=>{try{const KT=function(TT,MT,KT,OT){const yT=Object.keys(KT).map((TT=>({kind:TT,id:KT[TT],components:OT.components[TT]})));return lT(TT,MT,yT,OT,(lT=>{let{dracoDecoder:MT,geometry:KT,triangles:OT,numPoints:yT,numIndices:fT,attributes:xT}=lT;const IT=cT(TT);let AT=null;if(OT){const cT=4*fT,lT=kT(TT,cT);try{MT.GetTrianglesUInt32Array(KT,cT,lT),AT=new Uint32Array(fT),AT.set(new Uint32Array(TT.HEAPF32.buffer,lT,fT))}finally{TT._free(lT)}}const CT=[];for(const[cT,jT,vT]of xT){const[lT]=IT[vT],OT=jT.num_components(),fT=yT*OT,xT=fT*lT.BYTES_PER_ELEMENT,AT=kT(TT,xT);try{MT.GetAttributeDataArrayForAllPoints(KT,jT,vT,xT,AT),CT.push({kind:cT,data:new lT(TT.HEAPF32.buffer,AT,fT).slice(),size:OT,byteOffset:jT.byte_offset(),byteStride:jT.byte_stride(),normalized:jT.normalized()})}finally{TT._free(AT)}}return{indices:AT,attributes:CT,totalVertices:yT}}))}(TT,fT,xT,IT),OT=KT.attributes.map((TT=>TT.data.buffer));KT.indices&&OT.push(KT.indices.buffer),MT.postMessage({id:"decoded",seq:yT,...KT},OT)}catch(AT){MT.postMessage({id:"decodeError",seq:yT,message:AT instanceof Error?AT.message:String(AT)})}}),(TT=>{MT.postMessage({id:"decodeError",seq:yT,message:TT instanceof Error?TT.message:String(TT)})})):MT.postMessage({id:"decodeError",seq:yT,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, cT.p + "dracoDecode.worker.9a707945.worker.js")
    }
    var fT = cT(118);
    const xT = 1e3;
    let IT = null,
      AT = null;
    const CT = [],
      jT = [];
    let vT = 0;
    const tT = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      hT = function(TT, kT) {
        const cT = TT ? Math.max(1, Math.min(Math.floor(.5 * TT), 4)) : 1;
        return kT ? Math.min(cT, 2) : cT
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, fT.isMobile)());

    function NT() {
      if (!IT) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: TT,
        wasmBinaryUrl: kT
      } = IT;
      return AT ??= fetch(kT).then((TT => {
        if (!TT.ok) throw new Error(`Draco: fetching ${kT} failed: ${TT.status}`);
        return TT.arrayBuffer()
      })), AT.catch((() => {
        AT = null
      })), tT.workersStarted++, AT.then((kT => new Promise(((cT, lT) => {
        const MT = new yT;
        MT.onerror = TT => {
          MT.onmessage = null, MT.onerror = null, MT.terminate(), lT(new Error("Draco: the decode worker failed to start" + (TT.message ? `: ${TT.message}` : " (its script did not load)")))
        }, MT.onmessage = TT => {
          let {
            data: kT
          } = TT;
          MT.onmessage = null, MT.onerror = null, "initDone" === kT.id ? cT(MT) : (MT.terminate(), lT(new Error(`Draco: ${"initError"===kT.id?kT.message:"the worker did not start"}`)))
        };
        const KT = kT.slice(0),
          OT = {
            id: "init",
            url: TT,
            wasmBinary: KT
          };
        MT.postMessage(OT, [KT])
      }))))
    }

    function QT(TT) {
      const kT = CT.indexOf(TT); - 1 !== kT && CT.splice(kT, 1);
      const cT = jT.shift();
      cT && DT(cT)
    }

    function ST(TT, kT) {
      TT.busy = !0, TT.releaseTimer && (clearTimeout(TT.releaseTimer), TT.releaseTimer = null);
      TT.worker.then((cT => {
        const lT = vT++;
        cT.onmessage = MT => {
          let {
            data: KT
          } = MT;
          if (("decoded" === KT.id || "decodeError" === KT.id) && KT.seq === lT) {
            if (cT.onmessage = null, cT.onerror = null, "decoded" === KT.id) return tT.decodes++, kT.resolve({
              indices: KT.indices,
              attributes: KT.attributes,
              totalVertices: KT.totalVertices
            }), void(() => {
              const kT = jT.shift();
              kT ? ST(TT, kT) : (TT.busy = !1, TT.releaseTimer = setTimeout((() => {
                const kT = CT.indexOf(TT); - 1 !== kT && CT.splice(kT, 1), TT.worker.then((TT => {
                  TT.terminate()
                }))
              }), xT))
            })();
            cT.terminate(), kT.reject(new Error(KT.message)), QT(TT)
          }
        }, cT.onerror = lT => {
          cT.onmessage = null, cT.onerror = null, cT.terminate(), kT.reject(new Error(`Draco: the decode worker failed: ${lT.message}`)), QT(TT)
        };
        const MT = {
          id: "decode",
          seq: lT,
          data: kT.data,
          attributeIds: kT.attributeIds,
          expected: kT.expected
        };
        cT.postMessage(MT, [kT.data.buffer])
      }), (cT => {
        kT.reject(cT instanceof Error ? cT : new Error(String(cT))), QT(TT)
      }))
    }

    function DT(TT) {
      const kT = CT.find((TT => !TT.busy));
      if (kT) ST(kT, TT);
      else {
        if (CT.length < hT) {
          const kT = {
            worker: NT(),
            busy: !0,
            releaseTimer: null
          };
          return CT.push(kT), tT.mostWorkers = Math.max(tT.mostWorkers, CT.length), void ST(kT, TT)
        }
        jT.push(TT)
      }
    }

    function aT(TT, kT, cT) {
      return new Promise(((lT, MT) => {
        DT({
          data: new Int8Array(TT.buffer, TT.byteOffset, TT.byteLength).slice(),
          attributeIds: kT,
          expected: cT,
          resolve: lT,
          reject: MT
        })
      }))
    }
    var FT = cT(37299),
      rT = cT(37308),
      PT = cT(9438),
      wT = cT(9429);
    const mT = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function bT(TT) {
      const kT = (0, wT.f)(TT.byteLength);
      if (kT) throw new PT.o(kT);
      const {
        json: cT,
        bin: lT
      } = (0, PT.D)(TT), MT = (0, wT.c)(cT, lT);
      if (MT) throw new PT.o(MT);
      try {
        return function(TT, kT) {
          var cT, lT, MT, KT, OT, yT, fT, xT, IT, AT, CT, jT, vT, tT, hT;
          const NT = new Map,
            QT = cT => {
              let lT = NT.get(cT);
              if (!lT) {
                var MT;
                const KT = TT.bufferViews[cT],
                  OT = null !== (MT = KT.byteOffset) && void 0 !== MT ? MT : 0;
                lT = {
                  index: cT,
                  bytes: kT.subarray(OT, OT + KT.byteLength),
                  byteStride: KT.byteStride
                }, NT.set(cT, lT)
              }
              return lT
            },
            ST = new Map,
            DT = kT => {
              let cT = ST.get(kT);
              if (!cT) {
                var lT;
                const MT = TT.accessors[kT];
                cT = {
                  index: kT,
                  count: MT.count,
                  type: MT.type,
                  numComponents: PT.p[MT.type],
                  componentType: MT.componentType,
                  normalized: null !== (lT = MT.normalized) && void 0 !== lT && lT,
                  byteOffset: MT.byteOffset,
                  bufferView: void 0 === MT.bufferView ? null : QT(MT.bufferView),
                  min: MT.min,
                  max: MT.max
                }, ST.set(kT, cT)
              }
              return cT
            },
            aT = null !== (cT = null === (lT = TT.extensionsUsed) || void 0 === lT ? void 0 : lT.includes("KHR_draco_mesh_compression")) && void 0 !== cT && cT,
            FT = (null !== (MT = TT.meshes) && void 0 !== MT ? MT : []).map(((kT, cT) => {
              const lT = kT.primitives.map(((kT, cT) => {
                var lT, MT, KT;
                const OT = aT ? null === (lT = kT.extensions) || void 0 === lT ? void 0 : lT.KHR_draco_mesh_compression : void 0;
                let yT = null;
                const fT = [];
                if (OT) {
                  const cT = {
                    vertices: TT.accessors[kT.attributes.POSITION].count,
                    indices: void 0 === kT.indices ? 0 : TT.accessors[kT.indices].count,
                    components: {}
                  };
                  yT = {
                    bufferView: QT(OT.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: cT
                  };
                  for (const [lT, MT] of PT.h) {
                    const KT = OT.attributes[lT];
                    if (void 0 === KT) continue;
                    yT.attributeIds[MT] = KT;
                    const fT = kT.attributes[lT];
                    var xT;
                    if (void 0 !== fT) yT.normalized[MT] = null !== (xT = TT.accessors[fT].normalized) && void 0 !== xT && xT, cT.components[MT] = PT.p[TT.accessors[fT].type]
                  }
                } else
                  for (const [TT, IT] of PT.h) {
                    const cT = kT.attributes[TT];
                    void 0 !== cT && fT.push({
                      semantic: TT,
                      kind: IT,
                      accessor: DT(cT)
                    })
                  }
                return {
                  index: cT,
                  mode: null !== (MT = kT.mode) && void 0 !== MT ? MT : 4,
                  attributes: fT,
                  indices: OT || void 0 === kT.indices ? null : DT(kT.indices),
                  position: void 0 === kT.attributes.POSITION ? null : DT(kT.attributes.POSITION),
                  material: null !== (KT = kT.material) && void 0 !== KT ? KT : null,
                  draco: yT
                }
              }));
              return {
                index: cT,
                name: kT.name,
                primitives: lT,
                extras: kT.extras
              }
            })),
            rT = (null !== (KT = TT.nodes) && void 0 !== KT ? KT : []).map(((TT, kT) => {
              var cT, lT;
              return {
                index: kT,
                name: TT.name,
                children: null !== (cT = TT.children) && void 0 !== cT ? cT : [],
                mesh: null !== (lT = TT.mesh) && void 0 !== lT ? lT : null,
                translation: TT.translation,
                rotation: TT.rotation,
                scale: TT.scale,
                hasCamera: void 0 !== TT.camera,
                extras: TT.extras
              }
            })),
            wT = null !== (OT = null === (yT = TT.extensionsUsed) || void 0 === yT ? void 0 : yT.includes("KHR_materials_unlit")) && void 0 !== OT && OT,
            bT = null !== (fT = null === (xT = TT.extensionsUsed) || void 0 === xT ? void 0 : xT.includes("KHR_texture_transform")) && void 0 !== fT && fT,
            zT = (null !== (IT = TT.materials) && void 0 !== IT ? IT : []).map(((TT, kT) => {
              var cT, lT, MT, KT;
              const OT = TT.pbrMetallicRoughness,
                yT = null === OT || void 0 === OT ? void 0 : OT.baseColorTexture;
              return {
                index: kT,
                name: TT.name,
                extras: TT.extras,
                unlit: wT && void 0 !== (null === (cT = TT.extensions) || void 0 === cT ? void 0 : cT.KHR_materials_unlit),
                pbr: OT ? {
                  baseColorFactor: OT.baseColorFactor,
                  metallicFactor: OT.metallicFactor,
                  roughnessFactor: OT.roughnessFactor
                } : null,
                baseColorTexture: yT ? {
                  texture: yT.index,
                  transform: bT && (null === (lT = yT.extensions) || void 0 === lT ? void 0 : lT.KHR_texture_transform) || null
                } : null,
                emissiveFactor: TT.emissiveFactor,
                alphaMode: null !== (MT = TT.alphaMode) && void 0 !== MT ? MT : "OPAQUE",
                alphaCutoff: TT.alphaCutoff,
                doubleSided: null !== (KT = TT.doubleSided) && void 0 !== KT && KT
              }
            })),
            JT = (null !== (AT = TT.textures) && void 0 !== AT ? AT : []).map(((kT, cT) => {
              var lT, MT;
              const KT = void 0 === kT.sampler ? mT : {
                index: kT.sampler,
                ...null === (lT = TT.samplers) || void 0 === lT ? void 0 : lT[kT.sampler]
              };
              return {
                index: cT,
                sampler: {
                  index: KT.index,
                  magFilter: KT.magFilter,
                  minFilter: KT.minFilter,
                  wrapS: KT.wrapS,
                  wrapT: KT.wrapT
                },
                image: null !== (MT = kT.source) && void 0 !== MT ? MT : -1
              }
            })),
            oT = (null !== (CT = TT.images) && void 0 !== CT ? CT : []).map(((TT, kT) => ({
              index: kT,
              name: TT.name,
              mimeType: TT.mimeType,
              bufferView: QT(TT.bufferView)
            }))),
            HT = null !== (jT = (0, PT.A)(TT)) && void 0 !== jT ? jT : 0;
          return {
            json: TT,
            rootNodes: null !== (vT = null === (tT = TT.scenes) || void 0 === tT || null === (hT = tT[HT]) || void 0 === hT ? void 0 : hT.nodes) && void 0 !== vT ? vT : [],
            nodes: rT,
            meshes: FT,
            materials: zT,
            textures: JT,
            images: oT
          }
        }(cT, lT)
      } catch (KT) {
        throw KT instanceof PT.k ? KT : new PT.k(`reading the GLB failed: ${KT instanceof Error?KT.message:String(KT)}`)
      }
    }
    async function zT(TT, kT) {
      var cT, lT;
      const MT = TT.draco;
      if (!MT) throw new PT.k("not a Draco primitive");
      let KT;
      try {
        KT = await kT(MT.bufferView.bytes, MT.attributeIds, MT.expected)
      } catch (xT) {
        throw new PT.k(`Draco decoding failed: ${xT instanceof Error?xT.message:String(xT)}`)
      }
      const {
        vertices: OT,
        indices: yT,
        components: fT
      } = MT.expected;
      if (KT.totalVertices !== OT || (null !== (cT = null === (lT = KT.indices) || void 0 === lT ? void 0 : lT.length) && void 0 !== cT ? cT : 0) !== yT || KT.attributes.some((TT => TT.size !== fT[TT.kind] || TT.data.length !== OT * TT.size))) throw new PT.k("Draco decoding gave other counts than the accessors declare");
      for (const IT of KT.attributes) {
        const TT = MT.normalized[IT.kind];
        void 0 !== TT && (IT.normalized = TT)
      }
      return KT
    }
    const JT = new WeakMap;

    function oT(TT, kT) {
      var cT;
      const lT = null !== (cT = JT.get(TT)) && void 0 !== cT ? cT : kT(TT);
      return JT.set(TT, lT), lT
    }

    function HT(TT) {
      const kT = TT.bufferView,
        cT = 5125 === TT.componentType ? Uint32Array : Uint16Array,
        lT = kT.bytes.buffer,
        MT = kT.bytes.byteOffset + (TT.byteOffset || 0);
      return MT % cT.BYTES_PER_ELEMENT !== 0 ? new cT(lT.slice(MT, MT + TT.count * cT.BYTES_PER_ELEMENT), 0) : new cT(lT, MT, TT.count)
    }

    function eT(TT, kT) {
      if (TT.min && TT.max) return [new Float64Array(TT.min), new Float64Array(TT.max)];
      const cT = kT.find((TT => {
          let {
            kind: kT
          } = TT;
          return "position" === kT
        })),
        lT = cT ? (0, rT.g)(cT, TT.count) : new Float32Array(0);
      return (0, rT.m)(lT.length / 3, ((TT, kT) => lT[3 * TT + kT]))
    }

    function GT(TT) {
      const kT = TT.attributes.map((TT => {
          var kT, cT;
          let {
            kind: lT,
            accessor: MT
          } = TT;
          const {
            bufferView: KT,
            numComponents: OT
          } = MT;
          if (!KT) {
            return {
              kind: lT,
              data: oT(MT, (() => new Float32Array(OT * MT.count))),
              offset: 0,
              stride: 4 * OT,
              components: OT,
              glType: 5126,
              isNormalized: !1
            }
          }
          const yT = null !== (kT = KT.byteStride) && void 0 !== kT ? kT : OT * PT.e[MT.componentType];
          return {
            kind: lT,
            data: KT.bytes,
            offset: null !== (cT = MT.byteOffset) && void 0 !== cT ? cT : 0,
            stride: yT,
            components: OT,
            glType: MT.componentType,
            isNormalized: MT.normalized
          }
        })),
        cT = TT.indices,
        lT = cT && oT(cT, HT),
        MT = TT.position;
      return new rT.d(kT, lT, MT.count, ...eT(MT, kT))
    }
    const VT = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function ET(TT, kT) {
      const cT = kT.attributes.map((TT => {
        let {
          kind: kT,
          data: cT,
          size: lT,
          byteOffset: MT,
          byteStride: KT,
          normalized: OT
        } = TT;
        return {
          kind: kT,
          data: cT,
          offset: MT,
          stride: KT,
          components: lT,
          glType: 5120 + VT.indexOf(cT.constructor),
          isNormalized: OT
        }
      }));
      return new rT.d(cT, kT.indices, kT.totalVertices, ...eT(TT.position, cT))
    }

    function ZT(TT) {
      const kT = TT.lastIndexOf("/");
      return kT < 0 ? TT : TT.substring(kT + 1)
    }

    function uT(TT) {
      const kT = TT.lastIndexOf("/");
      return kT < 0 ? "" : TT.substring(0, kT + 1)
    }

    function XT(TT) {
      return TT.name || `node${TT.index}`
    }
    const dT = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      LT = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      RT = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function gT(TT) {
      var kT, cT, lT, MT;
      const KT = null !== (kT = TT.minFilter) && void 0 !== kT ? kT : 9987;
      return 9729 === (null !== (cT = TT.magFilter) && void 0 !== cT ? cT : 9729) ? null !== (lT = LT[KT]) && void 0 !== lT ? lT : 3 : null !== (MT = RT[KT]) && void 0 !== MT ? MT : 4
    }
    const UT = {
      33071: 0,
      33648: 2
    };

    function YT(TT) {
      var kT;
      return null !== (kT = UT[null !== TT && void 0 !== TT ? TT : 10497]) && void 0 !== kT ? kT : 1
    }

    function BT(TT) {
      return 9728 === TT.minFilter || 9729 === TT.minFilter
    }

    function WT(TT) {
      var kT, cT, lT;
      const MT = Float64Array.from(null !== (kT = TT.scale) && void 0 !== kT ? kT : [1, 1, 1]);
      return TT.hasCamera && (MT[0] = -1), {
        translation: Float64Array.from(null !== (cT = TT.translation) && void 0 !== cT ? cT : [0, 0, 0]),
        rotation: Float64Array.from(null !== (lT = TT.rotation) && void 0 !== lT ? lT : [0, 0, 0, 1]),
        scale: MT
      }
    }

    function nT(TT, kT) {
      let {
        translation: cT,
        rotation: lT,
        scale: MT
      } = TT;
      const KT = new Float32Array(16);
      return (0, FT.e)(MT, 0, lT, 0, cT, 0, KT), kT && (0, FT.n)(KT, kT, 0, KT), KT
    }
    class pT {
      constructor(TT, kT, cT, lT) {
        this.model = TT, this.decode = kT, this.fileInfo = cT, this.uniqueRootUrl = lT, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const MT = new Set,
          KT = (kT, cT) => {
            const lT = TT.nodes[kT];
            if (this.parents.has(lT)) throw new PT.k(`/nodes/${kT}: Invalid recursive node hierarchy`);
            this.parents.set(lT, cT);
            const OT = null === lT.mesh ? [] : TT.meshes[lT.mesh].primitives,
              yT = OT.map((TT => {
                const kT = OT.length > 1;
                return {
                  name: kT ? `${XT(lT)}_primitive${TT.index}` : XT(lT),
                  node: lT,
                  primitive: TT,
                  part: kT,
                  geometry: null
                }
              }));
            this.uses.set(lT, yT);
            const fT = null !== lT.mesh && MT.has(lT.mesh);
            MT.add(lT.mesh), this.own.set(lT, fT ? [] : yT);
            for (const TT of lT.children) KT(TT, lT)
          };
        for (const OT of TT.rootNodes) KT(OT, null);
        this.primitives = TT.nodes.flatMap((TT => {
          var kT;
          return null !== (kT = this.own.get(TT)) && void 0 !== kT ? kT : []
        }))
      }
      decodeGeometries() {
        const TT = new Map;
        return Promise.all(this.primitives.map((async kT => {
          const {
            primitive: cT
          } = kT, lT = cT.draco;
          let MT = lT ? TT.get(lT.bufferView.index) : Promise.resolve(GT(cT));
          MT || (MT = zT(cT, this.decode).then((TT => ET(cT, TT))), TT.set(lT.bufferView.index, MT)), kT.geometry = await MT
        })))
      }
      parentOf(TT) {
        var kT;
        return null !== (kT = this.parents.get(TT)) && void 0 !== kT ? kT : null
      }
      meshesUnder(TT) {
        const kT = this.model.nodes.filter((TT => this.uses.has(TT)));
        for (const lT of kT) {
          const kT = this.uses.get(lT),
            cT = kT.find((kT => kT.name === TT));
          if (cT) return 1 === kT.length ? this.subtree(lT) : this.own.get(lT).includes(cT) ? [cT] : []
        }
        const cT = kT.find((kT => 1 !== this.uses.get(kT).length && XT(kT) === TT));
        return cT ? this.subtree(cT) : null
      }
      subtree(TT) {
        return [...this.own.get(TT), ...TT.children.flatMap((TT => this.subtree(this.model.nodes[TT])))]
      }
      worldMatrix(TT, kT, cT) {
        let lT = nT(WT(kT ? dT : {}), null);
        const MT = [];
        for (let OT = TT.part ? TT.node : this.parentOf(TT.node); OT; OT = this.parentOf(OT)) MT.unshift(OT);
        for (const OT of MT) lT = nT(WT(OT), lT);
        const KT = WT(TT.part ? {} : TT.node);
        return void 0 !== cT && KT.scale.fill(cT), nT(KT, lT)
      }
      floats(TT) {
        const {
          vertexAttributes: kT,
          vertexCount: cT
        } = TT.geometry;
        return new Map(kT.map((TT => [TT.kind, (0, rT.g)(TT, cT)])))
      }
      imageUrl(TT) {
        return function(TT, kT, cT) {
          let {
            name: lT
          } = kT;
          return `data:${TT}${lT}#image${cT}`
        }(this.uniqueRootUrl, this.fileInfo, TT)
      }
      textureDesc(TT, kT) {
        var cT;
        let {
          texture: lT,
          transform: MT
        } = TT;
        const {
          sampler: KT,
          image: OT
        } = this.model.textures[lT], {
          bufferView: yT,
          mimeType: fT,
          name: xT
        } = this.model.images[OT], IT = MT && {
          ...MT.offset ? {
            uOffset: MT.offset[0],
            vOffset: MT.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...MT.rotation ? {
            wAng: -MT.rotation
          } : {},
          ...MT.scale ? {
            uScale: MT.scale[0],
            vScale: MT.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(OT),
          noMipmap: BT(KT),
          invertY: !1,
          samplingMode: gT(KT),
          data: {
            bytes: yT.bytes,
            mimeType: fT,
            label: xT,
            context: `/textures/${lT}`
          },
          sets: {
            wrapU: YT(KT.wrapS),
            wrapV: YT(KT.wrapT),
            ...IT,
            coordinatesIndex: null !== (cT = null === MT || void 0 === MT ? void 0 : MT.texCoord) && void 0 !== cT ? cT : 0,
            hasAlpha: kT
          }
        }
      }
    }
    async function iT(TT, kT, cT, lT, MT, KT) {
      let OT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const yT = function(TT, kT, cT) {
          return "string" !== typeof kT ? {
            url: "",
            rootUrl: TT,
            name: cT()
          } : kT ? kT.startsWith("data:") ? {
            url: kT,
            rootUrl: TT,
            name: ""
          } : TT ? {
            url: TT + kT,
            rootUrl: TT,
            name: kT
          } : {
            url: kT,
            rootUrl: uT(kT),
            name: ZT(kT)
          } : {
            url: TT,
            rootUrl: uT(TT),
            name: ZT(TT)
          }
        }(cT, TT, MT),
        fT = {};
      kT.addPendingData(fT);
      try {
        const cT = bT(await async function(TT, kT) {
            return "string" !== typeof kT ? kT : TT.url.startsWith("data:") ? (0, PT.t)(TT.url) : await (0, PT.x)(TT.url)
          }(yT, TT)),
          fT = new pT(cT, lT, yT, function(TT, kT) {
            let {
              rootUrl: cT,
              name: lT
            } = TT;
            return !cT.startsWith("file:") && lT ? cT : `${cT}${kT()}/`
          }(yT, MT));
        return await KT(fT), kT.importedMeshesFiles && (kT.loadingPluginName = "KJ", OT && kT.importedMeshesFiles.push(yT.url)), fT
      } finally {
        kT.removePendingData(fT)
      }
    }
    var qT = cT(37442),
      sT = cT(37275),
      Tk = cT(37741);

    function kk(TT) {
      if (null === TT || void 0 === TT || !TT.min || !TT.max) return null;
      const [kT, cT, lT] = TT.min, [MT, KT, OT] = TT.max, {
        BoundingInfo: yT,
        Fv: fT
      } = (0, qT.e)();
      return new yT(new fT(kT, cT, lT), new fT(MT, KT, OT))
    }

    function ck(TT) {
      (0, sT.f)(TT) || (TT.geometry && TT.geometry.useBoundingInfoFromGeometry ? TT._updateBoundingInfo() : TT.refreshBoundingInfo(!0, !0))
    }
    class lk {
      constructor(TT, kT) {
        this.et = TT, this.decode = kT, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(TT) {
        let kT = this.viewData.get(TT.index);
        return kT || (kT = this.bufferData.then((() => TT.bytes)), this.viewData.set(TT.index, kT)), kT
      }
      viewBuffer(TT) {
        let kT = this.viewBuffers.get(TT.index);
        return kT || (kT = this.viewBytes(TT).then((TT => new((0, qT.e)().Ov)(this.et.Dv(), TT, !1))), this.viewBuffers.set(TT.index, kT)), kT
      }
      vertexBuffer(TT, kT) {
        const {
          kind: cT,
          data: lT
        } = kT, MT = `${TT.index}:${cT}`;
        let KT = this.vertexBuffers.get(MT);
        if (!KT) {
          const OT = TT.bufferView;
          KT = OT ? this.viewBuffer(OT).then((TT => this.layoutVertexBuffer(TT, kT))) : Promise.resolve(lT).then((TT => new((0, qT.e)().VertexBuffer)(this.et.Dv(), TT, cT, !1))), this.vertexBuffers.set(MT, KT)
        }
        return KT
      }
      layoutVertexBuffer(TT, kT) {
        let {
          kind: cT,
          offset: lT,
          stride: MT,
          components: KT,
          glType: OT,
          isNormalized: yT
        } = kT;
        const fT = this.et.Dv();
        return new((0, qT.e)().VertexBuffer)(fT, TT, cT, !1, void 0, MT, void 0, lT, KT, OT, yT, !0, void 0, !0)
      }
      load(TT, kT, cT) {
        const lT = (0, sT.f)(cT),
          MT = TT => {
            lT || (cT._delayInfo = cT._delayInfo || [], -1 === cT._delayInfo.indexOf(TT) && cT._delayInfo.push(TT))
          },
          KT = kT.draco;
        if (KT) {
          for (const TT in KT.attributeIds) MT(TT);
          let OT = this.dracoGeometry.get(KT.bufferView.index);
          return OT || (OT = this.viewBytes(KT.bufferView).then((async () => {
            let MT;
            try {
              MT = await zT(kT, this.decode)
            } catch (fT) {
              throw new PT.k(`${TT}: ${fT instanceof Error?fT.message:String(fT)}`)
            }
            const KT = ET(kT, MT);
            if (lT) return KT;
            const OT = kk(kT.position),
              yT = new((0, qT.e)().MirroredGeometry)(cT.name, this.et);
            OT && (yT._boundingInfo = OT, yT.useBoundingInfoFromGeometry = !0), KT.indexData && yT.setIndices(KT.indexData);
            for (const TT of KT.vertexAttributes) yT.setVerticesBuffer(this.layoutVertexBuffer(TT.data, TT), KT.vertexCount);
            return yT.link(KT), yT
          })), this.dracoGeometry.set(KT.bufferView.index, OT)), OT
        }
        const OT = [],
          yT = GT(kT);
        if (lT) return cT.isUnIndexed = !yT.indexData, cT.hasVertexAlpha = (0, Tk.e)(kT), Promise.resolve(yT);
        const fT = new((0, qT.e)().MirroredGeometry)(cT.name, this.et),
          {
            indexData: xT
          } = yT;
        xT ? OT.push(this.viewBytes(kT.indices.bufferView).then((() => {
          fT.setIndices(xT)
        }))) : cT.isUnIndexed = !0;
        for (const [IT, {
            kind: AT,
            accessor: CT
          }] of kT.attributes.entries()) MT(AT), OT.push(this.vertexBuffer(CT, yT.vertexAttributes[IT]).then((TT => {
          if ("position" === TT.getKind()) {
            const TT = kk(CT);
            TT && (fT._boundingInfo = TT, fT.useBoundingInfoFromGeometry = !0)
          }
          fT.setVerticesBuffer(TT, yT.vertexCount)
        })));
        return (0, Tk.e)(kT) && (cT.hasVertexAlpha = !0), Promise.all(OT).then((() => (fT.link(yT), fT)))
      }
    }
    var Mk, Kk = cT(37151),
      Ok = cT(36885),
      yk = cT(37754),
      fk = cT(37080),
      xk = cT(37127),
      Ik = cT(2790),
      Ak = cT(37114);

    function Ck(TT, kT) {
      TT.metadata = TT.metadata || {};
      const cT = TT._internalMetadata = TT._internalMetadata || {},
        lT = cT.KJ = cT.KJ || {};
      (lT.pointers = lT.pointers || []).push(kT)
    }

    function jk(TT, kT) {
      if (kT && Object.keys(kT).length > 0) {
        const cT = TT.metadata = TT.metadata || {};
        (cT.KJ = cT.KJ || {}).extras = kT
      }
    }

    function vk(TT, kT) {
      kT.position = TT.translation ? Ok.Fv.FromArray(TT.translation) : Ok.Fv.Zero(), kT.rotationQuaternion = TT.rotation ? Ok.Quaternion.FromArray(TT.rotation) : Ok.Quaternion.Identity(), kT.GA = TT.scale ? Ok.Fv.FromArray(TT.scale) : Ok.Fv.One()
    }
    class tk {
      constructor(TT, kT) {
        if (this.et = TT, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, kT) {
          const kT = TT.Dv(),
            cT = TT.QJ.add((() => {
              this.dispose()
            })),
            lT = kT.onContextRestoredObservable.add((() => {
              for (const TT of [...this.geometries, ...this.meshes, ...this.textures]) TT._rebuild()
            }));
          this.release = () => {
            TT.QJ.remove(cT), kT.onContextRestoredObservable.remove(lT)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const TT of this.meshes) this.et.rcT(TT);
          for (const TT of this.materials) this.et.addMaterial(TT);
          for (const TT of this.geometries) this.et.addGeometry(TT);
          for (const TT of this.transformNodes) this.et.addTransformNode(TT);
          for (const TT of this.textures) this.et.addTexture(TT)
        }
      }
      dispose() {
        var TT;
        for (const kT of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const TT of kT.slice()) TT.dispose();
          kT.length = 0
        }
        null === (TT = this.release) || void 0 === TT || TT.call(this), this.release = null
      }
    }
    class hk {
      constructor(TT, kT, cT, lT, MT, KT, OT) {
        this.asset = TT, this.et = kT, this.tree = cT, this.geometryData = MT, this.materials = KT, this.lite = OT, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = lT ? cT : null
      }
      create(TT) {
        if (this.lite) return TT();
        const kT = this.et;
        kT._blockEntityCollection = !!this.container;
        try {
          const kT = TT();
          return this.container && (kT._parentContainer = this.container), kT
        } finally {
          kT._blockEntityCollection = !1
        }
      }
      node(TT, kT) {
        return this.create((() => this.lite ? kT ? (0, yk.h)(this.lite, TT) : (0, yk.u)(this.lite, TT) : kT ? new((0, qT.e)().Mesh)(TT, this.et) : new((0, qT.e)().TransformNode)(TT, this.et)))
      }
      async load() {
        var TT;
        this.asset.model.json.nodes && this.createRoot();
        const kT = this.lite ? null : this.et,
          cT = null !== (TT = null === kT || void 0 === kT ? void 0 : kT.blockMaterialDirtyMechanism) && void 0 !== TT && TT;
        let lT;
        kT && (kT.blockMaterialDirtyMechanism = !0);
        try {
          lT = this.loadScene()
        } finally {
          null === kT || void 0 === kT || kT._forceBlockMaterialDirtyMechanism(cT)
        }
        await lT;
        const {
          root: MT,
          tree: KT
        } = this;
        MT && (MT.PD(!0), KT.meshes.push(MT), KT.rootNodes.push(MT));
        for (const yT of this.asset.model.nodes) {
          const TT = this.nodeObjects.get(yT.index);
          TT && ["TransformNode", "LiteNode"].includes(TT.getClassName()) && KT.transformNodes.push(TT);
          for (const kT of null !== (OT = this.nodePrimitives.get(yT.index)) && void 0 !== OT ? OT : []) {
            var OT;
            KT.meshes.push(kT);
            const TT = kT.geometry;
            TT && !KT.geometries.includes(TT) && KT.geometries.push(TT)
          }
        }
      }
      createRoot() {
        const TT = this.node("__root__", !0);
        this.root = TT, TT.PD(!1), this.et.useRightHandedSystem || vk(dT, TT)
      }
      loadScene() {
        const TT = [];
        for (const kT of this.asset.model.rootNodes) TT.push(this.loadNode(this.asset.model.nodes[kT], (TT => {
          TT.parent = this.root
        })));
        return TT.push(Promise.resolve()), Promise.all(TT).then((() => {}))
      }
      loadNode(TT, kT) {
        const cT = `/nodes/${TT.index}`,
          lT = [],
          MT = MT => {
            if (Ck(MT, cT), vk(TT, MT), TT.hasCamera && !this.et.useRightHandedSystem) {
              const {
                GA: TT
              } = MT;
              TT.set(-1, TT.y, TT.z)
            }
            for (const kT of TT.children) lT.push(this.loadNode(this.asset.model.nodes[kT], (TT => {
              TT.parent = MT
            })));
            (cT => {
              jk(cT, TT.extras), kT(cT)
            })(MT)
          };
        if (null === TT.mesh) {
          const kT = this.node(XT(TT), !1);
          this.nodeObjects.set(TT.index, kT), MT(kT)
        } else {
          const kT = this.asset.model.meshes[TT.mesh];
          lT.push(this.loadMesh(`/meshes/${kT.index}`, TT, kT, MT))
        }
        return Promise.all(lT).then((() => {
          for (const cT of null !== (kT = this.nodePrimitives.get(TT.index)) && void 0 !== kT ? kT : []) {
            var kT;
            ck(cT)
          }
          return this.nodeObjects.get(TT.index)
        }))
      }
      loadMesh(TT, kT, cT, lT) {
        const MT = [],
          KT = XT(kT);
        if (1 === cT.primitives.length) {
          const lT = cT.primitives[0];
          MT.push(this.loadPrimitive(`${TT}/primitives/${lT.index}`, KT, lT, (TT => {
            this.nodeObjects.set(kT.index, TT), this.nodePrimitives.set(kT.index, [TT])
          })))
        } else {
          const lT = this.node(KT, !1);
          this.nodeObjects.set(kT.index, lT);
          const OT = [];
          this.nodePrimitives.set(kT.index, OT);
          for (const kT of cT.primitives) MT.push(this.loadPrimitive(`${TT}/primitives/${kT.index}`, `${KT}_primitive${kT.index}`, kT, (TT => {
            TT.parent = lT, OT.push(TT)
          })))
        }
        const OT = this.nodeObjects.get(kT.index);
        return lT(OT), Promise.all(MT).then((() => OT))
      }
      loadPrimitive(TT, kT, cT, lT) {
        const MT = [],
          KT = this.node(kT, !0);
        if (KT.sideOrientation = this.et.useRightHandedSystem ? fk.d.CounterClockWiseSideOrientation : fk.d.ClockWiseSideOrientation, MT.push(this.geometryData.load(TT, cT, KT).then((TT => {
            if ((0, sT.f)(KT)) {
              var kT, cT;
              const lT = TT;
              KT.replaceModel(lT, Int32Array.of(0, null !== (kT = null === (cT = lT.indexData) || void 0 === cT ? void 0 : cT.length) && void 0 !== kT ? kT : lT.vertexCount, 0, lT.vertexCount))
            } else this.create((() => (TT.applyToMesh(KT), TT)))
          }))), this.materials) {
          const TT = 0 === cT.mode ? fk.d.PointListDrawMode : fk.d.TriangleFillMode,
            kT = null === cT.material ? null : this.asset.model.materials[cT.material];
          MT.push(this.loadMaterial(kT, TT, (TT => {
            KT.material = TT
          })))
        }
        return Ck(KT, TT), lT(KT), Promise.all(MT).then((() => KT))
      }
      loadMaterial(TT, kT, cT) {
        var lT;
        const MT = `${null!==(lT=null===TT||void 0===TT?void 0:TT.index)&&void 0!==lT?lT:"default"}:${kT}`;
        let KT = this.materialData.get(MT);
        return KT || (KT = this.createMaterial(TT, kT), this.materialData.set(MT, KT)), cT(KT.material), KT.promise
      }
      createMaterial(TT, kT) {
        const cT = TT ? TT.name || `material${TT.index}` : "__GLTFLoader._default",
          {
            style: lT,
            unlit: MT
          } = this.materials;
        let KT;
        const OT = this.create((() => {
          const OT = (0, Ak.e)({
            name: cT,
            et: this.et,
            sets: {
              ...(0, Tk.b)(this.asset, TT, lT, MT),
              fillMode: kT
            },
            unrendered: !0
          });
          return KT = OT.model, OT.mirror
        }));
        let yT = Promise.resolve();
        if (TT) {
          const kT = `/materials/${TT.index}`,
            lT = KT.diffuseTexture;
          if (lT && !lT.mirror) yT = new Promise((TT => setTimeout(TT)));
          else if (lT) {
            const MT = lT.mirror;
            MT._parentContainer = this.container, MT.name = `${cT} (Base Color)`, Ck(MT, `${kT}${TT.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(MT), yT = (0, xk.w)(lT)
          }
          jk(OT, TT.extras), Ck(OT, kT)
        }
        return this.tree.materials.push(OT), {
          material: OT,
          promise: yT
        }
      }
    }

    function Nk() {
      Kk.f.dracoDecodes = tT.decodes, Kk.f.dracoWorkersStarted = tT.workersStarted, Kk.f.dracoMostWorkers = tT.mostWorkers
    }
    async function Qk(TT, kT, cT, MT, KT) {
      try {
        return await async function(TT, kT, cT, MT, KT, OT) {
          var yT;
          let fT;
          const xT = null === (yT = (0, Ik.f)()) || void 0 === yT ? void 0 : yT.gv,
            IT = null !== xT && void 0 !== xT && xT.Uv && kT === xT.NJ() ? xT : null,
            AT = KT && !IT;
          return await iT(TT, kT, cT, MT, lT.c, (TT => (fT = new tk(kT, AT), new hk(TT, kT, fT, AT, new lk(kT, MT), OT, IT).load())), !KT), fT
        }(TT, kT, cT, aT, MT, KT)
      } finally {
        Nk()
      }
    }
    async function Sk(TT, kT, cT, MT) {
      try {
        return await iT(TT, kT, cT, aT, lT.c, (TT => MT(TT, new lk(kT, aT))))
      } finally {
        Nk()
      }
    }
    Mk = MT.b, IT || (IT = {
      scriptUrl: new URL(Mk.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(Mk.wasmBinaryUrl, location.href).href
    })
  },
  41101: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT
    });
    var lT = cT(159),
      MT = cT(1210);

    function KT(TT) {
      return (0, lT.c)() ? `https://${MT.c.discordDomain}/${TT.href}` : TT.href
    }
    const OT = {
      scriptUrl: KT(new cT.U(cT(41103))),
      wasmBinaryUrl: KT(new cT.U(cT(41106)))
    }
  },
  36063: TT => {
    TT.exports = function(TT, kT, cT, lT) {
      var MT = self || window;
      try {
        try {
          var KT;
          try {
            KT = new MT.Blob([TT])
          } catch (xT) {
            (KT = new(MT.BlobBuilder || MT.WebKitBlobBuilder || MT.MozBlobBuilder || MT.MSBlobBuilder)).append(TT), KT = KT.getBlob()
          }
          var OT = MT.URL || MT.webkitURL,
            yT = OT.createObjectURL(KT),
            fT = new MT[kT](yT, cT);
          return OT.revokeObjectURL(yT), fT
        } catch (xT) {
          return new MT[kT]("data:application/javascript,".concat(encodeURIComponent(TT)), cT)
        }
      } catch (xT) {
        if (!lT) throw Error("Inline worker is not supported");
        return new MT[kT](lT, cT)
      }
    }
  },
  41103: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41106: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);