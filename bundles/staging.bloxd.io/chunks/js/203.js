export const id = 203;
export const ids = [203];
export const modules = {
  40884: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      loadGlbAsset: () => fR,
      loadGlbTree: () => WR
    });
    var tU = gU(37439),
      pU = gU(40886),
      EU = gU(35875),
      PU = gU.n(EU);

    function TU() {
      return PU()('(()=>{class UU extends Error{}function RU(RU,gU){const tU=RU._malloc(gU);if(0===tU)throw new UU(`Draco: the decoder\'s heap refused ${gU} bytes`);return tU}function gU(UU){return{[UU.DT_FLOAT32]:[Float32Array,5126],[UU.DT_INT8]:[Int8Array,5120],[UU.DT_INT16]:[Int16Array,5122],[UU.DT_INT32]:[Int32Array,5124],[UU.DT_UINT8]:[Uint8Array,5121],[UU.DT_UINT16]:[Uint16Array,5123],[UU.DT_UINT32]:[Uint32Array,5125]}}function tU(RU,tU,pU,EU,PU){let TU=null,qU=null,KU=null;try{TU=new RU.Decoder,qU=new RU.DecoderBuffer,qU.Init(tU,tU.byteLength);let cU=0;const GU=TU.GetEncodedGeometryType(qU);if(GU===RU.TRIANGULAR_MESH){const gU=new RU.Mesh;KU=gU;const tU=TU.DecodeBufferToMesh(qU,gU);if(!tU.ok()||0===gU.ptr)throw new UU(tU.error_msg());cU=3*gU.num_faces()}else{if(GU!==RU.POINT_CLOUD)throw new UU(`Draco: Cannot decode invalid geometry type ${GU}`);{const gU=new RU.PointCloud;KU=gU;const tU=TU.DecodeBufferToPointCloud(qU,gU);if(!tU.ok()||!gU.ptr)throw new UU(tU.error_msg())}}const jU=KU.num_points();if(jU!==EU.vertices||cU!==EU.indices)throw new UU(`Draco: decoded ${jU} vertices and ${cU} indices, the accessors declare ${EU.vertices} and ${EU.indices}`);const uU=gU(RU),CU=[];for(const{kind:RU,id:gU,components:tU}of pU){const pU=TU.GetAttributeByUniqueId(KU,gU);if(!pU||0===pU.ptr)throw new UU(`Draco: no attribute with id ${gU} (${RU})`);const EU=pU.data_type();if(!uU[EU])throw new UU(`Draco: Cannot decode invalid data type ${EU}`);if(pU.num_components()!==tU)throw new UU(`Draco: ${RU} decodes to ${pU.num_components()} components, its accessor declares ${tU}`);CU.push([RU,pU,EU])}return PU({dracoDecoder:TU,geometry:KU,triangles:GU===RU.TRIANGULAR_MESH,numPoints:jU,numIndices:cU,attributes:CU})}finally{KU&&RU.destroy(KU),qU&&RU.destroy(qU),TU&&RU.destroy(TU)}}const pU=self;let EU=null;self.onmessage=UU=>{let{data:PU}=UU;if("init"===PU.id){try{importScripts(PU.url),EU=DracoDecoderModule({wasmBinary:PU.wasmBinary}),pU.postMessage({id:"initDone"})}catch(GU){pU.postMessage({id:"initError",message:GU instanceof Error?GU.message:String(GU)})}return}const{seq:TU,data:qU,attributeIds:KU,expected:cU}=PU;EU?EU.then((UU=>{try{const EU=function(UU,pU,EU,PU){const TU=Object.keys(EU).map((UU=>({kind:UU,id:EU[UU],components:PU.components[UU]})));return tU(UU,pU,TU,PU,(tU=>{let{dracoDecoder:pU,geometry:EU,triangles:PU,numPoints:TU,numIndices:qU,attributes:KU}=tU;const cU=gU(UU);let GU=null;if(PU){const gU=4*qU,tU=RU(UU,gU);try{pU.GetTrianglesUInt32Array(EU,gU,tU),GU=new Uint32Array(qU),GU.set(new Uint32Array(UU.HEAPF32.buffer,tU,qU))}finally{UU._free(tU)}}const jU=[];for(const[gU,uU,CU]of KU){const[tU]=cU[CU],PU=uU.num_components(),qU=TU*PU,KU=qU*tU.BYTES_PER_ELEMENT,GU=RU(UU,KU);try{pU.GetAttributeDataArrayForAllPoints(EU,uU,CU,KU,GU),jU.push({kind:gU,data:new tU(UU.HEAPF32.buffer,GU,qU).slice(),size:PU,byteOffset:uU.byte_offset(),byteStride:uU.byte_stride(),normalized:uU.normalized()})}finally{UU._free(GU)}}return{indices:GU,attributes:jU,totalVertices:TU}}))}(UU,qU,KU,cU),PU=EU.attributes.map((UU=>UU.data.buffer));EU.indices&&PU.push(EU.indices.buffer),pU.postMessage({id:"decoded",seq:TU,...EU},PU)}catch(GU){pU.postMessage({id:"decodeError",seq:TU,message:GU instanceof Error?GU.message:String(GU)})}}),(UU=>{pU.postMessage({id:"decodeError",seq:TU,message:UU instanceof Error?UU.message:String(UU)})})):pU.postMessage({id:"decodeError",seq:TU,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, gU.p + "dracoDecode.worker.b0eafbf5.worker.js")
    }
    var qU = gU(96);
    const KU = 1e3;
    let cU = null,
      GU = null;
    const jU = [],
      uU = [];
    let CU = 0;
    const hU = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      QU = function(UU, RU) {
        const gU = UU ? Math.max(1, Math.min(Math.floor(.5 * UU), 4)) : 1;
        return RU ? Math.min(gU, 2) : gU
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, qU.isMobile)());

    function eU() {
      if (!cU) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: UU,
        wasmBinaryUrl: RU
      } = cU;
      return GU ??= fetch(RU).then((UU => {
        if (!UU.ok) throw new Error(`Draco: fetching ${RU} failed: ${UU.status}`);
        return UU.arrayBuffer()
      })), GU.catch((() => {
        GU = null
      })), hU.workersStarted++, GU.then((RU => new Promise(((gU, tU) => {
        const pU = new TU;
        pU.onerror = UU => {
          pU.onmessage = null, pU.onerror = null, pU.terminate(), tU(new Error("Draco: the decode worker failed to start" + (UU.message ? `: ${UU.message}` : " (its script did not load)")))
        }, pU.onmessage = UU => {
          let {
            data: RU
          } = UU;
          pU.onmessage = null, pU.onerror = null, "initDone" === RU.id ? gU(pU) : (pU.terminate(), tU(new Error(`Draco: ${"initError"===RU.id?RU.message:"the worker did not start"}`)))
        };
        const EU = RU.slice(0),
          PU = {
            id: "init",
            url: UU,
            wasmBinary: EU
          };
        pU.postMessage(PU, [EU])
      }))))
    }

    function WU(UU) {
      const RU = jU.indexOf(UU); - 1 !== RU && jU.splice(RU, 1);
      const gU = uU.shift();
      gU && xU(gU)
    }

    function fU(UU, RU) {
      UU.busy = !0, UU.releaseTimer && (clearTimeout(UU.releaseTimer), UU.releaseTimer = null);
      UU.worker.then((gU => {
        const tU = CU++;
        gU.onmessage = pU => {
          let {
            data: EU
          } = pU;
          if (("decoded" === EU.id || "decodeError" === EU.id) && EU.seq === tU) {
            if (gU.onmessage = null, gU.onerror = null, "decoded" === EU.id) return hU.decodes++, RU.resolve({
              indices: EU.indices,
              attributes: EU.attributes,
              totalVertices: EU.totalVertices
            }), void(() => {
              const RU = uU.shift();
              RU ? fU(UU, RU) : (UU.busy = !1, UU.releaseTimer = setTimeout((() => {
                const RU = jU.indexOf(UU); - 1 !== RU && jU.splice(RU, 1), UU.worker.then((UU => {
                  UU.terminate()
                }))
              }), KU))
            })();
            gU.terminate(), RU.reject(new Error(EU.message)), WU(UU)
          }
        }, gU.onerror = tU => {
          gU.onmessage = null, gU.onerror = null, gU.terminate(), RU.reject(new Error(`Draco: the decode worker failed: ${tU.message}`)), WU(UU)
        };
        const pU = {
          id: "decode",
          seq: tU,
          data: RU.data,
          attributeIds: RU.attributeIds,
          expected: RU.expected
        };
        gU.postMessage(pU, [RU.data.buffer])
      }), (gU => {
        RU.reject(gU instanceof Error ? gU : new Error(String(gU))), WU(UU)
      }))
    }

    function xU(UU) {
      const RU = jU.find((UU => !UU.busy));
      if (RU) fU(RU, UU);
      else {
        if (jU.length < QU) {
          const RU = {
            worker: eU(),
            busy: !0,
            releaseTimer: null
          };
          return jU.push(RU), hU.mostWorkers = Math.max(hU.mostWorkers, jU.length), void fU(RU, UU)
        }
        uU.push(UU)
      }
    }

    function mU(UU, RU, gU) {
      return new Promise(((tU, pU) => {
        xU({
          data: new Int8Array(UU.buffer, UU.byteOffset, UU.byteLength).slice(),
          attributeIds: RU,
          expected: gU,
          resolve: tU,
          reject: pU
        })
      }))
    }
    var IU = gU(36974),
      JU = gU(36988),
      wU = gU(9067),
      nU = gU(9062);
    const bU = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function oU(UU) {
      const RU = (0, nU.i)(UU.byteLength);
      if (RU) throw new wU.n(RU);
      const {
        json: gU,
        bin: tU
      } = (0, wU.u)(UU), pU = (0, nU.f)(gU, tU);
      if (pU) throw new wU.n(pU);
      try {
        return function(UU, RU) {
          var gU, tU, pU, EU, PU, TU, qU, KU, cU, GU, jU, uU, CU, hU, QU;
          const eU = new Map,
            WU = gU => {
              let tU = eU.get(gU);
              if (!tU) {
                var pU;
                const EU = UU.bufferViews[gU],
                  PU = null !== (pU = EU.byteOffset) && void 0 !== pU ? pU : 0;
                tU = {
                  index: gU,
                  bytes: RU.subarray(PU, PU + EU.byteLength),
                  byteStride: EU.byteStride
                }, eU.set(gU, tU)
              }
              return tU
            },
            fU = new Map,
            xU = RU => {
              let gU = fU.get(RU);
              if (!gU) {
                var tU;
                const pU = UU.accessors[RU];
                gU = {
                  index: RU,
                  count: pU.count,
                  type: pU.type,
                  numComponents: wU.o[pU.type],
                  componentType: pU.componentType,
                  normalized: null !== (tU = pU.normalized) && void 0 !== tU && tU,
                  byteOffset: pU.byteOffset,
                  bufferView: void 0 === pU.bufferView ? null : WU(pU.bufferView),
                  min: pU.min,
                  max: pU.max
                }, fU.set(RU, gU)
              }
              return gU
            },
            mU = null !== (gU = null === (tU = UU.extensionsUsed) || void 0 === tU ? void 0 : tU.includes("KHR_draco_mesh_compression")) && void 0 !== gU && gU,
            IU = (null !== (pU = UU.meshes) && void 0 !== pU ? pU : []).map(((RU, gU) => {
              const tU = RU.primitives.map(((RU, gU) => {
                var tU, pU, EU;
                const PU = mU ? null === (tU = RU.extensions) || void 0 === tU ? void 0 : tU.KHR_draco_mesh_compression : void 0;
                let TU = null;
                const qU = [];
                if (PU) {
                  const gU = {
                    vertices: UU.accessors[RU.attributes.POSITION].count,
                    indices: void 0 === RU.indices ? 0 : UU.accessors[RU.indices].count,
                    components: {}
                  };
                  TU = {
                    bufferView: WU(PU.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: gU
                  };
                  for (const [tU, pU] of wU.i) {
                    const EU = PU.attributes[tU];
                    if (void 0 === EU) continue;
                    TU.attributeIds[pU] = EU;
                    const qU = RU.attributes[tU];
                    var KU;
                    if (void 0 !== qU) TU.normalized[pU] = null !== (KU = UU.accessors[qU].normalized) && void 0 !== KU && KU, gU.components[pU] = wU.o[UU.accessors[qU].type]
                  }
                } else
                  for (const [UU, cU] of wU.i) {
                    const gU = RU.attributes[UU];
                    void 0 !== gU && qU.push({
                      semantic: UU,
                      kind: cU,
                      accessor: xU(gU)
                    })
                  }
                return {
                  index: gU,
                  mode: null !== (pU = RU.mode) && void 0 !== pU ? pU : 4,
                  attributes: qU,
                  indices: PU || void 0 === RU.indices ? null : xU(RU.indices),
                  position: void 0 === RU.attributes.POSITION ? null : xU(RU.attributes.POSITION),
                  material: null !== (EU = RU.material) && void 0 !== EU ? EU : null,
                  draco: TU
                }
              }));
              return {
                index: gU,
                name: RU.name,
                primitives: tU,
                extras: RU.extras
              }
            })),
            JU = (null !== (EU = UU.nodes) && void 0 !== EU ? EU : []).map(((UU, RU) => {
              var gU, tU;
              return {
                index: RU,
                name: UU.name,
                children: null !== (gU = UU.children) && void 0 !== gU ? gU : [],
                mesh: null !== (tU = UU.mesh) && void 0 !== tU ? tU : null,
                translation: UU.translation,
                rotation: UU.rotation,
                scale: UU.scale,
                hasCamera: void 0 !== UU.camera,
                extras: UU.extras
              }
            })),
            nU = null !== (PU = null === (TU = UU.extensionsUsed) || void 0 === TU ? void 0 : TU.includes("KHR_materials_unlit")) && void 0 !== PU && PU,
            oU = null !== (qU = null === (KU = UU.extensionsUsed) || void 0 === KU ? void 0 : KU.includes("KHR_texture_transform")) && void 0 !== qU && qU,
            ZU = (null !== (cU = UU.materials) && void 0 !== cU ? cU : []).map(((UU, RU) => {
              var gU, tU, pU, EU;
              const PU = UU.pbrMetallicRoughness,
                TU = null === PU || void 0 === PU ? void 0 : PU.baseColorTexture;
              return {
                index: RU,
                name: UU.name,
                extras: UU.extras,
                unlit: nU && void 0 !== (null === (gU = UU.extensions) || void 0 === gU ? void 0 : gU.KHR_materials_unlit),
                pbr: PU ? {
                  baseColorFactor: PU.baseColorFactor,
                  metallicFactor: PU.metallicFactor,
                  roughnessFactor: PU.roughnessFactor
                } : null,
                baseColorTexture: TU ? {
                  texture: TU.index,
                  transform: oU && (null === (tU = TU.extensions) || void 0 === tU ? void 0 : tU.KHR_texture_transform) || null
                } : null,
                emissiveFactor: UU.emissiveFactor,
                alphaMode: null !== (pU = UU.alphaMode) && void 0 !== pU ? pU : "OPAQUE",
                alphaCutoff: UU.alphaCutoff,
                doubleSided: null !== (EU = UU.doubleSided) && void 0 !== EU && EU
              }
            })),
            aU = (null !== (GU = UU.textures) && void 0 !== GU ? GU : []).map(((RU, gU) => {
              var tU, pU;
              const EU = void 0 === RU.sampler ? bU : {
                index: RU.sampler,
                ...null === (tU = UU.samplers) || void 0 === tU ? void 0 : tU[RU.sampler]
              };
              return {
                index: gU,
                sampler: {
                  index: EU.index,
                  magFilter: EU.magFilter,
                  minFilter: EU.minFilter,
                  wrapS: EU.wrapS,
                  wrapT: EU.wrapT
                },
                image: null !== (pU = RU.source) && void 0 !== pU ? pU : -1
              }
            })),
            YU = (null !== (jU = UU.images) && void 0 !== jU ? jU : []).map(((UU, RU) => ({
              index: RU,
              name: UU.name,
              mimeType: UU.mimeType,
              bufferView: WU(UU.bufferView)
            }))),
            BU = null !== (uU = (0, wU.s)(UU)) && void 0 !== uU ? uU : 0;
          return {
            json: UU,
            rootNodes: null !== (CU = null === (hU = UU.scenes) || void 0 === hU || null === (QU = hU[BU]) || void 0 === QU ? void 0 : QU.nodes) && void 0 !== CU ? CU : [],
            nodes: JU,
            meshes: IU,
            materials: ZU,
            textures: aU,
            images: YU
          }
        }(gU, tU)
      } catch (EU) {
        throw EU instanceof wU.m ? EU : new wU.m(`reading the GLB failed: ${EU instanceof Error?EU.message:String(EU)}`)
      }
    }
    async function ZU(UU, RU) {
      var gU, tU;
      const pU = UU.draco;
      if (!pU) throw new wU.m("not a Draco primitive");
      let EU;
      try {
        EU = await RU(pU.bufferView.bytes, pU.attributeIds, pU.expected)
      } catch (KU) {
        throw new wU.m(`Draco decoding failed: ${KU instanceof Error?KU.message:String(KU)}`)
      }
      const {
        vertices: PU,
        indices: TU,
        components: qU
      } = pU.expected;
      if (EU.totalVertices !== PU || (null !== (gU = null === (tU = EU.indices) || void 0 === tU ? void 0 : tU.length) && void 0 !== gU ? gU : 0) !== TU || EU.attributes.some((UU => UU.size !== qU[UU.kind] || UU.data.length !== PU * UU.size))) throw new wU.m("Draco decoding gave other counts than the accessors declare");
      for (const cU of EU.attributes) {
        const UU = pU.normalized[cU.kind];
        void 0 !== UU && (cU.normalized = UU)
      }
      return EU
    }
    const aU = new WeakMap;

    function YU(UU, RU) {
      var gU;
      const tU = null !== (gU = aU.get(UU)) && void 0 !== gU ? gU : RU(UU);
      return aU.set(UU, tU), tU
    }

    function BU(UU) {
      const RU = UU.bufferView,
        gU = 5125 === UU.componentType ? Uint32Array : Uint16Array,
        tU = RU.bytes.buffer,
        pU = RU.bytes.byteOffset + (UU.byteOffset || 0);
      return pU % gU.BYTES_PER_ELEMENT !== 0 ? new gU(tU.slice(pU, pU + UU.count * gU.BYTES_PER_ELEMENT), 0) : new gU(tU, pU, UU.count)
    }

    function VU(UU, RU) {
      if (UU.min && UU.max) return [new Float64Array(UU.min), new Float64Array(UU.max)];
      const gU = RU.find((UU => {
          let {
            kind: RU
          } = UU;
          return "position" === RU
        })),
        tU = gU ? (0, JU.f)(gU, UU.count) : new Float32Array(0);
      return (0, JU.n)(tU.length / 3, ((UU, RU) => tU[3 * UU + RU]))
    }

    function rU(UU) {
      const RU = UU.attributes.map((UU => {
          var RU, gU;
          let {
            kind: tU,
            accessor: pU
          } = UU;
          const {
            bufferView: EU,
            numComponents: PU
          } = pU;
          if (!EU) {
            return {
              kind: tU,
              data: YU(pU, (() => new Float32Array(PU * pU.count))),
              offset: 0,
              stride: 4 * PU,
              components: PU,
              glType: 5126,
              isNormalized: !1
            }
          }
          const TU = null !== (RU = EU.byteStride) && void 0 !== RU ? RU : PU * wU.e[pU.componentType];
          return {
            kind: tU,
            data: EU.bytes,
            offset: null !== (gU = pU.byteOffset) && void 0 !== gU ? gU : 0,
            stride: TU,
            components: PU,
            glType: pU.componentType,
            isNormalized: pU.normalized
          }
        })),
        gU = UU.indices,
        tU = gU && YU(gU, BU),
        pU = UU.position;
      return new JU.e(RU, tU, pU.count, ...VU(pU, RU))
    }
    const XU = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function vU(UU, RU) {
      const gU = RU.attributes.map((UU => {
        let {
          kind: RU,
          data: gU,
          size: tU,
          byteOffset: pU,
          byteStride: EU,
          normalized: PU
        } = UU;
        return {
          kind: RU,
          data: gU,
          offset: pU,
          stride: EU,
          components: tU,
          glType: 5120 + XU.indexOf(gU.constructor),
          isNormalized: PU
        }
      }));
      return new JU.e(gU, RU.indices, RU.totalVertices, ...VU(UU.position, gU))
    }

    function dU(UU) {
      const RU = UU.lastIndexOf("/");
      return RU < 0 ? UU : UU.substring(RU + 1)
    }

    function HU(UU) {
      const RU = UU.lastIndexOf("/");
      return RU < 0 ? "" : UU.substring(0, RU + 1)
    }

    function SU(UU) {
      return UU.name || `node${UU.index}`
    }
    const sU = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      yU = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      kU = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function FU(UU) {
      var RU, gU, tU, pU;
      const EU = null !== (RU = UU.minFilter) && void 0 !== RU ? RU : 9987;
      return 9729 === (null !== (gU = UU.magFilter) && void 0 !== gU ? gU : 9729) ? null !== (tU = yU[EU]) && void 0 !== tU ? tU : 3 : null !== (pU = kU[EU]) && void 0 !== pU ? pU : 4
    }
    const iU = {
      33071: 0,
      33648: 2
    };

    function AU(UU) {
      var RU;
      return null !== (RU = iU[null !== UU && void 0 !== UU ? UU : 10497]) && void 0 !== RU ? RU : 1
    }

    function zU(UU) {
      return 9728 === UU.minFilter || 9729 === UU.minFilter
    }

    function MU(UU) {
      var RU, gU, tU;
      const pU = Float64Array.from(null !== (RU = UU.scale) && void 0 !== RU ? RU : [1, 1, 1]);
      return UU.hasCamera && (pU[0] = -1), {
        translation: Float64Array.from(null !== (gU = UU.translation) && void 0 !== gU ? gU : [0, 0, 0]),
        rotation: Float64Array.from(null !== (tU = UU.rotation) && void 0 !== tU ? tU : [0, 0, 0, 1]),
        scale: pU
      }
    }

    function DU(UU, RU) {
      let {
        translation: gU,
        rotation: tU,
        scale: pU
      } = UU;
      const EU = new Float32Array(16);
      return (0, IU.b)(pU, 0, tU, 0, gU, 0, EU), RU && (0, IU.m)(EU, RU, 0, EU), EU
    }
    class LU {
      constructor(UU, RU, gU, tU) {
        this.model = UU, this.decode = RU, this.fileInfo = gU, this.uniqueRootUrl = tU, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const pU = new Set,
          EU = (RU, gU) => {
            const tU = UU.nodes[RU];
            if (this.parents.has(tU)) throw new wU.m(`/nodes/${RU}: Invalid recursive node hierarchy`);
            this.parents.set(tU, gU);
            const PU = null === tU.mesh ? [] : UU.meshes[tU.mesh].primitives,
              TU = PU.map((UU => {
                const RU = PU.length > 1;
                return {
                  name: RU ? `${SU(tU)}_primitive${UU.index}` : SU(tU),
                  node: tU,
                  primitive: UU,
                  part: RU,
                  geometry: null
                }
              }));
            this.uses.set(tU, TU);
            const qU = null !== tU.mesh && pU.has(tU.mesh);
            pU.add(tU.mesh), this.own.set(tU, qU ? [] : TU);
            for (const UU of tU.children) EU(UU, tU)
          };
        for (const PU of UU.rootNodes) EU(PU, null);
        this.primitives = UU.nodes.flatMap((UU => {
          var RU;
          return null !== (RU = this.own.get(UU)) && void 0 !== RU ? RU : []
        }))
      }
      decodeGeometries() {
        const UU = new Map;
        return Promise.all(this.primitives.map((async RU => {
          const {
            primitive: gU
          } = RU, tU = gU.draco;
          let pU = tU ? UU.get(tU.bufferView.index) : Promise.resolve(rU(gU));
          pU || (pU = ZU(gU, this.decode).then((UU => vU(gU, UU))), UU.set(tU.bufferView.index, pU)), RU.geometry = await pU
        })))
      }
      parentOf(UU) {
        var RU;
        return null !== (RU = this.parents.get(UU)) && void 0 !== RU ? RU : null
      }
      meshesUnder(UU) {
        const RU = this.model.nodes.filter((UU => this.uses.has(UU)));
        for (const tU of RU) {
          const RU = this.uses.get(tU),
            gU = RU.find((RU => RU.name === UU));
          if (gU) return 1 === RU.length ? this.subtree(tU) : this.own.get(tU).includes(gU) ? [gU] : []
        }
        const gU = RU.find((RU => 1 !== this.uses.get(RU).length && SU(RU) === UU));
        return gU ? this.subtree(gU) : null
      }
      subtree(UU) {
        return [...this.own.get(UU), ...UU.children.flatMap((UU => this.subtree(this.model.nodes[UU])))]
      }
      worldMatrix(UU, RU, gU) {
        let tU = DU(MU(RU ? sU : {}), null);
        const pU = [];
        for (let PU = UU.part ? UU.node : this.parentOf(UU.node); PU; PU = this.parentOf(PU)) pU.unshift(PU);
        for (const PU of pU) tU = DU(MU(PU), tU);
        const EU = MU(UU.part ? {} : UU.node);
        return void 0 !== gU && EU.scale.fill(gU), DU(EU, tU)
      }
      floats(UU) {
        const {
          vertexAttributes: RU,
          vertexCount: gU
        } = UU.geometry;
        return new Map(RU.map((UU => [UU.kind, (0, JU.f)(UU, gU)])))
      }
      imageUrl(UU) {
        return function(UU, RU, gU) {
          let {
            name: tU
          } = RU;
          return `data:${UU}${tU}#image${gU}`
        }(this.uniqueRootUrl, this.fileInfo, UU)
      }
      textureDesc(UU, RU) {
        var gU;
        let {
          texture: tU,
          transform: pU
        } = UU;
        const {
          sampler: EU,
          image: PU
        } = this.model.textures[tU], {
          bufferView: TU,
          mimeType: qU,
          name: KU
        } = this.model.images[PU], cU = pU && {
          ...pU.offset ? {
            uOffset: pU.offset[0],
            vOffset: pU.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...pU.rotation ? {
            wAng: -pU.rotation
          } : {},
          ...pU.scale ? {
            uScale: pU.scale[0],
            vScale: pU.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(PU),
          noMipmap: zU(EU),
          invertY: !1,
          samplingMode: FU(EU),
          data: {
            bytes: TU.bytes,
            mimeType: qU,
            label: KU,
            context: `/textures/${tU}`
          },
          sets: {
            wrapU: AU(EU.wrapS),
            wrapV: AU(EU.wrapT),
            ...cU,
            coordinatesIndex: null !== (gU = null === pU || void 0 === pU ? void 0 : pU.texCoord) && void 0 !== gU ? gU : 0,
            hasAlpha: RU
          }
        }
      }
    }
    async function NU(UU, RU, gU, tU, pU, EU) {
      let PU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const TU = function(UU, RU, gU) {
          return "string" !== typeof RU ? {
            url: "",
            rootUrl: UU,
            name: gU()
          } : RU ? RU.startsWith("data:") ? {
            url: RU,
            rootUrl: UU,
            name: ""
          } : UU ? {
            url: UU + RU,
            rootUrl: UU,
            name: RU
          } : {
            url: RU,
            rootUrl: HU(RU),
            name: dU(RU)
          } : {
            url: UU,
            rootUrl: HU(UU),
            name: dU(UU)
          }
        }(gU, UU, pU),
        qU = {};
      RU.addPendingData(qU);
      try {
        const gU = oU(await async function(UU, RU) {
            return "string" !== typeof RU ? RU : UU.url.startsWith("data:") ? (0, wU.p)(UU.url) : await (0, wU.q)(UU.url)
          }(TU, UU)),
          qU = new LU(gU, tU, TU, function(UU, RU) {
            let {
              rootUrl: gU,
              name: tU
            } = UU;
            return !gU.startsWith("file:") && tU ? gU : `${gU}${RU()}/`
          }(TU, pU));
        return await EU(qU), RU.importedMeshesFiles && (RU.loadingPluginName = "eZ", PU && RU.importedMeshesFiles.push(TU.url)), qU
      } finally {
        RU.removePendingData(qU)
      }
    }
    var lU = gU(37109),
      OU = gU(36945),
      UR = gU(37420);

    function RR(UU) {
      if (null === UU || void 0 === UU || !UU.min || !UU.max) return null;
      const [RU, gU, tU] = UU.min, [pU, EU, PU] = UU.max, {
        BoundingInfo: TU,
        xC: qU
      } = (0, lU.e)();
      return new TU(new qU(RU, gU, tU), new qU(pU, EU, PU))
    }

    function gR(UU) {
      (0, OU.i)(UU) || (UU.geometry && UU.geometry.useBoundingInfoFromGeometry ? UU._updateBoundingInfo() : UU.refreshBoundingInfo(!0, !0))
    }
    class tR {
      constructor(UU, RU) {
        this.Zh = UU, this.decode = RU, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(UU) {
        let RU = this.viewData.get(UU.index);
        return RU || (RU = this.bufferData.then((() => UU.bytes)), this.viewData.set(UU.index, RU)), RU
      }
      viewBuffer(UU) {
        let RU = this.viewBuffers.get(UU.index);
        return RU || (RU = this.viewBytes(UU).then((UU => new((0, lU.e)().tC)(this.Zh.WC(), UU, !1))), this.viewBuffers.set(UU.index, RU)), RU
      }
      vertexBuffer(UU, RU) {
        const {
          kind: gU,
          data: tU
        } = RU, pU = `${UU.index}:${gU}`;
        let EU = this.vertexBuffers.get(pU);
        if (!EU) {
          const PU = UU.bufferView;
          EU = PU ? this.viewBuffer(PU).then((UU => this.layoutVertexBuffer(UU, RU))) : Promise.resolve(tU).then((UU => new((0, lU.e)().VertexBuffer)(this.Zh.WC(), UU, gU, !1))), this.vertexBuffers.set(pU, EU)
        }
        return EU
      }
      layoutVertexBuffer(UU, RU) {
        let {
          kind: gU,
          offset: tU,
          stride: pU,
          components: EU,
          glType: PU,
          isNormalized: TU
        } = RU;
        const qU = this.Zh.WC();
        return new((0, lU.e)().VertexBuffer)(qU, UU, gU, !1, void 0, pU, void 0, tU, EU, PU, TU, !0, void 0, !0)
      }
      load(UU, RU, gU) {
        const tU = (0, OU.i)(gU),
          pU = UU => {
            tU || (gU._delayInfo = gU._delayInfo || [], -1 === gU._delayInfo.indexOf(UU) && gU._delayInfo.push(UU))
          },
          EU = RU.draco;
        if (EU) {
          for (const UU in EU.attributeIds) pU(UU);
          let PU = this.dracoGeometry.get(EU.bufferView.index);
          return PU || (PU = this.viewBytes(EU.bufferView).then((async () => {
            let pU;
            try {
              pU = await ZU(RU, this.decode)
            } catch (qU) {
              throw new wU.m(`${UU}: ${qU instanceof Error?qU.message:String(qU)}`)
            }
            const EU = vU(RU, pU);
            if (tU) return EU;
            const PU = RR(RU.position),
              TU = new((0, lU.e)().MirroredGeometry)(gU.name, this.Zh);
            PU && (TU._boundingInfo = PU, TU.useBoundingInfoFromGeometry = !0), EU.indexData && TU.setIndices(EU.indexData);
            for (const UU of EU.vertexAttributes) TU.setVerticesBuffer(this.layoutVertexBuffer(UU.data, UU), EU.vertexCount);
            return TU.link(EU), TU
          })), this.dracoGeometry.set(EU.bufferView.index, PU)), PU
        }
        const PU = [],
          TU = rU(RU);
        if (tU) return gU.isUnIndexed = !TU.indexData, gU.hasVertexAlpha = (0, UR.c)(RU), Promise.resolve(TU);
        const qU = new((0, lU.e)().MirroredGeometry)(gU.name, this.Zh),
          {
            indexData: KU
          } = TU;
        KU ? PU.push(this.viewBytes(RU.indices.bufferView).then((() => {
          qU.setIndices(KU)
        }))) : gU.isUnIndexed = !0;
        for (const [cU, {
            kind: GU,
            accessor: jU
          }] of RU.attributes.entries()) pU(GU), PU.push(this.vertexBuffer(jU, TU.vertexAttributes[cU]).then((UU => {
          if ("position" === UU.getKind()) {
            const UU = RR(jU);
            UU && (qU._boundingInfo = UU, qU.useBoundingInfoFromGeometry = !0)
          }
          qU.setVerticesBuffer(UU, TU.vertexCount)
        })));
        return (0, UR.c)(RU) && (gU.hasVertexAlpha = !0), Promise.all(PU).then((() => (qU.link(TU), qU)))
      }
    }
    var pR, ER = gU(36806),
      PR = gU(36593),
      TR = gU(37434),
      qR = gU(36747),
      KR = gU(36790),
      cR = gU(2551),
      GR = gU(36777);

    function jR(UU, RU) {
      UU.metadata = UU.metadata || {};
      const gU = UU._internalMetadata = UU._internalMetadata || {},
        tU = gU.eZ = gU.eZ || {};
      (tU.pointers = tU.pointers || []).push(RU)
    }

    function uR(UU, RU) {
      if (RU && Object.keys(RU).length > 0) {
        const gU = UU.metadata = UU.metadata || {};
        (gU.eZ = gU.eZ || {}).extras = RU
      }
    }

    function CR(UU, RU) {
      RU.position = UU.translation ? PR.xC.FromArray(UU.translation) : PR.xC.Zero(), RU.rotationQuaternion = UU.rotation ? PR.Quaternion.FromArray(UU.rotation) : PR.Quaternion.Identity(), RU.ep = UU.scale ? PR.xC.FromArray(UU.scale) : PR.xC.One()
    }
    class hR {
      constructor(UU, RU) {
        if (this.Zh = UU, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, RU) {
          const RU = UU.WC(),
            gU = UU.HZ.add((() => {
              this.dispose()
            })),
            tU = RU.onContextRestoredObservable.add((() => {
              for (const UU of [...this.geometries, ...this.meshes, ...this.textures]) UU._rebuild()
            }));
          this.release = () => {
            UU.HZ.remove(gU), RU.onContextRestoredObservable.remove(tU)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const UU of this.meshes) this.Zh.HgU(UU);
          for (const UU of this.materials) this.Zh.addMaterial(UU);
          for (const UU of this.geometries) this.Zh.addGeometry(UU);
          for (const UU of this.transformNodes) this.Zh.addTransformNode(UU);
          for (const UU of this.textures) this.Zh.addTexture(UU)
        }
      }
      dispose() {
        var UU;
        for (const RU of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const UU of RU.slice()) UU.dispose();
          RU.length = 0
        }
        null === (UU = this.release) || void 0 === UU || UU.call(this), this.release = null
      }
    }
    class QR {
      constructor(UU, RU, gU, tU, pU, EU, PU) {
        this.asset = UU, this.Zh = RU, this.tree = gU, this.geometryData = pU, this.materials = EU, this.lite = PU, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = tU ? gU : null
      }
      create(UU) {
        if (this.lite) return UU();
        const RU = this.Zh;
        RU._blockEntityCollection = !!this.container;
        try {
          const RU = UU();
          return this.container && (RU._parentContainer = this.container), RU
        } finally {
          RU._blockEntityCollection = !1
        }
      }
      node(UU, RU) {
        return this.create((() => this.lite ? RU ? (0, TR.e)(this.lite, UU) : (0, TR.o)(this.lite, UU) : RU ? new((0, lU.e)().Mesh)(UU, this.Zh) : new((0, lU.e)().TransformNode)(UU, this.Zh)))
      }
      async load() {
        var UU;
        this.asset.model.json.nodes && this.createRoot();
        const RU = this.lite ? null : this.Zh,
          gU = null !== (UU = null === RU || void 0 === RU ? void 0 : RU.blockMaterialDirtyMechanism) && void 0 !== UU && UU;
        let tU;
        RU && (RU.blockMaterialDirtyMechanism = !0);
        try {
          tU = this.loadScene()
        } finally {
          null === RU || void 0 === RU || RU._forceBlockMaterialDirtyMechanism(gU)
        }
        await tU;
        const {
          root: pU,
          tree: EU
        } = this;
        pU && (pU.GJ(!0), EU.meshes.push(pU), EU.rootNodes.push(pU));
        for (const TU of this.asset.model.nodes) {
          const UU = this.nodeObjects.get(TU.index);
          UU && ["TransformNode", "LiteNode"].includes(UU.getClassName()) && EU.transformNodes.push(UU);
          for (const RU of null !== (PU = this.nodePrimitives.get(TU.index)) && void 0 !== PU ? PU : []) {
            var PU;
            EU.meshes.push(RU);
            const UU = RU.geometry;
            UU && !EU.geometries.includes(UU) && EU.geometries.push(UU)
          }
        }
      }
      createRoot() {
        const UU = this.node("__root__", !0);
        this.root = UU, UU.GJ(!1), this.Zh.useRightHandedSystem || CR(sU, UU)
      }
      loadScene() {
        const UU = [];
        for (const RU of this.asset.model.rootNodes) UU.push(this.loadNode(this.asset.model.nodes[RU], (UU => {
          UU.parent = this.root
        })));
        return UU.push(Promise.resolve()), Promise.all(UU).then((() => {}))
      }
      loadNode(UU, RU) {
        const gU = `/nodes/${UU.index}`,
          tU = [],
          pU = pU => {
            if (jR(pU, gU), CR(UU, pU), UU.hasCamera && !this.Zh.useRightHandedSystem) {
              const {
                ep: UU
              } = pU;
              UU.set(-1, UU.y, UU.z)
            }
            for (const RU of UU.children) tU.push(this.loadNode(this.asset.model.nodes[RU], (UU => {
              UU.parent = pU
            })));
            (gU => {
              uR(gU, UU.extras), RU(gU)
            })(pU)
          };
        if (null === UU.mesh) {
          const RU = this.node(SU(UU), !1);
          this.nodeObjects.set(UU.index, RU), pU(RU)
        } else {
          const RU = this.asset.model.meshes[UU.mesh];
          tU.push(this.loadMesh(`/meshes/${RU.index}`, UU, RU, pU))
        }
        return Promise.all(tU).then((() => {
          for (const gU of null !== (RU = this.nodePrimitives.get(UU.index)) && void 0 !== RU ? RU : []) {
            var RU;
            gR(gU)
          }
          return this.nodeObjects.get(UU.index)
        }))
      }
      loadMesh(UU, RU, gU, tU) {
        const pU = [],
          EU = SU(RU);
        if (1 === gU.primitives.length) {
          const tU = gU.primitives[0];
          pU.push(this.loadPrimitive(`${UU}/primitives/${tU.index}`, EU, tU, (UU => {
            this.nodeObjects.set(RU.index, UU), this.nodePrimitives.set(RU.index, [UU])
          })))
        } else {
          const tU = this.node(EU, !1);
          this.nodeObjects.set(RU.index, tU);
          const PU = [];
          this.nodePrimitives.set(RU.index, PU);
          for (const RU of gU.primitives) pU.push(this.loadPrimitive(`${UU}/primitives/${RU.index}`, `${EU}_primitive${RU.index}`, RU, (UU => {
            UU.parent = tU, PU.push(UU)
          })))
        }
        const PU = this.nodeObjects.get(RU.index);
        return tU(PU), Promise.all(pU).then((() => PU))
      }
      loadPrimitive(UU, RU, gU, tU) {
        const pU = [],
          EU = this.node(RU, !0);
        if (EU.sideOrientation = this.Zh.useRightHandedSystem ? qR.b.CounterClockWiseSideOrientation : qR.b.ClockWiseSideOrientation, pU.push(this.geometryData.load(UU, gU, EU).then((UU => {
            if ((0, OU.i)(EU)) {
              var RU, gU;
              const tU = UU;
              EU.replaceModel(tU, Int32Array.of(0, null !== (RU = null === (gU = tU.indexData) || void 0 === gU ? void 0 : gU.length) && void 0 !== RU ? RU : tU.vertexCount, 0, tU.vertexCount))
            } else this.create((() => (UU.applyToMesh(EU), UU)))
          }))), this.materials) {
          const UU = 0 === gU.mode ? qR.b.PointListDrawMode : qR.b.TriangleFillMode,
            RU = null === gU.material ? null : this.asset.model.materials[gU.material];
          pU.push(this.loadMaterial(RU, UU, (UU => {
            EU.material = UU
          })))
        }
        return jR(EU, UU), tU(EU), Promise.all(pU).then((() => EU))
      }
      loadMaterial(UU, RU, gU) {
        var tU;
        const pU = `${null!==(tU=null===UU||void 0===UU?void 0:UU.index)&&void 0!==tU?tU:"default"}:${RU}`;
        let EU = this.materialData.get(pU);
        return EU || (EU = this.createMaterial(UU, RU), this.materialData.set(pU, EU)), gU(EU.material), EU.promise
      }
      createMaterial(UU, RU) {
        const gU = UU ? UU.name || `material${UU.index}` : "__GLTFLoader._default",
          {
            style: tU,
            unlit: pU
          } = this.materials;
        let EU;
        const PU = this.create((() => {
          const PU = (0, GR.b)({
            name: gU,
            Zh: this.Zh,
            sets: {
              ...(0, UR.b)(this.asset, UU, tU, pU),
              fillMode: RU
            },
            unrendered: !0
          });
          return EU = PU.model, PU.mirror
        }));
        let TU = Promise.resolve();
        if (UU) {
          const RU = `/materials/${UU.index}`,
            tU = EU.diffuseTexture;
          if (tU && !tU.mirror) TU = new Promise((UU => setTimeout(UU)));
          else if (tU) {
            const pU = tU.mirror;
            pU._parentContainer = this.container, pU.name = `${gU} (Base Color)`, jR(pU, `${RU}${UU.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(pU), TU = (0, KR.r)(tU)
          }
          uR(PU, UU.extras), jR(PU, RU)
        }
        return this.tree.materials.push(PU), {
          material: PU,
          promise: TU
        }
      }
    }

    function eR() {
      ER.d.dracoDecodes = hU.decodes, ER.d.dracoWorkersStarted = hU.workersStarted, ER.d.dracoMostWorkers = hU.mostWorkers
    }
    async function WR(UU, RU, gU, pU, EU) {
      try {
        return await async function(UU, RU, gU, pU, EU, PU) {
          var TU;
          let qU;
          const KU = null === (TU = (0, cR.g)()) || void 0 === TU ? void 0 : TU.SC,
            cU = null !== KU && void 0 !== KU && KU.sC && RU === KU.aZ() ? KU : null,
            GU = EU && !cU;
          return await NU(UU, RU, gU, pU, tU.b, (UU => (qU = new hR(RU, GU), new QR(UU, RU, qU, GU, new tR(RU, pU), PU, cU).load())), !EU), qU
        }(UU, RU, gU, mU, pU, EU)
      } finally {
        eR()
      }
    }
    async function fR(UU, RU, gU, pU) {
      try {
        return await NU(UU, RU, gU, mU, tU.b, (UU => pU(UU, new tR(RU, mU))))
      } finally {
        eR()
      }
    }
    pR = pU.e, cU || (cU = {
      scriptUrl: new URL(pR.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(pR.wasmBinaryUrl, location.href).href
    })
  },
  40886: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU
    });
    var tU = gU(135),
      pU = gU(1203);

    function EU(UU) {
      return (0, tU.e)() ? `https://${pU.e.discordDomain}/${UU.href}` : UU.href
    }
    const PU = {
      scriptUrl: EU(new gU.U(gU(40889))),
      wasmBinaryUrl: EU(new gU.U(gU(40894)))
    }
  },
  35875: UU => {
    UU.exports = function(UU, RU, gU, tU) {
      var pU = self || window;
      try {
        try {
          var EU;
          try {
            EU = new pU.Blob([UU])
          } catch (KU) {
            (EU = new(pU.BlobBuilder || pU.WebKitBlobBuilder || pU.MozBlobBuilder || pU.MSBlobBuilder)).append(UU), EU = EU.getBlob()
          }
          var PU = pU.URL || pU.webkitURL,
            TU = PU.createObjectURL(EU),
            qU = new pU[RU](TU, gU);
          return PU.revokeObjectURL(TU), qU
        } catch (KU) {
          return new pU[RU]("data:application/javascript,".concat(encodeURIComponent(UU)), gU)
        }
      } catch (KU) {
        if (!tU) throw Error("Inline worker is not supported");
        return new pU[RU](tU, gU)
      }
    }
  },
  40889: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  40894: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);