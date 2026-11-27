export const id = 237;
export const ids = [237];
export const modules = {
  53676: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      loadGlbAsset: () => Ji,
      loadGlbTree: () => Ti
    });
    var mW = OW(39088),
      EW = OW(136),
      NW = OW(1189);

    function PW(WW) {
      return (0, EW.isDiscordClient)() ? `https://${NW.d.discordDomain}/${WW.href}` : WW.href
    }
    const LW = {
      scriptUrl: PW(new OW.U(OW(53679))),
      wasmBinaryUrl: PW(new OW.U(OW(53687)))
    };
    var cW = OW(2388),
      wW = OW(37245),
      tW = OW.n(wW);

    function ZW() {
      return tW()('(()=>{class WW extends Error{}function iW(iW,OW){const mW=iW._malloc(OW);if(0===mW)throw new WW(`Draco: the decoder\'s heap refused ${OW} bytes`);return mW}function OW(OW,mW,EW,NW){let PW=null,LW=null,cW=null;try{PW=new OW.Decoder,LW=new OW.DecoderBuffer,LW.Init(mW,mW.byteLength);let wW=0;const tW=PW.GetEncodedGeometryType(LW);if(tW===OW.TRIANGULAR_MESH){const iW=new OW.Mesh;cW=iW;const mW=PW.DecodeBufferToMesh(LW,iW);if(!mW.ok()||0===iW.ptr)throw new WW(mW.error_msg());wW=3*iW.num_faces()}else{if(tW!==OW.POINT_CLOUD)throw new WW(`Draco: Cannot decode invalid geometry type ${tW}`);{const iW=new OW.PointCloud;cW=iW;const mW=PW.DecodeBufferToPointCloud(LW,iW);if(!mW.ok()||!iW.ptr)throw new WW(mW.error_msg())}}const ZW=cW.num_points();if(ZW!==NW.vertices||wW!==NW.indices)throw new WW(`Draco: decoded ${ZW} vertices and ${wW} indices, the accessors declare ${NW.vertices} and ${NW.indices}`);const xW=function(WW){return{[WW.DT_FLOAT32]:Float32Array,[WW.DT_INT8]:Int8Array,[WW.DT_INT16]:Int16Array,[WW.DT_INT32]:Int32Array,[WW.DT_UINT8]:Uint8Array,[WW.DT_UINT16]:Uint16Array,[WW.DT_UINT32]:Uint32Array}}(OW),lW=[];for(const iW of Object.keys(EW)){const OW=EW[iW],mW=NW.components[iW],LW=PW.GetAttributeByUniqueId(cW,OW);if(!LW||0===LW.ptr)throw new WW(`Draco: no attribute with id ${OW} (${iW})`);const wW=LW.data_type();if(!xW[wW])throw new WW(`Draco: Cannot decode invalid data type ${wW}`);if(LW.num_components()!==mW)throw new WW(`Draco: ${iW} decodes to ${LW.num_components()} components, its accessor declares ${mW}`);lW.push([iW,LW,xW[wW]])}let AW=null;if(tW===OW.TRIANGULAR_MESH){const WW=4*wW,mW=iW(OW,WW);try{PW.GetTrianglesUInt32Array(cW,WW,mW),AW=new Uint32Array(wW),AW.set(new Uint32Array(OW.HEAPF32.buffer,mW,wW))}finally{OW._free(mW)}}const bW=[];for(const[WW,mW,EW]of lW){const NW=mW.num_components(),LW=ZW*NW,wW=LW*EW.BYTES_PER_ELEMENT,tW=iW(OW,wW);try{PW.GetAttributeDataArrayForAllPoints(cW,mW,mW.data_type(),wW,tW),bW.push({kind:WW,data:new EW(OW.HEAPF32.buffer,tW,LW).slice(),size:NW,byteOffset:mW.byte_offset(),byteStride:mW.byte_stride(),normalized:mW.normalized()})}finally{OW._free(tW)}}return{indices:AW,attributes:bW,totalVertices:ZW}}finally{cW&&OW.destroy(cW),LW&&OW.destroy(LW),PW&&OW.destroy(PW)}}const mW=self;let EW=null;self.onmessage=WW=>{let{data:iW}=WW;if("init"===iW.id){try{importScripts(iW.url),EW=DracoDecoderModule({wasmBinary:iW.wasmBinary}),mW.postMessage({id:"initDone"})}catch(wW){mW.postMessage({id:"initError",message:wW instanceof Error?wW.message:String(wW)})}return}const{seq:NW,data:PW,attributeIds:LW,expected:cW}=iW;EW?EW.then((WW=>{try{const iW=OW(WW,PW,LW,cW),EW=iW.attributes.map((WW=>WW.data.buffer));iW.indices&&EW.push(iW.indices.buffer),mW.postMessage({id:"decoded",seq:NW,...iW},EW)}catch(wW){mW.postMessage({id:"decodeError",seq:NW,message:wW instanceof Error?wW.message:String(wW)})}}),(WW=>{mW.postMessage({id:"decodeError",seq:NW,message:WW instanceof Error?WW.message:String(WW)})})):mW.postMessage({id:"decodeError",seq:NW,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, OW.p + "dracoDecode.worker.b284297a.worker.js")
    }
    var xW = OW(100),
      lW = OW(5089),
      AW = OW(299);
    const bW = 2;
    const jW = 1e3;
    let UW = null,
      kW = null;
    const sW = [],
      MW = [];
    let KW = 0;
    const SW = {
      decodes: 0,
      workersStarted: 0,
      mostWorkers: 0
    };
    let YW = null;

    function yW() {
      if (!UW) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: WW,
        wasmBinaryUrl: iW
      } = UW;
      return kW ??= (0, cW.C)(iW), kW.catch((() => {
        kW = null
      })), SW.workersStarted++, Promise.all([kW, (0, AW.p)()]).then((iW => {
        let [OW] = iW;
        return new Promise(((iW, mW) => {
          const EW = new ZW;
          EW.onerror = WW => {
            EW.onmessage = null, EW.onerror = null, EW.terminate(), mW(new Error("Draco: the decode worker failed to start" + (WW.message ? `: ${WW.message}` : " (its script did not load)")))
          }, EW.onmessage = WW => {
            let {
              data: OW
            } = WW;
            EW.onmessage = null, EW.onerror = null, "initDone" === OW.id ? iW(EW) : (EW.terminate(), mW(new Error(`Draco: ${"initError"===OW.id?OW.message:"the worker did not start"}`)))
          };
          const NW = OW.slice().buffer,
            PW = {
              id: "init",
              url: WW,
              wasmBinary: NW
            };
          EW.postMessage(PW, [NW])
        }))
      }))
    }

    function TW(WW) {
      const iW = sW.indexOf(WW); - 1 !== iW && sW.splice(iW, 1);
      const OW = MW.shift();
      OW && hW(OW)
    }

    function JW(WW, iW) {
      WW.busy = !0, WW.releaseTimer && (clearTimeout(WW.releaseTimer), WW.releaseTimer = null);
      WW.worker.then((OW => {
        const mW = KW++;
        OW.onmessage = EW => {
          let {
            data: NW
          } = EW;
          if (("decoded" === NW.id || "decodeError" === NW.id) && NW.seq === mW) {
            if (OW.onmessage = null, OW.onerror = null, "decoded" === NW.id) return SW.decodes++, iW.resolve({
              indices: NW.indices,
              attributes: NW.attributes,
              totalVertices: NW.totalVertices
            }), void(() => {
              const iW = MW.shift();
              iW ? JW(WW, iW) : (WW.busy = !1, WW.releaseTimer = setTimeout((() => {
                const iW = sW.indexOf(WW); - 1 !== iW && sW.splice(iW, 1), WW.worker.then((WW => {
                  WW.terminate()
                }))
              }), jW))
            })();
            OW.terminate(), iW.reject(new Error(NW.message)), TW(WW)
          }
        }, OW.onerror = mW => {
          OW.onmessage = null, OW.onerror = null, OW.terminate(), iW.reject(new Error(`Draco: the decode worker failed: ${mW.message}`)), TW(WW)
        };
        const EW = {
          id: "decode",
          seq: mW,
          data: iW.data,
          attributeIds: iW.attributeIds,
          expected: iW.expected
        };
        OW.postMessage(EW, [iW.data.buffer])
      }), (OW => {
        iW.reject(OW instanceof Error ? OW : new Error(String(OW))), TW(WW)
      }))
    }

    function hW(WW) {
      const iW = sW.find((WW => !WW.busy));
      if (iW) JW(iW, WW);
      else {
        if (YW ??= (0, lW.g)() ? 1 : function(WW, iW) {
            const OW = WW ? Math.max(1, Math.min(Math.floor(.5 * WW), 4)) : 1;
            return iW ? Math.min(OW, bW) : OW
          }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, xW.isMobile)()), sW.length < YW) {
          const iW = {
            worker: yW(),
            busy: !0,
            releaseTimer: null
          };
          return sW.push(iW), SW.mostWorkers = Math.max(SW.mostWorkers, sW.length), void JW(iW, WW)
        }
        MW.push(WW)
      }
    }

    function HW(WW, iW, OW) {
      return new Promise(((mW, EW) => {
        hW({
          data: new Int8Array(WW.buffer, WW.byteOffset, WW.byteLength).slice(),
          attributeIds: iW,
          expected: OW,
          resolve: mW,
          reject: EW
        })
      }))
    }
    var nW = OW(38549),
      uW = OW(38562),
      oW = OW(35330),
      dW = OW(35324);
    const eW = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function vW(WW) {
      const iW = (0, dW.l)(WW.byteLength);
      if (iW) throw new oW.n(iW);
      const {
        json: OW,
        bin: mW
      } = (0, oW.y)(WW), EW = (0, dW.h)(OW, mW);
      if (EW) throw new oW.n(EW);
      try {
        return function(WW, iW) {
          var OW, mW, EW, NW, PW, LW, cW, wW, tW, ZW, xW, lW, AW, bW, jW;
          const UW = new Map,
            kW = OW => {
              let mW = UW.get(OW);
              if (!mW) {
                var EW;
                const NW = WW.bufferViews[OW],
                  PW = null !== (EW = NW.byteOffset) && void 0 !== EW ? EW : 0;
                mW = {
                  index: OW,
                  bytes: iW.subarray(PW, PW + NW.byteLength),
                  byteStride: NW.byteStride
                }, UW.set(OW, mW)
              }
              return mW
            },
            sW = new Map,
            MW = iW => {
              let OW = sW.get(iW);
              if (!OW) {
                var mW;
                const EW = WW.accessors[iW];
                OW = {
                  index: iW,
                  count: EW.count,
                  type: EW.type,
                  numComponents: oW.o[EW.type],
                  componentType: EW.componentType,
                  normalized: null !== (mW = EW.normalized) && void 0 !== mW && mW,
                  byteOffset: EW.byteOffset,
                  bufferView: void 0 === EW.bufferView ? null : kW(EW.bufferView),
                  min: EW.min,
                  max: EW.max
                }, sW.set(iW, OW)
              }
              return OW
            },
            KW = null !== (OW = null === (mW = WW.extensionsUsed) || void 0 === mW ? void 0 : mW.includes("KHR_draco_mesh_compression")) && void 0 !== OW && OW,
            SW = (null !== (EW = WW.meshes) && void 0 !== EW ? EW : []).map(((iW, OW) => {
              const mW = iW.primitives.map(((iW, OW) => {
                var mW, EW, NW;
                const PW = KW ? null === (mW = iW.extensions) || void 0 === mW ? void 0 : mW.KHR_draco_mesh_compression : void 0;
                let LW = null;
                const cW = [];
                if (PW) {
                  const OW = {
                    vertices: WW.accessors[iW.attributes.POSITION].count,
                    indices: void 0 === iW.indices ? 0 : WW.accessors[iW.indices].count,
                    components: {}
                  };
                  LW = {
                    bufferView: kW(PW.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: OW
                  };
                  for (const [mW, EW] of oW.i) {
                    const NW = PW.attributes[mW];
                    if (void 0 === NW) continue;
                    LW.attributeIds[EW] = NW;
                    const cW = iW.attributes[mW];
                    var wW;
                    if (void 0 !== cW) LW.normalized[EW] = null !== (wW = WW.accessors[cW].normalized) && void 0 !== wW && wW, OW.components[EW] = oW.o[WW.accessors[cW].type]
                  }
                } else
                  for (const [WW, tW] of oW.i) {
                    const OW = iW.attributes[WW];
                    void 0 !== OW && cW.push({
                      semantic: WW,
                      kind: tW,
                      accessor: MW(OW)
                    })
                  }
                return {
                  index: OW,
                  mode: null !== (EW = iW.mode) && void 0 !== EW ? EW : 4,
                  attributes: cW,
                  indices: PW || void 0 === iW.indices ? null : MW(iW.indices),
                  position: void 0 === iW.attributes.POSITION ? null : MW(iW.attributes.POSITION),
                  material: null !== (NW = iW.material) && void 0 !== NW ? NW : null,
                  draco: LW
                }
              }));
              return {
                index: OW,
                name: iW.name,
                primitives: mW,
                extras: iW.extras
              }
            })),
            YW = (null !== (NW = WW.nodes) && void 0 !== NW ? NW : []).map(((WW, iW) => {
              var OW, mW;
              return {
                index: iW,
                name: WW.name,
                children: null !== (OW = WW.children) && void 0 !== OW ? OW : [],
                mesh: null !== (mW = WW.mesh) && void 0 !== mW ? mW : null,
                translation: WW.translation,
                rotation: WW.rotation,
                scale: WW.scale,
                hasCamera: void 0 !== WW.camera,
                extras: WW.extras
              }
            })),
            yW = null !== (PW = null === (LW = WW.extensionsUsed) || void 0 === LW ? void 0 : LW.includes("KHR_materials_unlit")) && void 0 !== PW && PW,
            TW = null !== (cW = null === (wW = WW.extensionsUsed) || void 0 === wW ? void 0 : wW.includes("KHR_texture_transform")) && void 0 !== cW && cW,
            JW = (null !== (tW = WW.materials) && void 0 !== tW ? tW : []).map(((WW, iW) => {
              var OW, mW, EW, NW;
              const PW = WW.pbrMetallicRoughness,
                LW = null === PW || void 0 === PW ? void 0 : PW.baseColorTexture;
              return {
                index: iW,
                name: WW.name,
                extras: WW.extras,
                unlit: yW && void 0 !== (null === (OW = WW.extensions) || void 0 === OW ? void 0 : OW.KHR_materials_unlit),
                pbr: PW ? {
                  baseColorFactor: PW.baseColorFactor,
                  metallicFactor: PW.metallicFactor,
                  roughnessFactor: PW.roughnessFactor
                } : null,
                baseColorTexture: LW ? {
                  texture: LW.index,
                  transform: TW && (null === (mW = LW.extensions) || void 0 === mW ? void 0 : mW.KHR_texture_transform) || null
                } : null,
                emissiveFactor: WW.emissiveFactor,
                alphaMode: null !== (EW = WW.alphaMode) && void 0 !== EW ? EW : "OPAQUE",
                alphaCutoff: WW.alphaCutoff,
                doubleSided: null !== (NW = WW.doubleSided) && void 0 !== NW && NW
              }
            })),
            hW = (null !== (ZW = WW.textures) && void 0 !== ZW ? ZW : []).map(((iW, OW) => {
              var mW, EW;
              const NW = void 0 === iW.sampler ? eW : {
                index: iW.sampler,
                ...null === (mW = WW.samplers) || void 0 === mW ? void 0 : mW[iW.sampler]
              };
              return {
                index: OW,
                sampler: {
                  index: NW.index,
                  magFilter: NW.magFilter,
                  minFilter: NW.minFilter,
                  wrapS: NW.wrapS,
                  wrapT: NW.wrapT
                },
                image: null !== (EW = iW.source) && void 0 !== EW ? EW : -1
              }
            })),
            HW = (null !== (xW = WW.images) && void 0 !== xW ? xW : []).map(((WW, iW) => ({
              index: iW,
              name: WW.name,
              mimeType: WW.mimeType,
              bufferView: kW(WW.bufferView)
            }))),
            nW = null !== (lW = (0, oW.v)(WW)) && void 0 !== lW ? lW : 0;
          return {
            json: WW,
            rootNodes: null !== (AW = null === (bW = WW.scenes) || void 0 === bW || null === (jW = bW[nW]) || void 0 === jW ? void 0 : jW.nodes) && void 0 !== AW ? AW : [],
            nodes: YW,
            meshes: SW,
            materials: JW,
            textures: hW,
            images: HW
          }
        }(OW, mW)
      } catch (NW) {
        throw NW instanceof oW.l ? NW : new oW.l(`reading the GLB failed: ${NW instanceof Error?NW.message:String(NW)}`)
      }
    }
    async function gW(WW, iW) {
      var OW, mW;
      const EW = WW.draco;
      if (!EW) throw new oW.l("not a Draco primitive");
      let NW;
      try {
        NW = await iW(EW.bufferView.bytes, EW.attributeIds, EW.expected)
      } catch (wW) {
        throw new oW.l(`Draco decoding failed: ${wW instanceof Error?wW.message:String(wW)}`)
      }
      const {
        vertices: PW,
        indices: LW,
        components: cW
      } = EW.expected;
      if (NW.totalVertices !== PW || (null !== (OW = null === (mW = NW.indices) || void 0 === mW ? void 0 : mW.length) && void 0 !== OW ? OW : 0) !== LW || NW.attributes.some((WW => WW.size !== cW[WW.kind] || WW.data.length !== PW * WW.size))) throw new oW.l("Draco decoding gave other counts than the accessors declare");
      for (const tW of NW.attributes) {
        const WW = EW.normalized[tW.kind];
        void 0 !== WW && (tW.normalized = WW)
      }
      return NW
    }
    const DW = new WeakMap;

    function VW(WW, iW) {
      var OW;
      const mW = null !== (OW = DW.get(WW)) && void 0 !== OW ? OW : iW(WW);
      return DW.set(WW, mW), mW
    }

    function pW(WW) {
      const iW = WW.bufferView,
        OW = 5125 === WW.componentType ? Uint32Array : Uint16Array,
        mW = iW.bytes.buffer,
        EW = iW.bytes.byteOffset + (WW.byteOffset || 0);
      return EW % OW.BYTES_PER_ELEMENT !== 0 ? new OW(mW.slice(EW, EW + WW.count * OW.BYTES_PER_ELEMENT), 0) : new OW(mW, EW, WW.count)
    }

    function fW(WW, iW) {
      if (WW.min && WW.max) return [new Float64Array(WW.min), new Float64Array(WW.max)];
      const OW = iW.find((WW => {
          let {
            kind: iW
          } = WW;
          return "position" === iW
        })),
        mW = OW ? (0, uW.h)(OW, WW.count) : new Float32Array(0);
      return (0, uW.p)(mW.length / 3, ((WW, iW) => mW[3 * WW + iW]))
    }

    function CW(WW) {
      const iW = WW.attributes.map((WW => {
          var iW, OW;
          let {
            kind: mW,
            accessor: EW
          } = WW;
          const {
            bufferView: NW,
            numComponents: PW
          } = EW;
          if (!NW) {
            return {
              kind: mW,
              data: VW(EW, (() => new Float32Array(PW * EW.count))),
              offset: 0,
              stride: 4 * PW,
              components: PW,
              glType: 5126,
              isNormalized: !1
            }
          }
          const LW = null !== (iW = NW.byteStride) && void 0 !== iW ? iW : PW * oW.c[EW.componentType];
          return {
            kind: mW,
            data: NW.bytes,
            offset: null !== (OW = EW.byteOffset) && void 0 !== OW ? OW : 0,
            stride: LW,
            components: PW,
            glType: EW.componentType,
            isNormalized: EW.normalized
          }
        })),
        OW = WW.indices,
        mW = OW && VW(OW, pW),
        EW = WW.position;
      return new uW.d(iW, mW, EW.count, ...fW(EW, iW))
    }
    const XW = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function BW(WW, iW) {
      const OW = iW.attributes.map((WW => {
        let {
          kind: iW,
          data: OW,
          size: mW,
          byteOffset: EW,
          byteStride: NW,
          normalized: PW
        } = WW;
        return {
          kind: iW,
          data: OW,
          offset: EW,
          stride: NW,
          components: mW,
          glType: 5120 + XW.indexOf(OW.constructor),
          isNormalized: PW
        }
      }));
      return new uW.d(OW, iW.indices, iW.totalVertices, ...fW(WW.position, OW))
    }

    function qW(WW) {
      const iW = WW.lastIndexOf("/");
      return iW < 0 ? WW : WW.substring(iW + 1)
    }

    function RW(WW) {
      const iW = WW.lastIndexOf("/");
      return iW < 0 ? "" : WW.substring(0, iW + 1)
    }

    function GW(WW) {
      return WW.name || `node${WW.index}`
    }
    const IW = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      aW = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      rW = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function zW(WW) {
      var iW, OW, mW, EW;
      const NW = null !== (iW = WW.minFilter) && void 0 !== iW ? iW : 9987;
      return 9729 === (null !== (OW = WW.magFilter) && void 0 !== OW ? OW : 9729) ? null !== (mW = aW[NW]) && void 0 !== mW ? mW : 3 : null !== (EW = rW[NW]) && void 0 !== EW ? EW : 4
    }
    const FW = {
      33071: 0,
      33648: 2
    };

    function QW(WW) {
      var iW;
      return null !== (iW = FW[null !== WW && void 0 !== WW ? WW : 10497]) && void 0 !== iW ? iW : 1
    }

    function Wi(WW) {
      return 9728 === WW.minFilter || 9729 === WW.minFilter
    }

    function ii(WW) {
      var iW, OW, mW;
      const EW = Float64Array.from(null !== (iW = WW.scale) && void 0 !== iW ? iW : [1, 1, 1]);
      return WW.hasCamera && (EW[0] = -1), {
        translation: Float64Array.from(null !== (OW = WW.translation) && void 0 !== OW ? OW : [0, 0, 0]),
        rotation: Float64Array.from(null !== (mW = WW.rotation) && void 0 !== mW ? mW : [0, 0, 0, 1]),
        scale: EW
      }
    }

    function Oi(WW, iW) {
      let {
        translation: OW,
        rotation: mW,
        scale: EW
      } = WW;
      const NW = new Float32Array(16);
      return (0, nW.e)(EW, 0, mW, 0, OW, 0, NW), iW && (0, nW.p)(NW, iW, 0, NW), NW
    }
    class mi {
      constructor(WW, iW, OW, mW) {
        this.model = WW, this.decode = iW, this.fileInfo = OW, this.uniqueRootUrl = mW, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const EW = new Set,
          NW = (iW, OW) => {
            const mW = WW.nodes[iW];
            if (this.parents.has(mW)) throw new oW.l(`/nodes/${iW}: Invalid recursive node hierarchy`);
            this.parents.set(mW, OW);
            const PW = null === mW.mesh ? [] : WW.meshes[mW.mesh].primitives,
              LW = PW.map((WW => {
                const iW = PW.length > 1;
                return {
                  name: iW ? `${GW(mW)}_primitive${WW.index}` : GW(mW),
                  node: mW,
                  primitive: WW,
                  part: iW,
                  geometry: null
                }
              }));
            this.uses.set(mW, LW);
            const cW = null !== mW.mesh && EW.has(mW.mesh);
            EW.add(mW.mesh), this.own.set(mW, cW ? [] : LW);
            for (const WW of mW.children) NW(WW, mW)
          };
        for (const PW of WW.rootNodes) NW(PW, null);
        this.primitives = WW.nodes.flatMap((WW => {
          var iW;
          return null !== (iW = this.own.get(WW)) && void 0 !== iW ? iW : []
        }))
      }
      decodeGeometries() {
        const WW = new Map;
        return Promise.all(this.primitives.map((async iW => {
          const {
            primitive: OW
          } = iW, mW = OW.draco;
          let EW = mW ? WW.get(mW.bufferView.index) : Promise.resolve(CW(OW));
          EW || (EW = gW(OW, this.decode).then((WW => BW(OW, WW))), WW.set(mW.bufferView.index, EW)), iW.geometry = await EW
        })))
      }
      parentOf(WW) {
        var iW;
        return null !== (iW = this.parents.get(WW)) && void 0 !== iW ? iW : null
      }
      meshesUnder(WW) {
        const iW = this.model.nodes.filter((WW => this.uses.has(WW)));
        for (const mW of iW) {
          const iW = this.uses.get(mW),
            OW = iW.find((iW => iW.name === WW));
          if (OW) return 1 === iW.length ? this.subtree(mW) : this.own.get(mW).includes(OW) ? [OW] : []
        }
        const OW = iW.find((iW => 1 !== this.uses.get(iW).length && GW(iW) === WW));
        return OW ? this.subtree(OW) : null
      }
      subtree(WW) {
        return [...this.own.get(WW), ...WW.children.flatMap((WW => this.subtree(this.model.nodes[WW])))]
      }
      worldMatrix(WW, iW, OW) {
        let mW = Oi(ii(iW ? IW : {}), null);
        const EW = [];
        for (let PW = WW.part ? WW.node : this.parentOf(WW.node); PW; PW = this.parentOf(PW)) EW.unshift(PW);
        for (const PW of EW) mW = Oi(ii(PW), mW);
        const NW = ii(WW.part ? {} : WW.node);
        return void 0 !== OW && NW.scale.fill(OW), Oi(NW, mW)
      }
      floats(WW) {
        const {
          vertexAttributes: iW,
          vertexCount: OW
        } = WW.geometry;
        return new Map(iW.map((WW => [WW.kind, (0, uW.h)(WW, OW)])))
      }
      imageUrl(WW) {
        return function(WW, iW, OW) {
          let {
            name: mW
          } = iW;
          return `data:${WW}${mW}#image${OW}`
        }(this.uniqueRootUrl, this.fileInfo, WW)
      }
      textureDesc(WW, iW) {
        var OW;
        let {
          texture: mW,
          transform: EW
        } = WW;
        const {
          sampler: NW,
          image: PW
        } = this.model.textures[mW], {
          bufferView: LW,
          mimeType: cW,
          name: wW
        } = this.model.images[PW], tW = EW && {
          ...EW.offset ? {
            uOffset: EW.offset[0],
            vOffset: EW.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...EW.rotation ? {
            wAng: -EW.rotation
          } : {},
          ...EW.scale ? {
            uScale: EW.scale[0],
            vScale: EW.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(PW),
          noMipmap: Wi(NW),
          invertY: !1,
          samplingMode: zW(NW),
          data: {
            bytes: LW.bytes,
            mimeType: cW,
            label: wW,
            context: `/textures/${mW}`
          },
          sets: {
            wrapU: QW(NW.wrapS),
            wrapV: QW(NW.wrapT),
            ...tW,
            coordinatesIndex: null !== (OW = null === EW || void 0 === EW ? void 0 : EW.texCoord) && void 0 !== OW ? OW : 0,
            hasAlpha: iW
          }
        }
      }
    }
    async function Ei(WW, iW, OW, mW, EW, NW) {
      let PW = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const LW = function(WW, iW, OW) {
          return "string" !== typeof iW ? {
            url: "",
            rootUrl: WW,
            name: OW()
          } : iW ? iW.startsWith("data:") ? {
            url: iW,
            rootUrl: WW,
            name: ""
          } : WW ? {
            url: WW + iW,
            rootUrl: WW,
            name: iW
          } : {
            url: iW,
            rootUrl: RW(iW),
            name: qW(iW)
          } : {
            url: WW,
            rootUrl: RW(WW),
            name: qW(WW)
          }
        }(OW, WW, EW),
        cW = {};
      iW.addPendingData(cW);
      try {
        const OW = vW(await async function(WW, iW) {
            return "string" !== typeof iW ? iW : WW.url.startsWith("data:") ? (0, oW.r)(WW.url) : await (0, oW.t)(WW.url)
          }(LW, WW)),
          cW = new mi(OW, mW, LW, function(WW, iW) {
            let {
              rootUrl: OW,
              name: mW
            } = WW;
            return !OW.startsWith("file:") && mW ? OW : `${OW}${iW()}/`
          }(LW, EW));
        return await NW(cW), iW.importedMeshesFiles && (iW.loadingPluginName = "uH", PW && iW.importedMeshesFiles.push(LW.url)), cW
      } finally {
        iW.removePendingData(cW)
      }
    }
    var Ni = OW(38669),
      Pi = OW(38526),
      Li = OW(39072);

    function ci(WW) {
      if (null === WW || void 0 === WW || !WW.min || !WW.max) return null;
      const [iW, OW, mW] = WW.min, [EW, NW, PW] = WW.max, {
        BoundingInfo: LW,
        fA: cW
      } = (0, Ni.c)();
      return new LW(new cW(iW, OW, mW), new cW(EW, NW, PW))
    }

    function wi(WW) {
      (0, Pi.f)(WW) || (WW.geometry && WW.geometry.useBoundingInfoFromGeometry ? WW._updateBoundingInfo() : WW.refreshBoundingInfo(!0, !0))
    }
    class ti {
      constructor(WW, iW) {
        this.rb = WW, this.decode = iW, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(WW) {
        let iW = this.viewData.get(WW.index);
        return iW || (iW = this.bufferData.then((() => WW.bytes)), this.viewData.set(WW.index, iW)), iW
      }
      viewBuffer(WW) {
        let iW = this.viewBuffers.get(WW.index);
        return iW || (iW = this.viewBytes(WW).then((WW => new((0, Ni.c)().OZ)(this.rb.VA(), WW, !1))), this.viewBuffers.set(WW.index, iW)), iW
      }
      vertexBuffer(WW, iW) {
        const {
          kind: OW,
          data: mW
        } = iW, EW = `${WW.index}:${OW}`;
        let NW = this.vertexBuffers.get(EW);
        if (!NW) {
          const PW = WW.bufferView;
          NW = PW ? this.viewBuffer(PW).then((WW => this.layoutVertexBuffer(WW, iW))) : Promise.resolve(mW).then((WW => new((0, Ni.c)().VertexBuffer)(this.rb.VA(), WW, OW, !1))), this.vertexBuffers.set(EW, NW)
        }
        return NW
      }
      layoutVertexBuffer(WW, iW) {
        let {
          kind: OW,
          offset: mW,
          stride: EW,
          components: NW,
          glType: PW,
          isNormalized: LW
        } = iW;
        const cW = this.rb.VA();
        return new((0, Ni.c)().VertexBuffer)(cW, WW, OW, !1, void 0, EW, void 0, mW, NW, PW, LW, !0, void 0, !0)
      }
      load(WW, iW, OW) {
        const mW = (0, Pi.f)(OW),
          EW = WW => {
            mW || (OW._delayInfo = OW._delayInfo || [], -1 === OW._delayInfo.indexOf(WW) && OW._delayInfo.push(WW))
          },
          NW = iW.draco;
        if (NW) {
          for (const WW in NW.attributeIds) EW(WW);
          let PW = this.dracoGeometry.get(NW.bufferView.index);
          return PW || (PW = this.viewBytes(NW.bufferView).then((async () => {
            let EW;
            try {
              EW = await gW(iW, this.decode)
            } catch (cW) {
              throw new oW.l(`${WW}: ${cW instanceof Error?cW.message:String(cW)}`)
            }
            const NW = BW(iW, EW);
            if (mW) return NW;
            const PW = ci(iW.position),
              LW = new((0, Ni.c)().MirroredGeometry)(OW.name, this.rb);
            PW && (LW._boundingInfo = PW, LW.useBoundingInfoFromGeometry = !0), NW.indexData && LW.setIndices(NW.indexData);
            for (const WW of NW.vertexAttributes) LW.setVerticesBuffer(this.layoutVertexBuffer(WW.data, WW), NW.vertexCount);
            return LW.link(NW), LW
          })), this.dracoGeometry.set(NW.bufferView.index, PW)), PW
        }
        const PW = [],
          LW = CW(iW);
        if (mW) return OW.isUnIndexed = !LW.indexData, OW.hasVertexAlpha = (0, Li.g)(iW), Promise.resolve(LW);
        const cW = new((0, Ni.c)().MirroredGeometry)(OW.name, this.rb),
          {
            indexData: wW
          } = LW;
        wW ? PW.push(this.viewBytes(iW.indices.bufferView).then((() => {
          cW.setIndices(wW)
        }))) : OW.isUnIndexed = !0;
        for (const [tW, {
            kind: ZW,
            accessor: xW
          }] of iW.attributes.entries()) EW(ZW), PW.push(this.vertexBuffer(xW, LW.vertexAttributes[tW]).then((WW => {
          if ("position" === WW.getKind()) {
            const WW = ci(xW);
            WW && (cW._boundingInfo = WW, cW.useBoundingInfoFromGeometry = !0)
          }
          cW.setVerticesBuffer(WW, LW.vertexCount)
        })));
        return (0, Li.g)(iW) && (OW.hasVertexAlpha = !0), Promise.all(PW).then((() => (cW.link(LW), cW)))
      }
    }
    var Zi, xi = OW(38460),
      li = OW(38235),
      Ai = OW(39083),
      bi = OW(38364),
      ji = OW(38437),
      Ui = OW(2365),
      ki = OW(38411);

    function si(WW, iW) {
      WW.metadata = WW.metadata || {};
      const OW = WW._internalMetadata = WW._internalMetadata || {},
        mW = OW.uH = OW.uH || {};
      (mW.pointers = mW.pointers || []).push(iW)
    }

    function Mi(WW, iW) {
      if (iW && Object.keys(iW).length > 0) {
        const OW = WW.metadata = WW.metadata || {};
        (OW.uH = OW.uH || {}).extras = iW
      }
    }

    function Ki(WW, iW) {
      iW.position = WW.translation ? li.fA.FromArray(WW.translation) : li.fA.Zero(), iW.rotationQuaternion = WW.rotation ? li.Quaternion.FromArray(WW.rotation) : li.Quaternion.Identity(), iW.YZ = WW.scale ? li.fA.FromArray(WW.scale) : li.fA.One()
    }
    class Si {
      constructor(WW, iW) {
        if (this.rb = WW, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, iW) {
          const iW = WW.VA(),
            OW = WW.jD.add((() => {
              this.dispose()
            })),
            mW = iW.DA.add((() => {
              for (const WW of [...this.geometries, ...this.meshes, ...this.textures]) WW._rebuild()
            }));
          this.release = () => {
            WW.jD.remove(OW), iW.DA.remove(mW)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const WW of this.meshes) this.rb.xEW(WW);
          for (const WW of this.materials) this.rb.addMaterial(WW);
          for (const WW of this.geometries) this.rb.addGeometry(WW);
          for (const WW of this.transformNodes) this.rb.addTransformNode(WW);
          for (const WW of this.textures) this.rb.addTexture(WW)
        }
      }
      dispose() {
        var WW;
        for (const iW of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const WW of iW.slice()) WW.dispose();
          iW.length = 0
        }
        null === (WW = this.release) || void 0 === WW || WW.call(this), this.release = null
      }
    }
    class Yi {
      constructor(WW, iW, OW, mW, EW, NW, PW) {
        this.asset = WW, this.rb = iW, this.tree = OW, this.geometryData = EW, this.materials = NW, this.lite = PW, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = mW ? OW : null
      }
      create(WW) {
        if (this.lite) return WW();
        const iW = this.rb;
        iW._blockEntityCollection = !!this.container;
        try {
          const iW = WW();
          return this.container && (iW._parentContainer = this.container), iW
        } finally {
          iW._blockEntityCollection = !1
        }
      }
      node(WW, iW) {
        return this.create((() => this.lite ? iW ? (0, Ai.g)(this.lite, WW) : (0, Ai.t)(this.lite, WW) : iW ? new((0, Ni.c)().Mesh)(WW, this.rb) : new((0, Ni.c)().TransformNode)(WW, this.rb)))
      }
      async load() {
        var WW;
        this.asset.model.json.nodes && this.createRoot();
        const iW = this.lite ? null : this.rb,
          OW = null !== (WW = null === iW || void 0 === iW ? void 0 : iW.blockMaterialDirtyMechanism) && void 0 !== WW && WW;
        let mW;
        iW && (iW.blockMaterialDirtyMechanism = !0);
        try {
          mW = this.loadScene()
        } finally {
          null === iW || void 0 === iW || iW._forceBlockMaterialDirtyMechanism(OW)
        }
        await mW;
        const {
          root: EW,
          tree: NW
        } = this;
        EW && (EW.WK(!0), NW.meshes.push(EW), NW.rootNodes.push(EW));
        for (const LW of this.asset.model.nodes) {
          const WW = this.nodeObjects.get(LW.index);
          WW && ["TransformNode", "LiteNode"].includes(WW.getClassName()) && NW.transformNodes.push(WW);
          for (const iW of null !== (PW = this.nodePrimitives.get(LW.index)) && void 0 !== PW ? PW : []) {
            var PW;
            NW.meshes.push(iW);
            const WW = iW.geometry;
            WW && !NW.geometries.includes(WW) && NW.geometries.push(WW)
          }
        }
      }
      createRoot() {
        const WW = this.node("__root__", !0);
        this.root = WW, WW.WK(!1), this.rb.useRightHandedSystem || Ki(IW, WW)
      }
      loadScene() {
        const WW = [];
        for (const iW of this.asset.model.rootNodes) WW.push(this.loadNode(this.asset.model.nodes[iW], (WW => {
          WW.parent = this.root
        })));
        return WW.push(Promise.resolve()), Promise.all(WW).then((() => {}))
      }
      loadNode(WW, iW) {
        const OW = `/nodes/${WW.index}`,
          mW = [],
          EW = EW => {
            if (si(EW, OW), Ki(WW, EW), WW.hasCamera && !this.rb.useRightHandedSystem) {
              const {
                YZ: WW
              } = EW;
              WW.set(-1, WW.y, WW.z)
            }
            for (const iW of WW.children) mW.push(this.loadNode(this.asset.model.nodes[iW], (WW => {
              WW.parent = EW
            })));
            (OW => {
              Mi(OW, WW.extras), iW(OW)
            })(EW)
          };
        if (null === WW.mesh) {
          const iW = this.node(GW(WW), !1);
          this.nodeObjects.set(WW.index, iW), EW(iW)
        } else {
          const iW = this.asset.model.meshes[WW.mesh];
          mW.push(this.loadMesh(`/meshes/${iW.index}`, WW, iW, EW))
        }
        return Promise.all(mW).then((() => {
          for (const OW of null !== (iW = this.nodePrimitives.get(WW.index)) && void 0 !== iW ? iW : []) {
            var iW;
            wi(OW)
          }
          return this.nodeObjects.get(WW.index)
        }))
      }
      loadMesh(WW, iW, OW, mW) {
        const EW = [],
          NW = GW(iW);
        if (1 === OW.primitives.length) {
          const mW = OW.primitives[0];
          EW.push(this.loadPrimitive(`${WW}/primitives/${mW.index}`, NW, mW, (WW => {
            this.nodeObjects.set(iW.index, WW), this.nodePrimitives.set(iW.index, [WW])
          })))
        } else {
          const mW = this.node(NW, !1);
          this.nodeObjects.set(iW.index, mW);
          const PW = [];
          this.nodePrimitives.set(iW.index, PW);
          for (const iW of OW.primitives) EW.push(this.loadPrimitive(`${WW}/primitives/${iW.index}`, `${NW}_primitive${iW.index}`, iW, (WW => {
            WW.parent = mW, PW.push(WW)
          })))
        }
        const PW = this.nodeObjects.get(iW.index);
        return mW(PW), Promise.all(EW).then((() => PW))
      }
      loadPrimitive(WW, iW, OW, mW) {
        const EW = [],
          NW = this.node(iW, !0);
        if (NW.sideOrientation = this.rb.useRightHandedSystem ? bi.e.CounterClockWiseSideOrientation : bi.e.ClockWiseSideOrientation, EW.push(this.geometryData.load(WW, OW, NW).then((WW => {
            if ((0, Pi.f)(NW)) {
              var iW, OW;
              const mW = WW;
              NW.replaceModel(mW, Int32Array.of(0, null !== (iW = null === (OW = mW.indexData) || void 0 === OW ? void 0 : OW.length) && void 0 !== iW ? iW : mW.vertexCount, 0, mW.vertexCount))
            } else this.create((() => (WW.applyToMesh(NW), WW)))
          }))), this.materials) {
          const WW = 0 === OW.mode ? bi.e.PointListDrawMode : bi.e.TriangleFillMode,
            iW = null === OW.material ? null : this.asset.model.materials[OW.material];
          EW.push(this.loadMaterial(iW, WW, (WW => {
            NW.material = WW
          })))
        }
        return si(NW, WW), mW(NW), Promise.all(EW).then((() => NW))
      }
      loadMaterial(WW, iW, OW) {
        var mW;
        const EW = `${null!==(mW=null===WW||void 0===WW?void 0:WW.index)&&void 0!==mW?mW:"default"}:${iW}`;
        let NW = this.materialData.get(EW);
        return NW || (NW = this.createMaterial(WW, iW), this.materialData.set(EW, NW)), OW(NW.material), NW.promise
      }
      createMaterial(WW, iW) {
        const OW = WW ? WW.name || `material${WW.index}` : "__GLTFLoader._default",
          {
            style: mW,
            unlit: EW
          } = this.materials;
        let NW;
        const PW = this.create((() => {
          const PW = (0, ki.b)({
            name: OW,
            rb: this.rb,
            sets: {
              ...(0, Li.d)(this.asset, WW, mW, EW),
              fillMode: iW
            },
            unrendered: !0
          });
          return NW = PW.model, PW.mirror
        }));
        let LW = Promise.resolve();
        if (WW) {
          const iW = `/materials/${WW.index}`,
            mW = NW.diffuseTexture;
          if (mW && !mW.mirror) LW = new Promise((WW => setTimeout(WW)));
          else if (mW) {
            const EW = mW.mirror;
            EW._parentContainer = this.container, EW.name = `${OW} (Base Color)`, si(EW, `${iW}${WW.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(EW), LW = (0, ji.C)(mW)
          }
          Mi(PW, WW.extras), si(PW, iW)
        }
        return this.tree.materials.push(PW), {
          material: PW,
          promise: LW
        }
      }
    }

    function yi() {
      xi.f.dracoDecodes = SW.decodes, xi.f.dracoWorkersStarted = SW.workersStarted, xi.f.dracoMostWorkers = SW.mostWorkers
    }
    async function Ti(WW, iW, OW, EW, NW) {
      try {
        return await async function(WW, iW, OW, EW, NW, PW) {
          var LW;
          let cW;
          const wW = null === (LW = (0, Ui.h)()) || void 0 === LW ? void 0 : LW.TZ,
            tW = null !== wW && void 0 !== wW && wW.Lb && iW === wW.bD() ? wW : null,
            ZW = NW && !tW;
          return await Ei(WW, iW, OW, EW, mW.b, (WW => (cW = new Si(iW, ZW), new Yi(WW, iW, cW, ZW, new ti(iW, EW), PW, tW).load())), !NW), cW
        }(WW, iW, OW, HW, EW, NW)
      } finally {
        yi()
      }
    }
    async function Ji(WW, iW, OW, EW) {
      try {
        return await Ei(WW, iW, OW, HW, mW.b, (WW => EW(WW, new ti(iW, HW))))
      } finally {
        yi()
      }
    }
    Zi = LW, UW || (UW = {
      scriptUrl: new URL(Zi.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(Zi.wasmBinaryUrl, location.href).href
    })
  },
  37245: WW => {
    WW.exports = function(WW, iW, OW, mW) {
      var EW = self || window;
      try {
        try {
          var NW;
          try {
            NW = new EW.Blob([WW])
          } catch (wW) {
            (NW = new(EW.BlobBuilder || EW.WebKitBlobBuilder || EW.MozBlobBuilder || EW.MSBlobBuilder)).append(WW), NW = NW.getBlob()
          }
          var PW = EW.URL || EW.webkitURL,
            LW = PW.createObjectURL(NW),
            cW = new EW[iW](LW, OW);
          return PW.revokeObjectURL(LW), cW
        } catch (wW) {
          return new EW[iW]("data:application/javascript,".concat(encodeURIComponent(WW)), OW)
        }
      } catch (wW) {
        if (!mW) throw Error("Inline worker is not supported");
        return new EW[iW](mW, OW)
      }
    }
  },
  53687: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  53679: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);