export const id = 215;
export const ids = [215];
export const modules = {
  41732: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      loadGlbAsset: () => pW,
      loadGlbTree: () => DW
    });
    var wQ = XQ(38191),
      qQ = XQ(41740),
      TQ = XQ(36540),
      zQ = XQ.n(TQ);

    function sQ() {
      return zQ()('(()=>{class QQ extends Error{}function WQ(WQ,XQ){const wQ=WQ._malloc(XQ);if(0===wQ)throw new QQ(`Draco: the decoder\'s heap refused ${XQ} bytes`);return wQ}function XQ(QQ){return{[QQ.DT_FLOAT32]:[Float32Array,5126],[QQ.DT_INT8]:[Int8Array,5120],[QQ.DT_INT16]:[Int16Array,5122],[QQ.DT_INT32]:[Int32Array,5124],[QQ.DT_UINT8]:[Uint8Array,5121],[QQ.DT_UINT16]:[Uint16Array,5123],[QQ.DT_UINT32]:[Uint32Array,5125]}}function wQ(WQ,wQ,qQ,TQ,zQ){let sQ=null,FQ=null,PQ=null;try{sQ=new WQ.Decoder,FQ=new WQ.DecoderBuffer,FQ.Init(wQ,wQ.byteLength);let gQ=0;const JQ=sQ.GetEncodedGeometryType(FQ);if(JQ===WQ.TRIANGULAR_MESH){const XQ=new WQ.Mesh;PQ=XQ;const wQ=sQ.DecodeBufferToMesh(FQ,XQ);if(!wQ.ok()||0===XQ.ptr)throw new QQ(wQ.error_msg());gQ=3*XQ.num_faces()}else{if(JQ!==WQ.POINT_CLOUD)throw new QQ(`Draco: Cannot decode invalid geometry type ${JQ}`);{const XQ=new WQ.PointCloud;PQ=XQ;const wQ=sQ.DecodeBufferToPointCloud(FQ,XQ);if(!wQ.ok()||!XQ.ptr)throw new QQ(wQ.error_msg())}}const rQ=PQ.num_points();if(rQ!==TQ.vertices||gQ!==TQ.indices)throw new QQ(`Draco: decoded ${rQ} vertices and ${gQ} indices, the accessors declare ${TQ.vertices} and ${TQ.indices}`);const IQ=XQ(WQ),jQ=[];for(const{kind:WQ,id:XQ,components:wQ}of qQ){const qQ=sQ.GetAttributeByUniqueId(PQ,XQ);if(!qQ||0===qQ.ptr)throw new QQ(`Draco: no attribute with id ${XQ} (${WQ})`);const TQ=qQ.data_type();if(!IQ[TQ])throw new QQ(`Draco: Cannot decode invalid data type ${TQ}`);if(qQ.num_components()!==wQ)throw new QQ(`Draco: ${WQ} decodes to ${qQ.num_components()} components, its accessor declares ${wQ}`);jQ.push([WQ,qQ,TQ])}return zQ({dracoDecoder:sQ,geometry:PQ,triangles:JQ===WQ.TRIANGULAR_MESH,numPoints:rQ,numIndices:gQ,attributes:jQ})}finally{PQ&&WQ.destroy(PQ),FQ&&WQ.destroy(FQ),sQ&&WQ.destroy(sQ)}}const qQ=self;let TQ=null;self.onmessage=QQ=>{let{data:zQ}=QQ;if("init"===zQ.id){try{importScripts(zQ.url),TQ=DracoDecoderModule({wasmBinary:zQ.wasmBinary}),qQ.postMessage({id:"initDone"})}catch(JQ){qQ.postMessage({id:"initError",message:JQ instanceof Error?JQ.message:String(JQ)})}return}const{seq:sQ,data:FQ,attributeIds:PQ,expected:gQ}=zQ;TQ?TQ.then((QQ=>{try{const TQ=function(QQ,qQ,TQ,zQ){const sQ=Object.keys(TQ).map((QQ=>({kind:QQ,id:TQ[QQ],components:zQ.components[QQ]})));return wQ(QQ,qQ,sQ,zQ,(wQ=>{let{dracoDecoder:qQ,geometry:TQ,triangles:zQ,numPoints:sQ,numIndices:FQ,attributes:PQ}=wQ;const gQ=XQ(QQ);let JQ=null;if(zQ){const XQ=4*FQ,wQ=WQ(QQ,XQ);try{qQ.GetTrianglesUInt32Array(TQ,XQ,wQ),JQ=new Uint32Array(FQ),JQ.set(new Uint32Array(QQ.HEAPF32.buffer,wQ,FQ))}finally{QQ._free(wQ)}}const rQ=[];for(const[XQ,IQ,jQ]of PQ){const[wQ]=gQ[jQ],zQ=IQ.num_components(),FQ=sQ*zQ,PQ=FQ*wQ.BYTES_PER_ELEMENT,JQ=WQ(QQ,PQ);try{qQ.GetAttributeDataArrayForAllPoints(TQ,IQ,jQ,PQ,JQ),rQ.push({kind:XQ,data:new wQ(QQ.HEAPF32.buffer,JQ,FQ).slice(),size:zQ,byteOffset:IQ.byte_offset(),byteStride:IQ.byte_stride(),normalized:IQ.normalized()})}finally{QQ._free(JQ)}}return{indices:JQ,attributes:rQ,totalVertices:sQ}}))}(QQ,FQ,PQ,gQ),zQ=TQ.attributes.map((QQ=>QQ.data.buffer));TQ.indices&&zQ.push(TQ.indices.buffer),qQ.postMessage({id:"decoded",seq:sQ,...TQ},zQ)}catch(JQ){qQ.postMessage({id:"decodeError",seq:sQ,message:JQ instanceof Error?JQ.message:String(JQ)})}}),(QQ=>{qQ.postMessage({id:"decodeError",seq:sQ,message:QQ instanceof Error?QQ.message:String(QQ)})})):qQ.postMessage({id:"decodeError",seq:sQ,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, XQ.p + "dracoDecode.worker.6ed562f9.worker.js")
    }
    var FQ = XQ(105);
    const PQ = 1e3;
    let gQ = null,
      JQ = null;
    const rQ = [],
      IQ = [];
    let jQ = 0;
    const BQ = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      yQ = function(QQ, WQ) {
        const XQ = QQ ? Math.max(1, Math.min(Math.floor(.5 * QQ), 4)) : 1;
        return WQ ? Math.min(XQ, 2) : XQ
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, FQ.isMobile)());

    function VQ() {
      if (!gQ) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: QQ,
        wasmBinaryUrl: WQ
      } = gQ;
      return JQ ??= fetch(WQ).then((QQ => {
        if (!QQ.ok) throw new Error(`Draco: fetching ${WQ} failed: ${QQ.status}`);
        return QQ.arrayBuffer()
      })), JQ.catch((() => {
        JQ = null
      })), BQ.workersStarted++, JQ.then((WQ => new Promise(((XQ, wQ) => {
        const qQ = new sQ;
        qQ.onerror = QQ => {
          qQ.onmessage = null, qQ.onerror = null, qQ.terminate(), wQ(new Error("Draco: the decode worker failed to start" + (QQ.message ? `: ${QQ.message}` : " (its script did not load)")))
        }, qQ.onmessage = QQ => {
          let {
            data: WQ
          } = QQ;
          qQ.onmessage = null, qQ.onerror = null, "initDone" === WQ.id ? XQ(qQ) : (qQ.terminate(), wQ(new Error(`Draco: ${"initError"===WQ.id?WQ.message:"the worker did not start"}`)))
        };
        const TQ = WQ.slice(0),
          zQ = {
            id: "init",
            url: QQ,
            wasmBinary: TQ
          };
        qQ.postMessage(zQ, [TQ])
      }))))
    }

    function DQ(QQ) {
      const WQ = rQ.indexOf(QQ); - 1 !== WQ && rQ.splice(WQ, 1);
      const XQ = IQ.shift();
      XQ && GQ(XQ)
    }

    function pQ(QQ, WQ) {
      QQ.busy = !0, QQ.releaseTimer && (clearTimeout(QQ.releaseTimer), QQ.releaseTimer = null);
      QQ.worker.then((XQ => {
        const wQ = jQ++;
        XQ.onmessage = qQ => {
          let {
            data: TQ
          } = qQ;
          if (("decoded" === TQ.id || "decodeError" === TQ.id) && TQ.seq === wQ) {
            if (XQ.onmessage = null, XQ.onerror = null, "decoded" === TQ.id) return BQ.decodes++, WQ.resolve({
              indices: TQ.indices,
              attributes: TQ.attributes,
              totalVertices: TQ.totalVertices
            }), void(() => {
              const WQ = IQ.shift();
              WQ ? pQ(QQ, WQ) : (QQ.busy = !1, QQ.releaseTimer = setTimeout((() => {
                const WQ = rQ.indexOf(QQ); - 1 !== WQ && rQ.splice(WQ, 1), QQ.worker.then((QQ => {
                  QQ.terminate()
                }))
              }), PQ))
            })();
            XQ.terminate(), WQ.reject(new Error(TQ.message)), DQ(QQ)
          }
        }, XQ.onerror = wQ => {
          XQ.onmessage = null, XQ.onerror = null, XQ.terminate(), WQ.reject(new Error(`Draco: the decode worker failed: ${wQ.message}`)), DQ(QQ)
        };
        const qQ = {
          id: "decode",
          seq: wQ,
          data: WQ.data,
          attributeIds: WQ.attributeIds,
          expected: WQ.expected
        };
        XQ.postMessage(qQ, [WQ.data.buffer])
      }), (XQ => {
        WQ.reject(XQ instanceof Error ? XQ : new Error(String(XQ))), DQ(QQ)
      }))
    }

    function GQ(QQ) {
      const WQ = rQ.find((QQ => !QQ.busy));
      if (WQ) pQ(WQ, QQ);
      else {
        if (rQ.length < yQ) {
          const WQ = {
            worker: VQ(),
            busy: !0,
            releaseTimer: null
          };
          return rQ.push(WQ), BQ.mostWorkers = Math.max(BQ.mostWorkers, rQ.length), void pQ(WQ, QQ)
        }
        IQ.push(QQ)
      }
    }

    function UQ(QQ, WQ, XQ) {
      return new Promise(((wQ, qQ) => {
        GQ({
          data: new Int8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength).slice(),
          attributeIds: WQ,
          expected: XQ,
          resolve: wQ,
          reject: qQ
        })
      }))
    }
    var bQ = XQ(37748),
      vQ = XQ(37762),
      dQ = XQ(34596),
      HQ = XQ(34591);
    const aQ = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function lQ(QQ) {
      const WQ = (0, HQ.h)(QQ.byteLength);
      if (WQ) throw new dQ.i(WQ);
      const {
        json: XQ,
        bin: wQ
      } = (0, dQ.u)(QQ), qQ = (0, HQ.d)(XQ, wQ);
      if (qQ) throw new dQ.i(qQ);
      try {
        return function(QQ, WQ) {
          var XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ;
          const VQ = new Map,
            DQ = XQ => {
              let wQ = VQ.get(XQ);
              if (!wQ) {
                var qQ;
                const TQ = QQ.bufferViews[XQ],
                  zQ = null !== (qQ = TQ.byteOffset) && void 0 !== qQ ? qQ : 0;
                wQ = {
                  index: XQ,
                  bytes: WQ.subarray(zQ, zQ + TQ.byteLength),
                  byteStride: TQ.byteStride
                }, VQ.set(XQ, wQ)
              }
              return wQ
            },
            pQ = new Map,
            GQ = WQ => {
              let XQ = pQ.get(WQ);
              if (!XQ) {
                var wQ;
                const qQ = QQ.accessors[WQ];
                XQ = {
                  index: WQ,
                  count: qQ.count,
                  type: qQ.type,
                  numComponents: dQ.k[qQ.type],
                  componentType: qQ.componentType,
                  normalized: null !== (wQ = qQ.normalized) && void 0 !== wQ && wQ,
                  byteOffset: qQ.byteOffset,
                  bufferView: void 0 === qQ.bufferView ? null : DQ(qQ.bufferView),
                  min: qQ.min,
                  max: qQ.max
                }, pQ.set(WQ, XQ)
              }
              return XQ
            },
            UQ = null !== (XQ = null === (wQ = QQ.extensionsUsed) || void 0 === wQ ? void 0 : wQ.includes("KHR_draco_mesh_compression")) && void 0 !== XQ && XQ,
            bQ = (null !== (qQ = QQ.meshes) && void 0 !== qQ ? qQ : []).map(((WQ, XQ) => {
              const wQ = WQ.primitives.map(((WQ, XQ) => {
                var wQ, qQ, TQ;
                const zQ = UQ ? null === (wQ = WQ.extensions) || void 0 === wQ ? void 0 : wQ.KHR_draco_mesh_compression : void 0;
                let sQ = null;
                const FQ = [];
                if (zQ) {
                  const XQ = {
                    vertices: QQ.accessors[WQ.attributes.POSITION].count,
                    indices: void 0 === WQ.indices ? 0 : QQ.accessors[WQ.indices].count,
                    components: {}
                  };
                  sQ = {
                    bufferView: DQ(zQ.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: XQ
                  };
                  for (const [wQ, qQ] of dQ.f) {
                    const TQ = zQ.attributes[wQ];
                    if (void 0 === TQ) continue;
                    sQ.attributeIds[qQ] = TQ;
                    const FQ = WQ.attributes[wQ];
                    var PQ;
                    if (void 0 !== FQ) sQ.normalized[qQ] = null !== (PQ = QQ.accessors[FQ].normalized) && void 0 !== PQ && PQ, XQ.components[qQ] = dQ.k[QQ.accessors[FQ].type]
                  }
                } else
                  for (const [QQ, gQ] of dQ.f) {
                    const XQ = WQ.attributes[QQ];
                    void 0 !== XQ && FQ.push({
                      semantic: QQ,
                      kind: gQ,
                      accessor: GQ(XQ)
                    })
                  }
                return {
                  index: XQ,
                  mode: null !== (qQ = WQ.mode) && void 0 !== qQ ? qQ : 4,
                  attributes: FQ,
                  indices: zQ || void 0 === WQ.indices ? null : GQ(WQ.indices),
                  position: void 0 === WQ.attributes.POSITION ? null : GQ(WQ.attributes.POSITION),
                  material: null !== (TQ = WQ.material) && void 0 !== TQ ? TQ : null,
                  draco: sQ
                }
              }));
              return {
                index: XQ,
                name: WQ.name,
                primitives: wQ,
                extras: WQ.extras
              }
            })),
            vQ = (null !== (TQ = QQ.nodes) && void 0 !== TQ ? TQ : []).map(((QQ, WQ) => {
              var XQ, wQ;
              return {
                index: WQ,
                name: QQ.name,
                children: null !== (XQ = QQ.children) && void 0 !== XQ ? XQ : [],
                mesh: null !== (wQ = QQ.mesh) && void 0 !== wQ ? wQ : null,
                translation: QQ.translation,
                rotation: QQ.rotation,
                scale: QQ.scale,
                hasCamera: void 0 !== QQ.camera,
                extras: QQ.extras
              }
            })),
            HQ = null !== (zQ = null === (sQ = QQ.extensionsUsed) || void 0 === sQ ? void 0 : sQ.includes("KHR_materials_unlit")) && void 0 !== zQ && zQ,
            lQ = null !== (FQ = null === (PQ = QQ.extensionsUsed) || void 0 === PQ ? void 0 : PQ.includes("KHR_texture_transform")) && void 0 !== FQ && FQ,
            hQ = (null !== (gQ = QQ.materials) && void 0 !== gQ ? gQ : []).map(((QQ, WQ) => {
              var XQ, wQ, qQ, TQ;
              const zQ = QQ.pbrMetallicRoughness,
                sQ = null === zQ || void 0 === zQ ? void 0 : zQ.baseColorTexture;
              return {
                index: WQ,
                name: QQ.name,
                extras: QQ.extras,
                unlit: HQ && void 0 !== (null === (XQ = QQ.extensions) || void 0 === XQ ? void 0 : XQ.KHR_materials_unlit),
                pbr: zQ ? {
                  baseColorFactor: zQ.baseColorFactor,
                  metallicFactor: zQ.metallicFactor,
                  roughnessFactor: zQ.roughnessFactor
                } : null,
                baseColorTexture: sQ ? {
                  texture: sQ.index,
                  transform: lQ && (null === (wQ = sQ.extensions) || void 0 === wQ ? void 0 : wQ.KHR_texture_transform) || null
                } : null,
                emissiveFactor: QQ.emissiveFactor,
                alphaMode: null !== (qQ = QQ.alphaMode) && void 0 !== qQ ? qQ : "OPAQUE",
                alphaCutoff: QQ.alphaCutoff,
                doubleSided: null !== (TQ = QQ.doubleSided) && void 0 !== TQ && TQ
              }
            })),
            iQ = (null !== (JQ = QQ.textures) && void 0 !== JQ ? JQ : []).map(((WQ, XQ) => {
              var wQ, qQ;
              const TQ = void 0 === WQ.sampler ? aQ : {
                index: WQ.sampler,
                ...null === (wQ = QQ.samplers) || void 0 === wQ ? void 0 : wQ[WQ.sampler]
              };
              return {
                index: XQ,
                sampler: {
                  index: TQ.index,
                  magFilter: TQ.magFilter,
                  minFilter: TQ.minFilter,
                  wrapS: TQ.wrapS,
                  wrapT: TQ.wrapT
                },
                image: null !== (qQ = WQ.source) && void 0 !== qQ ? qQ : -1
              }
            })),
            cQ = (null !== (rQ = QQ.images) && void 0 !== rQ ? rQ : []).map(((QQ, WQ) => ({
              index: WQ,
              name: QQ.name,
              mimeType: QQ.mimeType,
              bufferView: DQ(QQ.bufferView)
            }))),
            AQ = null !== (IQ = (0, dQ.s)(QQ)) && void 0 !== IQ ? IQ : 0;
          return {
            json: QQ,
            rootNodes: null !== (jQ = null === (BQ = QQ.scenes) || void 0 === BQ || null === (yQ = BQ[AQ]) || void 0 === yQ ? void 0 : yQ.nodes) && void 0 !== jQ ? jQ : [],
            nodes: vQ,
            meshes: bQ,
            materials: hQ,
            textures: iQ,
            images: cQ
          }
        }(XQ, wQ)
      } catch (TQ) {
        throw TQ instanceof dQ.h ? TQ : new dQ.h(`reading the GLB failed: ${TQ instanceof Error?TQ.message:String(TQ)}`)
      }
    }
    async function hQ(QQ, WQ) {
      var XQ, wQ;
      const qQ = QQ.draco;
      if (!qQ) throw new dQ.h("not a Draco primitive");
      let TQ;
      try {
        TQ = await WQ(qQ.bufferView.bytes, qQ.attributeIds, qQ.expected)
      } catch (PQ) {
        throw new dQ.h(`Draco decoding failed: ${PQ instanceof Error?PQ.message:String(PQ)}`)
      }
      const {
        vertices: zQ,
        indices: sQ,
        components: FQ
      } = qQ.expected;
      if (TQ.totalVertices !== zQ || (null !== (XQ = null === (wQ = TQ.indices) || void 0 === wQ ? void 0 : wQ.length) && void 0 !== XQ ? XQ : 0) !== sQ || TQ.attributes.some((QQ => QQ.size !== FQ[QQ.kind] || QQ.data.length !== zQ * QQ.size))) throw new dQ.h("Draco decoding gave other counts than the accessors declare");
      for (const gQ of TQ.attributes) {
        const QQ = qQ.normalized[gQ.kind];
        void 0 !== QQ && (gQ.normalized = QQ)
      }
      return TQ
    }
    const iQ = new WeakMap;

    function cQ(QQ, WQ) {
      var XQ;
      const wQ = null !== (XQ = iQ.get(QQ)) && void 0 !== XQ ? XQ : WQ(QQ);
      return iQ.set(QQ, wQ), wQ
    }

    function AQ(QQ) {
      const WQ = QQ.bufferView,
        XQ = 5125 === QQ.componentType ? Uint32Array : Uint16Array,
        wQ = WQ.bytes.buffer,
        qQ = WQ.bytes.byteOffset + (QQ.byteOffset || 0);
      return qQ % XQ.BYTES_PER_ELEMENT !== 0 ? new XQ(wQ.slice(qQ, qQ + QQ.count * XQ.BYTES_PER_ELEMENT), 0) : new XQ(wQ, qQ, QQ.count)
    }

    function RQ(QQ, WQ) {
      if (QQ.min && QQ.max) return [new Float64Array(QQ.min), new Float64Array(QQ.max)];
      const XQ = WQ.find((QQ => {
          let {
            kind: WQ
          } = QQ;
          return "position" === WQ
        })),
        wQ = XQ ? (0, vQ.i)(XQ, QQ.count) : new Float32Array(0);
      return (0, vQ.r)(wQ.length / 3, ((QQ, WQ) => wQ[3 * QQ + WQ]))
    }

    function EQ(QQ) {
      const WQ = QQ.attributes.map((QQ => {
          var WQ, XQ;
          let {
            kind: wQ,
            accessor: qQ
          } = QQ;
          const {
            bufferView: TQ,
            numComponents: zQ
          } = qQ;
          if (!TQ) {
            return {
              kind: wQ,
              data: cQ(qQ, (() => new Float32Array(zQ * qQ.count))),
              offset: 0,
              stride: 4 * zQ,
              components: zQ,
              glType: 5126,
              isNormalized: !1
            }
          }
          const sQ = null !== (WQ = TQ.byteStride) && void 0 !== WQ ? WQ : zQ * dQ.b[qQ.componentType];
          return {
            kind: wQ,
            data: TQ.bytes,
            offset: null !== (XQ = qQ.byteOffset) && void 0 !== XQ ? XQ : 0,
            stride: sQ,
            components: zQ,
            glType: qQ.componentType,
            isNormalized: qQ.normalized
          }
        })),
        XQ = QQ.indices,
        wQ = XQ && cQ(XQ, AQ),
        qQ = QQ.position;
      return new vQ.g(WQ, wQ, qQ.count, ...RQ(qQ, WQ))
    }
    const CQ = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function uQ(QQ, WQ) {
      const XQ = WQ.attributes.map((QQ => {
        let {
          kind: WQ,
          data: XQ,
          size: wQ,
          byteOffset: qQ,
          byteStride: TQ,
          normalized: zQ
        } = QQ;
        return {
          kind: WQ,
          data: XQ,
          offset: qQ,
          stride: TQ,
          components: wQ,
          glType: 5120 + CQ.indexOf(XQ.constructor),
          isNormalized: zQ
        }
      }));
      return new vQ.g(XQ, WQ.indices, WQ.totalVertices, ...RQ(QQ.position, XQ))
    }

    function LQ(QQ) {
      const WQ = QQ.lastIndexOf("/");
      return WQ < 0 ? QQ : QQ.substring(WQ + 1)
    }

    function kQ(QQ) {
      const WQ = QQ.lastIndexOf("/");
      return WQ < 0 ? "" : QQ.substring(0, WQ + 1)
    }

    function fQ(QQ) {
      return QQ.name || `node${QQ.index}`
    }
    const SQ = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      tQ = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      oQ = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function eQ(QQ) {
      var WQ, XQ, wQ, qQ;
      const TQ = null !== (WQ = QQ.minFilter) && void 0 !== WQ ? WQ : 9987;
      return 9729 === (null !== (XQ = QQ.magFilter) && void 0 !== XQ ? XQ : 9729) ? null !== (wQ = tQ[TQ]) && void 0 !== wQ ? wQ : 3 : null !== (qQ = oQ[TQ]) && void 0 !== qQ ? qQ : 4
    }
    const nQ = {
      33071: 0,
      33648: 2
    };

    function xQ(QQ) {
      var WQ;
      return null !== (WQ = nQ[null !== QQ && void 0 !== QQ ? QQ : 10497]) && void 0 !== WQ ? WQ : 1
    }

    function YQ(QQ) {
      return 9728 === QQ.minFilter || 9729 === QQ.minFilter
    }

    function NQ(QQ) {
      var WQ, XQ, wQ;
      const qQ = Float64Array.from(null !== (WQ = QQ.scale) && void 0 !== WQ ? WQ : [1, 1, 1]);
      return QQ.hasCamera && (qQ[0] = -1), {
        translation: Float64Array.from(null !== (XQ = QQ.translation) && void 0 !== XQ ? XQ : [0, 0, 0]),
        rotation: Float64Array.from(null !== (wQ = QQ.rotation) && void 0 !== wQ ? wQ : [0, 0, 0, 1]),
        scale: qQ
      }
    }

    function ZQ(QQ, WQ) {
      let {
        translation: XQ,
        rotation: wQ,
        scale: qQ
      } = QQ;
      const TQ = new Float32Array(16);
      return (0, bQ.e)(qQ, 0, wQ, 0, XQ, 0, TQ), WQ && (0, bQ.n)(TQ, WQ, 0, TQ), TQ
    }
    class OQ {
      constructor(QQ, WQ, XQ, wQ) {
        this.model = QQ, this.decode = WQ, this.fileInfo = XQ, this.uniqueRootUrl = wQ, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const qQ = new Set,
          TQ = (WQ, XQ) => {
            const wQ = QQ.nodes[WQ];
            if (this.parents.has(wQ)) throw new dQ.h(`/nodes/${WQ}: Invalid recursive node hierarchy`);
            this.parents.set(wQ, XQ);
            const zQ = null === wQ.mesh ? [] : QQ.meshes[wQ.mesh].primitives,
              sQ = zQ.map((QQ => {
                const WQ = zQ.length > 1;
                return {
                  name: WQ ? `${fQ(wQ)}_primitive${QQ.index}` : fQ(wQ),
                  node: wQ,
                  primitive: QQ,
                  part: WQ,
                  geometry: null
                }
              }));
            this.uses.set(wQ, sQ);
            const FQ = null !== wQ.mesh && qQ.has(wQ.mesh);
            qQ.add(wQ.mesh), this.own.set(wQ, FQ ? [] : sQ);
            for (const QQ of wQ.children) TQ(QQ, wQ)
          };
        for (const zQ of QQ.rootNodes) TQ(zQ, null);
        this.primitives = QQ.nodes.flatMap((QQ => {
          var WQ;
          return null !== (WQ = this.own.get(QQ)) && void 0 !== WQ ? WQ : []
        }))
      }
      decodeGeometries() {
        const QQ = new Map;
        return Promise.all(this.primitives.map((async WQ => {
          const {
            primitive: XQ
          } = WQ, wQ = XQ.draco;
          let qQ = wQ ? QQ.get(wQ.bufferView.index) : Promise.resolve(EQ(XQ));
          qQ || (qQ = hQ(XQ, this.decode).then((QQ => uQ(XQ, QQ))), QQ.set(wQ.bufferView.index, qQ)), WQ.geometry = await qQ
        })))
      }
      parentOf(QQ) {
        var WQ;
        return null !== (WQ = this.parents.get(QQ)) && void 0 !== WQ ? WQ : null
      }
      meshesUnder(QQ) {
        const WQ = this.model.nodes.filter((QQ => this.uses.has(QQ)));
        for (const wQ of WQ) {
          const WQ = this.uses.get(wQ),
            XQ = WQ.find((WQ => WQ.name === QQ));
          if (XQ) return 1 === WQ.length ? this.subtree(wQ) : this.own.get(wQ).includes(XQ) ? [XQ] : []
        }
        const XQ = WQ.find((WQ => 1 !== this.uses.get(WQ).length && fQ(WQ) === QQ));
        return XQ ? this.subtree(XQ) : null
      }
      subtree(QQ) {
        return [...this.own.get(QQ), ...QQ.children.flatMap((QQ => this.subtree(this.model.nodes[QQ])))]
      }
      worldMatrix(QQ, WQ, XQ) {
        let wQ = ZQ(NQ(WQ ? SQ : {}), null);
        const qQ = [];
        for (let zQ = QQ.part ? QQ.node : this.parentOf(QQ.node); zQ; zQ = this.parentOf(zQ)) qQ.unshift(zQ);
        for (const zQ of qQ) wQ = ZQ(NQ(zQ), wQ);
        const TQ = NQ(QQ.part ? {} : QQ.node);
        return void 0 !== XQ && TQ.scale.fill(XQ), ZQ(TQ, wQ)
      }
      floats(QQ) {
        const {
          vertexAttributes: WQ,
          vertexCount: XQ
        } = QQ.geometry;
        return new Map(WQ.map((QQ => [QQ.kind, (0, vQ.i)(QQ, XQ)])))
      }
      imageUrl(QQ) {
        return function(QQ, WQ, XQ) {
          let {
            name: wQ
          } = WQ;
          return `data:${QQ}${wQ}#image${XQ}`
        }(this.uniqueRootUrl, this.fileInfo, QQ)
      }
      textureDesc(QQ, WQ) {
        var XQ;
        let {
          texture: wQ,
          transform: qQ
        } = QQ;
        const {
          sampler: TQ,
          image: zQ
        } = this.model.textures[wQ], {
          bufferView: sQ,
          mimeType: FQ,
          name: PQ
        } = this.model.images[zQ], gQ = qQ && {
          ...qQ.offset ? {
            uOffset: qQ.offset[0],
            vOffset: qQ.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...qQ.rotation ? {
            wAng: -qQ.rotation
          } : {},
          ...qQ.scale ? {
            uScale: qQ.scale[0],
            vScale: qQ.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(zQ),
          noMipmap: YQ(TQ),
          invertY: !1,
          samplingMode: eQ(TQ),
          data: {
            bytes: sQ.bytes,
            mimeType: FQ,
            label: PQ,
            context: `/textures/${wQ}`
          },
          sets: {
            wrapU: xQ(TQ.wrapS),
            wrapV: xQ(TQ.wrapT),
            ...gQ,
            coordinatesIndex: null !== (XQ = null === qQ || void 0 === qQ ? void 0 : qQ.texCoord) && void 0 !== XQ ? XQ : 0,
            hasAlpha: WQ
          }
        }
      }
    }
    async function KQ(QQ, WQ, XQ, wQ, qQ, TQ) {
      let zQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const sQ = function(QQ, WQ, XQ) {
          return "string" !== typeof WQ ? {
            url: "",
            rootUrl: QQ,
            name: XQ()
          } : WQ ? WQ.startsWith("data:") ? {
            url: WQ,
            rootUrl: QQ,
            name: ""
          } : QQ ? {
            url: QQ + WQ,
            rootUrl: QQ,
            name: WQ
          } : {
            url: WQ,
            rootUrl: kQ(WQ),
            name: LQ(WQ)
          } : {
            url: QQ,
            rootUrl: kQ(QQ),
            name: LQ(QQ)
          }
        }(XQ, QQ, qQ),
        FQ = {};
      WQ.addPendingData(FQ);
      try {
        const XQ = lQ(await async function(QQ, WQ) {
            return "string" !== typeof WQ ? WQ : QQ.url.startsWith("data:") ? (0, dQ.l)(QQ.url) : await (0, dQ.o)(QQ.url)
          }(sQ, QQ)),
          FQ = new OQ(XQ, wQ, sQ, function(QQ, WQ) {
            let {
              rootUrl: XQ,
              name: wQ
            } = QQ;
            return !XQ.startsWith("file:") && wQ ? XQ : `${XQ}${WQ()}/`
          }(sQ, qQ));
        return await TQ(FQ), WQ.importedMeshesFiles && (WQ.loadingPluginName = "vR", zQ && WQ.importedMeshesFiles.push(sQ.url)), FQ
      } finally {
        WQ.removePendingData(FQ)
      }
    }
    var mQ = XQ(37855),
      MQ = XQ(37720),
      QW = XQ(38177);

    function WW(QQ) {
      if (null === QQ || void 0 === QQ || !QQ.min || !QQ.max) return null;
      const [WQ, XQ, wQ] = QQ.min, [qQ, TQ, zQ] = QQ.max, {
        BoundingInfo: sQ,
        vj: FQ
      } = (0, mQ.d)();
      return new sQ(new FQ(WQ, XQ, wQ), new FQ(qQ, TQ, zQ))
    }

    function XW(QQ) {
      (0, MQ.g)(QQ) || (QQ.geometry && QQ.geometry.useBoundingInfoFromGeometry ? QQ._updateBoundingInfo() : QQ.refreshBoundingInfo(!0, !0))
    }
    class wW {
      constructor(QQ, WQ) {
        this.cB = QQ, this.decode = WQ, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(QQ) {
        let WQ = this.viewData.get(QQ.index);
        return WQ || (WQ = this.bufferData.then((() => QQ.bytes)), this.viewData.set(QQ.index, WQ)), WQ
      }
      viewBuffer(QQ) {
        let WQ = this.viewBuffers.get(QQ.index);
        return WQ || (WQ = this.viewBytes(QQ).then((QQ => new((0, mQ.d)().Tj)(this.cB.Uj(), QQ, !1))), this.viewBuffers.set(QQ.index, WQ)), WQ
      }
      vertexBuffer(QQ, WQ) {
        const {
          kind: XQ,
          data: wQ
        } = WQ, qQ = `${QQ.index}:${XQ}`;
        let TQ = this.vertexBuffers.get(qQ);
        if (!TQ) {
          const zQ = QQ.bufferView;
          TQ = zQ ? this.viewBuffer(zQ).then((QQ => this.layoutVertexBuffer(QQ, WQ))) : Promise.resolve(wQ).then((QQ => new((0, mQ.d)().VertexBuffer)(this.cB.Uj(), QQ, XQ, !1))), this.vertexBuffers.set(qQ, TQ)
        }
        return TQ
      }
      layoutVertexBuffer(QQ, WQ) {
        let {
          kind: XQ,
          offset: wQ,
          stride: qQ,
          components: TQ,
          glType: zQ,
          isNormalized: sQ
        } = WQ;
        const FQ = this.cB.Uj();
        return new((0, mQ.d)().VertexBuffer)(FQ, QQ, XQ, !1, void 0, qQ, void 0, wQ, TQ, zQ, sQ, !0, void 0, !0)
      }
      load(QQ, WQ, XQ) {
        const wQ = (0, MQ.g)(XQ),
          qQ = QQ => {
            wQ || (XQ._delayInfo = XQ._delayInfo || [], -1 === XQ._delayInfo.indexOf(QQ) && XQ._delayInfo.push(QQ))
          },
          TQ = WQ.draco;
        if (TQ) {
          for (const QQ in TQ.attributeIds) qQ(QQ);
          let zQ = this.dracoGeometry.get(TQ.bufferView.index);
          return zQ || (zQ = this.viewBytes(TQ.bufferView).then((async () => {
            let qQ;
            try {
              qQ = await hQ(WQ, this.decode)
            } catch (FQ) {
              throw new dQ.h(`${QQ}: ${FQ instanceof Error?FQ.message:String(FQ)}`)
            }
            const TQ = uQ(WQ, qQ);
            if (wQ) return TQ;
            const zQ = WW(WQ.position),
              sQ = new((0, mQ.d)().MirroredGeometry)(XQ.name, this.cB);
            zQ && (sQ._boundingInfo = zQ, sQ.useBoundingInfoFromGeometry = !0), TQ.indexData && sQ.setIndices(TQ.indexData);
            for (const QQ of TQ.vertexAttributes) sQ.setVerticesBuffer(this.layoutVertexBuffer(QQ.data, QQ), TQ.vertexCount);
            return sQ.link(TQ), sQ
          })), this.dracoGeometry.set(TQ.bufferView.index, zQ)), zQ
        }
        const zQ = [],
          sQ = EQ(WQ);
        if (wQ) return XQ.isUnIndexed = !sQ.indexData, XQ.hasVertexAlpha = (0, QW.d)(WQ), Promise.resolve(sQ);
        const FQ = new((0, mQ.d)().MirroredGeometry)(XQ.name, this.cB),
          {
            indexData: PQ
          } = sQ;
        PQ ? zQ.push(this.viewBytes(WQ.indices.bufferView).then((() => {
          FQ.setIndices(PQ)
        }))) : XQ.isUnIndexed = !0;
        for (const [gQ, {
            kind: JQ,
            accessor: rQ
          }] of WQ.attributes.entries()) qQ(JQ), zQ.push(this.vertexBuffer(rQ, sQ.vertexAttributes[gQ]).then((QQ => {
          if ("position" === QQ.getKind()) {
            const QQ = WW(rQ);
            QQ && (FQ._boundingInfo = QQ, FQ.useBoundingInfoFromGeometry = !0)
          }
          FQ.setVerticesBuffer(QQ, sQ.vertexCount)
        })));
        return (0, QW.d)(WQ) && (XQ.hasVertexAlpha = !0), Promise.all(zQ).then((() => (FQ.link(sQ), FQ)))
      }
    }
    var qW, TW = XQ(37600),
      zW = XQ(37367),
      sW = XQ(38186),
      FW = XQ(37535),
      PW = XQ(37582),
      gW = XQ(2997),
      JW = XQ(37565);

    function rW(QQ, WQ) {
      QQ.metadata = QQ.metadata || {};
      const XQ = QQ._internalMetadata = QQ._internalMetadata || {},
        wQ = XQ.vR = XQ.vR || {};
      (wQ.pointers = wQ.pointers || []).push(WQ)
    }

    function IW(QQ, WQ) {
      if (WQ && Object.keys(WQ).length > 0) {
        const XQ = QQ.metadata = QQ.metadata || {};
        (XQ.vR = XQ.vR || {}).extras = WQ
      }
    }

    function jW(QQ, WQ) {
      WQ.position = QQ.translation ? zW.vj.FromArray(QQ.translation) : zW.vj.Zero(), WQ.rotationQuaternion = QQ.rotation ? zW.Quaternion.FromArray(QQ.rotation) : zW.Quaternion.Identity(), WQ.oB = QQ.scale ? zW.vj.FromArray(QQ.scale) : zW.vj.One()
    }
    class BW {
      constructor(QQ, WQ) {
        if (this.cB = QQ, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, WQ) {
          const WQ = QQ.Uj(),
            XQ = QQ.yE.add((() => {
              this.dispose()
            })),
            wQ = WQ.Gj.add((() => {
              for (const QQ of [...this.geometries, ...this.meshes, ...this.textures]) QQ._rebuild()
            }));
          this.release = () => {
            QQ.yE.remove(XQ), WQ.Gj.remove(wQ)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const QQ of this.meshes) this.cB.hwQ(QQ);
          for (const QQ of this.materials) this.cB.addMaterial(QQ);
          for (const QQ of this.geometries) this.cB.addGeometry(QQ);
          for (const QQ of this.transformNodes) this.cB.addTransformNode(QQ);
          for (const QQ of this.textures) this.cB.addTexture(QQ)
        }
      }
      dispose() {
        var QQ;
        for (const WQ of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const QQ of WQ.slice()) QQ.dispose();
          WQ.length = 0
        }
        null === (QQ = this.release) || void 0 === QQ || QQ.call(this), this.release = null
      }
    }
    class yW {
      constructor(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        this.asset = QQ, this.cB = WQ, this.tree = XQ, this.geometryData = qQ, this.materials = TQ, this.lite = zQ, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = wQ ? XQ : null
      }
      create(QQ) {
        if (this.lite) return QQ();
        const WQ = this.cB;
        WQ._blockEntityCollection = !!this.container;
        try {
          const WQ = QQ();
          return this.container && (WQ._parentContainer = this.container), WQ
        } finally {
          WQ._blockEntityCollection = !1
        }
      }
      node(QQ, WQ) {
        return this.create((() => this.lite ? WQ ? (0, sW.f)(this.lite, QQ) : (0, sW.w)(this.lite, QQ) : WQ ? new((0, mQ.d)().Mesh)(QQ, this.cB) : new((0, mQ.d)().TransformNode)(QQ, this.cB)))
      }
      async load() {
        var QQ;
        this.asset.model.json.nodes && this.createRoot();
        const WQ = this.lite ? null : this.cB,
          XQ = null !== (QQ = null === WQ || void 0 === WQ ? void 0 : WQ.blockMaterialDirtyMechanism) && void 0 !== QQ && QQ;
        let wQ;
        WQ && (WQ.blockMaterialDirtyMechanism = !0);
        try {
          wQ = this.loadScene()
        } finally {
          null === WQ || void 0 === WQ || WQ._forceBlockMaterialDirtyMechanism(XQ)
        }
        await wQ;
        const {
          root: qQ,
          tree: TQ
        } = this;
        qQ && (qQ.UH(!0), TQ.meshes.push(qQ), TQ.rootNodes.push(qQ));
        for (const sQ of this.asset.model.nodes) {
          const QQ = this.nodeObjects.get(sQ.index);
          QQ && ["TransformNode", "LiteNode"].includes(QQ.getClassName()) && TQ.transformNodes.push(QQ);
          for (const WQ of null !== (zQ = this.nodePrimitives.get(sQ.index)) && void 0 !== zQ ? zQ : []) {
            var zQ;
            TQ.meshes.push(WQ);
            const QQ = WQ.geometry;
            QQ && !TQ.geometries.includes(QQ) && TQ.geometries.push(QQ)
          }
        }
      }
      createRoot() {
        const QQ = this.node("__root__", !0);
        this.root = QQ, QQ.UH(!1), this.cB.useRightHandedSystem || jW(SQ, QQ)
      }
      loadScene() {
        const QQ = [];
        for (const WQ of this.asset.model.rootNodes) QQ.push(this.loadNode(this.asset.model.nodes[WQ], (QQ => {
          QQ.parent = this.root
        })));
        return QQ.push(Promise.resolve()), Promise.all(QQ).then((() => {}))
      }
      loadNode(QQ, WQ) {
        const XQ = `/nodes/${QQ.index}`,
          wQ = [],
          qQ = qQ => {
            if (rW(qQ, XQ), jW(QQ, qQ), QQ.hasCamera && !this.cB.useRightHandedSystem) {
              const {
                oB: QQ
              } = qQ;
              QQ.set(-1, QQ.y, QQ.z)
            }
            for (const WQ of QQ.children) wQ.push(this.loadNode(this.asset.model.nodes[WQ], (QQ => {
              QQ.parent = qQ
            })));
            (XQ => {
              IW(XQ, QQ.extras), WQ(XQ)
            })(qQ)
          };
        if (null === QQ.mesh) {
          const WQ = this.node(fQ(QQ), !1);
          this.nodeObjects.set(QQ.index, WQ), qQ(WQ)
        } else {
          const WQ = this.asset.model.meshes[QQ.mesh];
          wQ.push(this.loadMesh(`/meshes/${WQ.index}`, QQ, WQ, qQ))
        }
        return Promise.all(wQ).then((() => {
          for (const XQ of null !== (WQ = this.nodePrimitives.get(QQ.index)) && void 0 !== WQ ? WQ : []) {
            var WQ;
            XW(XQ)
          }
          return this.nodeObjects.get(QQ.index)
        }))
      }
      loadMesh(QQ, WQ, XQ, wQ) {
        const qQ = [],
          TQ = fQ(WQ);
        if (1 === XQ.primitives.length) {
          const wQ = XQ.primitives[0];
          qQ.push(this.loadPrimitive(`${QQ}/primitives/${wQ.index}`, TQ, wQ, (QQ => {
            this.nodeObjects.set(WQ.index, QQ), this.nodePrimitives.set(WQ.index, [QQ])
          })))
        } else {
          const wQ = this.node(TQ, !1);
          this.nodeObjects.set(WQ.index, wQ);
          const zQ = [];
          this.nodePrimitives.set(WQ.index, zQ);
          for (const WQ of XQ.primitives) qQ.push(this.loadPrimitive(`${QQ}/primitives/${WQ.index}`, `${TQ}_primitive${WQ.index}`, WQ, (QQ => {
            QQ.parent = wQ, zQ.push(QQ)
          })))
        }
        const zQ = this.nodeObjects.get(WQ.index);
        return wQ(zQ), Promise.all(qQ).then((() => zQ))
      }
      loadPrimitive(QQ, WQ, XQ, wQ) {
        const qQ = [],
          TQ = this.node(WQ, !0);
        if (TQ.sideOrientation = this.cB.useRightHandedSystem ? FW.c.CounterClockWiseSideOrientation : FW.c.ClockWiseSideOrientation, qQ.push(this.geometryData.load(QQ, XQ, TQ).then((QQ => {
            if ((0, MQ.g)(TQ)) {
              var WQ, XQ;
              const wQ = QQ;
              TQ.replaceModel(wQ, Int32Array.of(0, null !== (WQ = null === (XQ = wQ.indexData) || void 0 === XQ ? void 0 : XQ.length) && void 0 !== WQ ? WQ : wQ.vertexCount, 0, wQ.vertexCount))
            } else this.create((() => (QQ.applyToMesh(TQ), QQ)))
          }))), this.materials) {
          const QQ = 0 === XQ.mode ? FW.c.PointListDrawMode : FW.c.TriangleFillMode,
            WQ = null === XQ.material ? null : this.asset.model.materials[XQ.material];
          qQ.push(this.loadMaterial(WQ, QQ, (QQ => {
            TQ.material = QQ
          })))
        }
        return rW(TQ, QQ), wQ(TQ), Promise.all(qQ).then((() => TQ))
      }
      loadMaterial(QQ, WQ, XQ) {
        var wQ;
        const qQ = `${null!==(wQ=null===QQ||void 0===QQ?void 0:QQ.index)&&void 0!==wQ?wQ:"default"}:${WQ}`;
        let TQ = this.materialData.get(qQ);
        return TQ || (TQ = this.createMaterial(QQ, WQ), this.materialData.set(qQ, TQ)), XQ(TQ.material), TQ.promise
      }
      createMaterial(QQ, WQ) {
        const XQ = QQ ? QQ.name || `material${QQ.index}` : "__GLTFLoader._default",
          {
            style: wQ,
            unlit: qQ
          } = this.materials;
        let TQ;
        const zQ = this.create((() => {
          const zQ = (0, JW.e)({
            name: XQ,
            cB: this.cB,
            sets: {
              ...(0, QW.b)(this.asset, QQ, wQ, qQ),
              fillMode: WQ
            },
            unrendered: !0
          });
          return TQ = zQ.model, zQ.mirror
        }));
        let sQ = Promise.resolve();
        if (QQ) {
          const WQ = `/materials/${QQ.index}`,
            wQ = TQ.diffuseTexture;
          if (wQ && !wQ.mirror) sQ = new Promise((QQ => setTimeout(QQ)));
          else if (wQ) {
            const qQ = wQ.mirror;
            qQ._parentContainer = this.container, qQ.name = `${XQ} (Base Color)`, rW(qQ, `${WQ}${QQ.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(qQ), sQ = (0, PW.x)(wQ)
          }
          IW(zQ, QQ.extras), rW(zQ, WQ)
        }
        return this.tree.materials.push(zQ), {
          material: zQ,
          promise: sQ
        }
      }
    }

    function VW() {
      TW.f.dracoDecodes = BQ.decodes, TW.f.dracoWorkersStarted = BQ.workersStarted, TW.f.dracoMostWorkers = BQ.mostWorkers
    }
    async function DW(QQ, WQ, XQ, qQ, TQ) {
      try {
        return await async function(QQ, WQ, XQ, qQ, TQ, zQ) {
          var sQ;
          let FQ;
          const PQ = null === (sQ = (0, gW.f)()) || void 0 === sQ ? void 0 : sQ.nj,
            gQ = null !== PQ && void 0 !== PQ && PQ.xj && WQ === PQ.sE() ? PQ : null,
            JQ = TQ && !gQ;
          return await KQ(QQ, WQ, XQ, qQ, wQ.d, (QQ => (FQ = new BW(WQ, JQ), new yW(QQ, WQ, FQ, JQ, new wW(WQ, qQ), zQ, gQ).load())), !TQ), FQ
        }(QQ, WQ, XQ, UQ, qQ, TQ)
      } finally {
        VW()
      }
    }
    async function pW(QQ, WQ, XQ, qQ) {
      try {
        return await KQ(QQ, WQ, XQ, UQ, wQ.d, (QQ => qQ(QQ, new wW(WQ, UQ))))
      } finally {
        VW()
      }
    }
    qW = qQ.b, gQ || (gQ = {
      scriptUrl: new URL(qW.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(qW.wasmBinaryUrl, location.href).href
    })
  },
  41740: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ
    });
    var wQ = XQ(158),
      qQ = XQ(1118);

    function TQ(QQ) {
      return (0, wQ.isDiscordClient)() ? `https://${qQ.d.discordDomain}/${QQ.href}` : QQ.href
    }
    const zQ = {
      scriptUrl: TQ(new XQ.U(XQ(41742))),
      wasmBinaryUrl: TQ(new XQ.U(XQ(41750)))
    }
  },
  36540: QQ => {
    QQ.exports = function(QQ, WQ, XQ, wQ) {
      var qQ = self || window;
      try {
        try {
          var TQ;
          try {
            TQ = new qQ.Blob([QQ])
          } catch (PQ) {
            (TQ = new(qQ.BlobBuilder || qQ.WebKitBlobBuilder || qQ.MozBlobBuilder || qQ.MSBlobBuilder)).append(QQ), TQ = TQ.getBlob()
          }
          var zQ = qQ.URL || qQ.webkitURL,
            sQ = zQ.createObjectURL(TQ),
            FQ = new qQ[WQ](sQ, XQ);
          return zQ.revokeObjectURL(sQ), FQ
        } catch (PQ) {
          return new qQ[WQ]("data:application/javascript,".concat(encodeURIComponent(QQ)), XQ)
        }
      } catch (PQ) {
        if (!wQ) throw Error("Inline worker is not supported");
        return new qQ[WQ](wQ, XQ)
      }
    }
  },
  41750: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  41742: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);