export const id = 198;
export const ids = [198];
export const modules = {
  40312: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      loadGlbAsset: () => go,
      loadGlbTree: () => Ao
    });
    var iT = IT(36851),
      zT = IT(40319),
      kT = IT(35305),
      WT = IT.n(kT);

    function XT() {
      return WT()('(()=>{class TT extends Error{}function oT(oT,IT){const iT=oT._malloc(IT);if(0===iT)throw new TT(`Draco: the decoder\'s heap refused ${IT} bytes`);return iT}function IT(TT){return{[TT.DT_FLOAT32]:[Float32Array,5126],[TT.DT_INT8]:[Int8Array,5120],[TT.DT_INT16]:[Int16Array,5122],[TT.DT_INT32]:[Int32Array,5124],[TT.DT_UINT8]:[Uint8Array,5121],[TT.DT_UINT16]:[Uint16Array,5123],[TT.DT_UINT32]:[Uint32Array,5125]}}function iT(oT,iT,zT,kT,WT){let XT=null,BT=null,FT=null;try{XT=new oT.Decoder,BT=new oT.DecoderBuffer,BT.Init(iT,iT.byteLength);let ST=0;const DT=XT.GetEncodedGeometryType(BT);if(DT===oT.TRIANGULAR_MESH){const IT=new oT.Mesh;FT=IT;const iT=XT.DecodeBufferToMesh(BT,IT);if(!iT.ok()||0===IT.ptr)throw new TT(iT.error_msg());ST=3*IT.num_faces()}else{if(DT!==oT.POINT_CLOUD)throw new TT(`Draco: Cannot decode invalid geometry type ${DT}`);{const IT=new oT.PointCloud;FT=IT;const iT=XT.DecodeBufferToPointCloud(BT,IT);if(!iT.ok()||!IT.ptr)throw new TT(iT.error_msg())}}const LT=FT.num_points();if(LT!==kT.vertices||ST!==kT.indices)throw new TT(`Draco: decoded ${LT} vertices and ${ST} indices, the accessors declare ${kT.vertices} and ${kT.indices}`);const xT=IT(oT),cT=[];for(const{kind:oT,id:IT,components:iT}of zT){const zT=XT.GetAttributeByUniqueId(FT,IT);if(!zT||0===zT.ptr)throw new TT(`Draco: no attribute with id ${IT} (${oT})`);const kT=zT.data_type();if(!xT[kT])throw new TT(`Draco: Cannot decode invalid data type ${kT}`);if(zT.num_components()!==iT)throw new TT(`Draco: ${oT} decodes to ${zT.num_components()} components, its accessor declares ${iT}`);cT.push([oT,zT,kT])}return WT({dracoDecoder:XT,geometry:FT,triangles:DT===oT.TRIANGULAR_MESH,numPoints:LT,numIndices:ST,attributes:cT})}finally{FT&&oT.destroy(FT),BT&&oT.destroy(BT),XT&&oT.destroy(XT)}}const zT=self;let kT=null;self.onmessage=TT=>{let{data:WT}=TT;if("init"===WT.id){try{importScripts(WT.url),kT=DracoDecoderModule({wasmBinary:WT.wasmBinary}),zT.postMessage({id:"initDone"})}catch(DT){zT.postMessage({id:"initError",message:DT instanceof Error?DT.message:String(DT)})}return}const{seq:XT,data:BT,attributeIds:FT,expected:ST}=WT;kT?kT.then((TT=>{try{const kT=function(TT,zT,kT,WT){const XT=Object.keys(kT).map((TT=>({kind:TT,id:kT[TT],components:WT.components[TT]})));return iT(TT,zT,XT,WT,(iT=>{let{dracoDecoder:zT,geometry:kT,triangles:WT,numPoints:XT,numIndices:BT,attributes:FT}=iT;const ST=IT(TT);let DT=null;if(WT){const IT=4*BT,iT=oT(TT,IT);try{zT.GetTrianglesUInt32Array(kT,IT,iT),DT=new Uint32Array(BT),DT.set(new Uint32Array(TT.HEAPF32.buffer,iT,BT))}finally{TT._free(iT)}}const LT=[];for(const[IT,xT,cT]of FT){const[iT]=ST[cT],WT=xT.num_components(),BT=XT*WT,FT=BT*iT.BYTES_PER_ELEMENT,DT=oT(TT,FT);try{zT.GetAttributeDataArrayForAllPoints(kT,xT,cT,FT,DT),LT.push({kind:IT,data:new iT(TT.HEAPF32.buffer,DT,BT).slice(),size:WT,byteOffset:xT.byte_offset(),byteStride:xT.byte_stride(),normalized:xT.normalized()})}finally{TT._free(DT)}}return{indices:DT,attributes:LT,totalVertices:XT}}))}(TT,BT,FT,ST),WT=kT.attributes.map((TT=>TT.data.buffer));kT.indices&&WT.push(kT.indices.buffer),zT.postMessage({id:"decoded",seq:XT,...kT},WT)}catch(DT){zT.postMessage({id:"decodeError",seq:XT,message:DT instanceof Error?DT.message:String(DT)})}}),(TT=>{zT.postMessage({id:"decodeError",seq:XT,message:TT instanceof Error?TT.message:String(TT)})})):zT.postMessage({id:"decodeError",seq:XT,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, IT.p + "dracoDecode.worker.88155a62.worker.js")
    }
    var BT = IT(90);
    const FT = 1e3;
    let ST = null,
      DT = null;
    const LT = [],
      xT = [];
    let cT = 0;
    const KT = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      MT = function(TT, oT) {
        const IT = TT ? Math.max(1, Math.min(Math.floor(.5 * TT), 4)) : 1;
        return oT ? Math.min(IT, 2) : IT
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, BT.isMobile)());

    function rT() {
      if (!ST) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: TT,
        wasmBinaryUrl: oT
      } = ST;
      return DT ??= fetch(oT).then((TT => {
        if (!TT.ok) throw new Error(`Draco: fetching ${oT} failed: ${TT.status}`);
        return TT.arrayBuffer()
      })), DT.catch((() => {
        DT = null
      })), KT.workersStarted++, DT.then((oT => new Promise(((IT, iT) => {
        const zT = new XT;
        zT.onerror = TT => {
          zT.onmessage = null, zT.onerror = null, zT.terminate(), iT(new Error("Draco: the decode worker failed to start" + (TT.message ? `: ${TT.message}` : " (its script did not load)")))
        }, zT.onmessage = TT => {
          let {
            data: oT
          } = TT;
          zT.onmessage = null, zT.onerror = null, "initDone" === oT.id ? IT(zT) : (zT.terminate(), iT(new Error(`Draco: ${"initError"===oT.id?oT.message:"the worker did not start"}`)))
        };
        const kT = oT.slice(0),
          WT = {
            id: "init",
            url: TT,
            wasmBinary: kT
          };
        zT.postMessage(WT, [kT])
      }))))
    }

    function AT(TT) {
      const oT = LT.indexOf(TT); - 1 !== oT && LT.splice(oT, 1);
      const IT = xT.shift();
      IT && hT(IT)
    }

    function gT(TT, oT) {
      TT.busy = !0, TT.releaseTimer && (clearTimeout(TT.releaseTimer), TT.releaseTimer = null);
      TT.worker.then((IT => {
        const iT = cT++;
        IT.onmessage = zT => {
          let {
            data: kT
          } = zT;
          if (("decoded" === kT.id || "decodeError" === kT.id) && kT.seq === iT) {
            if (IT.onmessage = null, IT.onerror = null, "decoded" === kT.id) return KT.decodes++, oT.resolve({
              indices: kT.indices,
              attributes: kT.attributes,
              totalVertices: kT.totalVertices
            }), void(() => {
              const oT = xT.shift();
              oT ? gT(TT, oT) : (TT.busy = !1, TT.releaseTimer = setTimeout((() => {
                const oT = LT.indexOf(TT); - 1 !== oT && LT.splice(oT, 1), TT.worker.then((TT => {
                  TT.terminate()
                }))
              }), FT))
            })();
            IT.terminate(), oT.reject(new Error(kT.message)), AT(TT)
          }
        }, IT.onerror = iT => {
          IT.onmessage = null, IT.onerror = null, IT.terminate(), oT.reject(new Error(`Draco: the decode worker failed: ${iT.message}`)), AT(TT)
        };
        const zT = {
          id: "decode",
          seq: iT,
          data: oT.data,
          attributeIds: oT.attributeIds,
          expected: oT.expected
        };
        IT.postMessage(zT, [oT.data.buffer])
      }), (IT => {
        oT.reject(IT instanceof Error ? IT : new Error(String(IT))), AT(TT)
      }))
    }

    function hT(TT) {
      const oT = LT.find((TT => !TT.busy));
      if (oT) gT(oT, TT);
      else {
        if (LT.length < MT) {
          const oT = {
            worker: rT(),
            busy: !0,
            releaseTimer: null
          };
          return LT.push(oT), KT.mostWorkers = Math.max(KT.mostWorkers, LT.length), void gT(oT, TT)
        }
        xT.push(TT)
      }
    }

    function wT(TT, oT, IT) {
      return new Promise(((iT, zT) => {
        hT({
          data: new Int8Array(TT.buffer, TT.byteOffset, TT.byteLength).slice(),
          attributeIds: oT,
          expected: IT,
          resolve: iT,
          reject: zT
        })
      }))
    }
    var mT = IT(36317),
      eT = IT(36325),
      RT = IT(8805),
      uT = IT(8801);
    const vT = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function ET(TT) {
      const oT = (0, uT.g)(TT.byteLength);
      if (oT) throw new RT.q(oT);
      const {
        json: IT,
        bin: iT
      } = (0, RT.B)(TT), zT = (0, uT.e)(IT, iT);
      if (zT) throw new RT.q(zT);
      try {
        return function(TT, oT) {
          var IT, iT, zT, kT, WT, XT, BT, FT, ST, DT, LT, xT, cT, KT, MT;
          const rT = new Map,
            AT = IT => {
              let iT = rT.get(IT);
              if (!iT) {
                var zT;
                const kT = TT.bufferViews[IT],
                  WT = null !== (zT = kT.byteOffset) && void 0 !== zT ? zT : 0;
                iT = {
                  index: IT,
                  bytes: oT.subarray(WT, WT + kT.byteLength),
                  byteStride: kT.byteStride
                }, rT.set(IT, iT)
              }
              return iT
            },
            gT = new Map,
            hT = oT => {
              let IT = gT.get(oT);
              if (!IT) {
                var iT;
                const zT = TT.accessors[oT];
                IT = {
                  index: oT,
                  count: zT.count,
                  type: zT.type,
                  numComponents: RT.s[zT.type],
                  componentType: zT.componentType,
                  normalized: null !== (iT = zT.normalized) && void 0 !== iT && iT,
                  byteOffset: zT.byteOffset,
                  bufferView: void 0 === zT.bufferView ? null : AT(zT.bufferView),
                  min: zT.min,
                  max: zT.max
                }, gT.set(oT, IT)
              }
              return IT
            },
            wT = null !== (IT = null === (iT = TT.extensionsUsed) || void 0 === iT ? void 0 : iT.includes("KHR_draco_mesh_compression")) && void 0 !== IT && IT,
            mT = (null !== (zT = TT.meshes) && void 0 !== zT ? zT : []).map(((oT, IT) => {
              const iT = oT.primitives.map(((oT, IT) => {
                var iT, zT, kT;
                const WT = wT ? null === (iT = oT.extensions) || void 0 === iT ? void 0 : iT.KHR_draco_mesh_compression : void 0;
                let XT = null;
                const BT = [];
                if (WT) {
                  const IT = {
                    vertices: TT.accessors[oT.attributes.POSITION].count,
                    indices: void 0 === oT.indices ? 0 : TT.accessors[oT.indices].count,
                    components: {}
                  };
                  XT = {
                    bufferView: AT(WT.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: IT
                  };
                  for (const [iT, zT] of RT.k) {
                    const kT = WT.attributes[iT];
                    if (void 0 === kT) continue;
                    XT.attributeIds[zT] = kT;
                    const BT = oT.attributes[iT];
                    var FT;
                    if (void 0 !== BT) XT.normalized[zT] = null !== (FT = TT.accessors[BT].normalized) && void 0 !== FT && FT, IT.components[zT] = RT.s[TT.accessors[BT].type]
                  }
                } else
                  for (const [TT, ST] of RT.k) {
                    const IT = oT.attributes[TT];
                    void 0 !== IT && BT.push({
                      semantic: TT,
                      kind: ST,
                      accessor: hT(IT)
                    })
                  }
                return {
                  index: IT,
                  mode: null !== (zT = oT.mode) && void 0 !== zT ? zT : 4,
                  attributes: BT,
                  indices: WT || void 0 === oT.indices ? null : hT(oT.indices),
                  position: void 0 === oT.attributes.POSITION ? null : hT(oT.attributes.POSITION),
                  material: null !== (kT = oT.material) && void 0 !== kT ? kT : null,
                  draco: XT
                }
              }));
              return {
                index: IT,
                name: oT.name,
                primitives: iT,
                extras: oT.extras
              }
            })),
            eT = (null !== (kT = TT.nodes) && void 0 !== kT ? kT : []).map(((TT, oT) => {
              var IT, iT;
              return {
                index: oT,
                name: TT.name,
                children: null !== (IT = TT.children) && void 0 !== IT ? IT : [],
                mesh: null !== (iT = TT.mesh) && void 0 !== iT ? iT : null,
                translation: TT.translation,
                rotation: TT.rotation,
                scale: TT.scale,
                hasCamera: void 0 !== TT.camera,
                extras: TT.extras
              }
            })),
            uT = null !== (WT = null === (XT = TT.extensionsUsed) || void 0 === XT ? void 0 : XT.includes("KHR_materials_unlit")) && void 0 !== WT && WT,
            ET = null !== (BT = null === (FT = TT.extensionsUsed) || void 0 === FT ? void 0 : FT.includes("KHR_texture_transform")) && void 0 !== BT && BT,
            fT = (null !== (ST = TT.materials) && void 0 !== ST ? ST : []).map(((TT, oT) => {
              var IT, iT, zT, kT;
              const WT = TT.pbrMetallicRoughness,
                XT = null === WT || void 0 === WT ? void 0 : WT.baseColorTexture;
              return {
                index: oT,
                name: TT.name,
                extras: TT.extras,
                unlit: uT && void 0 !== (null === (IT = TT.extensions) || void 0 === IT ? void 0 : IT.KHR_materials_unlit),
                pbr: WT ? {
                  baseColorFactor: WT.baseColorFactor,
                  metallicFactor: WT.metallicFactor,
                  roughnessFactor: WT.roughnessFactor
                } : null,
                baseColorTexture: XT ? {
                  texture: XT.index,
                  transform: ET && (null === (iT = XT.extensions) || void 0 === iT ? void 0 : iT.KHR_texture_transform) || null
                } : null,
                emissiveFactor: TT.emissiveFactor,
                alphaMode: null !== (zT = TT.alphaMode) && void 0 !== zT ? zT : "OPAQUE",
                alphaCutoff: TT.alphaCutoff,
                doubleSided: null !== (kT = TT.doubleSided) && void 0 !== kT && kT
              }
            })),
            CT = (null !== (DT = TT.textures) && void 0 !== DT ? DT : []).map(((oT, IT) => {
              var iT, zT;
              const kT = void 0 === oT.sampler ? vT : {
                index: oT.sampler,
                ...null === (iT = TT.samplers) || void 0 === iT ? void 0 : iT[oT.sampler]
              };
              return {
                index: IT,
                sampler: {
                  index: kT.index,
                  magFilter: kT.magFilter,
                  minFilter: kT.minFilter,
                  wrapS: kT.wrapS,
                  wrapT: kT.wrapT
                },
                image: null !== (zT = oT.source) && void 0 !== zT ? zT : -1
              }
            })),
            jT = (null !== (LT = TT.images) && void 0 !== LT ? LT : []).map(((TT, oT) => ({
              index: oT,
              name: TT.name,
              mimeType: TT.mimeType,
              bufferView: AT(TT.bufferView)
            }))),
            JT = null !== (xT = (0, RT.z)(TT)) && void 0 !== xT ? xT : 0;
          return {
            json: TT,
            rootNodes: null !== (cT = null === (KT = TT.scenes) || void 0 === KT || null === (MT = KT[JT]) || void 0 === MT ? void 0 : MT.nodes) && void 0 !== cT ? cT : [],
            nodes: eT,
            meshes: mT,
            materials: fT,
            textures: CT,
            images: jT
          }
        }(IT, iT)
      } catch (kT) {
        throw kT instanceof RT.m ? kT : new RT.m(`reading the GLB failed: ${kT instanceof Error?kT.message:String(kT)}`)
      }
    }
    async function fT(TT, oT) {
      var IT, iT;
      const zT = TT.draco;
      if (!zT) throw new RT.m("not a Draco primitive");
      let kT;
      try {
        kT = await oT(zT.bufferView.bytes, zT.attributeIds, zT.expected)
      } catch (FT) {
        throw new RT.m(`Draco decoding failed: ${FT instanceof Error?FT.message:String(FT)}`)
      }
      const {
        vertices: WT,
        indices: XT,
        components: BT
      } = zT.expected;
      if (kT.totalVertices !== WT || (null !== (IT = null === (iT = kT.indices) || void 0 === iT ? void 0 : iT.length) && void 0 !== IT ? IT : 0) !== XT || kT.attributes.some((TT => TT.size !== BT[TT.kind] || TT.data.length !== WT * TT.size))) throw new RT.m("Draco decoding gave other counts than the accessors declare");
      for (const ST of kT.attributes) {
        const TT = zT.normalized[ST.kind];
        void 0 !== TT && (ST.normalized = TT)
      }
      return kT
    }
    const CT = new WeakMap;

    function jT(TT, oT) {
      var IT;
      const iT = null !== (IT = CT.get(TT)) && void 0 !== IT ? IT : oT(TT);
      return CT.set(TT, iT), iT
    }

    function JT(TT) {
      const oT = TT.bufferView,
        IT = 5125 === TT.componentType ? Uint32Array : Uint16Array,
        iT = oT.bytes.buffer,
        zT = oT.bytes.byteOffset + (TT.byteOffset || 0);
      return zT % IT.BYTES_PER_ELEMENT !== 0 ? new IT(iT.slice(zT, zT + TT.count * IT.BYTES_PER_ELEMENT), 0) : new IT(iT, zT, TT.count)
    }

    function UT(TT, oT) {
      if (TT.min && TT.max) return [new Float64Array(TT.min), new Float64Array(TT.max)];
      const IT = oT.find((TT => {
          let {
            kind: oT
          } = TT;
          return "position" === oT
        })),
        iT = IT ? (0, eT.i)(IT, TT.count) : new Float32Array(0);
      return (0, eT.u)(iT.length / 3, ((TT, oT) => iT[3 * TT + oT]))
    }

    function aT(TT) {
      const oT = TT.attributes.map((TT => {
          var oT, IT;
          let {
            kind: iT,
            accessor: zT
          } = TT;
          const {
            bufferView: kT,
            numComponents: WT
          } = zT;
          if (!kT) {
            return {
              kind: iT,
              data: jT(zT, (() => new Float32Array(WT * zT.count))),
              offset: 0,
              stride: 4 * WT,
              components: WT,
              glType: 5126,
              isNormalized: !1
            }
          }
          const XT = null !== (oT = kT.byteStride) && void 0 !== oT ? oT : WT * RT.e[zT.componentType];
          return {
            kind: iT,
            data: kT.bytes,
            offset: null !== (IT = zT.byteOffset) && void 0 !== IT ? IT : 0,
            stride: XT,
            components: WT,
            glType: zT.componentType,
            isNormalized: zT.normalized
          }
        })),
        IT = TT.indices,
        iT = IT && jT(IT, JT),
        zT = TT.position;
      return new eT.g(oT, iT, zT.count, ...UT(zT, oT))
    }
    const YT = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function QT(TT, oT) {
      const IT = oT.attributes.map((TT => {
        let {
          kind: oT,
          data: IT,
          size: iT,
          byteOffset: zT,
          byteStride: kT,
          normalized: WT
        } = TT;
        return {
          kind: oT,
          data: IT,
          offset: zT,
          stride: kT,
          components: iT,
          glType: 5120 + YT.indexOf(IT.constructor),
          isNormalized: WT
        }
      }));
      return new eT.g(IT, oT.indices, oT.totalVertices, ...UT(TT.position, IT))
    }

    function OT(TT) {
      const oT = TT.lastIndexOf("/");
      return oT < 0 ? TT : TT.substring(oT + 1)
    }

    function HT(TT) {
      const oT = TT.lastIndexOf("/");
      return oT < 0 ? "" : TT.substring(0, oT + 1)
    }

    function nT(TT) {
      return TT.name || `node${TT.index}`
    }
    const qT = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      ZT = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      lT = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function sT(TT) {
      var oT, IT, iT, zT;
      const kT = null !== (oT = TT.minFilter) && void 0 !== oT ? oT : 9987;
      return 9729 === (null !== (IT = TT.magFilter) && void 0 !== IT ? IT : 9729) ? null !== (iT = ZT[kT]) && void 0 !== iT ? iT : 3 : null !== (zT = lT[kT]) && void 0 !== zT ? zT : 4
    }
    const tT = {
      33071: 0,
      33648: 2
    };

    function GT(TT) {
      var oT;
      return null !== (oT = tT[null !== TT && void 0 !== TT ? TT : 10497]) && void 0 !== oT ? oT : 1
    }

    function pT(TT) {
      return 9728 === TT.minFilter || 9729 === TT.minFilter
    }

    function bT(TT) {
      var oT, IT, iT;
      const zT = Float64Array.from(null !== (oT = TT.scale) && void 0 !== oT ? oT : [1, 1, 1]);
      return TT.hasCamera && (zT[0] = -1), {
        translation: Float64Array.from(null !== (IT = TT.translation) && void 0 !== IT ? IT : [0, 0, 0]),
        rotation: Float64Array.from(null !== (iT = TT.rotation) && void 0 !== iT ? iT : [0, 0, 0, 1]),
        scale: zT
      }
    }

    function yT(TT, oT) {
      let {
        translation: IT,
        rotation: iT,
        scale: zT
      } = TT;
      const kT = new Float32Array(16);
      return (0, mT.c)(zT, 0, iT, 0, IT, 0, kT), oT && (0, mT.l)(kT, oT, 0, kT), kT
    }
    class NT {
      constructor(TT, oT, IT, iT) {
        this.model = TT, this.decode = oT, this.fileInfo = IT, this.uniqueRootUrl = iT, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const zT = new Set,
          kT = (oT, IT) => {
            const iT = TT.nodes[oT];
            if (this.parents.has(iT)) throw new RT.m(`/nodes/${oT}: Invalid recursive node hierarchy`);
            this.parents.set(iT, IT);
            const WT = null === iT.mesh ? [] : TT.meshes[iT.mesh].primitives,
              XT = WT.map((TT => {
                const oT = WT.length > 1;
                return {
                  name: oT ? `${nT(iT)}_primitive${TT.index}` : nT(iT),
                  node: iT,
                  primitive: TT,
                  part: oT,
                  geometry: null
                }
              }));
            this.uses.set(iT, XT);
            const BT = null !== iT.mesh && zT.has(iT.mesh);
            zT.add(iT.mesh), this.own.set(iT, BT ? [] : XT);
            for (const TT of iT.children) kT(TT, iT)
          };
        for (const WT of TT.rootNodes) kT(WT, null);
        this.primitives = TT.nodes.flatMap((TT => {
          var oT;
          return null !== (oT = this.own.get(TT)) && void 0 !== oT ? oT : []
        }))
      }
      decodeGeometries() {
        const TT = new Map;
        return Promise.all(this.primitives.map((async oT => {
          const {
            primitive: IT
          } = oT, iT = IT.draco;
          let zT = iT ? TT.get(iT.bufferView.index) : Promise.resolve(aT(IT));
          zT || (zT = fT(IT, this.decode).then((TT => QT(IT, TT))), TT.set(iT.bufferView.index, zT)), oT.geometry = await zT
        })))
      }
      parentOf(TT) {
        var oT;
        return null !== (oT = this.parents.get(TT)) && void 0 !== oT ? oT : null
      }
      meshesUnder(TT) {
        const oT = this.model.nodes.filter((TT => this.uses.has(TT)));
        for (const iT of oT) {
          const oT = this.uses.get(iT),
            IT = oT.find((oT => oT.name === TT));
          if (IT) return 1 === oT.length ? this.subtree(iT) : this.own.get(iT).includes(IT) ? [IT] : []
        }
        const IT = oT.find((oT => 1 !== this.uses.get(oT).length && nT(oT) === TT));
        return IT ? this.subtree(IT) : null
      }
      subtree(TT) {
        return [...this.own.get(TT), ...TT.children.flatMap((TT => this.subtree(this.model.nodes[TT])))]
      }
      worldMatrix(TT, oT, IT) {
        let iT = yT(bT(oT ? qT : {}), null);
        const zT = [];
        for (let WT = TT.part ? TT.node : this.parentOf(TT.node); WT; WT = this.parentOf(WT)) zT.unshift(WT);
        for (const WT of zT) iT = yT(bT(WT), iT);
        const kT = bT(TT.part ? {} : TT.node);
        return void 0 !== IT && kT.scale.fill(IT), yT(kT, iT)
      }
      floats(TT) {
        const {
          vertexAttributes: oT,
          vertexCount: IT
        } = TT.geometry;
        return new Map(oT.map((TT => [TT.kind, (0, eT.i)(TT, IT)])))
      }
      imageUrl(TT) {
        return function(TT, oT, IT) {
          let {
            name: iT
          } = oT;
          return `data:${TT}${iT}#image${IT}`
        }(this.uniqueRootUrl, this.fileInfo, TT)
      }
      textureDesc(TT, oT) {
        var IT;
        let {
          texture: iT,
          transform: zT
        } = TT;
        const {
          sampler: kT,
          image: WT
        } = this.model.textures[iT], {
          bufferView: XT,
          mimeType: BT,
          name: FT
        } = this.model.images[WT], ST = zT && {
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
          url: this.imageUrl(WT),
          noMipmap: pT(kT),
          invertY: !1,
          samplingMode: sT(kT),
          data: {
            bytes: XT.bytes,
            mimeType: BT,
            label: FT,
            context: `/textures/${iT}`
          },
          sets: {
            wrapU: GT(kT.wrapS),
            wrapV: GT(kT.wrapT),
            ...ST,
            coordinatesIndex: null !== (IT = null === zT || void 0 === zT ? void 0 : zT.texCoord) && void 0 !== IT ? IT : 0,
            hasAlpha: oT
          }
        }
      }
    }
    async function PT(TT, oT, IT, iT, zT, kT) {
      let WT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const XT = function(TT, oT, IT) {
          return "string" !== typeof oT ? {
            url: "",
            rootUrl: TT,
            name: IT()
          } : oT ? oT.startsWith("data:") ? {
            url: oT,
            rootUrl: TT,
            name: ""
          } : TT ? {
            url: TT + oT,
            rootUrl: TT,
            name: oT
          } : {
            url: oT,
            rootUrl: HT(oT),
            name: OT(oT)
          } : {
            url: TT,
            rootUrl: HT(TT),
            name: OT(TT)
          }
        }(IT, TT, zT),
        BT = {};
      oT.addPendingData(BT);
      try {
        const IT = ET(await async function(TT, oT) {
            return "string" !== typeof oT ? oT : TT.url.startsWith("data:") ? (0, RT.w)(TT.url) : await (0, RT.x)(TT.url)
          }(XT, TT)),
          BT = new NT(IT, iT, XT, function(TT, oT) {
            let {
              rootUrl: IT,
              name: iT
            } = TT;
            return !IT.startsWith("file:") && iT ? IT : `${IT}${oT()}/`
          }(XT, zT));
        return await kT(BT), oT.importedMeshesFiles && (oT.loadingPluginName = "nC", WT && oT.importedMeshesFiles.push(XT.url)), BT
      } finally {
        oT.removePendingData(BT)
      }
    }
    var dT = IT(36439),
      VT = IT(36288),
      To = IT(36839);

    function oo(TT) {
      if (null === TT || void 0 === TT || !TT.min || !TT.max) return null;
      const [oT, IT, iT] = TT.min, [zT, kT, WT] = TT.max, {
        BoundingInfo: XT,
        sc: BT
      } = (0, dT.e)();
      return new XT(new BT(oT, IT, iT), new BT(zT, kT, WT))
    }

    function Io(TT) {
      (0, VT.i)(TT) || (TT.geometry && TT.geometry.useBoundingInfoFromGeometry ? TT._updateBoundingInfo() : TT.refreshBoundingInfo(!0, !0))
    }
    class io {
      constructor(TT, oT) {
        this.NK = TT, this.decode = oT, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(TT) {
        let oT = this.viewData.get(TT.index);
        return oT || (oT = this.bufferData.then((() => TT.bytes)), this.viewData.set(TT.index, oT)), oT
      }
      viewBuffer(TT) {
        let oT = this.viewBuffers.get(TT.index);
        return oT || (oT = this.viewBytes(TT).then((TT => new((0, dT.e)().vc)(this.NK.Zc(), TT, !1))), this.viewBuffers.set(TT.index, oT)), oT
      }
      vertexBuffer(TT, oT) {
        const {
          kind: IT,
          data: iT
        } = oT, zT = `${TT.index}:${IT}`;
        let kT = this.vertexBuffers.get(zT);
        if (!kT) {
          const WT = TT.bufferView;
          kT = WT ? this.viewBuffer(WT).then((TT => this.layoutVertexBuffer(TT, oT))) : Promise.resolve(iT).then((TT => new((0, dT.e)().VertexBuffer)(this.NK.Zc(), TT, IT, !1))), this.vertexBuffers.set(zT, kT)
        }
        return kT
      }
      layoutVertexBuffer(TT, oT) {
        let {
          kind: IT,
          offset: iT,
          stride: zT,
          components: kT,
          glType: WT,
          isNormalized: XT
        } = oT;
        const BT = this.NK.Zc();
        return new((0, dT.e)().VertexBuffer)(BT, TT, IT, !1, void 0, zT, void 0, iT, kT, WT, XT, !0, void 0, !0)
      }
      load(TT, oT, IT) {
        const iT = (0, VT.i)(IT),
          zT = TT => {
            iT || (IT._delayInfo = IT._delayInfo || [], -1 === IT._delayInfo.indexOf(TT) && IT._delayInfo.push(TT))
          },
          kT = oT.draco;
        if (kT) {
          for (const TT in kT.attributeIds) zT(TT);
          let WT = this.dracoGeometry.get(kT.bufferView.index);
          return WT || (WT = this.viewBytes(kT.bufferView).then((async () => {
            let zT;
            try {
              zT = await fT(oT, this.decode)
            } catch (BT) {
              throw new RT.m(`${TT}: ${BT instanceof Error?BT.message:String(BT)}`)
            }
            const kT = QT(oT, zT);
            if (iT) return kT;
            const WT = oo(oT.position),
              XT = new((0, dT.e)().MirroredGeometry)(IT.name, this.NK);
            WT && (XT._boundingInfo = WT, XT.useBoundingInfoFromGeometry = !0), kT.indexData && XT.setIndices(kT.indexData);
            for (const TT of kT.vertexAttributes) XT.setVerticesBuffer(this.layoutVertexBuffer(TT.data, TT), kT.vertexCount);
            return XT.link(kT), XT
          })), this.dracoGeometry.set(kT.bufferView.index, WT)), WT
        }
        const WT = [],
          XT = aT(oT);
        if (iT) return IT.isUnIndexed = !XT.indexData, IT.hasVertexAlpha = (0, To.f)(oT), Promise.resolve(XT);
        const BT = new((0, dT.e)().MirroredGeometry)(IT.name, this.NK),
          {
            indexData: FT
          } = XT;
        FT ? WT.push(this.viewBytes(oT.indices.bufferView).then((() => {
          BT.setIndices(FT)
        }))) : IT.isUnIndexed = !0;
        for (const [ST, {
            kind: DT,
            accessor: LT
          }] of oT.attributes.entries()) zT(DT), WT.push(this.vertexBuffer(LT, XT.vertexAttributes[ST]).then((TT => {
          if ("position" === TT.getKind()) {
            const TT = oo(LT);
            TT && (BT._boundingInfo = TT, BT.useBoundingInfoFromGeometry = !0)
          }
          BT.setVerticesBuffer(TT, XT.vertexCount)
        })));
        return (0, To.f)(oT) && (IT.hasVertexAlpha = !0), Promise.all(WT).then((() => (BT.link(XT), BT)))
      }
    }
    var zo, ko = IT(36221),
      Wo = IT(36114),
      Xo = IT(36847),
      Bo = IT(36172),
      Fo = IT(36205),
      So = IT(2465),
      Do = IT(36194);

    function Lo(TT, oT) {
      TT.metadata = TT.metadata || {};
      const IT = TT._internalMetadata = TT._internalMetadata || {},
        iT = IT.nC = IT.nC || {};
      (iT.pointers = iT.pointers || []).push(oT)
    }

    function xo(TT, oT) {
      if (oT && Object.keys(oT).length > 0) {
        const IT = TT.metadata = TT.metadata || {};
        (IT.nC = IT.nC || {}).extras = oT
      }
    }

    function co(TT, oT) {
      oT.position = TT.translation ? Wo.sc.FromArray(TT.translation) : Wo.sc.Zero(), oT.rotationQuaternion = TT.rotation ? Wo.Quaternion.FromArray(TT.rotation) : Wo.Quaternion.Identity(), oT.ti = TT.scale ? Wo.sc.FromArray(TT.scale) : Wo.sc.One()
    }
    class Ko {
      constructor(TT, oT) {
        if (this.NK = TT, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, oT) {
          const oT = TT.Zc(),
            IT = TT.bC.add((() => {
              this.dispose()
            })),
            iT = oT.onContextRestoredObservable.add((() => {
              for (const TT of [...this.geometries, ...this.meshes, ...this.textures]) TT._rebuild()
            }));
          this.release = () => {
            TT.bC.remove(IT), oT.onContextRestoredObservable.remove(iT)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const TT of this.meshes) this.NK.tIT(TT);
          for (const TT of this.materials) this.NK.addMaterial(TT);
          for (const TT of this.geometries) this.NK.addGeometry(TT);
          for (const TT of this.transformNodes) this.NK.addTransformNode(TT);
          for (const TT of this.textures) this.NK.addTexture(TT)
        }
      }
      dispose() {
        var TT;
        for (const oT of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const TT of oT.slice()) TT.dispose();
          oT.length = 0
        }
        null === (TT = this.release) || void 0 === TT || TT.call(this), this.release = null
      }
    }
    class Mo {
      constructor(TT, oT, IT, iT, zT, kT, WT) {
        this.asset = TT, this.NK = oT, this.tree = IT, this.geometryData = zT, this.materials = kT, this.lite = WT, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = iT ? IT : null
      }
      create(TT) {
        if (this.lite) return TT();
        const oT = this.NK;
        oT._blockEntityCollection = !!this.container;
        try {
          const oT = TT();
          return this.container && (oT._parentContainer = this.container), oT
        } finally {
          oT._blockEntityCollection = !1
        }
      }
      node(TT, oT) {
        return this.create((() => this.lite ? oT ? (0, Xo.h)(this.lite, TT) : (0, Xo.w)(this.lite, TT) : oT ? new((0, dT.e)().Mesh)(TT, this.NK) : new((0, dT.e)().TransformNode)(TT, this.NK)))
      }
      async load() {
        var TT;
        this.asset.model.json.nodes && this.createRoot();
        const oT = this.lite ? null : this.NK,
          IT = null !== (TT = null === oT || void 0 === oT ? void 0 : oT.blockMaterialDirtyMechanism) && void 0 !== TT && TT;
        let iT;
        oT && (oT.blockMaterialDirtyMechanism = !0);
        try {
          iT = this.loadScene()
        } finally {
          null === oT || void 0 === oT || oT._forceBlockMaterialDirtyMechanism(IT)
        }
        await iT;
        const {
          root: zT,
          tree: kT
        } = this;
        zT && (zT.Fv(!0), kT.meshes.push(zT), kT.rootNodes.push(zT));
        for (const XT of this.asset.model.nodes) {
          const TT = this.nodeObjects.get(XT.index);
          TT && ["TransformNode", "LiteNode"].includes(TT.getClassName()) && kT.transformNodes.push(TT);
          for (const oT of null !== (WT = this.nodePrimitives.get(XT.index)) && void 0 !== WT ? WT : []) {
            var WT;
            kT.meshes.push(oT);
            const TT = oT.geometry;
            TT && !kT.geometries.includes(TT) && kT.geometries.push(TT)
          }
        }
      }
      createRoot() {
        const TT = this.node("__root__", !0);
        this.root = TT, TT.Fv(!1), this.NK.useRightHandedSystem || co(qT, TT)
      }
      loadScene() {
        const TT = [];
        for (const oT of this.asset.model.rootNodes) TT.push(this.loadNode(this.asset.model.nodes[oT], (TT => {
          TT.parent = this.root
        })));
        return TT.push(Promise.resolve()), Promise.all(TT).then((() => {}))
      }
      loadNode(TT, oT) {
        const IT = `/nodes/${TT.index}`,
          iT = [],
          zT = zT => {
            if (Lo(zT, IT), co(TT, zT), TT.hasCamera && !this.NK.useRightHandedSystem) {
              const {
                ti: TT
              } = zT;
              TT.set(-1, TT.y, TT.z)
            }
            for (const oT of TT.children) iT.push(this.loadNode(this.asset.model.nodes[oT], (TT => {
              TT.parent = zT
            })));
            (IT => {
              xo(IT, TT.extras), oT(IT)
            })(zT)
          };
        if (null === TT.mesh) {
          const oT = this.node(nT(TT), !1);
          this.nodeObjects.set(TT.index, oT), zT(oT)
        } else {
          const oT = this.asset.model.meshes[TT.mesh];
          iT.push(this.loadMesh(`/meshes/${oT.index}`, TT, oT, zT))
        }
        return Promise.all(iT).then((() => {
          for (const IT of null !== (oT = this.nodePrimitives.get(TT.index)) && void 0 !== oT ? oT : []) {
            var oT;
            Io(IT)
          }
          return this.nodeObjects.get(TT.index)
        }))
      }
      loadMesh(TT, oT, IT, iT) {
        const zT = [],
          kT = nT(oT);
        if (1 === IT.primitives.length) {
          const iT = IT.primitives[0];
          zT.push(this.loadPrimitive(`${TT}/primitives/${iT.index}`, kT, iT, (TT => {
            this.nodeObjects.set(oT.index, TT), this.nodePrimitives.set(oT.index, [TT])
          })))
        } else {
          const iT = this.node(kT, !1);
          this.nodeObjects.set(oT.index, iT);
          const WT = [];
          this.nodePrimitives.set(oT.index, WT);
          for (const oT of IT.primitives) zT.push(this.loadPrimitive(`${TT}/primitives/${oT.index}`, `${kT}_primitive${oT.index}`, oT, (TT => {
            TT.parent = iT, WT.push(TT)
          })))
        }
        const WT = this.nodeObjects.get(oT.index);
        return iT(WT), Promise.all(zT).then((() => WT))
      }
      loadPrimitive(TT, oT, IT, iT) {
        const zT = [],
          kT = this.node(oT, !0);
        if (kT.sideOrientation = this.NK.useRightHandedSystem ? Bo.e.CounterClockWiseSideOrientation : Bo.e.ClockWiseSideOrientation, zT.push(this.geometryData.load(TT, IT, kT).then((TT => {
            if ((0, VT.i)(kT)) {
              var oT, IT;
              const iT = TT;
              kT.replaceModel(iT, Int32Array.of(0, null !== (oT = null === (IT = iT.indexData) || void 0 === IT ? void 0 : IT.length) && void 0 !== oT ? oT : iT.vertexCount, 0, iT.vertexCount))
            } else this.create((() => (TT.applyToMesh(kT), TT)))
          }))), this.materials) {
          const TT = 0 === IT.mode ? Bo.e.PointListDrawMode : Bo.e.TriangleFillMode,
            oT = null === IT.material ? null : this.asset.model.materials[IT.material];
          zT.push(this.loadMaterial(oT, TT, (TT => {
            kT.material = TT
          })))
        }
        return Lo(kT, TT), iT(kT), Promise.all(zT).then((() => kT))
      }
      loadMaterial(TT, oT, IT) {
        var iT;
        const zT = `${null!==(iT=null===TT||void 0===TT?void 0:TT.index)&&void 0!==iT?iT:"default"}:${oT}`;
        let kT = this.materialData.get(zT);
        return kT || (kT = this.createMaterial(TT, oT), this.materialData.set(zT, kT)), IT(kT.material), kT.promise
      }
      createMaterial(TT, oT) {
        const IT = TT ? TT.name || `material${TT.index}` : "__GLTFLoader._default",
          {
            style: iT,
            unlit: zT
          } = this.materials;
        let kT;
        const WT = this.create((() => {
          const WT = (0, Do.d)({
            name: IT,
            NK: this.NK,
            sets: {
              ...(0, To.c)(this.asset, TT, iT, zT),
              fillMode: oT
            },
            unrendered: !0
          });
          return kT = WT.model, WT.mirror
        }));
        let XT = Promise.resolve();
        if (TT) {
          const oT = `/materials/${TT.index}`,
            iT = kT.diffuseTexture;
          if (iT && !iT.mirror) XT = new Promise((TT => setTimeout(TT)));
          else if (iT) {
            const zT = iT.mirror;
            zT._parentContainer = this.container, zT.name = `${IT} (Base Color)`, Lo(zT, `${oT}${TT.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(zT), XT = (0, Fo.k)(iT)
          }
          xo(WT, TT.extras), Lo(WT, oT)
        }
        return this.tree.materials.push(WT), {
          material: WT,
          promise: XT
        }
      }
    }

    function ro() {
      ko.f.dracoDecodes = KT.decodes, ko.f.dracoWorkersStarted = KT.workersStarted, ko.f.dracoMostWorkers = KT.mostWorkers
    }
    async function Ao(TT, oT, IT, zT, kT) {
      try {
        return await async function(TT, oT, IT, zT, kT, WT) {
          var XT;
          let BT;
          const FT = null === (XT = (0, So.i)()) || void 0 === XT ? void 0 : XT.FK,
            ST = null !== FT && void 0 !== FT && FT.SK && oT === FT.pC() ? FT : null,
            DT = kT && !ST;
          return await PT(TT, oT, IT, zT, iT.e, (TT => (BT = new Ko(oT, DT), new Mo(TT, oT, BT, DT, new io(oT, zT), WT, ST).load())), !kT), BT
        }(TT, oT, IT, wT, zT, kT)
      } finally {
        ro()
      }
    }
    async function go(TT, oT, IT, zT) {
      try {
        return await PT(TT, oT, IT, wT, iT.e, (TT => zT(TT, new io(oT, wT))))
      } finally {
        ro()
      }
    }
    zo = zT.e, ST || (ST = {
      scriptUrl: new URL(zo.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(zo.wasmBinaryUrl, location.href).href
    })
  },
  40319: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT
    });
    var iT = IT(139),
      zT = IT(1185);

    function kT(TT) {
      return (0, iT.c)() ? `https://${zT.c.discordDomain}/${TT.href}` : TT.href
    }
    const WT = {
      scriptUrl: kT(new IT.U(IT(40324))),
      wasmBinaryUrl: kT(new IT.U(IT(40327)))
    }
  },
  35305: TT => {
    TT.exports = function(TT, oT, IT, iT) {
      var zT = self || window;
      try {
        try {
          var kT;
          try {
            kT = new zT.Blob([TT])
          } catch (FT) {
            (kT = new(zT.BlobBuilder || zT.WebKitBlobBuilder || zT.MozBlobBuilder || zT.MSBlobBuilder)).append(TT), kT = kT.getBlob()
          }
          var WT = zT.URL || zT.webkitURL,
            XT = WT.createObjectURL(kT),
            BT = new zT[oT](XT, IT);
          return WT.revokeObjectURL(XT), BT
        } catch (FT) {
          return new zT[oT]("data:application/javascript,".concat(encodeURIComponent(TT)), IT)
        }
      } catch (FT) {
        if (!iT) throw Error("Inline worker is not supported");
        return new zT[oT](iT, IT)
      }
    }
  },
  40324: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  40327: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);