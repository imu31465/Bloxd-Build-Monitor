export const id = 209;
export const ids = [209];
export const modules = {
  41630: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      loadGlbAsset: () => qU,
      loadGlbTree: () => fU
    });
    var WT = mT(38045),
      zT = mT(41635),
      MT = mT(36329),
      gT = mT.n(MT);

    function nT() {
      return gT()('(()=>{class TT extends Error{}function UT(UT,mT){const WT=UT._malloc(mT);if(0===WT)throw new TT(`Draco: the decoder\'s heap refused ${mT} bytes`);return WT}function mT(TT){return{[TT.DT_FLOAT32]:[Float32Array,5126],[TT.DT_INT8]:[Int8Array,5120],[TT.DT_INT16]:[Int16Array,5122],[TT.DT_INT32]:[Int32Array,5124],[TT.DT_UINT8]:[Uint8Array,5121],[TT.DT_UINT16]:[Uint16Array,5123],[TT.DT_UINT32]:[Uint32Array,5125]}}function WT(UT,WT,zT,MT,gT){let nT=null,HT=null,kT=null;try{nT=new UT.Decoder,HT=new UT.DecoderBuffer,HT.Init(WT,WT.byteLength);let jT=0;const lT=nT.GetEncodedGeometryType(HT);if(lT===UT.TRIANGULAR_MESH){const mT=new UT.Mesh;kT=mT;const WT=nT.DecodeBufferToMesh(HT,mT);if(!WT.ok()||0===mT.ptr)throw new TT(WT.error_msg());jT=3*mT.num_faces()}else{if(lT!==UT.POINT_CLOUD)throw new TT(`Draco: Cannot decode invalid geometry type ${lT}`);{const mT=new UT.PointCloud;kT=mT;const WT=nT.DecodeBufferToPointCloud(HT,mT);if(!WT.ok()||!mT.ptr)throw new TT(WT.error_msg())}}const LT=kT.num_points();if(LT!==MT.vertices||jT!==MT.indices)throw new TT(`Draco: decoded ${LT} vertices and ${jT} indices, the accessors declare ${MT.vertices} and ${MT.indices}`);const pT=mT(UT),BT=[];for(const{kind:UT,id:mT,components:WT}of zT){const zT=nT.GetAttributeByUniqueId(kT,mT);if(!zT||0===zT.ptr)throw new TT(`Draco: no attribute with id ${mT} (${UT})`);const MT=zT.data_type();if(!pT[MT])throw new TT(`Draco: Cannot decode invalid data type ${MT}`);if(zT.num_components()!==WT)throw new TT(`Draco: ${UT} decodes to ${zT.num_components()} components, its accessor declares ${WT}`);BT.push([UT,zT,MT])}return gT({dracoDecoder:nT,geometry:kT,triangles:lT===UT.TRIANGULAR_MESH,numPoints:LT,numIndices:jT,attributes:BT})}finally{kT&&UT.destroy(kT),HT&&UT.destroy(HT),nT&&UT.destroy(nT)}}const zT=self;let MT=null;self.onmessage=TT=>{let{data:gT}=TT;if("init"===gT.id){try{importScripts(gT.url),MT=DracoDecoderModule({wasmBinary:gT.wasmBinary}),zT.postMessage({id:"initDone"})}catch(lT){zT.postMessage({id:"initError",message:lT instanceof Error?lT.message:String(lT)})}return}const{seq:nT,data:HT,attributeIds:kT,expected:jT}=gT;MT?MT.then((TT=>{try{const MT=function(TT,zT,MT,gT){const nT=Object.keys(MT).map((TT=>({kind:TT,id:MT[TT],components:gT.components[TT]})));return WT(TT,zT,nT,gT,(WT=>{let{dracoDecoder:zT,geometry:MT,triangles:gT,numPoints:nT,numIndices:HT,attributes:kT}=WT;const jT=mT(TT);let lT=null;if(gT){const mT=4*HT,WT=UT(TT,mT);try{zT.GetTrianglesUInt32Array(MT,mT,WT),lT=new Uint32Array(HT),lT.set(new Uint32Array(TT.HEAPF32.buffer,WT,HT))}finally{TT._free(WT)}}const LT=[];for(const[mT,pT,BT]of kT){const[WT]=jT[BT],gT=pT.num_components(),HT=nT*gT,kT=HT*WT.BYTES_PER_ELEMENT,lT=UT(TT,kT);try{zT.GetAttributeDataArrayForAllPoints(MT,pT,BT,kT,lT),LT.push({kind:mT,data:new WT(TT.HEAPF32.buffer,lT,HT).slice(),size:gT,byteOffset:pT.byte_offset(),byteStride:pT.byte_stride(),normalized:pT.normalized()})}finally{TT._free(lT)}}return{indices:lT,attributes:LT,totalVertices:nT}}))}(TT,HT,kT,jT),gT=MT.attributes.map((TT=>TT.data.buffer));MT.indices&&gT.push(MT.indices.buffer),zT.postMessage({id:"decoded",seq:nT,...MT},gT)}catch(lT){zT.postMessage({id:"decodeError",seq:nT,message:lT instanceof Error?lT.message:String(lT)})}}),(TT=>{zT.postMessage({id:"decodeError",seq:nT,message:TT instanceof Error?TT.message:String(TT)})})):zT.postMessage({id:"decodeError",seq:nT,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, mT.p + "dracoDecode.worker.25f3a20a.worker.js")
    }
    var HT = mT(102);
    const kT = 1e3;
    let jT = null,
      lT = null;
    const LT = [],
      pT = [];
    let BT = 0;
    const ZT = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      cT = function(TT, UT) {
        const mT = TT ? Math.max(1, Math.min(Math.floor(.5 * TT), 4)) : 1;
        return UT ? Math.min(mT, 2) : mT
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, HT.isMobile)());

    function vT() {
      if (!jT) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: TT,
        wasmBinaryUrl: UT
      } = jT;
      return lT ??= fetch(UT).then((TT => {
        if (!TT.ok) throw new Error(`Draco: fetching ${UT} failed: ${TT.status}`);
        return TT.arrayBuffer()
      })), lT.catch((() => {
        lT = null
      })), ZT.workersStarted++, lT.then((UT => new Promise(((mT, WT) => {
        const zT = new nT;
        zT.onerror = TT => {
          zT.onmessage = null, zT.onerror = null, zT.terminate(), WT(new Error("Draco: the decode worker failed to start" + (TT.message ? `: ${TT.message}` : " (its script did not load)")))
        }, zT.onmessage = TT => {
          let {
            data: UT
          } = TT;
          zT.onmessage = null, zT.onerror = null, "initDone" === UT.id ? mT(zT) : (zT.terminate(), WT(new Error(`Draco: ${"initError"===UT.id?UT.message:"the worker did not start"}`)))
        };
        const MT = UT.slice(0),
          gT = {
            id: "init",
            url: TT,
            wasmBinary: MT
          };
        zT.postMessage(gT, [MT])
      }))))
    }

    function fT(TT) {
      const UT = LT.indexOf(TT); - 1 !== UT && LT.splice(UT, 1);
      const mT = pT.shift();
      mT && iT(mT)
    }

    function qT(TT, UT) {
      TT.busy = !0, TT.releaseTimer && (clearTimeout(TT.releaseTimer), TT.releaseTimer = null);
      TT.worker.then((mT => {
        const WT = BT++;
        mT.onmessage = zT => {
          let {
            data: MT
          } = zT;
          if (("decoded" === MT.id || "decodeError" === MT.id) && MT.seq === WT) {
            if (mT.onmessage = null, mT.onerror = null, "decoded" === MT.id) return ZT.decodes++, UT.resolve({
              indices: MT.indices,
              attributes: MT.attributes,
              totalVertices: MT.totalVertices
            }), void(() => {
              const UT = pT.shift();
              UT ? qT(TT, UT) : (TT.busy = !1, TT.releaseTimer = setTimeout((() => {
                const UT = LT.indexOf(TT); - 1 !== UT && LT.splice(UT, 1), TT.worker.then((TT => {
                  TT.terminate()
                }))
              }), kT))
            })();
            mT.terminate(), UT.reject(new Error(MT.message)), fT(TT)
          }
        }, mT.onerror = WT => {
          mT.onmessage = null, mT.onerror = null, mT.terminate(), UT.reject(new Error(`Draco: the decode worker failed: ${WT.message}`)), fT(TT)
        };
        const zT = {
          id: "decode",
          seq: WT,
          data: UT.data,
          attributeIds: UT.attributeIds,
          expected: UT.expected
        };
        mT.postMessage(zT, [UT.data.buffer])
      }), (mT => {
        UT.reject(mT instanceof Error ? mT : new Error(String(mT))), fT(TT)
      }))
    }

    function iT(TT) {
      const UT = LT.find((TT => !TT.busy));
      if (UT) qT(UT, TT);
      else {
        if (LT.length < cT) {
          const UT = {
            worker: vT(),
            busy: !0,
            releaseTimer: null
          };
          return LT.push(UT), ZT.mostWorkers = Math.max(ZT.mostWorkers, LT.length), void qT(UT, TT)
        }
        pT.push(TT)
      }
    }

    function bT(TT, UT, mT) {
      return new Promise(((WT, zT) => {
        iT({
          data: new Int8Array(TT.buffer, TT.byteOffset, TT.byteLength).slice(),
          attributeIds: UT,
          expected: mT,
          resolve: WT,
          reject: zT
        })
      }))
    }
    var OT = mT(37577),
      eT = mT(37584),
      YT = mT(34358),
      JT = mT(34350);
    const xT = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function dT(TT) {
      const UT = (0, JT.j)(TT.byteLength);
      if (UT) throw new YT.i(UT);
      const {
        json: mT,
        bin: WT
      } = (0, YT.p)(TT), zT = (0, JT.g)(mT, WT);
      if (zT) throw new YT.i(zT);
      try {
        return function(TT, UT) {
          var mT, WT, zT, MT, gT, nT, HT, kT, jT, lT, LT, pT, BT, ZT, cT;
          const vT = new Map,
            fT = mT => {
              let WT = vT.get(mT);
              if (!WT) {
                var zT;
                const MT = TT.bufferViews[mT],
                  gT = null !== (zT = MT.byteOffset) && void 0 !== zT ? zT : 0;
                WT = {
                  index: mT,
                  bytes: UT.subarray(gT, gT + MT.byteLength),
                  byteStride: MT.byteStride
                }, vT.set(mT, WT)
              }
              return WT
            },
            qT = new Map,
            iT = UT => {
              let mT = qT.get(UT);
              if (!mT) {
                var WT;
                const zT = TT.accessors[UT];
                mT = {
                  index: UT,
                  count: zT.count,
                  type: zT.type,
                  numComponents: YT.k[zT.type],
                  componentType: zT.componentType,
                  normalized: null !== (WT = zT.normalized) && void 0 !== WT && WT,
                  byteOffset: zT.byteOffset,
                  bufferView: void 0 === zT.bufferView ? null : fT(zT.bufferView),
                  min: zT.min,
                  max: zT.max
                }, qT.set(UT, mT)
              }
              return mT
            },
            bT = null !== (mT = null === (WT = TT.extensionsUsed) || void 0 === WT ? void 0 : WT.includes("KHR_draco_mesh_compression")) && void 0 !== mT && mT,
            OT = (null !== (zT = TT.meshes) && void 0 !== zT ? zT : []).map(((UT, mT) => {
              const WT = UT.primitives.map(((UT, mT) => {
                var WT, zT, MT;
                const gT = bT ? null === (WT = UT.extensions) || void 0 === WT ? void 0 : WT.KHR_draco_mesh_compression : void 0;
                let nT = null;
                const HT = [];
                if (gT) {
                  const mT = {
                    vertices: TT.accessors[UT.attributes.POSITION].count,
                    indices: void 0 === UT.indices ? 0 : TT.accessors[UT.indices].count,
                    components: {}
                  };
                  nT = {
                    bufferView: fT(gT.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: mT
                  };
                  for (const [WT, zT] of YT.g) {
                    const MT = gT.attributes[WT];
                    if (void 0 === MT) continue;
                    nT.attributeIds[zT] = MT;
                    const HT = UT.attributes[WT];
                    var kT;
                    if (void 0 !== HT) nT.normalized[zT] = null !== (kT = TT.accessors[HT].normalized) && void 0 !== kT && kT, mT.components[zT] = YT.k[TT.accessors[HT].type]
                  }
                } else
                  for (const [TT, jT] of YT.g) {
                    const mT = UT.attributes[TT];
                    void 0 !== mT && HT.push({
                      semantic: TT,
                      kind: jT,
                      accessor: iT(mT)
                    })
                  }
                return {
                  index: mT,
                  mode: null !== (zT = UT.mode) && void 0 !== zT ? zT : 4,
                  attributes: HT,
                  indices: gT || void 0 === UT.indices ? null : iT(UT.indices),
                  position: void 0 === UT.attributes.POSITION ? null : iT(UT.attributes.POSITION),
                  material: null !== (MT = UT.material) && void 0 !== MT ? MT : null,
                  draco: nT
                }
              }));
              return {
                index: mT,
                name: UT.name,
                primitives: WT,
                extras: UT.extras
              }
            })),
            eT = (null !== (MT = TT.nodes) && void 0 !== MT ? MT : []).map(((TT, UT) => {
              var mT, WT;
              return {
                index: UT,
                name: TT.name,
                children: null !== (mT = TT.children) && void 0 !== mT ? mT : [],
                mesh: null !== (WT = TT.mesh) && void 0 !== WT ? WT : null,
                translation: TT.translation,
                rotation: TT.rotation,
                scale: TT.scale,
                hasCamera: void 0 !== TT.camera,
                extras: TT.extras
              }
            })),
            JT = null !== (gT = null === (nT = TT.extensionsUsed) || void 0 === nT ? void 0 : nT.includes("KHR_materials_unlit")) && void 0 !== gT && gT,
            dT = null !== (HT = null === (kT = TT.extensionsUsed) || void 0 === kT ? void 0 : kT.includes("KHR_texture_transform")) && void 0 !== HT && HT,
            wT = (null !== (jT = TT.materials) && void 0 !== jT ? jT : []).map(((TT, UT) => {
              var mT, WT, zT, MT;
              const gT = TT.pbrMetallicRoughness,
                nT = null === gT || void 0 === gT ? void 0 : gT.baseColorTexture;
              return {
                index: UT,
                name: TT.name,
                extras: TT.extras,
                unlit: JT && void 0 !== (null === (mT = TT.extensions) || void 0 === mT ? void 0 : mT.KHR_materials_unlit),
                pbr: gT ? {
                  baseColorFactor: gT.baseColorFactor,
                  metallicFactor: gT.metallicFactor,
                  roughnessFactor: gT.roughnessFactor
                } : null,
                baseColorTexture: nT ? {
                  texture: nT.index,
                  transform: dT && (null === (WT = nT.extensions) || void 0 === WT ? void 0 : WT.KHR_texture_transform) || null
                } : null,
                emissiveFactor: TT.emissiveFactor,
                alphaMode: null !== (zT = TT.alphaMode) && void 0 !== zT ? zT : "OPAQUE",
                alphaCutoff: TT.alphaCutoff,
                doubleSided: null !== (MT = TT.doubleSided) && void 0 !== MT && MT
              }
            })),
            tT = (null !== (lT = TT.textures) && void 0 !== lT ? lT : []).map(((UT, mT) => {
              var WT, zT;
              const MT = void 0 === UT.sampler ? xT : {
                index: UT.sampler,
                ...null === (WT = TT.samplers) || void 0 === WT ? void 0 : WT[UT.sampler]
              };
              return {
                index: mT,
                sampler: {
                  index: MT.index,
                  magFilter: MT.magFilter,
                  minFilter: MT.minFilter,
                  wrapS: MT.wrapS,
                  wrapT: MT.wrapT
                },
                image: null !== (zT = UT.source) && void 0 !== zT ? zT : -1
              }
            })),
            aT = (null !== (LT = TT.images) && void 0 !== LT ? LT : []).map(((TT, UT) => ({
              index: UT,
              name: TT.name,
              mimeType: TT.mimeType,
              bufferView: fT(TT.bufferView)
            }))),
            yT = null !== (pT = (0, YT.o)(TT)) && void 0 !== pT ? pT : 0;
          return {
            json: TT,
            rootNodes: null !== (BT = null === (ZT = TT.scenes) || void 0 === ZT || null === (cT = ZT[yT]) || void 0 === cT ? void 0 : cT.nodes) && void 0 !== BT ? BT : [],
            nodes: eT,
            meshes: OT,
            materials: wT,
            textures: tT,
            images: aT
          }
        }(mT, WT)
      } catch (MT) {
        throw MT instanceof YT.h ? MT : new YT.h(`reading the GLB failed: ${MT instanceof Error?MT.message:String(MT)}`)
      }
    }
    async function wT(TT, UT) {
      var mT, WT;
      const zT = TT.draco;
      if (!zT) throw new YT.h("not a Draco primitive");
      let MT;
      try {
        MT = await UT(zT.bufferView.bytes, zT.attributeIds, zT.expected)
      } catch (kT) {
        throw new YT.h(`Draco decoding failed: ${kT instanceof Error?kT.message:String(kT)}`)
      }
      const {
        vertices: gT,
        indices: nT,
        components: HT
      } = zT.expected;
      if (MT.totalVertices !== gT || (null !== (mT = null === (WT = MT.indices) || void 0 === WT ? void 0 : WT.length) && void 0 !== mT ? mT : 0) !== nT || MT.attributes.some((TT => TT.size !== HT[TT.kind] || TT.data.length !== gT * TT.size))) throw new YT.h("Draco decoding gave other counts than the accessors declare");
      for (const jT of MT.attributes) {
        const TT = zT.normalized[jT.kind];
        void 0 !== TT && (jT.normalized = TT)
      }
      return MT
    }
    const tT = new WeakMap;

    function aT(TT, UT) {
      var mT;
      const WT = null !== (mT = tT.get(TT)) && void 0 !== mT ? mT : UT(TT);
      return tT.set(TT, WT), WT
    }

    function yT(TT) {
      const UT = TT.bufferView,
        mT = 5125 === TT.componentType ? Uint32Array : Uint16Array,
        WT = UT.bytes.buffer,
        zT = UT.bytes.byteOffset + (TT.byteOffset || 0);
      return zT % mT.BYTES_PER_ELEMENT !== 0 ? new mT(WT.slice(zT, zT + TT.count * mT.BYTES_PER_ELEMENT), 0) : new mT(WT, zT, TT.count)
    }

    function XT(TT, UT) {
      if (TT.min && TT.max) return [new Float64Array(TT.min), new Float64Array(TT.max)];
      const mT = UT.find((TT => {
          let {
            kind: UT
          } = TT;
          return "position" === UT
        })),
        WT = mT ? (0, eT.i)(mT, TT.count) : new Float32Array(0);
      return (0, eT.r)(WT.length / 3, ((TT, UT) => WT[3 * TT + UT]))
    }

    function IT(TT) {
      const UT = TT.attributes.map((TT => {
          var UT, mT;
          let {
            kind: WT,
            accessor: zT
          } = TT;
          const {
            bufferView: MT,
            numComponents: gT
          } = zT;
          if (!MT) {
            return {
              kind: WT,
              data: aT(zT, (() => new Float32Array(gT * zT.count))),
              offset: 0,
              stride: 4 * gT,
              components: gT,
              glType: 5126,
              isNormalized: !1
            }
          }
          const nT = null !== (UT = MT.byteStride) && void 0 !== UT ? UT : gT * YT.d[zT.componentType];
          return {
            kind: WT,
            data: MT.bytes,
            offset: null !== (mT = zT.byteOffset) && void 0 !== mT ? mT : 0,
            stride: nT,
            components: gT,
            glType: zT.componentType,
            isNormalized: zT.normalized
          }
        })),
        mT = TT.indices,
        WT = mT && aT(mT, yT),
        zT = TT.position;
      return new eT.f(UT, WT, zT.count, ...XT(zT, UT))
    }
    const QT = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function sT(TT, UT) {
      const mT = UT.attributes.map((TT => {
        let {
          kind: UT,
          data: mT,
          size: WT,
          byteOffset: zT,
          byteStride: MT,
          normalized: gT
        } = TT;
        return {
          kind: UT,
          data: mT,
          offset: zT,
          stride: MT,
          components: WT,
          glType: 5120 + QT.indexOf(mT.constructor),
          isNormalized: gT
        }
      }));
      return new eT.f(mT, UT.indices, UT.totalVertices, ...XT(TT.position, mT))
    }

    function FT(TT) {
      const UT = TT.lastIndexOf("/");
      return UT < 0 ? TT : TT.substring(UT + 1)
    }

    function PT(TT) {
      const UT = TT.lastIndexOf("/");
      return UT < 0 ? "" : TT.substring(0, UT + 1)
    }

    function VT(TT) {
      return TT.name || `node${TT.index}`
    }
    const uT = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      CT = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      rT = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function KT(TT) {
      var UT, mT, WT, zT;
      const MT = null !== (UT = TT.minFilter) && void 0 !== UT ? UT : 9987;
      return 9729 === (null !== (mT = TT.magFilter) && void 0 !== mT ? mT : 9729) ? null !== (WT = CT[MT]) && void 0 !== WT ? WT : 3 : null !== (zT = rT[MT]) && void 0 !== zT ? zT : 4
    }
    const ST = {
      33071: 0,
      33648: 2
    };

    function GT(TT) {
      var UT;
      return null !== (UT = ST[null !== TT && void 0 !== TT ? TT : 10497]) && void 0 !== UT ? UT : 1
    }

    function NT(TT) {
      return 9728 === TT.minFilter || 9729 === TT.minFilter
    }

    function ET(TT) {
      var UT, mT, WT;
      const zT = Float64Array.from(null !== (UT = TT.scale) && void 0 !== UT ? UT : [1, 1, 1]);
      return TT.hasCamera && (zT[0] = -1), {
        translation: Float64Array.from(null !== (mT = TT.translation) && void 0 !== mT ? mT : [0, 0, 0]),
        rotation: Float64Array.from(null !== (WT = TT.rotation) && void 0 !== WT ? WT : [0, 0, 0, 1]),
        scale: zT
      }
    }

    function hT(TT, UT) {
      let {
        translation: mT,
        rotation: WT,
        scale: zT
      } = TT;
      const MT = new Float32Array(16);
      return (0, OT.c)(zT, 0, WT, 0, mT, 0, MT), UT && (0, OT.k)(MT, UT, 0, MT), MT
    }
    class DT {
      constructor(TT, UT, mT, WT) {
        this.model = TT, this.decode = UT, this.fileInfo = mT, this.uniqueRootUrl = WT, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const zT = new Set,
          MT = (UT, mT) => {
            const WT = TT.nodes[UT];
            if (this.parents.has(WT)) throw new YT.h(`/nodes/${UT}: Invalid recursive node hierarchy`);
            this.parents.set(WT, mT);
            const gT = null === WT.mesh ? [] : TT.meshes[WT.mesh].primitives,
              nT = gT.map((TT => {
                const UT = gT.length > 1;
                return {
                  name: UT ? `${VT(WT)}_primitive${TT.index}` : VT(WT),
                  node: WT,
                  primitive: TT,
                  part: UT,
                  geometry: null
                }
              }));
            this.uses.set(WT, nT);
            const HT = null !== WT.mesh && zT.has(WT.mesh);
            zT.add(WT.mesh), this.own.set(WT, HT ? [] : nT);
            for (const TT of WT.children) MT(TT, WT)
          };
        for (const gT of TT.rootNodes) MT(gT, null);
        this.primitives = TT.nodes.flatMap((TT => {
          var UT;
          return null !== (UT = this.own.get(TT)) && void 0 !== UT ? UT : []
        }))
      }
      decodeGeometries() {
        const TT = new Map;
        return Promise.all(this.primitives.map((async UT => {
          const {
            primitive: mT
          } = UT, WT = mT.draco;
          let zT = WT ? TT.get(WT.bufferView.index) : Promise.resolve(IT(mT));
          zT || (zT = wT(mT, this.decode).then((TT => sT(mT, TT))), TT.set(WT.bufferView.index, zT)), UT.geometry = await zT
        })))
      }
      parentOf(TT) {
        var UT;
        return null !== (UT = this.parents.get(TT)) && void 0 !== UT ? UT : null
      }
      meshesUnder(TT) {
        const UT = this.model.nodes.filter((TT => this.uses.has(TT)));
        for (const WT of UT) {
          const UT = this.uses.get(WT),
            mT = UT.find((UT => UT.name === TT));
          if (mT) return 1 === UT.length ? this.subtree(WT) : this.own.get(WT).includes(mT) ? [mT] : []
        }
        const mT = UT.find((UT => 1 !== this.uses.get(UT).length && VT(UT) === TT));
        return mT ? this.subtree(mT) : null
      }
      subtree(TT) {
        return [...this.own.get(TT), ...TT.children.flatMap((TT => this.subtree(this.model.nodes[TT])))]
      }
      worldMatrix(TT, UT, mT) {
        let WT = hT(ET(UT ? uT : {}), null);
        const zT = [];
        for (let gT = TT.part ? TT.node : this.parentOf(TT.node); gT; gT = this.parentOf(gT)) zT.unshift(gT);
        for (const gT of zT) WT = hT(ET(gT), WT);
        const MT = ET(TT.part ? {} : TT.node);
        return void 0 !== mT && MT.scale.fill(mT), hT(MT, WT)
      }
      floats(TT) {
        const {
          vertexAttributes: UT,
          vertexCount: mT
        } = TT.geometry;
        return new Map(UT.map((TT => [TT.kind, (0, eT.i)(TT, mT)])))
      }
      imageUrl(TT) {
        return function(TT, UT, mT) {
          let {
            name: WT
          } = UT;
          return `data:${TT}${WT}#image${mT}`
        }(this.uniqueRootUrl, this.fileInfo, TT)
      }
      textureDesc(TT, UT) {
        var mT;
        let {
          texture: WT,
          transform: zT
        } = TT;
        const {
          sampler: MT,
          image: gT
        } = this.model.textures[WT], {
          bufferView: nT,
          mimeType: HT,
          name: kT
        } = this.model.images[gT], jT = zT && {
          ...zT.offset ? {
            uOffset: zT.offset[0],
            vOffset: zT.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...zT.rotation ? {
            wAng: -zT.rotation
          } : {},
          ...zT.scale ? {
            uScale: zT.scale[0],
            vScale: zT.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(gT),
          noMipmap: NT(MT),
          invertY: !1,
          samplingMode: KT(MT),
          data: {
            bytes: nT.bytes,
            mimeType: HT,
            label: kT,
            context: `/textures/${WT}`
          },
          sets: {
            wrapU: GT(MT.wrapS),
            wrapV: GT(MT.wrapT),
            ...jT,
            coordinatesIndex: null !== (mT = null === zT || void 0 === zT ? void 0 : zT.texCoord) && void 0 !== mT ? mT : 0,
            hasAlpha: UT
          }
        }
      }
    }
    async function oT(TT, UT, mT, WT, zT, MT) {
      let gT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const nT = function(TT, UT, mT) {
          return "string" !== typeof UT ? {
            url: "",
            rootUrl: TT,
            name: mT()
          } : UT ? UT.startsWith("data:") ? {
            url: UT,
            rootUrl: TT,
            name: ""
          } : TT ? {
            url: TT + UT,
            rootUrl: TT,
            name: UT
          } : {
            url: UT,
            rootUrl: PT(UT),
            name: FT(UT)
          } : {
            url: TT,
            rootUrl: PT(TT),
            name: FT(TT)
          }
        }(mT, TT, zT),
        HT = {};
      UT.addPendingData(HT);
      try {
        const mT = dT(await async function(TT, UT) {
            return "string" !== typeof UT ? UT : TT.url.startsWith("data:") ? (0, YT.m)(TT.url) : await (0, YT.n)(TT.url)
          }(nT, TT)),
          HT = new DT(mT, WT, nT, function(TT, UT) {
            let {
              rootUrl: mT,
              name: WT
            } = TT;
            return !mT.startsWith("file:") && WT ? mT : `${mT}${UT()}/`
          }(nT, zT));
        return await MT(HT), UT.importedMeshesFiles && (UT.loadingPluginName = "mF", gT && UT.importedMeshesFiles.push(nT.url)), HT
      } finally {
        UT.removePendingData(HT)
      }
    }
    var AT = mT(37708),
      RT = mT(37552),
      TU = mT(38020);

    function UU(TT) {
      if (null === TT || void 0 === TT || !TT.min || !TT.max) return null;
      const [UT, mT, WT] = TT.min, [zT, MT, gT] = TT.max, {
        BoundingInfo: nT,
        JB: HT
      } = (0, AT.d)();
      return new nT(new HT(UT, mT, WT), new HT(zT, MT, gT))
    }

    function mU(TT) {
      (0, RT.f)(TT) || (TT.geometry && TT.geometry.useBoundingInfoFromGeometry ? TT._updateBoundingInfo() : TT.refreshBoundingInfo(!0, !0))
    }
    class WU {
      constructor(TT, UT) {
        this.XZ = TT, this.decode = UT, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(TT) {
        let UT = this.viewData.get(TT.index);
        return UT || (UT = this.bufferData.then((() => TT.bytes)), this.viewData.set(TT.index, UT)), UT
      }
      viewBuffer(TT) {
        let UT = this.viewBuffers.get(TT.index);
        return UT || (UT = this.viewBytes(TT).then((TT => new((0, AT.d)().HB)(this.XZ.eB(), TT, !1))), this.viewBuffers.set(TT.index, UT)), UT
      }
      vertexBuffer(TT, UT) {
        const {
          kind: mT,
          data: WT
        } = UT, zT = `${TT.index}:${mT}`;
        let MT = this.vertexBuffers.get(zT);
        if (!MT) {
          const gT = TT.bufferView;
          MT = gT ? this.viewBuffer(gT).then((TT => this.layoutVertexBuffer(TT, UT))) : Promise.resolve(WT).then((TT => new((0, AT.d)().VertexBuffer)(this.XZ.eB(), TT, mT, !1))), this.vertexBuffers.set(zT, MT)
        }
        return MT
      }
      layoutVertexBuffer(TT, UT) {
        let {
          kind: mT,
          offset: WT,
          stride: zT,
          components: MT,
          glType: gT,
          isNormalized: nT
        } = UT;
        const HT = this.XZ.eB();
        return new((0, AT.d)().VertexBuffer)(HT, TT, mT, !1, void 0, zT, void 0, WT, MT, gT, nT, !0, void 0, !0)
      }
      load(TT, UT, mT) {
        const WT = (0, RT.f)(mT),
          zT = TT => {
            WT || (mT._delayInfo = mT._delayInfo || [], -1 === mT._delayInfo.indexOf(TT) && mT._delayInfo.push(TT))
          },
          MT = UT.draco;
        if (MT) {
          for (const TT in MT.attributeIds) zT(TT);
          let gT = this.dracoGeometry.get(MT.bufferView.index);
          return gT || (gT = this.viewBytes(MT.bufferView).then((async () => {
            let zT;
            try {
              zT = await wT(UT, this.decode)
            } catch (HT) {
              throw new YT.h(`${TT}: ${HT instanceof Error?HT.message:String(HT)}`)
            }
            const MT = sT(UT, zT);
            if (WT) return MT;
            const gT = UU(UT.position),
              nT = new((0, AT.d)().MirroredGeometry)(mT.name, this.XZ);
            gT && (nT._boundingInfo = gT, nT.useBoundingInfoFromGeometry = !0), MT.indexData && nT.setIndices(MT.indexData);
            for (const TT of MT.vertexAttributes) nT.setVerticesBuffer(this.layoutVertexBuffer(TT.data, TT), MT.vertexCount);
            return nT.link(MT), nT
          })), this.dracoGeometry.set(MT.bufferView.index, gT)), gT
        }
        const gT = [],
          nT = IT(UT);
        if (WT) return mT.isUnIndexed = !nT.indexData, mT.hasVertexAlpha = (0, TU.f)(UT), Promise.resolve(nT);
        const HT = new((0, AT.d)().MirroredGeometry)(mT.name, this.XZ),
          {
            indexData: kT
          } = nT;
        kT ? gT.push(this.viewBytes(UT.indices.bufferView).then((() => {
          HT.setIndices(kT)
        }))) : mT.isUnIndexed = !0;
        for (const [jT, {
            kind: lT,
            accessor: LT
          }] of UT.attributes.entries()) zT(lT), gT.push(this.vertexBuffer(LT, nT.vertexAttributes[jT]).then((TT => {
          if ("position" === TT.getKind()) {
            const TT = UU(LT);
            TT && (HT._boundingInfo = TT, HT.useBoundingInfoFromGeometry = !0)
          }
          HT.setVerticesBuffer(TT, nT.vertexCount)
        })));
        return (0, TU.f)(UT) && (mT.hasVertexAlpha = !0), Promise.all(gT).then((() => (HT.link(nT), HT)))
      }
    }
    var zU, MU = mT(37428),
      gU = mT(37185),
      nU = mT(38036),
      HU = mT(37359),
      kU = mT(37397),
      jU = mT(2875),
      lU = mT(37385);

    function LU(TT, UT) {
      TT.metadata = TT.metadata || {};
      const mT = TT._internalMetadata = TT._internalMetadata || {},
        WT = mT.mF = mT.mF || {};
      (WT.pointers = WT.pointers || []).push(UT)
    }

    function pU(TT, UT) {
      if (UT && Object.keys(UT).length > 0) {
        const mT = TT.metadata = TT.metadata || {};
        (mT.mF = mT.mF || {}).extras = UT
      }
    }

    function BU(TT, UT) {
      UT.position = TT.translation ? gU.JB.FromArray(TT.translation) : gU.JB.Zero(), UT.rotationQuaternion = TT.rotation ? gU.Quaternion.FromArray(TT.rotation) : gU.Quaternion.Identity(), UT.gp = TT.scale ? gU.JB.FromArray(TT.scale) : gU.JB.One()
    }
    class ZU {
      constructor(TT, UT) {
        if (this.XZ = TT, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, UT) {
          const UT = TT.eB(),
            mT = TT.SF.add((() => {
              this.dispose()
            })),
            WT = UT.OB.add((() => {
              for (const TT of [...this.geometries, ...this.meshes, ...this.textures]) TT._rebuild()
            }));
          this.release = () => {
            TT.SF.remove(mT), UT.OB.remove(WT)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const TT of this.meshes) this.XZ.fWT(TT);
          for (const TT of this.materials) this.XZ.addMaterial(TT);
          for (const TT of this.geometries) this.XZ.addGeometry(TT);
          for (const TT of this.transformNodes) this.XZ.addTransformNode(TT);
          for (const TT of this.textures) this.XZ.addTexture(TT)
        }
      }
      dispose() {
        var TT;
        for (const UT of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const TT of UT.slice()) TT.dispose();
          UT.length = 0
        }
        null === (TT = this.release) || void 0 === TT || TT.call(this), this.release = null
      }
    }
    class cU {
      constructor(TT, UT, mT, WT, zT, MT, gT) {
        this.asset = TT, this.XZ = UT, this.tree = mT, this.geometryData = zT, this.materials = MT, this.lite = gT, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = WT ? mT : null
      }
      create(TT) {
        if (this.lite) return TT();
        const UT = this.XZ;
        UT._blockEntityCollection = !!this.container;
        try {
          const UT = TT();
          return this.container && (UT._parentContainer = this.container), UT
        } finally {
          UT._blockEntityCollection = !1
        }
      }
      node(TT, UT) {
        return this.create((() => this.lite ? UT ? (0, nU.f)(this.lite, TT) : (0, nU.n)(this.lite, TT) : UT ? new((0, AT.d)().Mesh)(TT, this.XZ) : new((0, AT.d)().TransformNode)(TT, this.XZ)))
      }
      async load() {
        var TT;
        this.asset.model.json.nodes && this.createRoot();
        const UT = this.lite ? null : this.XZ,
          mT = null !== (TT = null === UT || void 0 === UT ? void 0 : UT.blockMaterialDirtyMechanism) && void 0 !== TT && TT;
        let WT;
        UT && (UT.blockMaterialDirtyMechanism = !0);
        try {
          WT = this.loadScene()
        } finally {
          null === UT || void 0 === UT || UT._forceBlockMaterialDirtyMechanism(mT)
        }
        await WT;
        const {
          root: zT,
          tree: MT
        } = this;
        zT && (zT.Qy(!0), MT.meshes.push(zT), MT.rootNodes.push(zT));
        for (const nT of this.asset.model.nodes) {
          const TT = this.nodeObjects.get(nT.index);
          TT && ["TransformNode", "LiteNode"].includes(TT.getClassName()) && MT.transformNodes.push(TT);
          for (const UT of null !== (gT = this.nodePrimitives.get(nT.index)) && void 0 !== gT ? gT : []) {
            var gT;
            MT.meshes.push(UT);
            const TT = UT.geometry;
            TT && !MT.geometries.includes(TT) && MT.geometries.push(TT)
          }
        }
      }
      createRoot() {
        const TT = this.node("__root__", !0);
        this.root = TT, TT.Qy(!1), this.XZ.useRightHandedSystem || BU(uT, TT)
      }
      loadScene() {
        const TT = [];
        for (const UT of this.asset.model.rootNodes) TT.push(this.loadNode(this.asset.model.nodes[UT], (TT => {
          TT.parent = this.root
        })));
        return TT.push(Promise.resolve()), Promise.all(TT).then((() => {}))
      }
      loadNode(TT, UT) {
        const mT = `/nodes/${TT.index}`,
          WT = [],
          zT = zT => {
            if (LU(zT, mT), BU(TT, zT), TT.hasCamera && !this.XZ.useRightHandedSystem) {
              const {
                gp: TT
              } = zT;
              TT.set(-1, TT.y, TT.z)
            }
            for (const UT of TT.children) WT.push(this.loadNode(this.asset.model.nodes[UT], (TT => {
              TT.parent = zT
            })));
            (mT => {
              pU(mT, TT.extras), UT(mT)
            })(zT)
          };
        if (null === TT.mesh) {
          const UT = this.node(VT(TT), !1);
          this.nodeObjects.set(TT.index, UT), zT(UT)
        } else {
          const UT = this.asset.model.meshes[TT.mesh];
          WT.push(this.loadMesh(`/meshes/${UT.index}`, TT, UT, zT))
        }
        return Promise.all(WT).then((() => {
          for (const mT of null !== (UT = this.nodePrimitives.get(TT.index)) && void 0 !== UT ? UT : []) {
            var UT;
            mU(mT)
          }
          return this.nodeObjects.get(TT.index)
        }))
      }
      loadMesh(TT, UT, mT, WT) {
        const zT = [],
          MT = VT(UT);
        if (1 === mT.primitives.length) {
          const WT = mT.primitives[0];
          zT.push(this.loadPrimitive(`${TT}/primitives/${WT.index}`, MT, WT, (TT => {
            this.nodeObjects.set(UT.index, TT), this.nodePrimitives.set(UT.index, [TT])
          })))
        } else {
          const WT = this.node(MT, !1);
          this.nodeObjects.set(UT.index, WT);
          const gT = [];
          this.nodePrimitives.set(UT.index, gT);
          for (const UT of mT.primitives) zT.push(this.loadPrimitive(`${TT}/primitives/${UT.index}`, `${MT}_primitive${UT.index}`, UT, (TT => {
            TT.parent = WT, gT.push(TT)
          })))
        }
        const gT = this.nodeObjects.get(UT.index);
        return WT(gT), Promise.all(zT).then((() => gT))
      }
      loadPrimitive(TT, UT, mT, WT) {
        const zT = [],
          MT = this.node(UT, !0);
        if (MT.sideOrientation = this.XZ.useRightHandedSystem ? HU.e.CounterClockWiseSideOrientation : HU.e.ClockWiseSideOrientation, zT.push(this.geometryData.load(TT, mT, MT).then((TT => {
            if ((0, RT.f)(MT)) {
              var UT, mT;
              const WT = TT;
              MT.replaceModel(WT, Int32Array.of(0, null !== (UT = null === (mT = WT.indexData) || void 0 === mT ? void 0 : mT.length) && void 0 !== UT ? UT : WT.vertexCount, 0, WT.vertexCount))
            } else this.create((() => (TT.applyToMesh(MT), TT)))
          }))), this.materials) {
          const TT = 0 === mT.mode ? HU.e.PointListDrawMode : HU.e.TriangleFillMode,
            UT = null === mT.material ? null : this.asset.model.materials[mT.material];
          zT.push(this.loadMaterial(UT, TT, (TT => {
            MT.material = TT
          })))
        }
        return LU(MT, TT), WT(MT), Promise.all(zT).then((() => MT))
      }
      loadMaterial(TT, UT, mT) {
        var WT;
        const zT = `${null!==(WT=null===TT||void 0===TT?void 0:TT.index)&&void 0!==WT?WT:"default"}:${UT}`;
        let MT = this.materialData.get(zT);
        return MT || (MT = this.createMaterial(TT, UT), this.materialData.set(zT, MT)), mT(MT.material), MT.promise
      }
      createMaterial(TT, UT) {
        const mT = TT ? TT.name || `material${TT.index}` : "__GLTFLoader._default",
          {
            style: WT,
            unlit: zT
          } = this.materials;
        let MT;
        const gT = this.create((() => {
          const gT = (0, lU.b)({
            name: mT,
            XZ: this.XZ,
            sets: {
              ...(0, TU.b)(this.asset, TT, WT, zT),
              fillMode: UT
            },
            unrendered: !0
          });
          return MT = gT.model, gT.mirror
        }));
        let nT = Promise.resolve();
        if (TT) {
          const UT = `/materials/${TT.index}`,
            WT = MT.diffuseTexture;
          if (WT && !WT.mirror) nT = new Promise((TT => setTimeout(TT)));
          else if (WT) {
            const zT = WT.mirror;
            zT._parentContainer = this.container, zT.name = `${mT} (Base Color)`, LU(zT, `${UT}${TT.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(zT), nT = (0, kU.u)(WT)
          }
          pU(gT, TT.extras), LU(gT, UT)
        }
        return this.tree.materials.push(gT), {
          material: gT,
          promise: nT
        }
      }
    }

    function vU() {
      MU.h.dracoDecodes = ZT.decodes, MU.h.dracoWorkersStarted = ZT.workersStarted, MU.h.dracoMostWorkers = ZT.mostWorkers
    }
    async function fU(TT, UT, mT, zT, MT) {
      try {
        return await async function(TT, UT, mT, zT, MT, gT) {
          var nT;
          let HT;
          const kT = null === (nT = (0, jU.h)()) || void 0 === nT ? void 0 : nT.GB,
            jT = null !== kT && void 0 !== kT && kT.NB && UT === kT.KF() ? kT : null,
            lT = MT && !jT;
          return await oT(TT, UT, mT, zT, WT.c, (TT => (HT = new ZU(UT, lT), new cU(TT, UT, HT, lT, new WU(UT, zT), gT, jT).load())), !MT), HT
        }(TT, UT, mT, bT, zT, MT)
      } finally {
        vU()
      }
    }
    async function qU(TT, UT, mT, zT) {
      try {
        return await oT(TT, UT, mT, bT, WT.c, (TT => zT(TT, new WU(UT, bT))))
      } finally {
        vU()
      }
    }
    zU = zT.d, jT || (jT = {
      scriptUrl: new URL(zU.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(zU.wasmBinaryUrl, location.href).href
    })
  },
  41635: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT
    });
    var WT = mT(133),
      zT = mT(1160);

    function MT(TT) {
      return (0, WT.isDiscordClient)() ? `https://${zT.b.discordDomain}/${TT.href}` : TT.href
    }
    const gT = {
      scriptUrl: MT(new mT.U(mT(41640))),
      wasmBinaryUrl: MT(new mT.U(mT(41643)))
    }
  },
  36329: TT => {
    TT.exports = function(TT, UT, mT, WT) {
      var zT = self || window;
      try {
        try {
          var MT;
          try {
            MT = new zT.Blob([TT])
          } catch (kT) {
            (MT = new(zT.BlobBuilder || zT.WebKitBlobBuilder || zT.MozBlobBuilder || zT.MSBlobBuilder)).append(TT), MT = MT.getBlob()
          }
          var gT = zT.URL || zT.webkitURL,
            nT = gT.createObjectURL(MT),
            HT = new zT[UT](nT, mT);
          return gT.revokeObjectURL(nT), HT
        } catch (kT) {
          return new zT[UT]("data:application/javascript,".concat(encodeURIComponent(TT)), mT)
        }
      } catch (kT) {
        if (!WT) throw Error("Inline worker is not supported");
        return new zT[UT](WT, mT)
      }
    }
  },
  41640: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41643: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);