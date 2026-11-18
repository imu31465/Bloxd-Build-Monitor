export const id = 189;
export const ids = [189];
export const modules = {
  40228: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      loadGlbAsset: () => xc,
      loadGlbTree: () => fc
    });
    var FJ = ZJ(36865),
      UJ = ZJ(40234),
      eJ = ZJ(35402),
      XJ = ZJ.n(eJ);

    function AJ() {
      return XJ()('(()=>{class JJ extends Error{}function cJ(cJ,ZJ){const FJ=cJ._malloc(ZJ);if(0===FJ)throw new JJ(`Draco: the decoder\'s heap refused ${ZJ} bytes`);return FJ}function ZJ(JJ){return{[JJ.DT_FLOAT32]:[Float32Array,5126],[JJ.DT_INT8]:[Int8Array,5120],[JJ.DT_INT16]:[Int16Array,5122],[JJ.DT_INT32]:[Int32Array,5124],[JJ.DT_UINT8]:[Uint8Array,5121],[JJ.DT_UINT16]:[Uint16Array,5123],[JJ.DT_UINT32]:[Uint32Array,5125]}}function FJ(cJ,FJ,UJ,eJ,XJ){let AJ=null,qJ=null,jJ=null;try{AJ=new cJ.Decoder,qJ=new cJ.DecoderBuffer,qJ.Init(FJ,FJ.byteLength);let YJ=0;const hJ=AJ.GetEncodedGeometryType(qJ);if(hJ===cJ.TRIANGULAR_MESH){const ZJ=new cJ.Mesh;jJ=ZJ;const FJ=AJ.DecodeBufferToMesh(qJ,ZJ);if(!FJ.ok()||0===ZJ.ptr)throw new JJ(FJ.error_msg());YJ=3*ZJ.num_faces()}else{if(hJ!==cJ.POINT_CLOUD)throw new JJ(`Draco: Cannot decode invalid geometry type ${hJ}`);{const ZJ=new cJ.PointCloud;jJ=ZJ;const FJ=AJ.DecodeBufferToPointCloud(qJ,ZJ);if(!FJ.ok()||!ZJ.ptr)throw new JJ(FJ.error_msg())}}const DJ=jJ.num_points();if(DJ!==eJ.vertices||YJ!==eJ.indices)throw new JJ(`Draco: decoded ${DJ} vertices and ${YJ} indices, the accessors declare ${eJ.vertices} and ${eJ.indices}`);const sJ=ZJ(cJ),nJ=[];for(const{kind:cJ,id:ZJ,components:FJ}of UJ){const UJ=AJ.GetAttributeByUniqueId(jJ,ZJ);if(!UJ||0===UJ.ptr)throw new JJ(`Draco: no attribute with id ${ZJ} (${cJ})`);const eJ=UJ.data_type();if(!sJ[eJ])throw new JJ(`Draco: Cannot decode invalid data type ${eJ}`);if(UJ.num_components()!==FJ)throw new JJ(`Draco: ${cJ} decodes to ${UJ.num_components()} components, its accessor declares ${FJ}`);nJ.push([cJ,UJ,eJ])}return XJ({dracoDecoder:AJ,geometry:jJ,triangles:hJ===cJ.TRIANGULAR_MESH,numPoints:DJ,numIndices:YJ,attributes:nJ})}finally{jJ&&cJ.destroy(jJ),qJ&&cJ.destroy(qJ),AJ&&cJ.destroy(AJ)}}const UJ=self;let eJ=null;self.onmessage=JJ=>{let{data:XJ}=JJ;if("init"===XJ.id){try{importScripts(XJ.url),eJ=DracoDecoderModule({wasmBinary:XJ.wasmBinary}),UJ.postMessage({id:"initDone"})}catch(hJ){UJ.postMessage({id:"initError",message:hJ instanceof Error?hJ.message:String(hJ)})}return}const{seq:AJ,data:qJ,attributeIds:jJ,expected:YJ}=XJ;eJ?eJ.then((JJ=>{try{const eJ=function(JJ,UJ,eJ,XJ){const AJ=Object.keys(eJ).map((JJ=>({kind:JJ,id:eJ[JJ],components:XJ.components[JJ]})));return FJ(JJ,UJ,AJ,XJ,(FJ=>{let{dracoDecoder:UJ,geometry:eJ,triangles:XJ,numPoints:AJ,numIndices:qJ,attributes:jJ}=FJ;const YJ=ZJ(JJ);let hJ=null;if(XJ){const ZJ=4*qJ,FJ=cJ(JJ,ZJ);try{UJ.GetTrianglesUInt32Array(eJ,ZJ,FJ),hJ=new Uint32Array(qJ),hJ.set(new Uint32Array(JJ.HEAPF32.buffer,FJ,qJ))}finally{JJ._free(FJ)}}const DJ=[];for(const[ZJ,sJ,nJ]of jJ){const[FJ]=YJ[nJ],XJ=sJ.num_components(),qJ=AJ*XJ,jJ=qJ*FJ.BYTES_PER_ELEMENT,hJ=cJ(JJ,jJ);try{UJ.GetAttributeDataArrayForAllPoints(eJ,sJ,nJ,jJ,hJ),DJ.push({kind:ZJ,data:new FJ(JJ.HEAPF32.buffer,hJ,qJ).slice(),size:XJ,byteOffset:sJ.byte_offset(),byteStride:sJ.byte_stride(),normalized:sJ.normalized()})}finally{JJ._free(hJ)}}return{indices:hJ,attributes:DJ,totalVertices:AJ}}))}(JJ,qJ,jJ,YJ),XJ=eJ.attributes.map((JJ=>JJ.data.buffer));eJ.indices&&XJ.push(eJ.indices.buffer),UJ.postMessage({id:"decoded",seq:AJ,...eJ},XJ)}catch(hJ){UJ.postMessage({id:"decodeError",seq:AJ,message:hJ instanceof Error?hJ.message:String(hJ)})}}),(JJ=>{UJ.postMessage({id:"decodeError",seq:AJ,message:JJ instanceof Error?JJ.message:String(JJ)})})):UJ.postMessage({id:"decodeError",seq:AJ,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, ZJ.p + "dracoDecode.worker.96fc4702.worker.js")
    }
    const qJ = 1e3;
    let jJ = null,
      YJ = null;
    const hJ = [],
      DJ = [];
    let sJ = 0;
    const nJ = {
      decodes: 0,
      workersStarted: 0,
      mostWorkers: 0
    };

    function GJ() {
      if (!jJ) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: JJ,
        wasmBinaryUrl: cJ
      } = jJ;
      return YJ ??= fetch(cJ).then((JJ => {
        if (!JJ.ok) throw new Error(`Draco: fetching ${cJ} failed: ${JJ.status}`);
        return JJ.arrayBuffer()
      })), YJ.catch((() => {
        YJ = null
      })), nJ.workersStarted++, YJ.then((cJ => new Promise(((ZJ, FJ) => {
        const UJ = new AJ;
        UJ.onerror = JJ => {
          UJ.onmessage = null, UJ.onerror = null, UJ.terminate(), FJ(new Error("Draco: the decode worker failed to start" + (JJ.message ? `: ${JJ.message}` : " (its script did not load)")))
        }, UJ.onmessage = JJ => {
          let {
            data: cJ
          } = JJ;
          UJ.onmessage = null, UJ.onerror = null, "initDone" === cJ.id ? ZJ(UJ) : (UJ.terminate(), FJ(new Error(`Draco: ${"initError"===cJ.id?cJ.message:"the worker did not start"}`)))
        };
        const eJ = cJ.slice(0),
          XJ = {
            id: "init",
            url: JJ,
            wasmBinary: eJ
          };
        UJ.postMessage(XJ, [eJ])
      }))))
    }

    function fJ(JJ) {
      const cJ = hJ.indexOf(JJ); - 1 !== cJ && hJ.splice(cJ, 1);
      const ZJ = DJ.shift();
      ZJ && rJ(ZJ)
    }

    function xJ(JJ, cJ) {
      JJ.busy = !0, JJ.releaseTimer && (clearTimeout(JJ.releaseTimer), JJ.releaseTimer = null);
      JJ.worker.then((ZJ => {
        const FJ = sJ++;
        ZJ.onmessage = UJ => {
          let {
            data: eJ
          } = UJ;
          if (("decoded" === eJ.id || "decodeError" === eJ.id) && eJ.seq === FJ) {
            if (ZJ.onmessage = null, ZJ.onerror = null, "decoded" === eJ.id) return nJ.decodes++, cJ.resolve({
              indices: eJ.indices,
              attributes: eJ.attributes,
              totalVertices: eJ.totalVertices
            }), void(() => {
              const cJ = DJ.shift();
              cJ ? xJ(JJ, cJ) : (JJ.busy = !1, JJ.releaseTimer = setTimeout((() => {
                const cJ = hJ.indexOf(JJ); - 1 !== cJ && hJ.splice(cJ, 1), JJ.worker.then((JJ => {
                  JJ.terminate()
                }))
              }), qJ))
            })();
            ZJ.terminate(), cJ.reject(new Error(eJ.message)), fJ(JJ)
          }
        }, ZJ.onerror = FJ => {
          ZJ.onmessage = null, ZJ.onerror = null, ZJ.terminate(), cJ.reject(new Error(`Draco: the decode worker failed: ${FJ.message}`)), fJ(JJ)
        };
        const UJ = {
          id: "decode",
          seq: FJ,
          data: cJ.data,
          attributeIds: cJ.attributeIds,
          expected: cJ.expected
        };
        ZJ.postMessage(UJ, [cJ.data.buffer])
      }), (ZJ => {
        cJ.reject(ZJ instanceof Error ? ZJ : new Error(String(ZJ))), fJ(JJ)
      }))
    }

    function rJ(JJ) {
      const cJ = hJ.find((JJ => !JJ.busy));
      if (cJ) xJ(cJ, JJ);
      else {
        if (hJ.length < function() {
            const JJ = "object" === typeof navigator ? navigator.hardwareConcurrency : 0;
            return JJ ? Math.max(1, Math.min(Math.floor(.5 * JJ), 4)) : 1
          }()) {
          const cJ = {
            worker: GJ(),
            busy: !0,
            releaseTimer: null
          };
          return hJ.push(cJ), nJ.mostWorkers = Math.max(nJ.mostWorkers, hJ.length), void xJ(cJ, JJ)
        }
        DJ.push(JJ)
      }
    }

    function vJ(JJ, cJ, ZJ) {
      return new Promise(((FJ, UJ) => {
        rJ({
          data: new Int8Array(JJ.buffer, JJ.byteOffset, JJ.byteLength).slice(),
          attributeIds: cJ,
          expected: ZJ,
          resolve: FJ,
          reject: UJ
        })
      }))
    }
    var mJ = ZJ(36374),
      QJ = ZJ(36378),
      EJ = ZJ(8620),
      VJ = ZJ(8615);
    const KJ = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function yJ(JJ) {
      const cJ = (0, VJ.j)(JJ.byteLength);
      if (cJ) throw new EJ.q(cJ);
      const {
        json: ZJ,
        bin: FJ
      } = (0, EJ.F)(JJ), UJ = (0, VJ.f)(ZJ, FJ);
      if (UJ) throw new EJ.q(UJ);
      try {
        return function(JJ, cJ) {
          var ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ;
          const xJ = new Map,
            rJ = ZJ => {
              let FJ = xJ.get(ZJ);
              if (!FJ) {
                var UJ;
                const eJ = JJ.bufferViews[ZJ],
                  XJ = null !== (UJ = eJ.byteOffset) && void 0 !== UJ ? UJ : 0;
                FJ = {
                  index: ZJ,
                  bytes: cJ.subarray(XJ, XJ + eJ.byteLength),
                  byteStride: eJ.byteStride
                }, xJ.set(ZJ, FJ)
              }
              return FJ
            },
            vJ = new Map,
            mJ = cJ => {
              let ZJ = vJ.get(cJ);
              if (!ZJ) {
                var FJ;
                const UJ = JJ.accessors[cJ];
                ZJ = {
                  index: cJ,
                  count: UJ.count,
                  type: UJ.type,
                  numComponents: EJ.s[UJ.type],
                  componentType: UJ.componentType,
                  normalized: null !== (FJ = UJ.normalized) && void 0 !== FJ && FJ,
                  byteOffset: UJ.byteOffset,
                  bufferView: void 0 === UJ.bufferView ? null : rJ(UJ.bufferView),
                  min: UJ.min,
                  max: UJ.max
                }, vJ.set(cJ, ZJ)
              }
              return ZJ
            },
            QJ = null !== (ZJ = null === (FJ = JJ.extensionsUsed) || void 0 === FJ ? void 0 : FJ.includes("KHR_draco_mesh_compression")) && void 0 !== ZJ && ZJ,
            VJ = (null !== (UJ = JJ.meshes) && void 0 !== UJ ? UJ : []).map(((cJ, ZJ) => {
              const FJ = cJ.primitives.map(((cJ, ZJ) => {
                var FJ, UJ, eJ;
                const XJ = QJ ? null === (FJ = cJ.extensions) || void 0 === FJ ? void 0 : FJ.KHR_draco_mesh_compression : void 0;
                let AJ = null;
                const qJ = [];
                if (XJ) {
                  const ZJ = {
                    vertices: JJ.accessors[cJ.attributes.POSITION].count,
                    indices: void 0 === cJ.indices ? 0 : JJ.accessors[cJ.indices].count,
                    components: {}
                  };
                  AJ = {
                    bufferView: rJ(XJ.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: ZJ
                  };
                  for (const [FJ, UJ] of EJ.l) {
                    const eJ = XJ.attributes[FJ];
                    if (void 0 === eJ) continue;
                    AJ.attributeIds[UJ] = eJ;
                    const qJ = cJ.attributes[FJ];
                    var jJ;
                    if (void 0 !== qJ) AJ.normalized[UJ] = null !== (jJ = JJ.accessors[qJ].normalized) && void 0 !== jJ && jJ, ZJ.components[UJ] = EJ.s[JJ.accessors[qJ].type]
                  }
                } else
                  for (const [JJ, YJ] of EJ.l) {
                    const ZJ = cJ.attributes[JJ];
                    void 0 !== ZJ && qJ.push({
                      semantic: JJ,
                      kind: YJ,
                      accessor: mJ(ZJ)
                    })
                  }
                return {
                  index: ZJ,
                  mode: null !== (UJ = cJ.mode) && void 0 !== UJ ? UJ : 4,
                  attributes: qJ,
                  indices: XJ || void 0 === cJ.indices ? null : mJ(cJ.indices),
                  position: void 0 === cJ.attributes.POSITION ? null : mJ(cJ.attributes.POSITION),
                  material: null !== (eJ = cJ.material) && void 0 !== eJ ? eJ : null,
                  draco: AJ
                }
              }));
              return {
                index: ZJ,
                name: cJ.name,
                primitives: FJ,
                extras: cJ.extras
              }
            })),
            yJ = (null !== (eJ = JJ.nodes) && void 0 !== eJ ? eJ : []).map(((JJ, cJ) => {
              var ZJ, FJ;
              return {
                index: cJ,
                name: JJ.name,
                children: null !== (ZJ = JJ.children) && void 0 !== ZJ ? ZJ : [],
                mesh: null !== (FJ = JJ.mesh) && void 0 !== FJ ? FJ : null,
                translation: JJ.translation,
                rotation: JJ.rotation,
                scale: JJ.scale,
                hasCamera: void 0 !== JJ.camera,
                extras: JJ.extras
              }
            })),
            SJ = null !== (XJ = null === (AJ = JJ.extensionsUsed) || void 0 === AJ ? void 0 : AJ.includes("KHR_materials_unlit")) && void 0 !== XJ && XJ,
            IJ = null !== (qJ = null === (jJ = JJ.extensionsUsed) || void 0 === jJ ? void 0 : jJ.includes("KHR_texture_transform")) && void 0 !== qJ && qJ,
            MJ = (null !== (YJ = JJ.materials) && void 0 !== YJ ? YJ : []).map(((JJ, cJ) => {
              var ZJ, FJ, UJ, eJ;
              const XJ = JJ.pbrMetallicRoughness,
                AJ = null === XJ || void 0 === XJ ? void 0 : XJ.baseColorTexture;
              return {
                index: cJ,
                name: JJ.name,
                extras: JJ.extras,
                unlit: SJ && void 0 !== (null === (ZJ = JJ.extensions) || void 0 === ZJ ? void 0 : ZJ.KHR_materials_unlit),
                pbr: XJ ? {
                  baseColorFactor: XJ.baseColorFactor,
                  metallicFactor: XJ.metallicFactor,
                  roughnessFactor: XJ.roughnessFactor
                } : null,
                baseColorTexture: AJ ? {
                  texture: AJ.index,
                  transform: IJ && (null === (FJ = AJ.extensions) || void 0 === FJ ? void 0 : FJ.KHR_texture_transform) || null
                } : null,
                emissiveFactor: JJ.emissiveFactor,
                alphaMode: null !== (UJ = JJ.alphaMode) && void 0 !== UJ ? UJ : "OPAQUE",
                alphaCutoff: JJ.alphaCutoff,
                doubleSided: null !== (eJ = JJ.doubleSided) && void 0 !== eJ && eJ
              }
            })),
            bJ = (null !== (hJ = JJ.textures) && void 0 !== hJ ? hJ : []).map(((cJ, ZJ) => {
              var FJ, UJ;
              const eJ = void 0 === cJ.sampler ? KJ : {
                index: cJ.sampler,
                ...null === (FJ = JJ.samplers) || void 0 === FJ ? void 0 : FJ[cJ.sampler]
              };
              return {
                index: ZJ,
                sampler: {
                  index: eJ.index,
                  magFilter: eJ.magFilter,
                  minFilter: eJ.minFilter,
                  wrapS: eJ.wrapS,
                  wrapT: eJ.wrapT
                },
                image: null !== (UJ = cJ.source) && void 0 !== UJ ? UJ : -1
              }
            })),
            wJ = (null !== (DJ = JJ.images) && void 0 !== DJ ? DJ : []).map(((JJ, cJ) => ({
              index: cJ,
              name: JJ.name,
              mimeType: JJ.mimeType,
              bufferView: rJ(JJ.bufferView)
            }))),
            WJ = null !== (sJ = (0, EJ.D)(JJ)) && void 0 !== sJ ? sJ : 0;
          return {
            json: JJ,
            rootNodes: null !== (nJ = null === (GJ = JJ.scenes) || void 0 === GJ || null === (fJ = GJ[WJ]) || void 0 === fJ ? void 0 : fJ.nodes) && void 0 !== nJ ? nJ : [],
            nodes: yJ,
            meshes: VJ,
            materials: MJ,
            textures: bJ,
            images: wJ
          }
        }(ZJ, FJ)
      } catch (eJ) {
        throw eJ instanceof EJ.o ? eJ : new EJ.o(`reading the GLB failed: ${eJ instanceof Error?eJ.message:String(eJ)}`)
      }
    }
    async function SJ(JJ, cJ) {
      var ZJ, FJ;
      const UJ = JJ.draco;
      if (!UJ) throw new EJ.o("not a Draco primitive");
      let eJ;
      try {
        eJ = await cJ(UJ.bufferView.bytes, UJ.attributeIds, UJ.expected)
      } catch (jJ) {
        throw new EJ.o(`Draco decoding failed: ${jJ instanceof Error?jJ.message:String(jJ)}`)
      }
      const {
        vertices: XJ,
        indices: AJ,
        components: qJ
      } = UJ.expected;
      if (eJ.totalVertices !== XJ || (null !== (ZJ = null === (FJ = eJ.indices) || void 0 === FJ ? void 0 : FJ.length) && void 0 !== ZJ ? ZJ : 0) !== AJ || eJ.attributes.some((JJ => JJ.size !== qJ[JJ.kind] || JJ.data.length !== XJ * JJ.size))) throw new EJ.o("Draco decoding gave other counts than the accessors declare");
      for (const YJ of eJ.attributes) {
        const JJ = UJ.normalized[YJ.kind];
        void 0 !== JJ && (YJ.normalized = JJ)
      }
      return eJ
    }
    const IJ = new WeakMap;

    function MJ(JJ, cJ) {
      var ZJ;
      const FJ = null !== (ZJ = IJ.get(JJ)) && void 0 !== ZJ ? ZJ : cJ(JJ);
      return IJ.set(JJ, FJ), FJ
    }

    function bJ(JJ) {
      const cJ = JJ.bufferView,
        ZJ = 5125 === JJ.componentType ? Uint32Array : Uint16Array,
        FJ = cJ.bytes.buffer,
        UJ = cJ.bytes.byteOffset + (JJ.byteOffset || 0);
      return UJ % ZJ.BYTES_PER_ELEMENT !== 0 ? new ZJ(FJ.slice(UJ, UJ + JJ.count * ZJ.BYTES_PER_ELEMENT), 0) : new ZJ(FJ, UJ, JJ.count)
    }

    function wJ(JJ, cJ) {
      if (JJ.min && JJ.max) return [new Float64Array(JJ.min), new Float64Array(JJ.max)];
      const ZJ = cJ.find((JJ => {
          let {
            kind: cJ
          } = JJ;
          return "position" === cJ
        })),
        FJ = ZJ ? (0, QJ.h)(ZJ, JJ.count) : new Float32Array(0);
      return (0, QJ.t)(FJ.length / 3, ((JJ, cJ) => FJ[3 * JJ + cJ]))
    }

    function WJ(JJ) {
      const cJ = JJ.attributes.map((JJ => {
          var cJ, ZJ;
          let {
            kind: FJ,
            accessor: UJ
          } = JJ;
          const {
            bufferView: eJ,
            numComponents: XJ
          } = UJ;
          if (!eJ) {
            return {
              kind: FJ,
              data: MJ(UJ, (() => new Float32Array(XJ * UJ.count))),
              offset: 0,
              stride: 4 * XJ,
              components: XJ,
              glType: 5126,
              isNormalized: !1
            }
          }
          const AJ = null !== (cJ = eJ.byteStride) && void 0 !== cJ ? cJ : XJ * EJ.e[UJ.componentType];
          return {
            kind: FJ,
            data: eJ.bytes,
            offset: null !== (ZJ = UJ.byteOffset) && void 0 !== ZJ ? ZJ : 0,
            stride: AJ,
            components: XJ,
            glType: UJ.componentType,
            isNormalized: UJ.normalized
          }
        })),
        ZJ = JJ.indices,
        FJ = ZJ && MJ(ZJ, bJ),
        UJ = JJ.position;
      return new QJ.f(cJ, FJ, UJ.count, ...wJ(UJ, cJ))
    }
    const gJ = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function HJ(JJ, cJ) {
      const ZJ = cJ.attributes.map((JJ => {
        let {
          kind: cJ,
          data: ZJ,
          size: FJ,
          byteOffset: UJ,
          byteStride: eJ,
          normalized: XJ
        } = JJ;
        return {
          kind: cJ,
          data: ZJ,
          offset: UJ,
          stride: eJ,
          components: FJ,
          glType: 5120 + gJ.indexOf(ZJ.constructor),
          isNormalized: XJ
        }
      }));
      return new QJ.f(ZJ, cJ.indices, cJ.totalVertices, ...wJ(JJ.position, ZJ))
    }

    function PJ(JJ) {
      const cJ = JJ.lastIndexOf("/");
      return cJ < 0 ? JJ : JJ.substring(cJ + 1)
    }

    function kJ(JJ) {
      const cJ = JJ.lastIndexOf("/");
      return cJ < 0 ? "" : JJ.substring(0, cJ + 1)
    }

    function pJ(JJ) {
      return JJ.name || `node${JJ.index}`
    }
    const dJ = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      zJ = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      NJ = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function OJ(JJ) {
      var cJ, ZJ, FJ, UJ;
      const eJ = null !== (cJ = JJ.minFilter) && void 0 !== cJ ? cJ : 9987;
      return 9729 === (null !== (ZJ = JJ.magFilter) && void 0 !== ZJ ? ZJ : 9729) ? null !== (FJ = zJ[eJ]) && void 0 !== FJ ? FJ : 3 : null !== (UJ = NJ[eJ]) && void 0 !== UJ ? UJ : 4
    }
    const TJ = {
      33071: 0,
      33648: 2
    };

    function CJ(JJ) {
      var cJ;
      return null !== (cJ = TJ[null !== JJ && void 0 !== JJ ? JJ : 10497]) && void 0 !== cJ ? cJ : 1
    }

    function uJ(JJ) {
      return 9728 === JJ.minFilter || 9729 === JJ.minFilter
    }

    function iJ(JJ) {
      var cJ, ZJ, FJ;
      const UJ = Float64Array.from(null !== (cJ = JJ.scale) && void 0 !== cJ ? cJ : [1, 1, 1]);
      return JJ.hasCamera && (UJ[0] = -1), {
        translation: Float64Array.from(null !== (ZJ = JJ.translation) && void 0 !== ZJ ? ZJ : [0, 0, 0]),
        rotation: Float64Array.from(null !== (FJ = JJ.rotation) && void 0 !== FJ ? FJ : [0, 0, 0, 1]),
        scale: UJ
      }
    }

    function RJ(JJ, cJ) {
      let {
        translation: ZJ,
        rotation: FJ,
        scale: UJ
      } = JJ;
      const eJ = new Float32Array(16);
      return (0, mJ.c)(UJ, 0, FJ, 0, ZJ, 0, eJ), cJ && (0, mJ.r)(eJ, cJ, 0, eJ), eJ
    }
    class LJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.model = JJ, this.decode = cJ, this.fileInfo = ZJ, this.uniqueRootUrl = FJ, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const UJ = new Set,
          eJ = (cJ, ZJ) => {
            const FJ = JJ.nodes[cJ];
            if (this.parents.has(FJ)) throw new EJ.o(`/nodes/${cJ}: Invalid recursive node hierarchy`);
            this.parents.set(FJ, ZJ);
            const XJ = null === FJ.mesh ? [] : JJ.meshes[FJ.mesh].primitives,
              AJ = XJ.map((JJ => {
                const cJ = XJ.length > 1;
                return {
                  name: cJ ? `${pJ(FJ)}_primitive${JJ.index}` : pJ(FJ),
                  node: FJ,
                  primitive: JJ,
                  part: cJ,
                  geometry: null
                }
              }));
            this.uses.set(FJ, AJ);
            const qJ = null !== FJ.mesh && UJ.has(FJ.mesh);
            UJ.add(FJ.mesh), this.own.set(FJ, qJ ? [] : AJ);
            for (const JJ of FJ.children) eJ(JJ, FJ)
          };
        for (const XJ of JJ.rootNodes) eJ(XJ, null);
        this.primitives = JJ.nodes.flatMap((JJ => {
          var cJ;
          return null !== (cJ = this.own.get(JJ)) && void 0 !== cJ ? cJ : []
        }))
      }
      decodeGeometries() {
        const JJ = new Map;
        return Promise.all(this.primitives.map((async cJ => {
          const {
            primitive: ZJ
          } = cJ, FJ = ZJ.draco;
          let UJ = FJ ? JJ.get(FJ.bufferView.index) : Promise.resolve(WJ(ZJ));
          UJ || (UJ = SJ(ZJ, this.decode).then((JJ => HJ(ZJ, JJ))), JJ.set(FJ.bufferView.index, UJ)), cJ.geometry = await UJ
        })))
      }
      parentOf(JJ) {
        var cJ;
        return null !== (cJ = this.parents.get(JJ)) && void 0 !== cJ ? cJ : null
      }
      meshesUnder(JJ) {
        const cJ = this.model.nodes.filter((JJ => this.uses.has(JJ)));
        for (const FJ of cJ) {
          const cJ = this.uses.get(FJ),
            ZJ = cJ.find((cJ => cJ.name === JJ));
          if (ZJ) return 1 === cJ.length ? this.subtree(FJ) : this.own.get(FJ).includes(ZJ) ? [ZJ] : []
        }
        const ZJ = cJ.find((cJ => 1 !== this.uses.get(cJ).length && pJ(cJ) === JJ));
        return ZJ ? this.subtree(ZJ) : null
      }
      subtree(JJ) {
        return [...this.own.get(JJ), ...JJ.children.flatMap((JJ => this.subtree(this.model.nodes[JJ])))]
      }
      worldMatrix(JJ, cJ, ZJ) {
        let FJ = RJ(iJ(cJ ? dJ : {}), null);
        const UJ = [];
        for (let XJ = JJ.part ? JJ.node : this.parentOf(JJ.node); XJ; XJ = this.parentOf(XJ)) UJ.unshift(XJ);
        for (const XJ of UJ) FJ = RJ(iJ(XJ), FJ);
        const eJ = iJ(JJ.part ? {} : JJ.node);
        return void 0 !== ZJ && eJ.scale.fill(ZJ), RJ(eJ, FJ)
      }
      floats(JJ) {
        const {
          vertexAttributes: cJ,
          vertexCount: ZJ
        } = JJ.geometry;
        return new Map(cJ.map((JJ => [JJ.kind, (0, QJ.h)(JJ, ZJ)])))
      }
      imageUrl(JJ) {
        return function(JJ, cJ, ZJ) {
          let {
            name: FJ
          } = cJ;
          return `data:${JJ}${FJ}#image${ZJ}`
        }(this.uniqueRootUrl, this.fileInfo, JJ)
      }
      textureDesc(JJ, cJ) {
        var ZJ;
        let {
          texture: FJ,
          transform: UJ
        } = JJ;
        const {
          sampler: eJ,
          image: XJ
        } = this.model.textures[FJ], {
          bufferView: AJ,
          mimeType: qJ,
          name: jJ
        } = this.model.images[XJ], YJ = UJ && {
          ...UJ.offset ? {
            uOffset: UJ.offset[0],
            vOffset: UJ.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...UJ.rotation ? {
            wAng: -UJ.rotation
          } : {},
          ...UJ.scale ? {
            uScale: UJ.scale[0],
            vScale: UJ.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(XJ),
          noMipmap: uJ(eJ),
          invertY: !1,
          samplingMode: OJ(eJ),
          data: {
            bytes: AJ.bytes,
            mimeType: qJ,
            label: jJ,
            context: `/textures/${FJ}`
          },
          sets: {
            wrapU: CJ(eJ.wrapS),
            wrapV: CJ(eJ.wrapT),
            ...YJ,
            coordinatesIndex: null !== (ZJ = null === UJ || void 0 === UJ ? void 0 : UJ.texCoord) && void 0 !== ZJ ? ZJ : 0,
            hasAlpha: cJ
          }
        }
      }
    }
    async function aJ(JJ, cJ, ZJ, FJ, UJ, eJ) {
      let XJ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const AJ = function(JJ, cJ, ZJ) {
          return "string" !== typeof cJ ? {
            url: "",
            rootUrl: JJ,
            name: ZJ()
          } : cJ ? cJ.startsWith("data:") ? {
            url: cJ,
            rootUrl: JJ,
            name: ""
          } : JJ ? {
            url: JJ + cJ,
            rootUrl: JJ,
            name: cJ
          } : {
            url: cJ,
            rootUrl: kJ(cJ),
            name: PJ(cJ)
          } : {
            url: JJ,
            rootUrl: kJ(JJ),
            name: PJ(JJ)
          }
        }(ZJ, JJ, UJ),
        qJ = {};
      cJ.addPendingData(qJ);
      try {
        const ZJ = yJ(await async function(JJ, cJ) {
            return "string" !== typeof cJ ? cJ : JJ.url.startsWith("data:") ? (0, EJ.w)(JJ.url) : await (0, EJ.A)(JJ.url)
          }(AJ, JJ)),
          qJ = new LJ(ZJ, FJ, AJ, function(JJ, cJ) {
            let {
              rootUrl: ZJ,
              name: FJ
            } = JJ;
            return !ZJ.startsWith("file:") && FJ ? ZJ : `${ZJ}${cJ()}/`
          }(AJ, UJ));
        return await eJ(qJ), cJ.importedMeshesFiles && (cJ.loadingPluginName = "Fy", XJ && cJ.importedMeshesFiles.push(AJ.url)), qJ
      } finally {
        cJ.removePendingData(qJ)
      }
    }
    var BJ = ZJ(36504),
      tJ = ZJ(36358),
      oJ = ZJ(36851);

    function lJ(JJ) {
      if (null === JJ || void 0 === JJ || !JJ.min || !JJ.max) return null;
      const [cJ, ZJ, FJ] = JJ.min, [UJ, eJ, XJ] = JJ.max, {
        BoundingInfo: AJ,
        Pn: qJ
      } = (0, BJ.d)();
      return new AJ(new qJ(cJ, ZJ, FJ), new qJ(UJ, eJ, XJ))
    }

    function Jc(JJ) {
      (0, tJ.e)(JJ) || (JJ.geometry && JJ.geometry.useBoundingInfoFromGeometry ? JJ._updateBoundingInfo() : JJ.refreshBoundingInfo(!0, !0))
    }
    class cc {
      constructor(JJ, cJ) {
        this.iG = JJ, this.decode = cJ, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(JJ) {
        let cJ = this.viewData.get(JJ.index);
        return cJ || (cJ = this.bufferData.then((() => JJ.bytes)), this.viewData.set(JJ.index, cJ)), cJ
      }
      viewBuffer(JJ) {
        let cJ = this.viewBuffers.get(JJ.index);
        return cJ || (cJ = this.viewBytes(JJ).then((JJ => new((0, BJ.d)().fn)(this.iG.gn(), JJ, !1))), this.viewBuffers.set(JJ.index, cJ)), cJ
      }
      vertexBuffer(JJ, cJ) {
        const {
          kind: ZJ,
          data: FJ
        } = cJ, UJ = `${JJ.index}:${ZJ}`;
        let eJ = this.vertexBuffers.get(UJ);
        if (!eJ) {
          const XJ = JJ.bufferView;
          eJ = XJ ? this.viewBuffer(XJ).then((JJ => this.layoutVertexBuffer(JJ, cJ))) : Promise.resolve(FJ).then((JJ => new((0, BJ.d)().VertexBuffer)(this.iG.gn(), JJ, ZJ, !1))), this.vertexBuffers.set(UJ, eJ)
        }
        return eJ
      }
      layoutVertexBuffer(JJ, cJ) {
        let {
          kind: ZJ,
          offset: FJ,
          stride: UJ,
          components: eJ,
          glType: XJ,
          isNormalized: AJ
        } = cJ;
        const qJ = this.iG.gn();
        return new((0, BJ.d)().VertexBuffer)(qJ, JJ, ZJ, !1, void 0, UJ, void 0, FJ, eJ, XJ, AJ, !0, void 0, !0)
      }
      load(JJ, cJ, ZJ) {
        const FJ = (0, tJ.e)(ZJ),
          UJ = JJ => {
            FJ || (ZJ._delayInfo = ZJ._delayInfo || [], -1 === ZJ._delayInfo.indexOf(JJ) && ZJ._delayInfo.push(JJ))
          },
          eJ = cJ.draco;
        if (eJ) {
          for (const JJ in eJ.attributeIds) UJ(JJ);
          let XJ = this.dracoGeometry.get(eJ.bufferView.index);
          return XJ || (XJ = this.viewBytes(eJ.bufferView).then((async () => {
            let UJ;
            try {
              UJ = await SJ(cJ, this.decode)
            } catch (qJ) {
              throw new EJ.o(`${JJ}: ${qJ instanceof Error?qJ.message:String(qJ)}`)
            }
            const eJ = HJ(cJ, UJ);
            if (FJ) return eJ;
            const XJ = lJ(cJ.position),
              AJ = new((0, BJ.d)().MirroredGeometry)(ZJ.name, this.iG);
            XJ && (AJ._boundingInfo = XJ, AJ.useBoundingInfoFromGeometry = !0), eJ.indexData && AJ.setIndices(eJ.indexData);
            for (const JJ of eJ.vertexAttributes) AJ.setVerticesBuffer(this.layoutVertexBuffer(JJ.data, JJ), eJ.vertexCount);
            return AJ.link(eJ), AJ
          })), this.dracoGeometry.set(eJ.bufferView.index, XJ)), XJ
        }
        const XJ = [],
          AJ = WJ(cJ);
        if (FJ) return ZJ.isUnIndexed = !AJ.indexData, ZJ.hasVertexAlpha = (0, oJ.f)(cJ), Promise.resolve(AJ);
        const qJ = new((0, BJ.d)().MirroredGeometry)(ZJ.name, this.iG),
          {
            indexData: jJ
          } = AJ;
        jJ ? XJ.push(this.viewBytes(cJ.indices.bufferView).then((() => {
          qJ.setIndices(jJ)
        }))) : ZJ.isUnIndexed = !0;
        for (const [YJ, {
            kind: hJ,
            accessor: DJ
          }] of cJ.attributes.entries()) UJ(hJ), XJ.push(this.vertexBuffer(DJ, AJ.vertexAttributes[YJ]).then((JJ => {
          if ("position" === JJ.getKind()) {
            const JJ = lJ(DJ);
            JJ && (qJ._boundingInfo = JJ, qJ.useBoundingInfoFromGeometry = !0)
          }
          qJ.setVerticesBuffer(JJ, AJ.vertexCount)
        })));
        return (0, oJ.f)(cJ) && (ZJ.hasVertexAlpha = !0), Promise.all(XJ).then((() => (qJ.link(AJ), qJ)))
      }
    }
    var Zc, Fc = ZJ(36278),
      Uc = ZJ(36165),
      ec = ZJ(36859),
      Xc = ZJ(36222),
      Ac = ZJ(36261),
      qc = ZJ(2401),
      jc = ZJ(36248);

    function Yc(JJ, cJ) {
      JJ.metadata = JJ.metadata || {};
      const ZJ = JJ._internalMetadata = JJ._internalMetadata || {},
        FJ = ZJ.Fy = ZJ.Fy || {};
      (FJ.pointers = FJ.pointers || []).push(cJ)
    }

    function hc(JJ, cJ) {
      if (cJ && Object.keys(cJ).length > 0) {
        const ZJ = JJ.metadata = JJ.metadata || {};
        (ZJ.Fy = ZJ.Fy || {}).extras = cJ
      }
    }

    function Dc(JJ, cJ) {
      cJ.position = JJ.translation ? Uc.Pn.FromArray(JJ.translation) : Uc.Pn.Zero(), cJ.rotationQuaternion = JJ.rotation ? Uc.Quaternion.FromArray(JJ.rotation) : Uc.Quaternion.Identity(), cJ.GA = JJ.scale ? Uc.Pn.FromArray(JJ.scale) : Uc.Pn.One()
    }
    class sc {
      constructor(JJ, cJ) {
        if (this.iG = JJ, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, cJ) {
          const cJ = JJ.gn(),
            ZJ = JJ.Sy.add((() => {
              this.dispose()
            })),
            FJ = cJ.onContextRestoredObservable.add((() => {
              for (const JJ of [...this.geometries, ...this.meshes, ...this.textures]) JJ._rebuild()
            }));
          this.release = () => {
            JJ.Sy.remove(ZJ), cJ.onContextRestoredObservable.remove(FJ)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const JJ of this.meshes) this.iG.BZJ(JJ);
          for (const JJ of this.materials) this.iG.addMaterial(JJ);
          for (const JJ of this.geometries) this.iG.addGeometry(JJ);
          for (const JJ of this.transformNodes) this.iG.addTransformNode(JJ);
          for (const JJ of this.textures) this.iG.addTexture(JJ)
        }
      }
      dispose() {
        var JJ;
        for (const cJ of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const JJ of cJ.slice()) JJ.dispose();
          cJ.length = 0
        }
        null === (JJ = this.release) || void 0 === JJ || JJ.call(this), this.release = null
      }
    }
    class nc {
      constructor(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        this.asset = JJ, this.iG = cJ, this.tree = ZJ, this.geometryData = UJ, this.materials = eJ, this.lite = XJ, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = FJ ? ZJ : null
      }
      create(JJ) {
        if (this.lite) return JJ();
        const cJ = this.iG;
        cJ._blockEntityCollection = !!this.container;
        try {
          const cJ = JJ();
          return this.container && (cJ._parentContainer = this.container), cJ
        } finally {
          cJ._blockEntityCollection = !1
        }
      }
      node(JJ, cJ) {
        return this.create((() => this.lite ? cJ ? (0, ec.f)(this.lite, JJ) : (0, ec.s)(this.lite, JJ) : cJ ? new((0, BJ.d)().Mesh)(JJ, this.iG) : new((0, BJ.d)().TransformNode)(JJ, this.iG)))
      }
      async load() {
        var JJ;
        this.asset.model.json.nodes && this.createRoot();
        const cJ = this.lite ? null : this.iG,
          ZJ = null !== (JJ = null === cJ || void 0 === cJ ? void 0 : cJ.blockMaterialDirtyMechanism) && void 0 !== JJ && JJ;
        let FJ;
        cJ && (cJ.blockMaterialDirtyMechanism = !0);
        try {
          FJ = this.loadScene()
        } finally {
          null === cJ || void 0 === cJ || cJ._forceBlockMaterialDirtyMechanism(ZJ)
        }
        await FJ;
        const {
          root: UJ,
          tree: eJ
        } = this;
        UJ && (UJ.GV(!0), eJ.meshes.push(UJ), eJ.rootNodes.push(UJ));
        for (const AJ of this.asset.model.nodes) {
          const JJ = this.nodeObjects.get(AJ.index);
          JJ && ["TransformNode", "LiteNode"].includes(JJ.getClassName()) && eJ.transformNodes.push(JJ);
          for (const cJ of null !== (XJ = this.nodePrimitives.get(AJ.index)) && void 0 !== XJ ? XJ : []) {
            var XJ;
            eJ.meshes.push(cJ);
            const JJ = cJ.geometry;
            JJ && !eJ.geometries.includes(JJ) && eJ.geometries.push(JJ)
          }
        }
      }
      createRoot() {
        const JJ = this.node("__root__", !0);
        this.root = JJ, JJ.GV(!1), this.iG.useRightHandedSystem || Dc(dJ, JJ)
      }
      loadScene() {
        const JJ = [];
        for (const cJ of this.asset.model.rootNodes) JJ.push(this.loadNode(this.asset.model.nodes[cJ], (JJ => {
          JJ.parent = this.root
        })));
        return JJ.push(Promise.resolve()), Promise.all(JJ).then((() => {}))
      }
      loadNode(JJ, cJ) {
        const ZJ = `/nodes/${JJ.index}`,
          FJ = [],
          UJ = UJ => {
            if (Yc(UJ, ZJ), Dc(JJ, UJ), JJ.hasCamera && !this.iG.useRightHandedSystem) {
              const {
                GA: JJ
              } = UJ;
              JJ.set(-1, JJ.y, JJ.z)
            }
            for (const cJ of JJ.children) FJ.push(this.loadNode(this.asset.model.nodes[cJ], (JJ => {
              JJ.parent = UJ
            })));
            (ZJ => {
              hc(ZJ, JJ.extras), cJ(ZJ)
            })(UJ)
          };
        if (null === JJ.mesh) {
          const cJ = this.node(pJ(JJ), !1);
          this.nodeObjects.set(JJ.index, cJ), UJ(cJ)
        } else {
          const cJ = this.asset.model.meshes[JJ.mesh];
          FJ.push(this.loadMesh(`/meshes/${cJ.index}`, JJ, cJ, UJ))
        }
        return Promise.all(FJ).then((() => {
          for (const ZJ of null !== (cJ = this.nodePrimitives.get(JJ.index)) && void 0 !== cJ ? cJ : []) {
            var cJ;
            Jc(ZJ)
          }
          return this.nodeObjects.get(JJ.index)
        }))
      }
      loadMesh(JJ, cJ, ZJ, FJ) {
        const UJ = [],
          eJ = pJ(cJ);
        if (1 === ZJ.primitives.length) {
          const FJ = ZJ.primitives[0];
          UJ.push(this.loadPrimitive(`${JJ}/primitives/${FJ.index}`, eJ, FJ, (JJ => {
            this.nodeObjects.set(cJ.index, JJ), this.nodePrimitives.set(cJ.index, [JJ])
          })))
        } else {
          const FJ = this.node(eJ, !1);
          this.nodeObjects.set(cJ.index, FJ);
          const XJ = [];
          this.nodePrimitives.set(cJ.index, XJ);
          for (const cJ of ZJ.primitives) UJ.push(this.loadPrimitive(`${JJ}/primitives/${cJ.index}`, `${eJ}_primitive${cJ.index}`, cJ, (JJ => {
            JJ.parent = FJ, XJ.push(JJ)
          })))
        }
        const XJ = this.nodeObjects.get(cJ.index);
        return FJ(XJ), Promise.all(UJ).then((() => XJ))
      }
      loadPrimitive(JJ, cJ, ZJ, FJ) {
        const UJ = [],
          eJ = this.node(cJ, !0);
        if (eJ.sideOrientation = this.iG.useRightHandedSystem ? Xc.e.CounterClockWiseSideOrientation : Xc.e.ClockWiseSideOrientation, UJ.push(this.geometryData.load(JJ, ZJ, eJ).then((JJ => {
            if ((0, tJ.e)(eJ)) {
              var cJ, ZJ;
              const FJ = JJ;
              eJ.replaceModel(FJ, Int32Array.of(0, null !== (cJ = null === (ZJ = FJ.indexData) || void 0 === ZJ ? void 0 : ZJ.length) && void 0 !== cJ ? cJ : FJ.vertexCount, 0, FJ.vertexCount))
            } else this.create((() => (JJ.applyToMesh(eJ), JJ)))
          }))), this.materials) {
          const JJ = 0 === ZJ.mode ? Xc.e.PointListDrawMode : Xc.e.TriangleFillMode,
            cJ = null === ZJ.material ? null : this.asset.model.materials[ZJ.material];
          UJ.push(this.loadMaterial(cJ, JJ, (JJ => {
            eJ.material = JJ
          })))
        }
        return Yc(eJ, JJ), FJ(eJ), Promise.all(UJ).then((() => eJ))
      }
      loadMaterial(JJ, cJ, ZJ) {
        var FJ;
        const UJ = `${null!==(FJ=null===JJ||void 0===JJ?void 0:JJ.index)&&void 0!==FJ?FJ:"default"}:${cJ}`;
        let eJ = this.materialData.get(UJ);
        return eJ || (eJ = this.createMaterial(JJ, cJ), this.materialData.set(UJ, eJ)), ZJ(eJ.material), eJ.promise
      }
      createMaterial(JJ, cJ) {
        const ZJ = JJ ? JJ.name || `material${JJ.index}` : "__GLTFLoader._default",
          {
            style: FJ,
            unlit: UJ
          } = this.materials;
        let eJ;
        const XJ = this.create((() => {
          const XJ = (0, jc.e)({
            name: ZJ,
            iG: this.iG,
            sets: {
              ...(0, oJ.d)(this.asset, JJ, FJ, UJ),
              fillMode: cJ
            },
            unrendered: !0
          });
          return eJ = XJ.model, XJ.mirror
        }));
        let AJ = Promise.resolve();
        if (JJ) {
          const cJ = `/materials/${JJ.index}`,
            FJ = eJ.diffuseTexture;
          if (FJ && !FJ.mirror) AJ = new Promise((JJ => setTimeout(JJ)));
          else if (FJ) {
            const UJ = FJ.mirror;
            UJ._parentContainer = this.container, UJ.name = `${ZJ} (Base Color)`, Yc(UJ, `${cJ}${JJ.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(UJ), AJ = (0, Ac.t)(FJ)
          }
          hc(XJ, JJ.extras), Yc(XJ, cJ)
        }
        return this.tree.materials.push(XJ), {
          material: XJ,
          promise: AJ
        }
      }
    }

    function Gc() {
      Fc.d.dracoDecodes = nJ.decodes, Fc.d.dracoWorkersStarted = nJ.workersStarted, Fc.d.dracoMostWorkers = nJ.mostWorkers
    }
    async function fc(JJ, cJ, ZJ, UJ, eJ) {
      try {
        return await async function(JJ, cJ, ZJ, UJ, eJ, XJ) {
          var AJ;
          let qJ;
          const jJ = null === (AJ = (0, qc.h)()) || void 0 === AJ ? void 0 : AJ.XG,
            YJ = null !== jJ && void 0 !== jJ && jJ.AG && cJ === jJ.Qy() ? jJ : null,
            hJ = eJ && !YJ;
          return await aJ(JJ, cJ, ZJ, UJ, FJ.d, (JJ => (qJ = new sc(cJ, hJ), new nc(JJ, cJ, qJ, hJ, new cc(cJ, UJ), XJ, YJ).load())), !eJ), qJ
        }(JJ, cJ, ZJ, vJ, UJ, eJ)
      } finally {
        Gc()
      }
    }
    async function xc(JJ, cJ, ZJ, UJ) {
      try {
        return await aJ(JJ, cJ, ZJ, vJ, FJ.d, (JJ => UJ(JJ, new cc(cJ, vJ))))
      } finally {
        Gc()
      }
    }
    Zc = UJ.b, jJ || (jJ = {
      scriptUrl: new URL(Zc.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(Zc.wasmBinaryUrl, location.href).href
    })
  },
  40234: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ
    });
    var FJ = ZJ(112),
      UJ = ZJ(1106);

    function eJ(JJ) {
      return (0, FJ.b)() ? `https://${UJ.c.discordDomain}/${JJ.href}` : JJ.href
    }
    const XJ = {
      scriptUrl: eJ(new ZJ.U(ZJ(40239))),
      wasmBinaryUrl: eJ(new ZJ.U(ZJ(40245)))
    }
  },
  35402: JJ => {
    JJ.exports = function(JJ, cJ, ZJ, FJ) {
      var UJ = self || window;
      try {
        try {
          var eJ;
          try {
            eJ = new UJ.Blob([JJ])
          } catch (jJ) {
            (eJ = new(UJ.BlobBuilder || UJ.WebKitBlobBuilder || UJ.MozBlobBuilder || UJ.MSBlobBuilder)).append(JJ), eJ = eJ.getBlob()
          }
          var XJ = UJ.URL || UJ.webkitURL,
            AJ = XJ.createObjectURL(eJ),
            qJ = new UJ[cJ](AJ, ZJ);
          return XJ.revokeObjectURL(AJ), qJ
        } catch (jJ) {
          return new UJ[cJ]("data:application/javascript,".concat(encodeURIComponent(JJ)), ZJ)
        }
      } catch (jJ) {
        if (!FJ) throw Error("Inline worker is not supported");
        return new UJ[cJ](FJ, ZJ)
      }
    }
  },
  40245: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  40239: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);