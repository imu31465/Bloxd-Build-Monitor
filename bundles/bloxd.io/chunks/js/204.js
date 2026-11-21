export const id = 204;
export const ids = [204];
export const modules = {
  40890: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      loadGlbAsset: () => GF,
      loadGlbTree: () => MF
    });
    var LQ = wQ(37452),
      qQ = wQ(40897),
      oQ = wQ(35914),
      DQ = wQ.n(oQ);

    function kQ() {
      return DQ()('(()=>{class QQ extends Error{}function FQ(FQ,wQ){const LQ=FQ._malloc(wQ);if(0===LQ)throw new QQ(`Draco: the decoder\'s heap refused ${wQ} bytes`);return LQ}function wQ(QQ){return{[QQ.DT_FLOAT32]:[Float32Array,5126],[QQ.DT_INT8]:[Int8Array,5120],[QQ.DT_INT16]:[Int16Array,5122],[QQ.DT_INT32]:[Int32Array,5124],[QQ.DT_UINT8]:[Uint8Array,5121],[QQ.DT_UINT16]:[Uint16Array,5123],[QQ.DT_UINT32]:[Uint32Array,5125]}}function LQ(FQ,LQ,qQ,oQ,DQ){let kQ=null,vQ=null,mQ=null;try{kQ=new FQ.Decoder,vQ=new FQ.DecoderBuffer,vQ.Init(LQ,LQ.byteLength);let uQ=0;const HQ=kQ.GetEncodedGeometryType(vQ);if(HQ===FQ.TRIANGULAR_MESH){const wQ=new FQ.Mesh;mQ=wQ;const LQ=kQ.DecodeBufferToMesh(vQ,wQ);if(!LQ.ok()||0===wQ.ptr)throw new QQ(LQ.error_msg());uQ=3*wQ.num_faces()}else{if(HQ!==FQ.POINT_CLOUD)throw new QQ(`Draco: Cannot decode invalid geometry type ${HQ}`);{const wQ=new FQ.PointCloud;mQ=wQ;const LQ=kQ.DecodeBufferToPointCloud(vQ,wQ);if(!LQ.ok()||!wQ.ptr)throw new QQ(LQ.error_msg())}}const bQ=mQ.num_points();if(bQ!==oQ.vertices||uQ!==oQ.indices)throw new QQ(`Draco: decoded ${bQ} vertices and ${uQ} indices, the accessors declare ${oQ.vertices} and ${oQ.indices}`);const YQ=wQ(FQ),xQ=[];for(const{kind:FQ,id:wQ,components:LQ}of qQ){const qQ=kQ.GetAttributeByUniqueId(mQ,wQ);if(!qQ||0===qQ.ptr)throw new QQ(`Draco: no attribute with id ${wQ} (${FQ})`);const oQ=qQ.data_type();if(!YQ[oQ])throw new QQ(`Draco: Cannot decode invalid data type ${oQ}`);if(qQ.num_components()!==LQ)throw new QQ(`Draco: ${FQ} decodes to ${qQ.num_components()} components, its accessor declares ${LQ}`);xQ.push([FQ,qQ,oQ])}return DQ({dracoDecoder:kQ,geometry:mQ,triangles:HQ===FQ.TRIANGULAR_MESH,numPoints:bQ,numIndices:uQ,attributes:xQ})}finally{mQ&&FQ.destroy(mQ),vQ&&FQ.destroy(vQ),kQ&&FQ.destroy(kQ)}}const qQ=self;let oQ=null;self.onmessage=QQ=>{let{data:DQ}=QQ;if("init"===DQ.id){try{importScripts(DQ.url),oQ=DracoDecoderModule({wasmBinary:DQ.wasmBinary}),qQ.postMessage({id:"initDone"})}catch(HQ){qQ.postMessage({id:"initError",message:HQ instanceof Error?HQ.message:String(HQ)})}return}const{seq:kQ,data:vQ,attributeIds:mQ,expected:uQ}=DQ;oQ?oQ.then((QQ=>{try{const oQ=function(QQ,qQ,oQ,DQ){const kQ=Object.keys(oQ).map((QQ=>({kind:QQ,id:oQ[QQ],components:DQ.components[QQ]})));return LQ(QQ,qQ,kQ,DQ,(LQ=>{let{dracoDecoder:qQ,geometry:oQ,triangles:DQ,numPoints:kQ,numIndices:vQ,attributes:mQ}=LQ;const uQ=wQ(QQ);let HQ=null;if(DQ){const wQ=4*vQ,LQ=FQ(QQ,wQ);try{qQ.GetTrianglesUInt32Array(oQ,wQ,LQ),HQ=new Uint32Array(vQ),HQ.set(new Uint32Array(QQ.HEAPF32.buffer,LQ,vQ))}finally{QQ._free(LQ)}}const bQ=[];for(const[wQ,YQ,xQ]of mQ){const[LQ]=uQ[xQ],DQ=YQ.num_components(),vQ=kQ*DQ,mQ=vQ*LQ.BYTES_PER_ELEMENT,HQ=FQ(QQ,mQ);try{qQ.GetAttributeDataArrayForAllPoints(oQ,YQ,xQ,mQ,HQ),bQ.push({kind:wQ,data:new LQ(QQ.HEAPF32.buffer,HQ,vQ).slice(),size:DQ,byteOffset:YQ.byte_offset(),byteStride:YQ.byte_stride(),normalized:YQ.normalized()})}finally{QQ._free(HQ)}}return{indices:HQ,attributes:bQ,totalVertices:kQ}}))}(QQ,vQ,mQ,uQ),DQ=oQ.attributes.map((QQ=>QQ.data.buffer));oQ.indices&&DQ.push(oQ.indices.buffer),qQ.postMessage({id:"decoded",seq:kQ,...oQ},DQ)}catch(HQ){qQ.postMessage({id:"decodeError",seq:kQ,message:HQ instanceof Error?HQ.message:String(HQ)})}}),(QQ=>{qQ.postMessage({id:"decodeError",seq:kQ,message:QQ instanceof Error?QQ.message:String(QQ)})})):qQ.postMessage({id:"decodeError",seq:kQ,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, wQ.p + "dracoDecode.worker.731c66d4.worker.js")
    }
    var vQ = wQ(96);
    const mQ = 1e3;
    let uQ = null,
      HQ = null;
    const bQ = [],
      YQ = [];
    let xQ = 0;
    const AQ = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      tQ = function(QQ, FQ) {
        const wQ = QQ ? Math.max(1, Math.min(Math.floor(.5 * QQ), 4)) : 1;
        return FQ ? Math.min(wQ, 2) : wQ
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, vQ.isMobile)());

    function eQ() {
      if (!uQ) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: QQ,
        wasmBinaryUrl: FQ
      } = uQ;
      return HQ ??= fetch(FQ).then((QQ => {
        if (!QQ.ok) throw new Error(`Draco: fetching ${FQ} failed: ${QQ.status}`);
        return QQ.arrayBuffer()
      })), HQ.catch((() => {
        HQ = null
      })), AQ.workersStarted++, HQ.then((FQ => new Promise(((wQ, LQ) => {
        const qQ = new kQ;
        qQ.onerror = QQ => {
          qQ.onmessage = null, qQ.onerror = null, qQ.terminate(), LQ(new Error("Draco: the decode worker failed to start" + (QQ.message ? `: ${QQ.message}` : " (its script did not load)")))
        }, qQ.onmessage = QQ => {
          let {
            data: FQ
          } = QQ;
          qQ.onmessage = null, qQ.onerror = null, "initDone" === FQ.id ? wQ(qQ) : (qQ.terminate(), LQ(new Error(`Draco: ${"initError"===FQ.id?FQ.message:"the worker did not start"}`)))
        };
        const oQ = FQ.slice(0),
          DQ = {
            id: "init",
            url: QQ,
            wasmBinary: oQ
          };
        qQ.postMessage(DQ, [oQ])
      }))))
    }

    function MQ(QQ) {
      const FQ = bQ.indexOf(QQ); - 1 !== FQ && bQ.splice(FQ, 1);
      const wQ = YQ.shift();
      wQ && pQ(wQ)
    }

    function GQ(QQ, FQ) {
      QQ.busy = !0, QQ.releaseTimer && (clearTimeout(QQ.releaseTimer), QQ.releaseTimer = null);
      QQ.worker.then((wQ => {
        const LQ = xQ++;
        wQ.onmessage = qQ => {
          let {
            data: oQ
          } = qQ;
          if (("decoded" === oQ.id || "decodeError" === oQ.id) && oQ.seq === LQ) {
            if (wQ.onmessage = null, wQ.onerror = null, "decoded" === oQ.id) return AQ.decodes++, FQ.resolve({
              indices: oQ.indices,
              attributes: oQ.attributes,
              totalVertices: oQ.totalVertices
            }), void(() => {
              const FQ = YQ.shift();
              FQ ? GQ(QQ, FQ) : (QQ.busy = !1, QQ.releaseTimer = setTimeout((() => {
                const FQ = bQ.indexOf(QQ); - 1 !== FQ && bQ.splice(FQ, 1), QQ.worker.then((QQ => {
                  QQ.terminate()
                }))
              }), mQ))
            })();
            wQ.terminate(), FQ.reject(new Error(oQ.message)), MQ(QQ)
          }
        }, wQ.onerror = LQ => {
          wQ.onmessage = null, wQ.onerror = null, wQ.terminate(), FQ.reject(new Error(`Draco: the decode worker failed: ${LQ.message}`)), MQ(QQ)
        };
        const qQ = {
          id: "decode",
          seq: LQ,
          data: FQ.data,
          attributeIds: FQ.attributeIds,
          expected: FQ.expected
        };
        wQ.postMessage(qQ, [FQ.data.buffer])
      }), (wQ => {
        FQ.reject(wQ instanceof Error ? wQ : new Error(String(wQ))), MQ(QQ)
      }))
    }

    function pQ(QQ) {
      const FQ = bQ.find((QQ => !QQ.busy));
      if (FQ) GQ(FQ, QQ);
      else {
        if (bQ.length < tQ) {
          const FQ = {
            worker: eQ(),
            busy: !0,
            releaseTimer: null
          };
          return bQ.push(FQ), AQ.mostWorkers = Math.max(AQ.mostWorkers, bQ.length), void GQ(FQ, QQ)
        }
        YQ.push(QQ)
      }
    }

    function cQ(QQ, FQ, wQ) {
      return new Promise(((LQ, qQ) => {
        pQ({
          data: new Int8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength).slice(),
          attributeIds: FQ,
          expected: wQ,
          resolve: LQ,
          reject: qQ
        })
      }))
    }
    var CQ = wQ(37052),
      SQ = wQ(37065),
      iQ = wQ(9184),
      WQ = wQ(9181);
    const RQ = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function OQ(QQ) {
      const FQ = (0, WQ.h)(QQ.byteLength);
      if (FQ) throw new iQ.j(FQ);
      const {
        json: wQ,
        bin: LQ
      } = (0, iQ.q)(QQ), qQ = (0, WQ.e)(wQ, LQ);
      if (qQ) throw new iQ.j(qQ);
      try {
        return function(QQ, FQ) {
          var wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ;
          const eQ = new Map,
            MQ = wQ => {
              let LQ = eQ.get(wQ);
              if (!LQ) {
                var qQ;
                const oQ = QQ.bufferViews[wQ],
                  DQ = null !== (qQ = oQ.byteOffset) && void 0 !== qQ ? qQ : 0;
                LQ = {
                  index: wQ,
                  bytes: FQ.subarray(DQ, DQ + oQ.byteLength),
                  byteStride: oQ.byteStride
                }, eQ.set(wQ, LQ)
              }
              return LQ
            },
            GQ = new Map,
            pQ = FQ => {
              let wQ = GQ.get(FQ);
              if (!wQ) {
                var LQ;
                const qQ = QQ.accessors[FQ];
                wQ = {
                  index: FQ,
                  count: qQ.count,
                  type: qQ.type,
                  numComponents: iQ.l[qQ.type],
                  componentType: qQ.componentType,
                  normalized: null !== (LQ = qQ.normalized) && void 0 !== LQ && LQ,
                  byteOffset: qQ.byteOffset,
                  bufferView: void 0 === qQ.bufferView ? null : MQ(qQ.bufferView),
                  min: qQ.min,
                  max: qQ.max
                }, GQ.set(FQ, wQ)
              }
              return wQ
            },
            cQ = null !== (wQ = null === (LQ = QQ.extensionsUsed) || void 0 === LQ ? void 0 : LQ.includes("KHR_draco_mesh_compression")) && void 0 !== wQ && wQ,
            CQ = (null !== (qQ = QQ.meshes) && void 0 !== qQ ? qQ : []).map(((FQ, wQ) => {
              const LQ = FQ.primitives.map(((FQ, wQ) => {
                var LQ, qQ, oQ;
                const DQ = cQ ? null === (LQ = FQ.extensions) || void 0 === LQ ? void 0 : LQ.KHR_draco_mesh_compression : void 0;
                let kQ = null;
                const vQ = [];
                if (DQ) {
                  const wQ = {
                    vertices: QQ.accessors[FQ.attributes.POSITION].count,
                    indices: void 0 === FQ.indices ? 0 : QQ.accessors[FQ.indices].count,
                    components: {}
                  };
                  kQ = {
                    bufferView: MQ(DQ.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: wQ
                  };
                  for (const [LQ, qQ] of iQ.f) {
                    const oQ = DQ.attributes[LQ];
                    if (void 0 === oQ) continue;
                    kQ.attributeIds[qQ] = oQ;
                    const vQ = FQ.attributes[LQ];
                    var mQ;
                    if (void 0 !== vQ) kQ.normalized[qQ] = null !== (mQ = QQ.accessors[vQ].normalized) && void 0 !== mQ && mQ, wQ.components[qQ] = iQ.l[QQ.accessors[vQ].type]
                  }
                } else
                  for (const [QQ, uQ] of iQ.f) {
                    const wQ = FQ.attributes[QQ];
                    void 0 !== wQ && vQ.push({
                      semantic: QQ,
                      kind: uQ,
                      accessor: pQ(wQ)
                    })
                  }
                return {
                  index: wQ,
                  mode: null !== (qQ = FQ.mode) && void 0 !== qQ ? qQ : 4,
                  attributes: vQ,
                  indices: DQ || void 0 === FQ.indices ? null : pQ(FQ.indices),
                  position: void 0 === FQ.attributes.POSITION ? null : pQ(FQ.attributes.POSITION),
                  material: null !== (oQ = FQ.material) && void 0 !== oQ ? oQ : null,
                  draco: kQ
                }
              }));
              return {
                index: wQ,
                name: FQ.name,
                primitives: LQ,
                extras: FQ.extras
              }
            })),
            SQ = (null !== (oQ = QQ.nodes) && void 0 !== oQ ? oQ : []).map(((QQ, FQ) => {
              var wQ, LQ;
              return {
                index: FQ,
                name: QQ.name,
                children: null !== (wQ = QQ.children) && void 0 !== wQ ? wQ : [],
                mesh: null !== (LQ = QQ.mesh) && void 0 !== LQ ? LQ : null,
                translation: QQ.translation,
                rotation: QQ.rotation,
                scale: QQ.scale,
                hasCamera: void 0 !== QQ.camera,
                extras: QQ.extras
              }
            })),
            WQ = null !== (DQ = null === (kQ = QQ.extensionsUsed) || void 0 === kQ ? void 0 : kQ.includes("KHR_materials_unlit")) && void 0 !== DQ && DQ,
            OQ = null !== (vQ = null === (mQ = QQ.extensionsUsed) || void 0 === mQ ? void 0 : mQ.includes("KHR_texture_transform")) && void 0 !== vQ && vQ,
            sQ = (null !== (uQ = QQ.materials) && void 0 !== uQ ? uQ : []).map(((QQ, FQ) => {
              var wQ, LQ, qQ, oQ;
              const DQ = QQ.pbrMetallicRoughness,
                kQ = null === DQ || void 0 === DQ ? void 0 : DQ.baseColorTexture;
              return {
                index: FQ,
                name: QQ.name,
                extras: QQ.extras,
                unlit: WQ && void 0 !== (null === (wQ = QQ.extensions) || void 0 === wQ ? void 0 : wQ.KHR_materials_unlit),
                pbr: DQ ? {
                  baseColorFactor: DQ.baseColorFactor,
                  metallicFactor: DQ.metallicFactor,
                  roughnessFactor: DQ.roughnessFactor
                } : null,
                baseColorTexture: kQ ? {
                  texture: kQ.index,
                  transform: OQ && (null === (LQ = kQ.extensions) || void 0 === LQ ? void 0 : LQ.KHR_texture_transform) || null
                } : null,
                emissiveFactor: QQ.emissiveFactor,
                alphaMode: null !== (qQ = QQ.alphaMode) && void 0 !== qQ ? qQ : "OPAQUE",
                alphaCutoff: QQ.alphaCutoff,
                doubleSided: null !== (oQ = QQ.doubleSided) && void 0 !== oQ && oQ
              }
            })),
            rQ = (null !== (HQ = QQ.textures) && void 0 !== HQ ? HQ : []).map(((FQ, wQ) => {
              var LQ, qQ;
              const oQ = void 0 === FQ.sampler ? RQ : {
                index: FQ.sampler,
                ...null === (LQ = QQ.samplers) || void 0 === LQ ? void 0 : LQ[FQ.sampler]
              };
              return {
                index: wQ,
                sampler: {
                  index: oQ.index,
                  magFilter: oQ.magFilter,
                  minFilter: oQ.minFilter,
                  wrapS: oQ.wrapS,
                  wrapT: oQ.wrapT
                },
                image: null !== (qQ = FQ.source) && void 0 !== qQ ? qQ : -1
              }
            })),
            IQ = (null !== (bQ = QQ.images) && void 0 !== bQ ? bQ : []).map(((QQ, FQ) => ({
              index: FQ,
              name: QQ.name,
              mimeType: QQ.mimeType,
              bufferView: MQ(QQ.bufferView)
            }))),
            UQ = null !== (YQ = (0, iQ.p)(QQ)) && void 0 !== YQ ? YQ : 0;
          return {
            json: QQ,
            rootNodes: null !== (xQ = null === (AQ = QQ.scenes) || void 0 === AQ || null === (tQ = AQ[UQ]) || void 0 === tQ ? void 0 : tQ.nodes) && void 0 !== xQ ? xQ : [],
            nodes: SQ,
            meshes: CQ,
            materials: sQ,
            textures: rQ,
            images: IQ
          }
        }(wQ, LQ)
      } catch (oQ) {
        throw oQ instanceof iQ.g ? oQ : new iQ.g(`reading the GLB failed: ${oQ instanceof Error?oQ.message:String(oQ)}`)
      }
    }
    async function sQ(QQ, FQ) {
      var wQ, LQ;
      const qQ = QQ.draco;
      if (!qQ) throw new iQ.g("not a Draco primitive");
      let oQ;
      try {
        oQ = await FQ(qQ.bufferView.bytes, qQ.attributeIds, qQ.expected)
      } catch (mQ) {
        throw new iQ.g(`Draco decoding failed: ${mQ instanceof Error?mQ.message:String(mQ)}`)
      }
      const {
        vertices: DQ,
        indices: kQ,
        components: vQ
      } = qQ.expected;
      if (oQ.totalVertices !== DQ || (null !== (wQ = null === (LQ = oQ.indices) || void 0 === LQ ? void 0 : LQ.length) && void 0 !== wQ ? wQ : 0) !== kQ || oQ.attributes.some((QQ => QQ.size !== vQ[QQ.kind] || QQ.data.length !== DQ * QQ.size))) throw new iQ.g("Draco decoding gave other counts than the accessors declare");
      for (const uQ of oQ.attributes) {
        const QQ = qQ.normalized[uQ.kind];
        void 0 !== QQ && (uQ.normalized = QQ)
      }
      return oQ
    }
    const rQ = new WeakMap;

    function IQ(QQ, FQ) {
      var wQ;
      const LQ = null !== (wQ = rQ.get(QQ)) && void 0 !== wQ ? wQ : FQ(QQ);
      return rQ.set(QQ, LQ), LQ
    }

    function UQ(QQ) {
      const FQ = QQ.bufferView,
        wQ = 5125 === QQ.componentType ? Uint32Array : Uint16Array,
        LQ = FQ.bytes.buffer,
        qQ = FQ.bytes.byteOffset + (QQ.byteOffset || 0);
      return qQ % wQ.BYTES_PER_ELEMENT !== 0 ? new wQ(LQ.slice(qQ, qQ + QQ.count * wQ.BYTES_PER_ELEMENT), 0) : new wQ(LQ, qQ, QQ.count)
    }

    function NQ(QQ, FQ) {
      if (QQ.min && QQ.max) return [new Float64Array(QQ.min), new Float64Array(QQ.max)];
      const wQ = FQ.find((QQ => {
          let {
            kind: FQ
          } = QQ;
          return "position" === FQ
        })),
        LQ = wQ ? (0, SQ.l)(wQ, QQ.count) : new Float32Array(0);
      return (0, SQ.x)(LQ.length / 3, ((QQ, FQ) => LQ[3 * QQ + FQ]))
    }

    function TQ(QQ) {
      const FQ = QQ.attributes.map((QQ => {
          var FQ, wQ;
          let {
            kind: LQ,
            accessor: qQ
          } = QQ;
          const {
            bufferView: oQ,
            numComponents: DQ
          } = qQ;
          if (!oQ) {
            return {
              kind: LQ,
              data: IQ(qQ, (() => new Float32Array(DQ * qQ.count))),
              offset: 0,
              stride: 4 * DQ,
              components: DQ,
              glType: 5126,
              isNormalized: !1
            }
          }
          const kQ = null !== (FQ = oQ.byteStride) && void 0 !== FQ ? FQ : DQ * iQ.b[qQ.componentType];
          return {
            kind: LQ,
            data: oQ.bytes,
            offset: null !== (wQ = qQ.byteOffset) && void 0 !== wQ ? wQ : 0,
            stride: kQ,
            components: DQ,
            glType: qQ.componentType,
            isNormalized: qQ.normalized
          }
        })),
        wQ = QQ.indices,
        LQ = wQ && IQ(wQ, UQ),
        qQ = QQ.position;
      return new SQ.h(FQ, LQ, qQ.count, ...NQ(qQ, FQ))
    }
    const KQ = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function zQ(QQ, FQ) {
      const wQ = FQ.attributes.map((QQ => {
        let {
          kind: FQ,
          data: wQ,
          size: LQ,
          byteOffset: qQ,
          byteStride: oQ,
          normalized: DQ
        } = QQ;
        return {
          kind: FQ,
          data: wQ,
          offset: qQ,
          stride: oQ,
          components: LQ,
          glType: 5120 + KQ.indexOf(wQ.constructor),
          isNormalized: DQ
        }
      }));
      return new SQ.h(wQ, FQ.indices, FQ.totalVertices, ...NQ(QQ.position, wQ))
    }

    function lQ(QQ) {
      const FQ = QQ.lastIndexOf("/");
      return FQ < 0 ? QQ : QQ.substring(FQ + 1)
    }

    function jQ(QQ) {
      const FQ = QQ.lastIndexOf("/");
      return FQ < 0 ? "" : QQ.substring(0, FQ + 1)
    }

    function aQ(QQ) {
      return QQ.name || `node${QQ.index}`
    }
    const XQ = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      fQ = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      VQ = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function hQ(QQ) {
      var FQ, wQ, LQ, qQ;
      const oQ = null !== (FQ = QQ.minFilter) && void 0 !== FQ ? FQ : 9987;
      return 9729 === (null !== (wQ = QQ.magFilter) && void 0 !== wQ ? wQ : 9729) ? null !== (LQ = fQ[oQ]) && void 0 !== LQ ? LQ : 3 : null !== (qQ = VQ[oQ]) && void 0 !== qQ ? qQ : 4
    }
    const JQ = {
      33071: 0,
      33648: 2
    };

    function EQ(QQ) {
      var FQ;
      return null !== (FQ = JQ[null !== QQ && void 0 !== QQ ? QQ : 10497]) && void 0 !== FQ ? FQ : 1
    }

    function nQ(QQ) {
      return 9728 === QQ.minFilter || 9729 === QQ.minFilter
    }

    function gQ(QQ) {
      var FQ, wQ, LQ;
      const qQ = Float64Array.from(null !== (FQ = QQ.scale) && void 0 !== FQ ? FQ : [1, 1, 1]);
      return QQ.hasCamera && (qQ[0] = -1), {
        translation: Float64Array.from(null !== (wQ = QQ.translation) && void 0 !== wQ ? wQ : [0, 0, 0]),
        rotation: Float64Array.from(null !== (LQ = QQ.rotation) && void 0 !== LQ ? LQ : [0, 0, 0, 1]),
        scale: qQ
      }
    }

    function PQ(QQ, FQ) {
      let {
        translation: wQ,
        rotation: LQ,
        scale: qQ
      } = QQ;
      const oQ = new Float32Array(16);
      return (0, CQ.d)(qQ, 0, LQ, 0, wQ, 0, oQ), FQ && (0, CQ.p)(oQ, FQ, 0, oQ), oQ
    }
    class ZQ {
      constructor(QQ, FQ, wQ, LQ) {
        this.model = QQ, this.decode = FQ, this.fileInfo = wQ, this.uniqueRootUrl = LQ, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const qQ = new Set,
          oQ = (FQ, wQ) => {
            const LQ = QQ.nodes[FQ];
            if (this.parents.has(LQ)) throw new iQ.g(`/nodes/${FQ}: Invalid recursive node hierarchy`);
            this.parents.set(LQ, wQ);
            const DQ = null === LQ.mesh ? [] : QQ.meshes[LQ.mesh].primitives,
              kQ = DQ.map((QQ => {
                const FQ = DQ.length > 1;
                return {
                  name: FQ ? `${aQ(LQ)}_primitive${QQ.index}` : aQ(LQ),
                  node: LQ,
                  primitive: QQ,
                  part: FQ,
                  geometry: null
                }
              }));
            this.uses.set(LQ, kQ);
            const vQ = null !== LQ.mesh && qQ.has(LQ.mesh);
            qQ.add(LQ.mesh), this.own.set(LQ, vQ ? [] : kQ);
            for (const QQ of LQ.children) oQ(QQ, LQ)
          };
        for (const DQ of QQ.rootNodes) oQ(DQ, null);
        this.primitives = QQ.nodes.flatMap((QQ => {
          var FQ;
          return null !== (FQ = this.own.get(QQ)) && void 0 !== FQ ? FQ : []
        }))
      }
      decodeGeometries() {
        const QQ = new Map;
        return Promise.all(this.primitives.map((async FQ => {
          const {
            primitive: wQ
          } = FQ, LQ = wQ.draco;
          let qQ = LQ ? QQ.get(LQ.bufferView.index) : Promise.resolve(TQ(wQ));
          qQ || (qQ = sQ(wQ, this.decode).then((QQ => zQ(wQ, QQ))), QQ.set(LQ.bufferView.index, qQ)), FQ.geometry = await qQ
        })))
      }
      parentOf(QQ) {
        var FQ;
        return null !== (FQ = this.parents.get(QQ)) && void 0 !== FQ ? FQ : null
      }
      meshesUnder(QQ) {
        const FQ = this.model.nodes.filter((QQ => this.uses.has(QQ)));
        for (const LQ of FQ) {
          const FQ = this.uses.get(LQ),
            wQ = FQ.find((FQ => FQ.name === QQ));
          if (wQ) return 1 === FQ.length ? this.subtree(LQ) : this.own.get(LQ).includes(wQ) ? [wQ] : []
        }
        const wQ = FQ.find((FQ => 1 !== this.uses.get(FQ).length && aQ(FQ) === QQ));
        return wQ ? this.subtree(wQ) : null
      }
      subtree(QQ) {
        return [...this.own.get(QQ), ...QQ.children.flatMap((QQ => this.subtree(this.model.nodes[QQ])))]
      }
      worldMatrix(QQ, FQ, wQ) {
        let LQ = PQ(gQ(FQ ? XQ : {}), null);
        const qQ = [];
        for (let DQ = QQ.part ? QQ.node : this.parentOf(QQ.node); DQ; DQ = this.parentOf(DQ)) qQ.unshift(DQ);
        for (const DQ of qQ) LQ = PQ(gQ(DQ), LQ);
        const oQ = gQ(QQ.part ? {} : QQ.node);
        return void 0 !== wQ && oQ.scale.fill(wQ), PQ(oQ, LQ)
      }
      floats(QQ) {
        const {
          vertexAttributes: FQ,
          vertexCount: wQ
        } = QQ.geometry;
        return new Map(FQ.map((QQ => [QQ.kind, (0, SQ.l)(QQ, wQ)])))
      }
      imageUrl(QQ) {
        return function(QQ, FQ, wQ) {
          let {
            name: LQ
          } = FQ;
          return `data:${QQ}${LQ}#image${wQ}`
        }(this.uniqueRootUrl, this.fileInfo, QQ)
      }
      textureDesc(QQ, FQ) {
        var wQ;
        let {
          texture: LQ,
          transform: qQ
        } = QQ;
        const {
          sampler: oQ,
          image: DQ
        } = this.model.textures[LQ], {
          bufferView: kQ,
          mimeType: vQ,
          name: mQ
        } = this.model.images[DQ], uQ = qQ && {
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
          url: this.imageUrl(DQ),
          noMipmap: nQ(oQ),
          invertY: !1,
          samplingMode: hQ(oQ),
          data: {
            bytes: kQ.bytes,
            mimeType: vQ,
            label: mQ,
            context: `/textures/${LQ}`
          },
          sets: {
            wrapU: EQ(oQ.wrapS),
            wrapV: EQ(oQ.wrapT),
            ...uQ,
            coordinatesIndex: null !== (wQ = null === qQ || void 0 === qQ ? void 0 : qQ.texCoord) && void 0 !== wQ ? wQ : 0,
            hasAlpha: FQ
          }
        }
      }
    }
    async function yQ(QQ, FQ, wQ, LQ, qQ, oQ) {
      let DQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const kQ = function(QQ, FQ, wQ) {
          return "string" !== typeof FQ ? {
            url: "",
            rootUrl: QQ,
            name: wQ()
          } : FQ ? FQ.startsWith("data:") ? {
            url: FQ,
            rootUrl: QQ,
            name: ""
          } : QQ ? {
            url: QQ + FQ,
            rootUrl: QQ,
            name: FQ
          } : {
            url: FQ,
            rootUrl: jQ(FQ),
            name: lQ(FQ)
          } : {
            url: QQ,
            rootUrl: jQ(QQ),
            name: lQ(QQ)
          }
        }(wQ, QQ, qQ),
        vQ = {};
      FQ.addPendingData(vQ);
      try {
        const wQ = OQ(await async function(QQ, FQ) {
            return "string" !== typeof FQ ? FQ : QQ.url.startsWith("data:") ? (0, iQ.m)(QQ.url) : await (0, iQ.o)(QQ.url)
          }(kQ, QQ)),
          vQ = new ZQ(wQ, LQ, kQ, function(QQ, FQ) {
            let {
              rootUrl: wQ,
              name: LQ
            } = QQ;
            return !wQ.startsWith("file:") && LQ ? wQ : `${wQ}${FQ()}/`
          }(kQ, qQ));
        return await oQ(vQ), FQ.importedMeshesFiles && (FQ.loadingPluginName = "oN", DQ && FQ.importedMeshesFiles.push(kQ.url)), vQ
      } finally {
        FQ.removePendingData(vQ)
      }
    }
    var BQ = wQ(37152),
      dQ = wQ(37036),
      QF = wQ(37437);

    function FF(QQ) {
      if (null === QQ || void 0 === QQ || !QQ.min || !QQ.max) return null;
      const [FQ, wQ, LQ] = QQ.min, [qQ, oQ, DQ] = QQ.max, {
        BoundingInfo: kQ,
        Ox: vQ
      } = (0, BQ.c)();
      return new kQ(new vQ(FQ, wQ, LQ), new vQ(qQ, oQ, DQ))
    }

    function wF(QQ) {
      (0, dQ.g)(QQ) || (QQ.geometry && QQ.geometry.useBoundingInfoFromGeometry ? QQ._updateBoundingInfo() : QQ.refreshBoundingInfo(!0, !0))
    }
    class LF {
      constructor(QQ, FQ) {
        this.lA = QQ, this.decode = FQ, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(QQ) {
        let FQ = this.viewData.get(QQ.index);
        return FQ || (FQ = this.bufferData.then((() => QQ.bytes)), this.viewData.set(QQ.index, FQ)), FQ
      }
      viewBuffer(QQ) {
        let FQ = this.viewBuffers.get(QQ.index);
        return FQ || (FQ = this.viewBytes(QQ).then((QQ => new((0, BQ.c)().Dx)(this.lA.Wx(), QQ, !1))), this.viewBuffers.set(QQ.index, FQ)), FQ
      }
      vertexBuffer(QQ, FQ) {
        const {
          kind: wQ,
          data: LQ
        } = FQ, qQ = `${QQ.index}:${wQ}`;
        let oQ = this.vertexBuffers.get(qQ);
        if (!oQ) {
          const DQ = QQ.bufferView;
          oQ = DQ ? this.viewBuffer(DQ).then((QQ => this.layoutVertexBuffer(QQ, FQ))) : Promise.resolve(LQ).then((QQ => new((0, BQ.c)().VertexBuffer)(this.lA.Wx(), QQ, wQ, !1))), this.vertexBuffers.set(qQ, oQ)
        }
        return oQ
      }
      layoutVertexBuffer(QQ, FQ) {
        let {
          kind: wQ,
          offset: LQ,
          stride: qQ,
          components: oQ,
          glType: DQ,
          isNormalized: kQ
        } = FQ;
        const vQ = this.lA.Wx();
        return new((0, BQ.c)().VertexBuffer)(vQ, QQ, wQ, !1, void 0, qQ, void 0, LQ, oQ, DQ, kQ, !0, void 0, !0)
      }
      load(QQ, FQ, wQ) {
        const LQ = (0, dQ.g)(wQ),
          qQ = QQ => {
            LQ || (wQ._delayInfo = wQ._delayInfo || [], -1 === wQ._delayInfo.indexOf(QQ) && wQ._delayInfo.push(QQ))
          },
          oQ = FQ.draco;
        if (oQ) {
          for (const QQ in oQ.attributeIds) qQ(QQ);
          let DQ = this.dracoGeometry.get(oQ.bufferView.index);
          return DQ || (DQ = this.viewBytes(oQ.bufferView).then((async () => {
            let qQ;
            try {
              qQ = await sQ(FQ, this.decode)
            } catch (vQ) {
              throw new iQ.g(`${QQ}: ${vQ instanceof Error?vQ.message:String(vQ)}`)
            }
            const oQ = zQ(FQ, qQ);
            if (LQ) return oQ;
            const DQ = FF(FQ.position),
              kQ = new((0, BQ.c)().MirroredGeometry)(wQ.name, this.lA);
            DQ && (kQ._boundingInfo = DQ, kQ.useBoundingInfoFromGeometry = !0), oQ.indexData && kQ.setIndices(oQ.indexData);
            for (const QQ of oQ.vertexAttributes) kQ.setVerticesBuffer(this.layoutVertexBuffer(QQ.data, QQ), oQ.vertexCount);
            return kQ.link(oQ), kQ
          })), this.dracoGeometry.set(oQ.bufferView.index, DQ)), DQ
        }
        const DQ = [],
          kQ = TQ(FQ);
        if (LQ) return wQ.isUnIndexed = !kQ.indexData, wQ.hasVertexAlpha = (0, QF.h)(FQ), Promise.resolve(kQ);
        const vQ = new((0, BQ.c)().MirroredGeometry)(wQ.name, this.lA),
          {
            indexData: mQ
          } = kQ;
        mQ ? DQ.push(this.viewBytes(FQ.indices.bufferView).then((() => {
          vQ.setIndices(mQ)
        }))) : wQ.isUnIndexed = !0;
        for (const [uQ, {
            kind: HQ,
            accessor: bQ
          }] of FQ.attributes.entries()) qQ(HQ), DQ.push(this.vertexBuffer(bQ, kQ.vertexAttributes[uQ]).then((QQ => {
          if ("position" === QQ.getKind()) {
            const QQ = FF(bQ);
            QQ && (vQ._boundingInfo = QQ, vQ.useBoundingInfoFromGeometry = !0)
          }
          vQ.setVerticesBuffer(QQ, kQ.vertexCount)
        })));
        return (0, QF.h)(FQ) && (wQ.hasVertexAlpha = !0), Promise.all(DQ).then((() => (vQ.link(kQ), vQ)))
      }
    }
    var qF, oF = wQ(36918),
      DF = wQ(36688),
      kF = wQ(37448),
      vF = wQ(36864),
      mF = wQ(36897),
      uF = wQ(2676),
      HF = wQ(36890);

    function bF(QQ, FQ) {
      QQ.metadata = QQ.metadata || {};
      const wQ = QQ._internalMetadata = QQ._internalMetadata || {},
        LQ = wQ.oN = wQ.oN || {};
      (LQ.pointers = LQ.pointers || []).push(FQ)
    }

    function YF(QQ, FQ) {
      if (FQ && Object.keys(FQ).length > 0) {
        const wQ = QQ.metadata = QQ.metadata || {};
        (wQ.oN = wQ.oN || {}).extras = FQ
      }
    }

    function xF(QQ, FQ) {
      FQ.position = QQ.translation ? DF.Ox.FromArray(QQ.translation) : DF.Ox.Zero(), FQ.rotationQuaternion = QQ.rotation ? DF.Quaternion.FromArray(QQ.rotation) : DF.Quaternion.Identity(), FQ.ck = QQ.scale ? DF.Ox.FromArray(QQ.scale) : DF.Ox.One()
    }
    class AF {
      constructor(QQ, FQ) {
        if (this.lA = QQ, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, FQ) {
          const FQ = QQ.Wx(),
            wQ = QQ.zN.add((() => {
              this.dispose()
            })),
            LQ = FQ.onContextRestoredObservable.add((() => {
              for (const QQ of [...this.geometries, ...this.meshes, ...this.textures]) QQ._rebuild()
            }));
          this.release = () => {
            QQ.zN.remove(wQ), FQ.onContextRestoredObservable.remove(LQ)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const QQ of this.meshes) this.lA.sLQ(QQ);
          for (const QQ of this.materials) this.lA.addMaterial(QQ);
          for (const QQ of this.geometries) this.lA.addGeometry(QQ);
          for (const QQ of this.transformNodes) this.lA.addTransformNode(QQ);
          for (const QQ of this.textures) this.lA.addTexture(QQ)
        }
      }
      dispose() {
        var QQ;
        for (const FQ of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const QQ of FQ.slice()) QQ.dispose();
          FQ.length = 0
        }
        null === (QQ = this.release) || void 0 === QQ || QQ.call(this), this.release = null
      }
    }
    class tF {
      constructor(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        this.asset = QQ, this.lA = FQ, this.tree = wQ, this.geometryData = qQ, this.materials = oQ, this.lite = DQ, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = LQ ? wQ : null
      }
      create(QQ) {
        if (this.lite) return QQ();
        const FQ = this.lA;
        FQ._blockEntityCollection = !!this.container;
        try {
          const FQ = QQ();
          return this.container && (FQ._parentContainer = this.container), FQ
        } finally {
          FQ._blockEntityCollection = !1
        }
      }
      node(QQ, FQ) {
        return this.create((() => this.lite ? FQ ? (0, kF.f)(this.lite, QQ) : (0, kF.m)(this.lite, QQ) : FQ ? new((0, BQ.c)().Mesh)(QQ, this.lA) : new((0, BQ.c)().TransformNode)(QQ, this.lA)))
      }
      async load() {
        var QQ;
        this.asset.model.json.nodes && this.createRoot();
        const FQ = this.lite ? null : this.lA,
          wQ = null !== (QQ = null === FQ || void 0 === FQ ? void 0 : FQ.blockMaterialDirtyMechanism) && void 0 !== QQ && QQ;
        let LQ;
        FQ && (FQ.blockMaterialDirtyMechanism = !0);
        try {
          LQ = this.loadScene()
        } finally {
          null === FQ || void 0 === FQ || FQ._forceBlockMaterialDirtyMechanism(wQ)
        }
        await LQ;
        const {
          root: qQ,
          tree: oQ
        } = this;
        qQ && (qQ.Qr(!0), oQ.meshes.push(qQ), oQ.rootNodes.push(qQ));
        for (const kQ of this.asset.model.nodes) {
          const QQ = this.nodeObjects.get(kQ.index);
          QQ && ["TransformNode", "LiteNode"].includes(QQ.getClassName()) && oQ.transformNodes.push(QQ);
          for (const FQ of null !== (DQ = this.nodePrimitives.get(kQ.index)) && void 0 !== DQ ? DQ : []) {
            var DQ;
            oQ.meshes.push(FQ);
            const QQ = FQ.geometry;
            QQ && !oQ.geometries.includes(QQ) && oQ.geometries.push(QQ)
          }
        }
      }
      createRoot() {
        const QQ = this.node("__root__", !0);
        this.root = QQ, QQ.Qr(!1), this.lA.useRightHandedSystem || xF(XQ, QQ)
      }
      loadScene() {
        const QQ = [];
        for (const FQ of this.asset.model.rootNodes) QQ.push(this.loadNode(this.asset.model.nodes[FQ], (QQ => {
          QQ.parent = this.root
        })));
        return QQ.push(Promise.resolve()), Promise.all(QQ).then((() => {}))
      }
      loadNode(QQ, FQ) {
        const wQ = `/nodes/${QQ.index}`,
          LQ = [],
          qQ = qQ => {
            if (bF(qQ, wQ), xF(QQ, qQ), QQ.hasCamera && !this.lA.useRightHandedSystem) {
              const {
                ck: QQ
              } = qQ;
              QQ.set(-1, QQ.y, QQ.z)
            }
            for (const FQ of QQ.children) LQ.push(this.loadNode(this.asset.model.nodes[FQ], (QQ => {
              QQ.parent = qQ
            })));
            (wQ => {
              YF(wQ, QQ.extras), FQ(wQ)
            })(qQ)
          };
        if (null === QQ.mesh) {
          const FQ = this.node(aQ(QQ), !1);
          this.nodeObjects.set(QQ.index, FQ), qQ(FQ)
        } else {
          const FQ = this.asset.model.meshes[QQ.mesh];
          LQ.push(this.loadMesh(`/meshes/${FQ.index}`, QQ, FQ, qQ))
        }
        return Promise.all(LQ).then((() => {
          for (const wQ of null !== (FQ = this.nodePrimitives.get(QQ.index)) && void 0 !== FQ ? FQ : []) {
            var FQ;
            wF(wQ)
          }
          return this.nodeObjects.get(QQ.index)
        }))
      }
      loadMesh(QQ, FQ, wQ, LQ) {
        const qQ = [],
          oQ = aQ(FQ);
        if (1 === wQ.primitives.length) {
          const LQ = wQ.primitives[0];
          qQ.push(this.loadPrimitive(`${QQ}/primitives/${LQ.index}`, oQ, LQ, (QQ => {
            this.nodeObjects.set(FQ.index, QQ), this.nodePrimitives.set(FQ.index, [QQ])
          })))
        } else {
          const LQ = this.node(oQ, !1);
          this.nodeObjects.set(FQ.index, LQ);
          const DQ = [];
          this.nodePrimitives.set(FQ.index, DQ);
          for (const FQ of wQ.primitives) qQ.push(this.loadPrimitive(`${QQ}/primitives/${FQ.index}`, `${oQ}_primitive${FQ.index}`, FQ, (QQ => {
            QQ.parent = LQ, DQ.push(QQ)
          })))
        }
        const DQ = this.nodeObjects.get(FQ.index);
        return LQ(DQ), Promise.all(qQ).then((() => DQ))
      }
      loadPrimitive(QQ, FQ, wQ, LQ) {
        const qQ = [],
          oQ = this.node(FQ, !0);
        if (oQ.sideOrientation = this.lA.useRightHandedSystem ? vF.c.CounterClockWiseSideOrientation : vF.c.ClockWiseSideOrientation, qQ.push(this.geometryData.load(QQ, wQ, oQ).then((QQ => {
            if ((0, dQ.g)(oQ)) {
              var FQ, wQ;
              const LQ = QQ;
              oQ.replaceModel(LQ, Int32Array.of(0, null !== (FQ = null === (wQ = LQ.indexData) || void 0 === wQ ? void 0 : wQ.length) && void 0 !== FQ ? FQ : LQ.vertexCount, 0, LQ.vertexCount))
            } else this.create((() => (QQ.applyToMesh(oQ), QQ)))
          }))), this.materials) {
          const QQ = 0 === wQ.mode ? vF.c.PointListDrawMode : vF.c.TriangleFillMode,
            FQ = null === wQ.material ? null : this.asset.model.materials[wQ.material];
          qQ.push(this.loadMaterial(FQ, QQ, (QQ => {
            oQ.material = QQ
          })))
        }
        return bF(oQ, QQ), LQ(oQ), Promise.all(qQ).then((() => oQ))
      }
      loadMaterial(QQ, FQ, wQ) {
        var LQ;
        const qQ = `${null!==(LQ=null===QQ||void 0===QQ?void 0:QQ.index)&&void 0!==LQ?LQ:"default"}:${FQ}`;
        let oQ = this.materialData.get(qQ);
        return oQ || (oQ = this.createMaterial(QQ, FQ), this.materialData.set(qQ, oQ)), wQ(oQ.material), oQ.promise
      }
      createMaterial(QQ, FQ) {
        const wQ = QQ ? QQ.name || `material${QQ.index}` : "__GLTFLoader._default",
          {
            style: LQ,
            unlit: qQ
          } = this.materials;
        let oQ;
        const DQ = this.create((() => {
          const DQ = (0, HF.e)({
            name: wQ,
            lA: this.lA,
            sets: {
              ...(0, QF.e)(this.asset, QQ, LQ, qQ),
              fillMode: FQ
            },
            unrendered: !0
          });
          return oQ = DQ.model, DQ.mirror
        }));
        let kQ = Promise.resolve();
        if (QQ) {
          const FQ = `/materials/${QQ.index}`,
            LQ = oQ.diffuseTexture;
          if (LQ && !LQ.mirror) kQ = new Promise((QQ => setTimeout(QQ)));
          else if (LQ) {
            const qQ = LQ.mirror;
            qQ._parentContainer = this.container, qQ.name = `${wQ} (Base Color)`, bF(qQ, `${FQ}${QQ.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(qQ), kQ = (0, mF.v)(LQ)
          }
          YF(DQ, QQ.extras), bF(DQ, FQ)
        }
        return this.tree.materials.push(DQ), {
          material: DQ,
          promise: kQ
        }
      }
    }

    function eF() {
      oF.e.dracoDecodes = AQ.decodes, oF.e.dracoWorkersStarted = AQ.workersStarted, oF.e.dracoMostWorkers = AQ.mostWorkers
    }
    async function MF(QQ, FQ, wQ, qQ, oQ) {
      try {
        return await async function(QQ, FQ, wQ, qQ, oQ, DQ) {
          var kQ;
          let vQ;
          const mQ = null === (kQ = (0, uF.d)()) || void 0 === kQ ? void 0 : kQ.Zx,
            uQ = null !== mQ && void 0 !== mQ && mQ.yx && FQ === mQ.iN() ? mQ : null,
            HQ = oQ && !uQ;
          return await yQ(QQ, FQ, wQ, qQ, LQ.d, (QQ => (vQ = new AF(FQ, HQ), new tF(QQ, FQ, vQ, HQ, new LF(FQ, qQ), DQ, uQ).load())), !oQ), vQ
        }(QQ, FQ, wQ, cQ, qQ, oQ)
      } finally {
        eF()
      }
    }
    async function GF(QQ, FQ, wQ, qQ) {
      try {
        return await yQ(QQ, FQ, wQ, cQ, LQ.d, (QQ => qQ(QQ, new LF(FQ, cQ))))
      } finally {
        eF()
      }
    }
    qF = qQ.d, uQ || (uQ = {
      scriptUrl: new URL(qF.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(qF.wasmBinaryUrl, location.href).href
    })
  },
  40897: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => DQ
    });
    var LQ = wQ(134),
      qQ = wQ(1221);

    function oQ(QQ) {
      return (0, LQ.d)() ? `https://${qQ.d.discordDomain}/${QQ.href}` : QQ.href
    }
    const DQ = {
      scriptUrl: oQ(new wQ.U(wQ(40901))),
      wasmBinaryUrl: oQ(new wQ.U(wQ(40910)))
    }
  },
  35914: QQ => {
    QQ.exports = function(QQ, FQ, wQ, LQ) {
      var qQ = self || window;
      try {
        try {
          var oQ;
          try {
            oQ = new qQ.Blob([QQ])
          } catch (mQ) {
            (oQ = new(qQ.BlobBuilder || qQ.WebKitBlobBuilder || qQ.MozBlobBuilder || qQ.MSBlobBuilder)).append(QQ), oQ = oQ.getBlob()
          }
          var DQ = qQ.URL || qQ.webkitURL,
            kQ = DQ.createObjectURL(oQ),
            vQ = new qQ[FQ](kQ, wQ);
          return DQ.revokeObjectURL(kQ), vQ
        } catch (mQ) {
          return new qQ[FQ]("data:application/javascript,".concat(encodeURIComponent(QQ)), wQ)
        }
      } catch (mQ) {
        if (!LQ) throw Error("Inline worker is not supported");
        return new qQ[FQ](LQ, wQ)
      }
    }
  },
  40901: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  40910: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);