export const id = 230;
export const ids = [230];
export const modules = {
  44985: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      loadGlbAsset: () => bB,
      loadGlbTree: () => OB
    });
    var AH = LH(38790),
      rH = LH(120),
      SH = LH(1139);

    function hH(HH) {
      return (0, rH.isDiscordClient)() ? `https://${SH.e.discordDomain}/${HH.href}` : HH.href
    }
    const tH = {
      scriptUrl: hH(new LH.U(LH(44989))),
      wasmBinaryUrl: hH(new LH.U(LH(44996)))
    };
    var zH = LH(37014),
      CH = LH.n(zH);

    function EH() {
      return CH()('(()=>{class HH extends Error{}function BH(BH,LH){const AH=BH._malloc(LH);if(0===AH)throw new HH(`Draco: the decoder\'s heap refused ${LH} bytes`);return AH}function LH(LH,AH,rH,SH){let hH=null,tH=null,zH=null;try{hH=new LH.Decoder,tH=new LH.DecoderBuffer,tH.Init(AH,AH.byteLength);let CH=0;const EH=hH.GetEncodedGeometryType(tH);if(EH===LH.TRIANGULAR_MESH){const BH=new LH.Mesh;zH=BH;const AH=hH.DecodeBufferToMesh(tH,BH);if(!AH.ok()||0===BH.ptr)throw new HH(AH.error_msg());CH=3*BH.num_faces()}else{if(EH!==LH.POINT_CLOUD)throw new HH(`Draco: Cannot decode invalid geometry type ${EH}`);{const BH=new LH.PointCloud;zH=BH;const AH=hH.DecodeBufferToPointCloud(tH,BH);if(!AH.ok()||!BH.ptr)throw new HH(AH.error_msg())}}const XH=zH.num_points();if(XH!==SH.vertices||CH!==SH.indices)throw new HH(`Draco: decoded ${XH} vertices and ${CH} indices, the accessors declare ${SH.vertices} and ${SH.indices}`);const GH=function(HH){return{[HH.DT_FLOAT32]:Float32Array,[HH.DT_INT8]:Int8Array,[HH.DT_INT16]:Int16Array,[HH.DT_INT32]:Int32Array,[HH.DT_UINT8]:Uint8Array,[HH.DT_UINT16]:Uint16Array,[HH.DT_UINT32]:Uint32Array}}(LH),YH=[];for(const BH of Object.keys(rH)){const LH=rH[BH],AH=SH.components[BH],tH=hH.GetAttributeByUniqueId(zH,LH);if(!tH||0===tH.ptr)throw new HH(`Draco: no attribute with id ${LH} (${BH})`);const CH=tH.data_type();if(!GH[CH])throw new HH(`Draco: Cannot decode invalid data type ${CH}`);if(tH.num_components()!==AH)throw new HH(`Draco: ${BH} decodes to ${tH.num_components()} components, its accessor declares ${AH}`);YH.push([BH,tH,GH[CH]])}let uH=null;if(EH===LH.TRIANGULAR_MESH){const HH=4*CH,AH=BH(LH,HH);try{hH.GetTrianglesUInt32Array(zH,HH,AH),uH=new Uint32Array(CH),uH.set(new Uint32Array(LH.HEAPF32.buffer,AH,CH))}finally{LH._free(AH)}}const QH=[];for(const[HH,AH,rH]of YH){const SH=AH.num_components(),tH=XH*SH,CH=tH*rH.BYTES_PER_ELEMENT,EH=BH(LH,CH);try{hH.GetAttributeDataArrayForAllPoints(zH,AH,AH.data_type(),CH,EH),QH.push({kind:HH,data:new rH(LH.HEAPF32.buffer,EH,tH).slice(),size:SH,byteOffset:AH.byte_offset(),byteStride:AH.byte_stride(),normalized:AH.normalized()})}finally{LH._free(EH)}}return{indices:uH,attributes:QH,totalVertices:XH}}finally{zH&&LH.destroy(zH),tH&&LH.destroy(tH),hH&&LH.destroy(hH)}}const AH=self;let rH=null;self.onmessage=HH=>{let{data:BH}=HH;if("init"===BH.id){try{importScripts(BH.url),rH=DracoDecoderModule({wasmBinary:BH.wasmBinary}),AH.postMessage({id:"initDone"})}catch(CH){AH.postMessage({id:"initError",message:CH instanceof Error?CH.message:String(CH)})}return}const{seq:SH,data:hH,attributeIds:tH,expected:zH}=BH;rH?rH.then((HH=>{try{const BH=LH(HH,hH,tH,zH),rH=BH.attributes.map((HH=>HH.data.buffer));BH.indices&&rH.push(BH.indices.buffer),AH.postMessage({id:"decoded",seq:SH,...BH},rH)}catch(CH){AH.postMessage({id:"decodeError",seq:SH,message:CH instanceof Error?CH.message:String(CH)})}}),(HH=>{AH.postMessage({id:"decodeError",seq:SH,message:HH instanceof Error?HH.message:String(HH)})})):AH.postMessage({id:"decodeError",seq:SH,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, LH.p + "dracoDecode.worker.ebda719b.worker.js")
    }
    var XH = LH(81),
      GH = LH(4802),
      YH = LH(3595);
    const uH = 2;
    const QH = 1e3;
    let WH = null,
      MH = null;
    const xH = [],
      vH = [];
    let PH = 0;
    const TH = {
      decodes: 0,
      workersStarted: 0,
      mostWorkers: 0
    };
    let UH = null;

    function VH() {
      if (!WH) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: HH,
        wasmBinaryUrl: BH
      } = WH;
      return MH ??= fetch(BH).then((HH => {
        if (!HH.ok) throw new Error(`Draco: fetching ${BH} failed: ${HH.status}`);
        return HH.arrayBuffer()
      })), MH.catch((() => {
        MH = null
      })), TH.workersStarted++, Promise.all([MH, (0, YH.l)()]).then((BH => {
        let [LH] = BH;
        return new Promise(((BH, AH) => {
          const rH = new EH;
          rH.onerror = HH => {
            rH.onmessage = null, rH.onerror = null, rH.terminate(), AH(new Error("Draco: the decode worker failed to start" + (HH.message ? `: ${HH.message}` : " (its script did not load)")))
          }, rH.onmessage = HH => {
            let {
              data: LH
            } = HH;
            rH.onmessage = null, rH.onerror = null, "initDone" === LH.id ? BH(rH) : (rH.terminate(), AH(new Error(`Draco: ${"initError"===LH.id?LH.message:"the worker did not start"}`)))
          };
          const SH = LH.slice(0),
            hH = {
              id: "init",
              url: HH,
              wasmBinary: SH
            };
          rH.postMessage(hH, [SH])
        }))
      }))
    }

    function OH(HH) {
      const BH = xH.indexOf(HH); - 1 !== BH && xH.splice(BH, 1);
      const LH = vH.shift();
      LH && kH(LH)
    }

    function bH(HH, BH) {
      HH.busy = !0, HH.releaseTimer && (clearTimeout(HH.releaseTimer), HH.releaseTimer = null);
      HH.worker.then((LH => {
        const AH = PH++;
        LH.onmessage = rH => {
          let {
            data: SH
          } = rH;
          if (("decoded" === SH.id || "decodeError" === SH.id) && SH.seq === AH) {
            if (LH.onmessage = null, LH.onerror = null, "decoded" === SH.id) return TH.decodes++, BH.resolve({
              indices: SH.indices,
              attributes: SH.attributes,
              totalVertices: SH.totalVertices
            }), void(() => {
              const BH = vH.shift();
              BH ? bH(HH, BH) : (HH.busy = !1, HH.releaseTimer = setTimeout((() => {
                const BH = xH.indexOf(HH); - 1 !== BH && xH.splice(BH, 1), HH.worker.then((HH => {
                  HH.terminate()
                }))
              }), QH))
            })();
            LH.terminate(), BH.reject(new Error(SH.message)), OH(HH)
          }
        }, LH.onerror = AH => {
          LH.onmessage = null, LH.onerror = null, LH.terminate(), BH.reject(new Error(`Draco: the decode worker failed: ${AH.message}`)), OH(HH)
        };
        const rH = {
          id: "decode",
          seq: AH,
          data: BH.data,
          attributeIds: BH.attributeIds,
          expected: BH.expected
        };
        LH.postMessage(rH, [BH.data.buffer])
      }), (LH => {
        BH.reject(LH instanceof Error ? LH : new Error(String(LH))), OH(HH)
      }))
    }

    function kH(HH) {
      const BH = xH.find((HH => !HH.busy));
      if (BH) bH(BH, HH);
      else {
        if (UH ??= (0, GH.e)() ? 1 : function(HH, BH) {
            const LH = HH ? Math.max(1, Math.min(Math.floor(.5 * HH), 4)) : 1;
            return BH ? Math.min(LH, uH) : LH
          }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, XH.isMobile)()), xH.length < UH) {
          const BH = {
            worker: VH(),
            busy: !0,
            releaseTimer: null
          };
          return xH.push(BH), TH.mostWorkers = Math.max(TH.mostWorkers, xH.length), void bH(BH, HH)
        }
        vH.push(HH)
      }
    }

    function mH(HH, BH, LH) {
      return new Promise(((AH, rH) => {
        kH({
          data: new Int8Array(HH.buffer, HH.byteOffset, HH.byteLength).slice(),
          attributeIds: BH,
          expected: LH,
          resolve: AH,
          reject: rH
        })
      }))
    }
    var oH = LH(38241),
      IH = LH(38251),
      fH = LH(35071),
      lH = LH(35067);
    const KH = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function cH(HH) {
      const BH = (0, lH.g)(HH.byteLength);
      if (BH) throw new fH.n(BH);
      const {
        json: LH,
        bin: AH
      } = (0, fH.z)(HH), rH = (0, lH.c)(LH, AH);
      if (rH) throw new fH.n(rH);
      try {
        return function(HH, BH) {
          var LH, AH, rH, SH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH;
          const MH = new Map,
            xH = LH => {
              let AH = MH.get(LH);
              if (!AH) {
                var rH;
                const SH = HH.bufferViews[LH],
                  hH = null !== (rH = SH.byteOffset) && void 0 !== rH ? rH : 0;
                AH = {
                  index: LH,
                  bytes: BH.subarray(hH, hH + SH.byteLength),
                  byteStride: SH.byteStride
                }, MH.set(LH, AH)
              }
              return AH
            },
            vH = new Map,
            PH = BH => {
              let LH = vH.get(BH);
              if (!LH) {
                var AH;
                const rH = HH.accessors[BH];
                LH = {
                  index: BH,
                  count: rH.count,
                  type: rH.type,
                  numComponents: fH.p[rH.type],
                  componentType: rH.componentType,
                  normalized: null !== (AH = rH.normalized) && void 0 !== AH && AH,
                  byteOffset: rH.byteOffset,
                  bufferView: void 0 === rH.bufferView ? null : xH(rH.bufferView),
                  min: rH.min,
                  max: rH.max
                }, vH.set(BH, LH)
              }
              return LH
            },
            TH = null !== (LH = null === (AH = HH.extensionsUsed) || void 0 === AH ? void 0 : AH.includes("KHR_draco_mesh_compression")) && void 0 !== LH && LH,
            UH = (null !== (rH = HH.meshes) && void 0 !== rH ? rH : []).map(((BH, LH) => {
              const AH = BH.primitives.map(((BH, LH) => {
                var AH, rH, SH;
                const hH = TH ? null === (AH = BH.extensions) || void 0 === AH ? void 0 : AH.KHR_draco_mesh_compression : void 0;
                let tH = null;
                const zH = [];
                if (hH) {
                  const LH = {
                    vertices: HH.accessors[BH.attributes.POSITION].count,
                    indices: void 0 === BH.indices ? 0 : HH.accessors[BH.indices].count,
                    components: {}
                  };
                  tH = {
                    bufferView: xH(hH.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: LH
                  };
                  for (const [AH, rH] of fH.g) {
                    const SH = hH.attributes[AH];
                    if (void 0 === SH) continue;
                    tH.attributeIds[rH] = SH;
                    const zH = BH.attributes[AH];
                    var CH;
                    if (void 0 !== zH) tH.normalized[rH] = null !== (CH = HH.accessors[zH].normalized) && void 0 !== CH && CH, LH.components[rH] = fH.p[HH.accessors[zH].type]
                  }
                } else
                  for (const [HH, EH] of fH.g) {
                    const LH = BH.attributes[HH];
                    void 0 !== LH && zH.push({
                      semantic: HH,
                      kind: EH,
                      accessor: PH(LH)
                    })
                  }
                return {
                  index: LH,
                  mode: null !== (rH = BH.mode) && void 0 !== rH ? rH : 4,
                  attributes: zH,
                  indices: hH || void 0 === BH.indices ? null : PH(BH.indices),
                  position: void 0 === BH.attributes.POSITION ? null : PH(BH.attributes.POSITION),
                  material: null !== (SH = BH.material) && void 0 !== SH ? SH : null,
                  draco: tH
                }
              }));
              return {
                index: LH,
                name: BH.name,
                primitives: AH,
                extras: BH.extras
              }
            })),
            VH = (null !== (SH = HH.nodes) && void 0 !== SH ? SH : []).map(((HH, BH) => {
              var LH, AH;
              return {
                index: BH,
                name: HH.name,
                children: null !== (LH = HH.children) && void 0 !== LH ? LH : [],
                mesh: null !== (AH = HH.mesh) && void 0 !== AH ? AH : null,
                translation: HH.translation,
                rotation: HH.rotation,
                scale: HH.scale,
                hasCamera: void 0 !== HH.camera,
                extras: HH.extras
              }
            })),
            OH = null !== (hH = null === (tH = HH.extensionsUsed) || void 0 === tH ? void 0 : tH.includes("KHR_materials_unlit")) && void 0 !== hH && hH,
            bH = null !== (zH = null === (CH = HH.extensionsUsed) || void 0 === CH ? void 0 : CH.includes("KHR_texture_transform")) && void 0 !== zH && zH,
            kH = (null !== (EH = HH.materials) && void 0 !== EH ? EH : []).map(((HH, BH) => {
              var LH, AH, rH, SH;
              const hH = HH.pbrMetallicRoughness,
                tH = null === hH || void 0 === hH ? void 0 : hH.baseColorTexture;
              return {
                index: BH,
                name: HH.name,
                extras: HH.extras,
                unlit: OH && void 0 !== (null === (LH = HH.extensions) || void 0 === LH ? void 0 : LH.KHR_materials_unlit),
                pbr: hH ? {
                  baseColorFactor: hH.baseColorFactor,
                  metallicFactor: hH.metallicFactor,
                  roughnessFactor: hH.roughnessFactor
                } : null,
                baseColorTexture: tH ? {
                  texture: tH.index,
                  transform: bH && (null === (AH = tH.extensions) || void 0 === AH ? void 0 : AH.KHR_texture_transform) || null
                } : null,
                emissiveFactor: HH.emissiveFactor,
                alphaMode: null !== (rH = HH.alphaMode) && void 0 !== rH ? rH : "OPAQUE",
                alphaCutoff: HH.alphaCutoff,
                doubleSided: null !== (SH = HH.doubleSided) && void 0 !== SH && SH
              }
            })),
            mH = (null !== (XH = HH.textures) && void 0 !== XH ? XH : []).map(((BH, LH) => {
              var AH, rH;
              const SH = void 0 === BH.sampler ? KH : {
                index: BH.sampler,
                ...null === (AH = HH.samplers) || void 0 === AH ? void 0 : AH[BH.sampler]
              };
              return {
                index: LH,
                sampler: {
                  index: SH.index,
                  magFilter: SH.magFilter,
                  minFilter: SH.minFilter,
                  wrapS: SH.wrapS,
                  wrapT: SH.wrapT
                },
                image: null !== (rH = BH.source) && void 0 !== rH ? rH : -1
              }
            })),
            oH = (null !== (GH = HH.images) && void 0 !== GH ? GH : []).map(((HH, BH) => ({
              index: BH,
              name: HH.name,
              mimeType: HH.mimeType,
              bufferView: xH(HH.bufferView)
            }))),
            IH = null !== (YH = (0, fH.v)(HH)) && void 0 !== YH ? YH : 0;
          return {
            json: HH,
            rootNodes: null !== (uH = null === (QH = HH.scenes) || void 0 === QH || null === (WH = QH[IH]) || void 0 === WH ? void 0 : WH.nodes) && void 0 !== uH ? uH : [],
            nodes: VH,
            meshes: UH,
            materials: kH,
            textures: mH,
            images: oH
          }
        }(LH, AH)
      } catch (SH) {
        throw SH instanceof fH.k ? SH : new fH.k(`reading the GLB failed: ${SH instanceof Error?SH.message:String(SH)}`)
      }
    }
    async function eH(HH, BH) {
      var LH, AH;
      const rH = HH.draco;
      if (!rH) throw new fH.k("not a Draco primitive");
      let SH;
      try {
        SH = await BH(rH.bufferView.bytes, rH.attributeIds, rH.expected)
      } catch (CH) {
        throw new fH.k(`Draco decoding failed: ${CH instanceof Error?CH.message:String(CH)}`)
      }
      const {
        vertices: hH,
        indices: tH,
        components: zH
      } = rH.expected;
      if (SH.totalVertices !== hH || (null !== (LH = null === (AH = SH.indices) || void 0 === AH ? void 0 : AH.length) && void 0 !== LH ? LH : 0) !== tH || SH.attributes.some((HH => HH.size !== zH[HH.kind] || HH.data.length !== hH * HH.size))) throw new fH.k("Draco decoding gave other counts than the accessors declare");
      for (const EH of SH.attributes) {
        const HH = rH.normalized[EH.kind];
        void 0 !== HH && (EH.normalized = HH)
      }
      return SH
    }
    const qH = new WeakMap;

    function gH(HH, BH) {
      var LH;
      const AH = null !== (LH = qH.get(HH)) && void 0 !== LH ? LH : BH(HH);
      return qH.set(HH, AH), AH
    }

    function NH(HH) {
      const BH = HH.bufferView,
        LH = 5125 === HH.componentType ? Uint32Array : Uint16Array,
        AH = BH.bytes.buffer,
        rH = BH.bytes.byteOffset + (HH.byteOffset || 0);
      return rH % LH.BYTES_PER_ELEMENT !== 0 ? new LH(AH.slice(rH, rH + HH.count * LH.BYTES_PER_ELEMENT), 0) : new LH(AH, rH, HH.count)
    }

    function RH(HH, BH) {
      if (HH.min && HH.max) return [new Float64Array(HH.min), new Float64Array(HH.max)];
      const LH = BH.find((HH => {
          let {
            kind: BH
          } = HH;
          return "position" === BH
        })),
        AH = LH ? (0, IH.l)(LH, HH.count) : new Float32Array(0);
      return (0, IH.y)(AH.length / 3, ((HH, BH) => AH[3 * HH + BH]))
    }

    function jH(HH) {
      const BH = HH.attributes.map((HH => {
          var BH, LH;
          let {
            kind: AH,
            accessor: rH
          } = HH;
          const {
            bufferView: SH,
            numComponents: hH
          } = rH;
          if (!SH) {
            return {
              kind: AH,
              data: gH(rH, (() => new Float32Array(hH * rH.count))),
              offset: 0,
              stride: 4 * hH,
              components: hH,
              glType: 5126,
              isNormalized: !1
            }
          }
          const tH = null !== (BH = SH.byteStride) && void 0 !== BH ? BH : hH * fH.d[rH.componentType];
          return {
            kind: AH,
            data: SH.bytes,
            offset: null !== (LH = rH.byteOffset) && void 0 !== LH ? LH : 0,
            stride: tH,
            components: hH,
            glType: rH.componentType,
            isNormalized: rH.normalized
          }
        })),
        LH = HH.indices,
        AH = LH && gH(LH, NH),
        rH = HH.position;
      return new IH.h(BH, AH, rH.count, ...RH(rH, BH))
    }
    const nH = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function FH(HH, BH) {
      const LH = BH.attributes.map((HH => {
        let {
          kind: BH,
          data: LH,
          size: AH,
          byteOffset: rH,
          byteStride: SH,
          normalized: hH
        } = HH;
        return {
          kind: BH,
          data: LH,
          offset: rH,
          stride: SH,
          components: AH,
          glType: 5120 + nH.indexOf(LH.constructor),
          isNormalized: hH
        }
      }));
      return new IH.h(LH, BH.indices, BH.totalVertices, ...RH(HH.position, LH))
    }

    function DH(HH) {
      const BH = HH.lastIndexOf("/");
      return BH < 0 ? HH : HH.substring(BH + 1)
    }

    function wH(HH) {
      const BH = HH.lastIndexOf("/");
      return BH < 0 ? "" : HH.substring(0, BH + 1)
    }

    function ZH(HH) {
      return HH.name || `node${HH.index}`
    }
    const dH = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      aH = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      sH = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function JH(HH) {
      var BH, LH, AH, rH;
      const SH = null !== (BH = HH.minFilter) && void 0 !== BH ? BH : 9987;
      return 9729 === (null !== (LH = HH.magFilter) && void 0 !== LH ? LH : 9729) ? null !== (AH = aH[SH]) && void 0 !== AH ? AH : 3 : null !== (rH = sH[SH]) && void 0 !== rH ? rH : 4
    }
    const iH = {
      33071: 0,
      33648: 2
    };

    function pH(HH) {
      var BH;
      return null !== (BH = iH[null !== HH && void 0 !== HH ? HH : 10497]) && void 0 !== BH ? BH : 1
    }

    function yH(HH) {
      return 9728 === HH.minFilter || 9729 === HH.minFilter
    }

    function HB(HH) {
      var BH, LH, AH;
      const rH = Float64Array.from(null !== (BH = HH.scale) && void 0 !== BH ? BH : [1, 1, 1]);
      return HH.hasCamera && (rH[0] = -1), {
        translation: Float64Array.from(null !== (LH = HH.translation) && void 0 !== LH ? LH : [0, 0, 0]),
        rotation: Float64Array.from(null !== (AH = HH.rotation) && void 0 !== AH ? AH : [0, 0, 0, 1]),
        scale: rH
      }
    }

    function BB(HH, BH) {
      let {
        translation: LH,
        rotation: AH,
        scale: rH
      } = HH;
      const SH = new Float32Array(16);
      return (0, oH.e)(rH, 0, AH, 0, LH, 0, SH), BH && (0, oH.l)(SH, BH, 0, SH), SH
    }
    class LB {
      constructor(HH, BH, LH, AH) {
        this.model = HH, this.decode = BH, this.fileInfo = LH, this.uniqueRootUrl = AH, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const rH = new Set,
          SH = (BH, LH) => {
            const AH = HH.nodes[BH];
            if (this.parents.has(AH)) throw new fH.k(`/nodes/${BH}: Invalid recursive node hierarchy`);
            this.parents.set(AH, LH);
            const hH = null === AH.mesh ? [] : HH.meshes[AH.mesh].primitives,
              tH = hH.map((HH => {
                const BH = hH.length > 1;
                return {
                  name: BH ? `${ZH(AH)}_primitive${HH.index}` : ZH(AH),
                  node: AH,
                  primitive: HH,
                  part: BH,
                  geometry: null
                }
              }));
            this.uses.set(AH, tH);
            const zH = null !== AH.mesh && rH.has(AH.mesh);
            rH.add(AH.mesh), this.own.set(AH, zH ? [] : tH);
            for (const HH of AH.children) SH(HH, AH)
          };
        for (const hH of HH.rootNodes) SH(hH, null);
        this.primitives = HH.nodes.flatMap((HH => {
          var BH;
          return null !== (BH = this.own.get(HH)) && void 0 !== BH ? BH : []
        }))
      }
      decodeGeometries() {
        const HH = new Map;
        return Promise.all(this.primitives.map((async BH => {
          const {
            primitive: LH
          } = BH, AH = LH.draco;
          let rH = AH ? HH.get(AH.bufferView.index) : Promise.resolve(jH(LH));
          rH || (rH = eH(LH, this.decode).then((HH => FH(LH, HH))), HH.set(AH.bufferView.index, rH)), BH.geometry = await rH
        })))
      }
      parentOf(HH) {
        var BH;
        return null !== (BH = this.parents.get(HH)) && void 0 !== BH ? BH : null
      }
      meshesUnder(HH) {
        const BH = this.model.nodes.filter((HH => this.uses.has(HH)));
        for (const AH of BH) {
          const BH = this.uses.get(AH),
            LH = BH.find((BH => BH.name === HH));
          if (LH) return 1 === BH.length ? this.subtree(AH) : this.own.get(AH).includes(LH) ? [LH] : []
        }
        const LH = BH.find((BH => 1 !== this.uses.get(BH).length && ZH(BH) === HH));
        return LH ? this.subtree(LH) : null
      }
      subtree(HH) {
        return [...this.own.get(HH), ...HH.children.flatMap((HH => this.subtree(this.model.nodes[HH])))]
      }
      worldMatrix(HH, BH, LH) {
        let AH = BB(HB(BH ? dH : {}), null);
        const rH = [];
        for (let hH = HH.part ? HH.node : this.parentOf(HH.node); hH; hH = this.parentOf(hH)) rH.unshift(hH);
        for (const hH of rH) AH = BB(HB(hH), AH);
        const SH = HB(HH.part ? {} : HH.node);
        return void 0 !== LH && SH.scale.fill(LH), BB(SH, AH)
      }
      floats(HH) {
        const {
          vertexAttributes: BH,
          vertexCount: LH
        } = HH.geometry;
        return new Map(BH.map((HH => [HH.kind, (0, IH.l)(HH, LH)])))
      }
      imageUrl(HH) {
        return function(HH, BH, LH) {
          let {
            name: AH
          } = BH;
          return `data:${HH}${AH}#image${LH}`
        }(this.uniqueRootUrl, this.fileInfo, HH)
      }
      textureDesc(HH, BH) {
        var LH;
        let {
          texture: AH,
          transform: rH
        } = HH;
        const {
          sampler: SH,
          image: hH
        } = this.model.textures[AH], {
          bufferView: tH,
          mimeType: zH,
          name: CH
        } = this.model.images[hH], EH = rH && {
          ...rH.offset ? {
            uOffset: rH.offset[0],
            vOffset: rH.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...rH.rotation ? {
            wAng: -rH.rotation
          } : {},
          ...rH.scale ? {
            uScale: rH.scale[0],
            vScale: rH.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(hH),
          noMipmap: yH(SH),
          invertY: !1,
          samplingMode: JH(SH),
          data: {
            bytes: tH.bytes,
            mimeType: zH,
            label: CH,
            context: `/textures/${AH}`
          },
          sets: {
            wrapU: pH(SH.wrapS),
            wrapV: pH(SH.wrapT),
            ...EH,
            coordinatesIndex: null !== (LH = null === rH || void 0 === rH ? void 0 : rH.texCoord) && void 0 !== LH ? LH : 0,
            hasAlpha: BH
          }
        }
      }
    }
    async function AB(HH, BH, LH, AH, rH, SH) {
      let hH = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const tH = function(HH, BH, LH) {
          return "string" !== typeof BH ? {
            url: "",
            rootUrl: HH,
            name: LH()
          } : BH ? BH.startsWith("data:") ? {
            url: BH,
            rootUrl: HH,
            name: ""
          } : HH ? {
            url: HH + BH,
            rootUrl: HH,
            name: BH
          } : {
            url: BH,
            rootUrl: wH(BH),
            name: DH(BH)
          } : {
            url: HH,
            rootUrl: wH(HH),
            name: DH(HH)
          }
        }(LH, HH, rH),
        zH = {};
      BH.addPendingData(zH);
      try {
        const LH = cH(await async function(HH, BH) {
            return "string" !== typeof BH ? BH : HH.url.startsWith("data:") ? (0, fH.q)(HH.url) : await (0, fH.t)(HH.url)
          }(tH, HH)),
          zH = new LB(LH, AH, tH, function(HH, BH) {
            let {
              rootUrl: LH,
              name: AH
            } = HH;
            return !LH.startsWith("file:") && AH ? LH : `${LH}${BH()}/`
          }(tH, rH));
        return await SH(zH), BH.importedMeshesFiles && (BH.loadingPluginName = "XN", hH && BH.importedMeshesFiles.push(tH.url)), zH
      } finally {
        BH.removePendingData(zH)
      }
    }
    var rB = LH(38339),
      SB = LH(38222),
      hB = LH(38770);

    function tB(HH) {
      if (null === HH || void 0 === HH || !HH.min || !HH.max) return null;
      const [BH, LH, AH] = HH.min, [rH, SH, hH] = HH.max, {
        BoundingInfo: tH,
        lu: zH
      } = (0, rB.c)();
      return new tH(new zH(BH, LH, AH), new zH(rH, SH, hH))
    }

    function zB(HH) {
      (0, SB.f)(HH) || (HH.geometry && HH.geometry.useBoundingInfoFromGeometry ? HH._updateBoundingInfo() : HH.refreshBoundingInfo(!0, !0))
    }
    class CB {
      constructor(HH, BH) {
        this.NQ = HH, this.decode = BH, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(HH) {
        let BH = this.viewData.get(HH.index);
        return BH || (BH = this.bufferData.then((() => HH.bytes)), this.viewData.set(HH.index, BH)), BH
      }
      viewBuffer(HH) {
        let BH = this.viewBuffers.get(HH.index);
        return BH || (BH = this.viewBytes(HH).then((HH => new((0, rB.c)().rX)(this.NQ.Iu(), HH, !1))), this.viewBuffers.set(HH.index, BH)), BH
      }
      vertexBuffer(HH, BH) {
        const {
          kind: LH,
          data: AH
        } = BH, rH = `${HH.index}:${LH}`;
        let SH = this.vertexBuffers.get(rH);
        if (!SH) {
          const hH = HH.bufferView;
          SH = hH ? this.viewBuffer(hH).then((HH => this.layoutVertexBuffer(HH, BH))) : Promise.resolve(AH).then((HH => new((0, rB.c)().VertexBuffer)(this.NQ.Iu(), HH, LH, !1))), this.vertexBuffers.set(rH, SH)
        }
        return SH
      }
      layoutVertexBuffer(HH, BH) {
        let {
          kind: LH,
          offset: AH,
          stride: rH,
          components: SH,
          glType: hH,
          isNormalized: tH
        } = BH;
        const zH = this.NQ.Iu();
        return new((0, rB.c)().VertexBuffer)(zH, HH, LH, !1, void 0, rH, void 0, AH, SH, hH, tH, !0, void 0, !0)
      }
      load(HH, BH, LH) {
        const AH = (0, SB.f)(LH),
          rH = HH => {
            AH || (LH._delayInfo = LH._delayInfo || [], -1 === LH._delayInfo.indexOf(HH) && LH._delayInfo.push(HH))
          },
          SH = BH.draco;
        if (SH) {
          for (const HH in SH.attributeIds) rH(HH);
          let hH = this.dracoGeometry.get(SH.bufferView.index);
          return hH || (hH = this.viewBytes(SH.bufferView).then((async () => {
            let rH;
            try {
              rH = await eH(BH, this.decode)
            } catch (zH) {
              throw new fH.k(`${HH}: ${zH instanceof Error?zH.message:String(zH)}`)
            }
            const SH = FH(BH, rH);
            if (AH) return SH;
            const hH = tB(BH.position),
              tH = new((0, rB.c)().MirroredGeometry)(LH.name, this.NQ);
            hH && (tH._boundingInfo = hH, tH.useBoundingInfoFromGeometry = !0), SH.indexData && tH.setIndices(SH.indexData);
            for (const HH of SH.vertexAttributes) tH.setVerticesBuffer(this.layoutVertexBuffer(HH.data, HH), SH.vertexCount);
            return tH.link(SH), tH
          })), this.dracoGeometry.set(SH.bufferView.index, hH)), hH
        }
        const hH = [],
          tH = jH(BH);
        if (AH) return LH.isUnIndexed = !tH.indexData, LH.hasVertexAlpha = (0, hB.e)(BH), Promise.resolve(tH);
        const zH = new((0, rB.c)().MirroredGeometry)(LH.name, this.NQ),
          {
            indexData: CH
          } = tH;
        CH ? hH.push(this.viewBytes(BH.indices.bufferView).then((() => {
          zH.setIndices(CH)
        }))) : LH.isUnIndexed = !0;
        for (const [EH, {
            kind: XH,
            accessor: GH
          }] of BH.attributes.entries()) rH(XH), hH.push(this.vertexBuffer(GH, tH.vertexAttributes[EH]).then((HH => {
          if ("position" === HH.getKind()) {
            const HH = tB(GH);
            HH && (zH._boundingInfo = HH, zH.useBoundingInfoFromGeometry = !0)
          }
          zH.setVerticesBuffer(HH, tH.vertexCount)
        })));
        return (0, hB.e)(BH) && (LH.hasVertexAlpha = !0), Promise.all(hH).then((() => (zH.link(tH), zH)))
      }
    }
    var EB, XB = LH(38163),
      GB = LH(37961),
      YB = LH(38785),
      uB = LH(38067),
      QB = LH(38141),
      WB = LH(3038),
      MB = LH(38100);

    function xB(HH, BH) {
      HH.metadata = HH.metadata || {};
      const LH = HH._internalMetadata = HH._internalMetadata || {},
        AH = LH.XN = LH.XN || {};
      (AH.pointers = AH.pointers || []).push(BH)
    }

    function vB(HH, BH) {
      if (BH && Object.keys(BH).length > 0) {
        const LH = HH.metadata = HH.metadata || {};
        (LH.XN = LH.XN || {}).extras = BH
      }
    }

    function PB(HH, BH) {
      BH.position = HH.translation ? GB.lu.FromArray(HH.translation) : GB.lu.Zero(), BH.rotationQuaternion = HH.rotation ? GB.Quaternion.FromArray(HH.rotation) : GB.Quaternion.Identity(), BH.bX = HH.scale ? GB.lu.FromArray(HH.scale) : GB.lu.One()
    }
    class TB {
      constructor(HH, BH) {
        if (this.NQ = HH, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, BH) {
          const BH = HH.Iu(),
            LH = HH.uR.add((() => {
              this.dispose()
            })),
            AH = BH.ou.add((() => {
              for (const HH of [...this.geometries, ...this.meshes, ...this.textures]) HH._rebuild()
            }));
          this.release = () => {
            HH.uR.remove(LH), BH.ou.remove(AH)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const HH of this.meshes) this.NQ.QrH(HH);
          for (const HH of this.materials) this.NQ.addMaterial(HH);
          for (const HH of this.geometries) this.NQ.addGeometry(HH);
          for (const HH of this.transformNodes) this.NQ.addTransformNode(HH);
          for (const HH of this.textures) this.NQ.addTexture(HH)
        }
      }
      dispose() {
        var HH;
        for (const BH of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const HH of BH.slice()) HH.dispose();
          BH.length = 0
        }
        null === (HH = this.release) || void 0 === HH || HH.call(this), this.release = null
      }
    }
    class UB {
      constructor(HH, BH, LH, AH, rH, SH, hH) {
        this.asset = HH, this.NQ = BH, this.tree = LH, this.geometryData = rH, this.materials = SH, this.lite = hH, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = AH ? LH : null
      }
      create(HH) {
        if (this.lite) return HH();
        const BH = this.NQ;
        BH._blockEntityCollection = !!this.container;
        try {
          const BH = HH();
          return this.container && (BH._parentContainer = this.container), BH
        } finally {
          BH._blockEntityCollection = !1
        }
      }
      node(HH, BH) {
        return this.create((() => this.lite ? BH ? (0, YB.e)(this.lite, HH) : (0, YB.q)(this.lite, HH) : BH ? new((0, rB.c)().Mesh)(HH, this.NQ) : new((0, rB.c)().TransformNode)(HH, this.NQ)))
      }
      async load() {
        var HH;
        this.asset.model.json.nodes && this.createRoot();
        const BH = this.lite ? null : this.NQ,
          LH = null !== (HH = null === BH || void 0 === BH ? void 0 : BH.blockMaterialDirtyMechanism) && void 0 !== HH && HH;
        let AH;
        BH && (BH.blockMaterialDirtyMechanism = !0);
        try {
          AH = this.loadScene()
        } finally {
          null === BH || void 0 === BH || BH._forceBlockMaterialDirtyMechanism(LH)
        }
        await AH;
        const {
          root: rH,
          tree: SH
        } = this;
        rH && (rH.vI(!0), SH.meshes.push(rH), SH.rootNodes.push(rH));
        for (const tH of this.asset.model.nodes) {
          const HH = this.nodeObjects.get(tH.index);
          HH && ["TransformNode", "LiteNode"].includes(HH.getClassName()) && SH.transformNodes.push(HH);
          for (const BH of null !== (hH = this.nodePrimitives.get(tH.index)) && void 0 !== hH ? hH : []) {
            var hH;
            SH.meshes.push(BH);
            const HH = BH.geometry;
            HH && !SH.geometries.includes(HH) && SH.geometries.push(HH)
          }
        }
      }
      createRoot() {
        const HH = this.node("__root__", !0);
        this.root = HH, HH.vI(!1), this.NQ.useRightHandedSystem || PB(dH, HH)
      }
      loadScene() {
        const HH = [];
        for (const BH of this.asset.model.rootNodes) HH.push(this.loadNode(this.asset.model.nodes[BH], (HH => {
          HH.parent = this.root
        })));
        return HH.push(Promise.resolve()), Promise.all(HH).then((() => {}))
      }
      loadNode(HH, BH) {
        const LH = `/nodes/${HH.index}`,
          AH = [],
          rH = rH => {
            if (xB(rH, LH), PB(HH, rH), HH.hasCamera && !this.NQ.useRightHandedSystem) {
              const {
                bX: HH
              } = rH;
              HH.set(-1, HH.y, HH.z)
            }
            for (const BH of HH.children) AH.push(this.loadNode(this.asset.model.nodes[BH], (HH => {
              HH.parent = rH
            })));
            (LH => {
              vB(LH, HH.extras), BH(LH)
            })(rH)
          };
        if (null === HH.mesh) {
          const BH = this.node(ZH(HH), !1);
          this.nodeObjects.set(HH.index, BH), rH(BH)
        } else {
          const BH = this.asset.model.meshes[HH.mesh];
          AH.push(this.loadMesh(`/meshes/${BH.index}`, HH, BH, rH))
        }
        return Promise.all(AH).then((() => {
          for (const LH of null !== (BH = this.nodePrimitives.get(HH.index)) && void 0 !== BH ? BH : []) {
            var BH;
            zB(LH)
          }
          return this.nodeObjects.get(HH.index)
        }))
      }
      loadMesh(HH, BH, LH, AH) {
        const rH = [],
          SH = ZH(BH);
        if (1 === LH.primitives.length) {
          const AH = LH.primitives[0];
          rH.push(this.loadPrimitive(`${HH}/primitives/${AH.index}`, SH, AH, (HH => {
            this.nodeObjects.set(BH.index, HH), this.nodePrimitives.set(BH.index, [HH])
          })))
        } else {
          const AH = this.node(SH, !1);
          this.nodeObjects.set(BH.index, AH);
          const hH = [];
          this.nodePrimitives.set(BH.index, hH);
          for (const BH of LH.primitives) rH.push(this.loadPrimitive(`${HH}/primitives/${BH.index}`, `${SH}_primitive${BH.index}`, BH, (HH => {
            HH.parent = AH, hH.push(HH)
          })))
        }
        const hH = this.nodeObjects.get(BH.index);
        return AH(hH), Promise.all(rH).then((() => hH))
      }
      loadPrimitive(HH, BH, LH, AH) {
        const rH = [],
          SH = this.node(BH, !0);
        if (SH.sideOrientation = this.NQ.useRightHandedSystem ? uB.c.CounterClockWiseSideOrientation : uB.c.ClockWiseSideOrientation, rH.push(this.geometryData.load(HH, LH, SH).then((HH => {
            if ((0, SB.f)(SH)) {
              var BH, LH;
              const AH = HH;
              SH.replaceModel(AH, Int32Array.of(0, null !== (BH = null === (LH = AH.indexData) || void 0 === LH ? void 0 : LH.length) && void 0 !== BH ? BH : AH.vertexCount, 0, AH.vertexCount))
            } else this.create((() => (HH.applyToMesh(SH), HH)))
          }))), this.materials) {
          const HH = 0 === LH.mode ? uB.c.PointListDrawMode : uB.c.TriangleFillMode,
            BH = null === LH.material ? null : this.asset.model.materials[LH.material];
          rH.push(this.loadMaterial(BH, HH, (HH => {
            SH.material = HH
          })))
        }
        return xB(SH, HH), AH(SH), Promise.all(rH).then((() => SH))
      }
      loadMaterial(HH, BH, LH) {
        var AH;
        const rH = `${null!==(AH=null===HH||void 0===HH?void 0:HH.index)&&void 0!==AH?AH:"default"}:${BH}`;
        let SH = this.materialData.get(rH);
        return SH || (SH = this.createMaterial(HH, BH), this.materialData.set(rH, SH)), LH(SH.material), SH.promise
      }
      createMaterial(HH, BH) {
        const LH = HH ? HH.name || `material${HH.index}` : "__GLTFLoader._default",
          {
            style: AH,
            unlit: rH
          } = this.materials;
        let SH;
        const hH = this.create((() => {
          const hH = (0, MB.b)({
            name: LH,
            NQ: this.NQ,
            sets: {
              ...(0, hB.c)(this.asset, HH, AH, rH),
              fillMode: BH
            },
            unrendered: !0
          });
          return SH = hH.model, hH.mirror
        }));
        let tH = Promise.resolve();
        if (HH) {
          const BH = `/materials/${HH.index}`,
            AH = SH.diffuseTexture;
          if (AH && !AH.mirror) tH = new Promise((HH => setTimeout(HH)));
          else if (AH) {
            const rH = AH.mirror;
            rH._parentContainer = this.container, rH.name = `${LH} (Base Color)`, xB(rH, `${BH}${HH.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(rH), tH = (0, QB.r)(AH)
          }
          vB(hH, HH.extras), xB(hH, BH)
        }
        return this.tree.materials.push(hH), {
          material: hH,
          promise: tH
        }
      }
    }

    function VB() {
      XB.d.dracoDecodes = TH.decodes, XB.d.dracoWorkersStarted = TH.workersStarted, XB.d.dracoMostWorkers = TH.mostWorkers
    }
    async function OB(HH, BH, LH, rH, SH) {
      try {
        return await async function(HH, BH, LH, rH, SH, hH) {
          var tH;
          let zH;
          const CH = null === (tH = (0, WB.c)()) || void 0 === tH ? void 0 : tH.mX,
            EH = null !== CH && void 0 !== CH && CH.yu && BH === CH.yN() ? CH : null,
            XH = SH && !EH;
          return await AB(HH, BH, LH, rH, AH.e, (HH => (zH = new TB(BH, XH), new UB(HH, BH, zH, XH, new CB(BH, rH), hH, EH).load())), !SH), zH
        }(HH, BH, LH, mH, rH, SH)
      } finally {
        VB()
      }
    }
    async function bB(HH, BH, LH, rH) {
      try {
        return await AB(HH, BH, LH, mH, AH.e, (HH => rH(HH, new CB(BH, mH))))
      } finally {
        VB()
      }
    }
    EB = tH, WH || (WH = {
      scriptUrl: new URL(EB.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(EB.wasmBinaryUrl, location.href).href
    })
  },
  37014: HH => {
    HH.exports = function(HH, BH, LH, AH) {
      var rH = self || window;
      try {
        try {
          var SH;
          try {
            SH = new rH.Blob([HH])
          } catch (CH) {
            (SH = new(rH.BlobBuilder || rH.WebKitBlobBuilder || rH.MozBlobBuilder || rH.MSBlobBuilder)).append(HH), SH = SH.getBlob()
          }
          var hH = rH.URL || rH.webkitURL,
            tH = hH.createObjectURL(SH),
            zH = new rH[BH](tH, LH);
          return hH.revokeObjectURL(tH), zH
        } catch (CH) {
          return new rH[BH]("data:application/javascript,".concat(encodeURIComponent(HH)), LH)
        }
      } catch (CH) {
        if (!AH) throw Error("Inline worker is not supported");
        return new rH[BH](AH, LH)
      }
    }
  },
  44996: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  44989: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);