export const id = 224;
export const ids = [224];
export const modules = {
  44182: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      loadGlbAsset: () => dX,
      loadGlbTree: () => WX
    });
    var cU = zU(38649),
      yU = zU(142),
      QU = zU(1211);

    function AU(UU) {
      return (0, yU.isDiscordClient)() ? `https://${QU.d.discordDomain}/${UU.href}` : UU.href
    }
    const FU = {
      scriptUrl: AU(new zU.U(zU(44184))),
      wasmBinaryUrl: AU(new zU.U(zU(44191)))
    };
    var oU = zU(36961),
      DU = zU.n(oU);

    function EU() {
      return DU()('(()=>{class UU extends Error{}function XU(XU,zU){const cU=XU._malloc(zU);if(0===cU)throw new UU(`Draco: the decoder\'s heap refused ${zU} bytes`);return cU}function zU(zU,cU,yU,QU){let AU=null,FU=null,oU=null;try{AU=new zU.Decoder,FU=new zU.DecoderBuffer,FU.Init(cU,cU.byteLength);let DU=0;const EU=AU.GetEncodedGeometryType(FU);if(EU===zU.TRIANGULAR_MESH){const XU=new zU.Mesh;oU=XU;const cU=AU.DecodeBufferToMesh(FU,XU);if(!cU.ok()||0===XU.ptr)throw new UU(cU.error_msg());DU=3*XU.num_faces()}else{if(EU!==zU.POINT_CLOUD)throw new UU(`Draco: Cannot decode invalid geometry type ${EU}`);{const XU=new zU.PointCloud;oU=XU;const cU=AU.DecodeBufferToPointCloud(FU,XU);if(!cU.ok()||!XU.ptr)throw new UU(cU.error_msg())}}const YU=oU.num_points();if(YU!==QU.vertices||DU!==QU.indices)throw new UU(`Draco: decoded ${YU} vertices and ${DU} indices, the accessors declare ${QU.vertices} and ${QU.indices}`);const NU=function(UU){return{[UU.DT_FLOAT32]:Float32Array,[UU.DT_INT8]:Int8Array,[UU.DT_INT16]:Int16Array,[UU.DT_INT32]:Int32Array,[UU.DT_UINT8]:Uint8Array,[UU.DT_UINT16]:Uint16Array,[UU.DT_UINT32]:Uint32Array}}(zU),IU=[];for(const XU of Object.keys(yU)){const zU=yU[XU],cU=QU.components[XU],FU=AU.GetAttributeByUniqueId(oU,zU);if(!FU||0===FU.ptr)throw new UU(`Draco: no attribute with id ${zU} (${XU})`);const DU=FU.data_type();if(!NU[DU])throw new UU(`Draco: Cannot decode invalid data type ${DU}`);if(FU.num_components()!==cU)throw new UU(`Draco: ${XU} decodes to ${FU.num_components()} components, its accessor declares ${cU}`);IU.push([XU,FU,NU[DU]])}let pU=null;if(EU===zU.TRIANGULAR_MESH){const UU=4*DU,cU=XU(zU,UU);try{AU.GetTrianglesUInt32Array(oU,UU,cU),pU=new Uint32Array(DU),pU.set(new Uint32Array(zU.HEAPF32.buffer,cU,DU))}finally{zU._free(cU)}}const aU=[];for(const[UU,cU,yU]of IU){const QU=cU.num_components(),FU=YU*QU,DU=FU*yU.BYTES_PER_ELEMENT,EU=XU(zU,DU);try{AU.GetAttributeDataArrayForAllPoints(oU,cU,cU.data_type(),DU,EU),aU.push({kind:UU,data:new yU(zU.HEAPF32.buffer,EU,FU).slice(),size:QU,byteOffset:cU.byte_offset(),byteStride:cU.byte_stride(),normalized:cU.normalized()})}finally{zU._free(EU)}}return{indices:pU,attributes:aU,totalVertices:YU}}finally{oU&&zU.destroy(oU),FU&&zU.destroy(FU),AU&&zU.destroy(AU)}}const cU=self;let yU=null;self.onmessage=UU=>{let{data:XU}=UU;if("init"===XU.id){try{importScripts(XU.url),yU=DracoDecoderModule({wasmBinary:XU.wasmBinary}),cU.postMessage({id:"initDone"})}catch(DU){cU.postMessage({id:"initError",message:DU instanceof Error?DU.message:String(DU)})}return}const{seq:QU,data:AU,attributeIds:FU,expected:oU}=XU;yU?yU.then((UU=>{try{const XU=zU(UU,AU,FU,oU),yU=XU.attributes.map((UU=>UU.data.buffer));XU.indices&&yU.push(XU.indices.buffer),cU.postMessage({id:"decoded",seq:QU,...XU},yU)}catch(DU){cU.postMessage({id:"decodeError",seq:QU,message:DU instanceof Error?DU.message:String(DU)})}}),(UU=>{cU.postMessage({id:"decodeError",seq:QU,message:UU instanceof Error?UU.message:String(UU)})})):cU.postMessage({id:"decodeError",seq:QU,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, zU.p + "dracoDecode.worker.99b6d39b.worker.js")
    }
    var YU = zU(97),
      NU = zU(4809),
      IU = zU(3604);
    const pU = 2;
    const aU = 1e3;
    let tU = null,
      gU = null;
    const kU = [],
      GU = [];
    let BU = 0;
    const ZU = {
      decodes: 0,
      workersStarted: 0,
      mostWorkers: 0
    };
    let RU = null;

    function PU() {
      if (!tU) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: UU,
        wasmBinaryUrl: XU
      } = tU;
      return gU ??= fetch(XU).then((UU => {
        if (!UU.ok) throw new Error(`Draco: fetching ${XU} failed: ${UU.status}`);
        return UU.arrayBuffer()
      })), gU.catch((() => {
        gU = null
      })), ZU.workersStarted++, Promise.all([gU, (0, IU.j)()]).then((XU => {
        let [zU] = XU;
        return new Promise(((XU, cU) => {
          const yU = new EU;
          yU.onerror = UU => {
            yU.onmessage = null, yU.onerror = null, yU.terminate(), cU(new Error("Draco: the decode worker failed to start" + (UU.message ? `: ${UU.message}` : " (its script did not load)")))
          }, yU.onmessage = UU => {
            let {
              data: zU
            } = UU;
            yU.onmessage = null, yU.onerror = null, "initDone" === zU.id ? XU(yU) : (yU.terminate(), cU(new Error(`Draco: ${"initError"===zU.id?zU.message:"the worker did not start"}`)))
          };
          const QU = zU.slice(0),
            AU = {
              id: "init",
              url: UU,
              wasmBinary: QU
            };
          yU.postMessage(AU, [QU])
        }))
      }))
    }

    function WU(UU) {
      const XU = kU.indexOf(UU); - 1 !== XU && kU.splice(XU, 1);
      const zU = GU.shift();
      zU && LU(zU)
    }

    function dU(UU, XU) {
      UU.busy = !0, UU.releaseTimer && (clearTimeout(UU.releaseTimer), UU.releaseTimer = null);
      UU.worker.then((zU => {
        const cU = BU++;
        zU.onmessage = yU => {
          let {
            data: QU
          } = yU;
          if (("decoded" === QU.id || "decodeError" === QU.id) && QU.seq === cU) {
            if (zU.onmessage = null, zU.onerror = null, "decoded" === QU.id) return ZU.decodes++, XU.resolve({
              indices: QU.indices,
              attributes: QU.attributes,
              totalVertices: QU.totalVertices
            }), void(() => {
              const XU = GU.shift();
              XU ? dU(UU, XU) : (UU.busy = !1, UU.releaseTimer = setTimeout((() => {
                const XU = kU.indexOf(UU); - 1 !== XU && kU.splice(XU, 1), UU.worker.then((UU => {
                  UU.terminate()
                }))
              }), aU))
            })();
            zU.terminate(), XU.reject(new Error(QU.message)), WU(UU)
          }
        }, zU.onerror = cU => {
          zU.onmessage = null, zU.onerror = null, zU.terminate(), XU.reject(new Error(`Draco: the decode worker failed: ${cU.message}`)), WU(UU)
        };
        const yU = {
          id: "decode",
          seq: cU,
          data: XU.data,
          attributeIds: XU.attributeIds,
          expected: XU.expected
        };
        zU.postMessage(yU, [XU.data.buffer])
      }), (zU => {
        XU.reject(zU instanceof Error ? zU : new Error(String(zU))), WU(UU)
      }))
    }

    function LU(UU) {
      const XU = kU.find((UU => !UU.busy));
      if (XU) dU(XU, UU);
      else {
        if (RU ??= (0, NU.d)() ? 1 : function(UU, XU) {
            const zU = UU ? Math.max(1, Math.min(Math.floor(.5 * UU), 4)) : 1;
            return XU ? Math.min(zU, pU) : zU
          }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, YU.isMobile)()), kU.length < RU) {
          const XU = {
            worker: PU(),
            busy: !0,
            releaseTimer: null
          };
          return kU.push(XU), ZU.mostWorkers = Math.max(ZU.mostWorkers, kU.length), void dU(XU, UU)
        }
        GU.push(UU)
      }
    }

    function eU(UU, XU, zU) {
      return new Promise(((cU, yU) => {
        LU({
          data: new Int8Array(UU.buffer, UU.byteOffset, UU.byteLength).slice(),
          attributeIds: XU,
          expected: zU,
          resolve: cU,
          reject: yU
        })
      }))
    }
    var CU = zU(38106),
      wU = zU(38121),
      qU = zU(34968),
      OU = zU(34959);
    const SU = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function rU(UU) {
      const XU = (0, OU.i)(UU.byteLength);
      if (XU) throw new qU.n(XU);
      const {
        json: zU,
        bin: cU
      } = (0, qU.w)(UU), yU = (0, OU.g)(zU, cU);
      if (yU) throw new qU.n(yU);
      try {
        return function(UU, XU) {
          var zU, cU, yU, QU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU;
          const gU = new Map,
            kU = zU => {
              let cU = gU.get(zU);
              if (!cU) {
                var yU;
                const QU = UU.bufferViews[zU],
                  AU = null !== (yU = QU.byteOffset) && void 0 !== yU ? yU : 0;
                cU = {
                  index: zU,
                  bytes: XU.subarray(AU, AU + QU.byteLength),
                  byteStride: QU.byteStride
                }, gU.set(zU, cU)
              }
              return cU
            },
            GU = new Map,
            BU = XU => {
              let zU = GU.get(XU);
              if (!zU) {
                var cU;
                const yU = UU.accessors[XU];
                zU = {
                  index: XU,
                  count: yU.count,
                  type: yU.type,
                  numComponents: qU.o[yU.type],
                  componentType: yU.componentType,
                  normalized: null !== (cU = yU.normalized) && void 0 !== cU && cU,
                  byteOffset: yU.byteOffset,
                  bufferView: void 0 === yU.bufferView ? null : kU(yU.bufferView),
                  min: yU.min,
                  max: yU.max
                }, GU.set(XU, zU)
              }
              return zU
            },
            ZU = null !== (zU = null === (cU = UU.extensionsUsed) || void 0 === cU ? void 0 : cU.includes("KHR_draco_mesh_compression")) && void 0 !== zU && zU,
            RU = (null !== (yU = UU.meshes) && void 0 !== yU ? yU : []).map(((XU, zU) => {
              const cU = XU.primitives.map(((XU, zU) => {
                var cU, yU, QU;
                const AU = ZU ? null === (cU = XU.extensions) || void 0 === cU ? void 0 : cU.KHR_draco_mesh_compression : void 0;
                let FU = null;
                const oU = [];
                if (AU) {
                  const zU = {
                    vertices: UU.accessors[XU.attributes.POSITION].count,
                    indices: void 0 === XU.indices ? 0 : UU.accessors[XU.indices].count,
                    components: {}
                  };
                  FU = {
                    bufferView: kU(AU.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: zU
                  };
                  for (const [cU, yU] of qU.i) {
                    const QU = AU.attributes[cU];
                    if (void 0 === QU) continue;
                    FU.attributeIds[yU] = QU;
                    const oU = XU.attributes[cU];
                    var DU;
                    if (void 0 !== oU) FU.normalized[yU] = null !== (DU = UU.accessors[oU].normalized) && void 0 !== DU && DU, zU.components[yU] = qU.o[UU.accessors[oU].type]
                  }
                } else
                  for (const [UU, EU] of qU.i) {
                    const zU = XU.attributes[UU];
                    void 0 !== zU && oU.push({
                      semantic: UU,
                      kind: EU,
                      accessor: BU(zU)
                    })
                  }
                return {
                  index: zU,
                  mode: null !== (yU = XU.mode) && void 0 !== yU ? yU : 4,
                  attributes: oU,
                  indices: AU || void 0 === XU.indices ? null : BU(XU.indices),
                  position: void 0 === XU.attributes.POSITION ? null : BU(XU.attributes.POSITION),
                  material: null !== (QU = XU.material) && void 0 !== QU ? QU : null,
                  draco: FU
                }
              }));
              return {
                index: zU,
                name: XU.name,
                primitives: cU,
                extras: XU.extras
              }
            })),
            PU = (null !== (QU = UU.nodes) && void 0 !== QU ? QU : []).map(((UU, XU) => {
              var zU, cU;
              return {
                index: XU,
                name: UU.name,
                children: null !== (zU = UU.children) && void 0 !== zU ? zU : [],
                mesh: null !== (cU = UU.mesh) && void 0 !== cU ? cU : null,
                translation: UU.translation,
                rotation: UU.rotation,
                scale: UU.scale,
                hasCamera: void 0 !== UU.camera,
                extras: UU.extras
              }
            })),
            WU = null !== (AU = null === (FU = UU.extensionsUsed) || void 0 === FU ? void 0 : FU.includes("KHR_materials_unlit")) && void 0 !== AU && AU,
            dU = null !== (oU = null === (DU = UU.extensionsUsed) || void 0 === DU ? void 0 : DU.includes("KHR_texture_transform")) && void 0 !== oU && oU,
            LU = (null !== (EU = UU.materials) && void 0 !== EU ? EU : []).map(((UU, XU) => {
              var zU, cU, yU, QU;
              const AU = UU.pbrMetallicRoughness,
                FU = null === AU || void 0 === AU ? void 0 : AU.baseColorTexture;
              return {
                index: XU,
                name: UU.name,
                extras: UU.extras,
                unlit: WU && void 0 !== (null === (zU = UU.extensions) || void 0 === zU ? void 0 : zU.KHR_materials_unlit),
                pbr: AU ? {
                  baseColorFactor: AU.baseColorFactor,
                  metallicFactor: AU.metallicFactor,
                  roughnessFactor: AU.roughnessFactor
                } : null,
                baseColorTexture: FU ? {
                  texture: FU.index,
                  transform: dU && (null === (cU = FU.extensions) || void 0 === cU ? void 0 : cU.KHR_texture_transform) || null
                } : null,
                emissiveFactor: UU.emissiveFactor,
                alphaMode: null !== (yU = UU.alphaMode) && void 0 !== yU ? yU : "OPAQUE",
                alphaCutoff: UU.alphaCutoff,
                doubleSided: null !== (QU = UU.doubleSided) && void 0 !== QU && QU
              }
            })),
            eU = (null !== (YU = UU.textures) && void 0 !== YU ? YU : []).map(((XU, zU) => {
              var cU, yU;
              const QU = void 0 === XU.sampler ? SU : {
                index: XU.sampler,
                ...null === (cU = UU.samplers) || void 0 === cU ? void 0 : cU[XU.sampler]
              };
              return {
                index: zU,
                sampler: {
                  index: QU.index,
                  magFilter: QU.magFilter,
                  minFilter: QU.minFilter,
                  wrapS: QU.wrapS,
                  wrapT: QU.wrapT
                },
                image: null !== (yU = XU.source) && void 0 !== yU ? yU : -1
              }
            })),
            CU = (null !== (NU = UU.images) && void 0 !== NU ? NU : []).map(((UU, XU) => ({
              index: XU,
              name: UU.name,
              mimeType: UU.mimeType,
              bufferView: kU(UU.bufferView)
            }))),
            wU = null !== (IU = (0, qU.u)(UU)) && void 0 !== IU ? IU : 0;
          return {
            json: UU,
            rootNodes: null !== (pU = null === (aU = UU.scenes) || void 0 === aU || null === (tU = aU[wU]) || void 0 === tU ? void 0 : tU.nodes) && void 0 !== pU ? pU : [],
            nodes: PU,
            meshes: RU,
            materials: LU,
            textures: eU,
            images: CU
          }
        }(zU, cU)
      } catch (QU) {
        throw QU instanceof qU.m ? QU : new qU.m(`reading the GLB failed: ${QU instanceof Error?QU.message:String(QU)}`)
      }
    }
    async function uU(UU, XU) {
      var zU, cU;
      const yU = UU.draco;
      if (!yU) throw new qU.m("not a Draco primitive");
      let QU;
      try {
        QU = await XU(yU.bufferView.bytes, yU.attributeIds, yU.expected)
      } catch (DU) {
        throw new qU.m(`Draco decoding failed: ${DU instanceof Error?DU.message:String(DU)}`)
      }
      const {
        vertices: AU,
        indices: FU,
        components: oU
      } = yU.expected;
      if (QU.totalVertices !== AU || (null !== (zU = null === (cU = QU.indices) || void 0 === cU ? void 0 : cU.length) && void 0 !== zU ? zU : 0) !== FU || QU.attributes.some((UU => UU.size !== oU[UU.kind] || UU.data.length !== AU * UU.size))) throw new qU.m("Draco decoding gave other counts than the accessors declare");
      for (const EU of QU.attributes) {
        const UU = yU.normalized[EU.kind];
        void 0 !== UU && (EU.normalized = UU)
      }
      return QU
    }
    const fU = new WeakMap;

    function iU(UU, XU) {
      var zU;
      const cU = null !== (zU = fU.get(UU)) && void 0 !== zU ? zU : XU(UU);
      return fU.set(UU, cU), cU
    }

    function HU(UU) {
      const XU = UU.bufferView,
        zU = 5125 === UU.componentType ? Uint32Array : Uint16Array,
        cU = XU.bytes.buffer,
        yU = XU.bytes.byteOffset + (UU.byteOffset || 0);
      return yU % zU.BYTES_PER_ELEMENT !== 0 ? new zU(cU.slice(yU, yU + UU.count * zU.BYTES_PER_ELEMENT), 0) : new zU(cU, yU, UU.count)
    }

    function MU(UU, XU) {
      if (UU.min && UU.max) return [new Float64Array(UU.min), new Float64Array(UU.max)];
      const zU = XU.find((UU => {
          let {
            kind: XU
          } = UU;
          return "position" === XU
        })),
        cU = zU ? (0, wU.k)(zU, UU.count) : new Float32Array(0);
      return (0, wU.u)(cU.length / 3, ((UU, XU) => cU[3 * UU + XU]))
    }

    function vU(UU) {
      const XU = UU.attributes.map((UU => {
          var XU, zU;
          let {
            kind: cU,
            accessor: yU
          } = UU;
          const {
            bufferView: QU,
            numComponents: AU
          } = yU;
          if (!QU) {
            return {
              kind: cU,
              data: iU(yU, (() => new Float32Array(AU * yU.count))),
              offset: 0,
              stride: 4 * AU,
              components: AU,
              glType: 5126,
              isNormalized: !1
            }
          }
          const FU = null !== (XU = QU.byteStride) && void 0 !== XU ? XU : AU * qU.d[yU.componentType];
          return {
            kind: cU,
            data: QU.bytes,
            offset: null !== (zU = yU.byteOffset) && void 0 !== zU ? zU : 0,
            stride: FU,
            components: AU,
            glType: yU.componentType,
            isNormalized: yU.normalized
          }
        })),
        zU = UU.indices,
        cU = zU && iU(zU, HU),
        yU = UU.position;
      return new wU.h(XU, cU, yU.count, ...MU(yU, XU))
    }
    const VU = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function sU(UU, XU) {
      const zU = XU.attributes.map((UU => {
        let {
          kind: XU,
          data: zU,
          size: cU,
          byteOffset: yU,
          byteStride: QU,
          normalized: AU
        } = UU;
        return {
          kind: XU,
          data: zU,
          offset: yU,
          stride: QU,
          components: cU,
          glType: 5120 + VU.indexOf(zU.constructor),
          isNormalized: AU
        }
      }));
      return new wU.h(zU, XU.indices, XU.totalVertices, ...MU(UU.position, zU))
    }

    function nU(UU) {
      const XU = UU.lastIndexOf("/");
      return XU < 0 ? UU : UU.substring(XU + 1)
    }

    function mU(UU) {
      const XU = UU.lastIndexOf("/");
      return XU < 0 ? "" : UU.substring(0, XU + 1)
    }

    function lU(UU) {
      return UU.name || `node${UU.index}`
    }
    const xU = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      JU = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      jU = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function KU(UU) {
      var XU, zU, cU, yU;
      const QU = null !== (XU = UU.minFilter) && void 0 !== XU ? XU : 9987;
      return 9729 === (null !== (zU = UU.magFilter) && void 0 !== zU ? zU : 9729) ? null !== (cU = JU[QU]) && void 0 !== cU ? cU : 3 : null !== (yU = jU[QU]) && void 0 !== yU ? yU : 4
    }
    const bU = {
      33071: 0,
      33648: 2
    };

    function TU(UU) {
      var XU;
      return null !== (XU = bU[null !== UU && void 0 !== UU ? UU : 10497]) && void 0 !== XU ? XU : 1
    }

    function hU(UU) {
      return 9728 === UU.minFilter || 9729 === UU.minFilter
    }

    function UX(UU) {
      var XU, zU, cU;
      const yU = Float64Array.from(null !== (XU = UU.scale) && void 0 !== XU ? XU : [1, 1, 1]);
      return UU.hasCamera && (yU[0] = -1), {
        translation: Float64Array.from(null !== (zU = UU.translation) && void 0 !== zU ? zU : [0, 0, 0]),
        rotation: Float64Array.from(null !== (cU = UU.rotation) && void 0 !== cU ? cU : [0, 0, 0, 1]),
        scale: yU
      }
    }

    function XX(UU, XU) {
      let {
        translation: zU,
        rotation: cU,
        scale: yU
      } = UU;
      const QU = new Float32Array(16);
      return (0, CU.e)(yU, 0, cU, 0, zU, 0, QU), XU && (0, CU.q)(QU, XU, 0, QU), QU
    }
    class zX {
      constructor(UU, XU, zU, cU) {
        this.model = UU, this.decode = XU, this.fileInfo = zU, this.uniqueRootUrl = cU, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const yU = new Set,
          QU = (XU, zU) => {
            const cU = UU.nodes[XU];
            if (this.parents.has(cU)) throw new qU.m(`/nodes/${XU}: Invalid recursive node hierarchy`);
            this.parents.set(cU, zU);
            const AU = null === cU.mesh ? [] : UU.meshes[cU.mesh].primitives,
              FU = AU.map((UU => {
                const XU = AU.length > 1;
                return {
                  name: XU ? `${lU(cU)}_primitive${UU.index}` : lU(cU),
                  node: cU,
                  primitive: UU,
                  part: XU,
                  geometry: null
                }
              }));
            this.uses.set(cU, FU);
            const oU = null !== cU.mesh && yU.has(cU.mesh);
            yU.add(cU.mesh), this.own.set(cU, oU ? [] : FU);
            for (const UU of cU.children) QU(UU, cU)
          };
        for (const AU of UU.rootNodes) QU(AU, null);
        this.primitives = UU.nodes.flatMap((UU => {
          var XU;
          return null !== (XU = this.own.get(UU)) && void 0 !== XU ? XU : []
        }))
      }
      decodeGeometries() {
        const UU = new Map;
        return Promise.all(this.primitives.map((async XU => {
          const {
            primitive: zU
          } = XU, cU = zU.draco;
          let yU = cU ? UU.get(cU.bufferView.index) : Promise.resolve(vU(zU));
          yU || (yU = uU(zU, this.decode).then((UU => sU(zU, UU))), UU.set(cU.bufferView.index, yU)), XU.geometry = await yU
        })))
      }
      parentOf(UU) {
        var XU;
        return null !== (XU = this.parents.get(UU)) && void 0 !== XU ? XU : null
      }
      meshesUnder(UU) {
        const XU = this.model.nodes.filter((UU => this.uses.has(UU)));
        for (const cU of XU) {
          const XU = this.uses.get(cU),
            zU = XU.find((XU => XU.name === UU));
          if (zU) return 1 === XU.length ? this.subtree(cU) : this.own.get(cU).includes(zU) ? [zU] : []
        }
        const zU = XU.find((XU => 1 !== this.uses.get(XU).length && lU(XU) === UU));
        return zU ? this.subtree(zU) : null
      }
      subtree(UU) {
        return [...this.own.get(UU), ...UU.children.flatMap((UU => this.subtree(this.model.nodes[UU])))]
      }
      worldMatrix(UU, XU, zU) {
        let cU = XX(UX(XU ? xU : {}), null);
        const yU = [];
        for (let AU = UU.part ? UU.node : this.parentOf(UU.node); AU; AU = this.parentOf(AU)) yU.unshift(AU);
        for (const AU of yU) cU = XX(UX(AU), cU);
        const QU = UX(UU.part ? {} : UU.node);
        return void 0 !== zU && QU.scale.fill(zU), XX(QU, cU)
      }
      floats(UU) {
        const {
          vertexAttributes: XU,
          vertexCount: zU
        } = UU.geometry;
        return new Map(XU.map((UU => [UU.kind, (0, wU.k)(UU, zU)])))
      }
      imageUrl(UU) {
        return function(UU, XU, zU) {
          let {
            name: cU
          } = XU;
          return `data:${UU}${cU}#image${zU}`
        }(this.uniqueRootUrl, this.fileInfo, UU)
      }
      textureDesc(UU, XU) {
        var zU;
        let {
          texture: cU,
          transform: yU
        } = UU;
        const {
          sampler: QU,
          image: AU
        } = this.model.textures[cU], {
          bufferView: FU,
          mimeType: oU,
          name: DU
        } = this.model.images[AU], EU = yU && {
          ...yU.offset ? {
            uOffset: yU.offset[0],
            vOffset: yU.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...yU.rotation ? {
            wAng: -yU.rotation
          } : {},
          ...yU.scale ? {
            uScale: yU.scale[0],
            vScale: yU.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(AU),
          noMipmap: hU(QU),
          invertY: !1,
          samplingMode: KU(QU),
          data: {
            bytes: FU.bytes,
            mimeType: oU,
            label: DU,
            context: `/textures/${cU}`
          },
          sets: {
            wrapU: TU(QU.wrapS),
            wrapV: TU(QU.wrapT),
            ...EU,
            coordinatesIndex: null !== (zU = null === yU || void 0 === yU ? void 0 : yU.texCoord) && void 0 !== zU ? zU : 0,
            hasAlpha: XU
          }
        }
      }
    }
    async function cX(UU, XU, zU, cU, yU, QU) {
      let AU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const FU = function(UU, XU, zU) {
          return "string" !== typeof XU ? {
            url: "",
            rootUrl: UU,
            name: zU()
          } : XU ? XU.startsWith("data:") ? {
            url: XU,
            rootUrl: UU,
            name: ""
          } : UU ? {
            url: UU + XU,
            rootUrl: UU,
            name: XU
          } : {
            url: XU,
            rootUrl: mU(XU),
            name: nU(XU)
          } : {
            url: UU,
            rootUrl: mU(UU),
            name: nU(UU)
          }
        }(zU, UU, yU),
        oU = {};
      XU.addPendingData(oU);
      try {
        const zU = rU(await async function(UU, XU) {
            return "string" !== typeof XU ? XU : UU.url.startsWith("data:") ? (0, qU.p)(UU.url) : await (0, qU.t)(UU.url)
          }(FU, UU)),
          oU = new zX(zU, cU, FU, function(UU, XU) {
            let {
              rootUrl: zU,
              name: cU
            } = UU;
            return !zU.startsWith("file:") && cU ? zU : `${zU}${XU()}/`
          }(FU, yU));
        return await QU(oU), XU.importedMeshesFiles && (XU.loadingPluginName = "oq", AU && XU.importedMeshesFiles.push(FU.url)), oU
      } finally {
        XU.removePendingData(oU)
      }
    }
    var yX = zU(38236),
      QX = zU(38083),
      AX = zU(38634);

    function FX(UU) {
      if (null === UU || void 0 === UU || !UU.min || !UU.max) return null;
      const [XU, zU, cU] = UU.min, [yU, QU, AU] = UU.max, {
        BoundingInfo: FU,
        Sp: oU
      } = (0, yX.c)();
      return new FU(new oU(XU, zU, cU), new oU(yU, QU, AU))
    }

    function oX(UU) {
      (0, QX.e)(UU) || (UU.geometry && UU.geometry.useBoundingInfoFromGeometry ? UU._updateBoundingInfo() : UU.refreshBoundingInfo(!0, !0))
    }
    class DX {
      constructor(UU, XU) {
        this.sa = UU, this.decode = XU, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(UU) {
        let XU = this.viewData.get(UU.index);
        return XU || (XU = this.bufferData.then((() => UU.bytes)), this.viewData.set(UU.index, XU)), XU
      }
      viewBuffer(UU) {
        let XU = this.viewBuffers.get(UU.index);
        return XU || (XU = this.viewBytes(UU).then((UU => new((0, yX.c)().XY)(this.sa.qp(), UU, !1))), this.viewBuffers.set(UU.index, XU)), XU
      }
      vertexBuffer(UU, XU) {
        const {
          kind: zU,
          data: cU
        } = XU, yU = `${UU.index}:${zU}`;
        let QU = this.vertexBuffers.get(yU);
        if (!QU) {
          const AU = UU.bufferView;
          QU = AU ? this.viewBuffer(AU).then((UU => this.layoutVertexBuffer(UU, XU))) : Promise.resolve(cU).then((UU => new((0, yX.c)().VertexBuffer)(this.sa.qp(), UU, zU, !1))), this.vertexBuffers.set(yU, QU)
        }
        return QU
      }
      layoutVertexBuffer(UU, XU) {
        let {
          kind: zU,
          offset: cU,
          stride: yU,
          components: QU,
          glType: AU,
          isNormalized: FU
        } = XU;
        const oU = this.sa.qp();
        return new((0, yX.c)().VertexBuffer)(oU, UU, zU, !1, void 0, yU, void 0, cU, QU, AU, FU, !0, void 0, !0)
      }
      load(UU, XU, zU) {
        const cU = (0, QX.e)(zU),
          yU = UU => {
            cU || (zU._delayInfo = zU._delayInfo || [], -1 === zU._delayInfo.indexOf(UU) && zU._delayInfo.push(UU))
          },
          QU = XU.draco;
        if (QU) {
          for (const UU in QU.attributeIds) yU(UU);
          let AU = this.dracoGeometry.get(QU.bufferView.index);
          return AU || (AU = this.viewBytes(QU.bufferView).then((async () => {
            let yU;
            try {
              yU = await uU(XU, this.decode)
            } catch (oU) {
              throw new qU.m(`${UU}: ${oU instanceof Error?oU.message:String(oU)}`)
            }
            const QU = sU(XU, yU);
            if (cU) return QU;
            const AU = FX(XU.position),
              FU = new((0, yX.c)().MirroredGeometry)(zU.name, this.sa);
            AU && (FU._boundingInfo = AU, FU.useBoundingInfoFromGeometry = !0), QU.indexData && FU.setIndices(QU.indexData);
            for (const UU of QU.vertexAttributes) FU.setVerticesBuffer(this.layoutVertexBuffer(UU.data, UU), QU.vertexCount);
            return FU.link(QU), FU
          })), this.dracoGeometry.set(QU.bufferView.index, AU)), AU
        }
        const AU = [],
          FU = vU(XU);
        if (cU) return zU.isUnIndexed = !FU.indexData, zU.hasVertexAlpha = (0, AX.e)(XU), Promise.resolve(FU);
        const oU = new((0, yX.c)().MirroredGeometry)(zU.name, this.sa),
          {
            indexData: DU
          } = FU;
        DU ? AU.push(this.viewBytes(XU.indices.bufferView).then((() => {
          oU.setIndices(DU)
        }))) : zU.isUnIndexed = !0;
        for (const [EU, {
            kind: YU,
            accessor: NU
          }] of XU.attributes.entries()) yU(YU), AU.push(this.vertexBuffer(NU, FU.vertexAttributes[EU]).then((UU => {
          if ("position" === UU.getKind()) {
            const UU = FX(NU);
            UU && (oU._boundingInfo = UU, oU.useBoundingInfoFromGeometry = !0)
          }
          oU.setVerticesBuffer(UU, FU.vertexCount)
        })));
        return (0, AX.e)(XU) && (zU.hasVertexAlpha = !0), Promise.all(AU).then((() => (oU.link(FU), oU)))
      }
    }
    var EX, YX = zU(38026),
      NX = zU(37814),
      IX = zU(38647),
      pX = zU(37915),
      aX = zU(38007),
      tX = zU(3043),
      gX = zU(37968);

    function kX(UU, XU) {
      UU.metadata = UU.metadata || {};
      const zU = UU._internalMetadata = UU._internalMetadata || {},
        cU = zU.oq = zU.oq || {};
      (cU.pointers = cU.pointers || []).push(XU)
    }

    function GX(UU, XU) {
      if (XU && Object.keys(XU).length > 0) {
        const zU = UU.metadata = UU.metadata || {};
        (zU.oq = zU.oq || {}).extras = XU
      }
    }

    function BX(UU, XU) {
      XU.position = UU.translation ? NX.Sp.FromArray(UU.translation) : NX.Sp.Zero(), XU.rotationQuaternion = UU.rotation ? NX.Quaternion.FromArray(UU.rotation) : NX.Quaternion.Identity(), XU.RY = UU.scale ? NX.Sp.FromArray(UU.scale) : NX.Sp.One()
    }
    class ZX {
      constructor(UU, XU) {
        if (this.sa = UU, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, XU) {
          const XU = UU.qp(),
            zU = UU.bS.add((() => {
              this.dispose()
            })),
            cU = XU.wp.add((() => {
              for (const UU of [...this.geometries, ...this.meshes, ...this.textures]) UU._rebuild()
            }));
          this.release = () => {
            UU.bS.remove(zU), XU.wp.remove(cU)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const UU of this.meshes) this.sa.UyU(UU);
          for (const UU of this.materials) this.sa.addMaterial(UU);
          for (const UU of this.geometries) this.sa.addGeometry(UU);
          for (const UU of this.transformNodes) this.sa.addTransformNode(UU);
          for (const UU of this.textures) this.sa.addTexture(UU)
        }
      }
      dispose() {
        var UU;
        for (const XU of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const UU of XU.slice()) UU.dispose();
          XU.length = 0
        }
        null === (UU = this.release) || void 0 === UU || UU.call(this), this.release = null
      }
    }
    class RX {
      constructor(UU, XU, zU, cU, yU, QU, AU) {
        this.asset = UU, this.sa = XU, this.tree = zU, this.geometryData = yU, this.materials = QU, this.lite = AU, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = cU ? zU : null
      }
      create(UU) {
        if (this.lite) return UU();
        const XU = this.sa;
        XU._blockEntityCollection = !!this.container;
        try {
          const XU = UU();
          return this.container && (XU._parentContainer = this.container), XU
        } finally {
          XU._blockEntityCollection = !1
        }
      }
      node(UU, XU) {
        return this.create((() => this.lite ? XU ? (0, IX.e)(this.lite, UU) : (0, IX.q)(this.lite, UU) : XU ? new((0, yX.c)().Mesh)(UU, this.sa) : new((0, yX.c)().TransformNode)(UU, this.sa)))
      }
      async load() {
        var UU;
        this.asset.model.json.nodes && this.createRoot();
        const XU = this.lite ? null : this.sa,
          zU = null !== (UU = null === XU || void 0 === XU ? void 0 : XU.blockMaterialDirtyMechanism) && void 0 !== UU && UU;
        let cU;
        XU && (XU.blockMaterialDirtyMechanism = !0);
        try {
          cU = this.loadScene()
        } finally {
          null === XU || void 0 === XU || XU._forceBlockMaterialDirtyMechanism(zU)
        }
        await cU;
        const {
          root: yU,
          tree: QU
        } = this;
        yU && (yU.YC(!0), QU.meshes.push(yU), QU.rootNodes.push(yU));
        for (const FU of this.asset.model.nodes) {
          const UU = this.nodeObjects.get(FU.index);
          UU && ["TransformNode", "LiteNode"].includes(UU.getClassName()) && QU.transformNodes.push(UU);
          for (const XU of null !== (AU = this.nodePrimitives.get(FU.index)) && void 0 !== AU ? AU : []) {
            var AU;
            QU.meshes.push(XU);
            const UU = XU.geometry;
            UU && !QU.geometries.includes(UU) && QU.geometries.push(UU)
          }
        }
      }
      createRoot() {
        const UU = this.node("__root__", !0);
        this.root = UU, UU.YC(!1), this.sa.useRightHandedSystem || BX(xU, UU)
      }
      loadScene() {
        const UU = [];
        for (const XU of this.asset.model.rootNodes) UU.push(this.loadNode(this.asset.model.nodes[XU], (UU => {
          UU.parent = this.root
        })));
        return UU.push(Promise.resolve()), Promise.all(UU).then((() => {}))
      }
      loadNode(UU, XU) {
        const zU = `/nodes/${UU.index}`,
          cU = [],
          yU = yU => {
            if (kX(yU, zU), BX(UU, yU), UU.hasCamera && !this.sa.useRightHandedSystem) {
              const {
                RY: UU
              } = yU;
              UU.set(-1, UU.y, UU.z)
            }
            for (const XU of UU.children) cU.push(this.loadNode(this.asset.model.nodes[XU], (UU => {
              UU.parent = yU
            })));
            (zU => {
              GX(zU, UU.extras), XU(zU)
            })(yU)
          };
        if (null === UU.mesh) {
          const XU = this.node(lU(UU), !1);
          this.nodeObjects.set(UU.index, XU), yU(XU)
        } else {
          const XU = this.asset.model.meshes[UU.mesh];
          cU.push(this.loadMesh(`/meshes/${XU.index}`, UU, XU, yU))
        }
        return Promise.all(cU).then((() => {
          for (const zU of null !== (XU = this.nodePrimitives.get(UU.index)) && void 0 !== XU ? XU : []) {
            var XU;
            oX(zU)
          }
          return this.nodeObjects.get(UU.index)
        }))
      }
      loadMesh(UU, XU, zU, cU) {
        const yU = [],
          QU = lU(XU);
        if (1 === zU.primitives.length) {
          const cU = zU.primitives[0];
          yU.push(this.loadPrimitive(`${UU}/primitives/${cU.index}`, QU, cU, (UU => {
            this.nodeObjects.set(XU.index, UU), this.nodePrimitives.set(XU.index, [UU])
          })))
        } else {
          const cU = this.node(QU, !1);
          this.nodeObjects.set(XU.index, cU);
          const AU = [];
          this.nodePrimitives.set(XU.index, AU);
          for (const XU of zU.primitives) yU.push(this.loadPrimitive(`${UU}/primitives/${XU.index}`, `${QU}_primitive${XU.index}`, XU, (UU => {
            UU.parent = cU, AU.push(UU)
          })))
        }
        const AU = this.nodeObjects.get(XU.index);
        return cU(AU), Promise.all(yU).then((() => AU))
      }
      loadPrimitive(UU, XU, zU, cU) {
        const yU = [],
          QU = this.node(XU, !0);
        if (QU.sideOrientation = this.sa.useRightHandedSystem ? pX.d.CounterClockWiseSideOrientation : pX.d.ClockWiseSideOrientation, yU.push(this.geometryData.load(UU, zU, QU).then((UU => {
            if ((0, QX.e)(QU)) {
              var XU, zU;
              const cU = UU;
              QU.replaceModel(cU, Int32Array.of(0, null !== (XU = null === (zU = cU.indexData) || void 0 === zU ? void 0 : zU.length) && void 0 !== XU ? XU : cU.vertexCount, 0, cU.vertexCount))
            } else this.create((() => (UU.applyToMesh(QU), UU)))
          }))), this.materials) {
          const UU = 0 === zU.mode ? pX.d.PointListDrawMode : pX.d.TriangleFillMode,
            XU = null === zU.material ? null : this.asset.model.materials[zU.material];
          yU.push(this.loadMaterial(XU, UU, (UU => {
            QU.material = UU
          })))
        }
        return kX(QU, UU), cU(QU), Promise.all(yU).then((() => QU))
      }
      loadMaterial(UU, XU, zU) {
        var cU;
        const yU = `${null!==(cU=null===UU||void 0===UU?void 0:UU.index)&&void 0!==cU?cU:"default"}:${XU}`;
        let QU = this.materialData.get(yU);
        return QU || (QU = this.createMaterial(UU, XU), this.materialData.set(yU, QU)), zU(QU.material), QU.promise
      }
      createMaterial(UU, XU) {
        const zU = UU ? UU.name || `material${UU.index}` : "__GLTFLoader._default",
          {
            style: cU,
            unlit: yU
          } = this.materials;
        let QU;
        const AU = this.create((() => {
          const AU = (0, gX.b)({
            name: zU,
            sa: this.sa,
            sets: {
              ...(0, AX.b)(this.asset, UU, cU, yU),
              fillMode: XU
            },
            unrendered: !0
          });
          return QU = AU.model, AU.mirror
        }));
        let FU = Promise.resolve();
        if (UU) {
          const XU = `/materials/${UU.index}`,
            cU = QU.diffuseTexture;
          if (cU && !cU.mirror) FU = new Promise((UU => setTimeout(UU)));
          else if (cU) {
            const yU = cU.mirror;
            yU._parentContainer = this.container, yU.name = `${zU} (Base Color)`, kX(yU, `${XU}${UU.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(yU), FU = (0, aX.o)(cU)
          }
          GX(AU, UU.extras), kX(AU, XU)
        }
        return this.tree.materials.push(AU), {
          material: AU,
          promise: FU
        }
      }
    }

    function PX() {
      YX.g.dracoDecodes = ZU.decodes, YX.g.dracoWorkersStarted = ZU.workersStarted, YX.g.dracoMostWorkers = ZU.mostWorkers
    }
    async function WX(UU, XU, zU, yU, QU) {
      try {
        return await async function(UU, XU, zU, yU, QU, AU) {
          var FU;
          let oU;
          const DU = null === (FU = (0, tX.e)()) || void 0 === FU ? void 0 : FU.WY,
            EU = null !== DU && void 0 !== DU && DU.Ua && XU === DU.nS() ? DU : null,
            YU = QU && !EU;
          return await cX(UU, XU, zU, yU, cU.d, (UU => (oU = new ZX(XU, YU), new RX(UU, XU, oU, YU, new DX(XU, yU), AU, EU).load())), !QU), oU
        }(UU, XU, zU, eU, yU, QU)
      } finally {
        PX()
      }
    }
    async function dX(UU, XU, zU, yU) {
      try {
        return await cX(UU, XU, zU, eU, cU.d, (UU => yU(UU, new DX(XU, eU))))
      } finally {
        PX()
      }
    }
    EX = FU, tU || (tU = {
      scriptUrl: new URL(EX.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(EX.wasmBinaryUrl, location.href).href
    })
  },
  36961: UU => {
    UU.exports = function(UU, XU, zU, cU) {
      var yU = self || window;
      try {
        try {
          var QU;
          try {
            QU = new yU.Blob([UU])
          } catch (DU) {
            (QU = new(yU.BlobBuilder || yU.WebKitBlobBuilder || yU.MozBlobBuilder || yU.MSBlobBuilder)).append(UU), QU = QU.getBlob()
          }
          var AU = yU.URL || yU.webkitURL,
            FU = AU.createObjectURL(QU),
            oU = new yU[XU](FU, zU);
          return AU.revokeObjectURL(FU), oU
        } catch (DU) {
          return new yU[XU]("data:application/javascript,".concat(encodeURIComponent(UU)), zU)
        }
      } catch (DU) {
        if (!cU) throw Error("Inline worker is not supported");
        return new yU[XU](cU, zU)
      }
    }
  },
  44191: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  44184: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);