export const id = 205;
export const ids = [205];
export const modules = {
  41295: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      loadGlbAsset: () => Rz,
      loadGlbTree: () => Gz
    });
    var QC = ZC(37731),
      wC = ZC(41298),
      bC = ZC(36162),
      nC = ZC.n(bC);

    function fC() {
      return nC()('(()=>{class CC extends Error{}function zC(zC,ZC){const QC=zC._malloc(ZC);if(0===QC)throw new CC(`Draco: the decoder\'s heap refused ${ZC} bytes`);return QC}function ZC(CC){return{[CC.DT_FLOAT32]:[Float32Array,5126],[CC.DT_INT8]:[Int8Array,5120],[CC.DT_INT16]:[Int16Array,5122],[CC.DT_INT32]:[Int32Array,5124],[CC.DT_UINT8]:[Uint8Array,5121],[CC.DT_UINT16]:[Uint16Array,5123],[CC.DT_UINT32]:[Uint32Array,5125]}}function QC(zC,QC,wC,bC,nC){let fC=null,oC=null,qC=null;try{fC=new zC.Decoder,oC=new zC.DecoderBuffer,oC.Init(QC,QC.byteLength);let FC=0;const WC=fC.GetEncodedGeometryType(oC);if(WC===zC.TRIANGULAR_MESH){const ZC=new zC.Mesh;qC=ZC;const QC=fC.DecodeBufferToMesh(oC,ZC);if(!QC.ok()||0===ZC.ptr)throw new CC(QC.error_msg());FC=3*ZC.num_faces()}else{if(WC!==zC.POINT_CLOUD)throw new CC(`Draco: Cannot decode invalid geometry type ${WC}`);{const ZC=new zC.PointCloud;qC=ZC;const QC=fC.DecodeBufferToPointCloud(oC,ZC);if(!QC.ok()||!ZC.ptr)throw new CC(QC.error_msg())}}const NC=qC.num_points();if(NC!==bC.vertices||FC!==bC.indices)throw new CC(`Draco: decoded ${NC} vertices and ${FC} indices, the accessors declare ${bC.vertices} and ${bC.indices}`);const MC=ZC(zC),gC=[];for(const{kind:zC,id:ZC,components:QC}of wC){const wC=fC.GetAttributeByUniqueId(qC,ZC);if(!wC||0===wC.ptr)throw new CC(`Draco: no attribute with id ${ZC} (${zC})`);const bC=wC.data_type();if(!MC[bC])throw new CC(`Draco: Cannot decode invalid data type ${bC}`);if(wC.num_components()!==QC)throw new CC(`Draco: ${zC} decodes to ${wC.num_components()} components, its accessor declares ${QC}`);gC.push([zC,wC,bC])}return nC({dracoDecoder:fC,geometry:qC,triangles:WC===zC.TRIANGULAR_MESH,numPoints:NC,numIndices:FC,attributes:gC})}finally{qC&&zC.destroy(qC),oC&&zC.destroy(oC),fC&&zC.destroy(fC)}}const wC=self;let bC=null;self.onmessage=CC=>{let{data:nC}=CC;if("init"===nC.id){try{importScripts(nC.url),bC=DracoDecoderModule({wasmBinary:nC.wasmBinary}),wC.postMessage({id:"initDone"})}catch(WC){wC.postMessage({id:"initError",message:WC instanceof Error?WC.message:String(WC)})}return}const{seq:fC,data:oC,attributeIds:qC,expected:FC}=nC;bC?bC.then((CC=>{try{const bC=function(CC,wC,bC,nC){const fC=Object.keys(bC).map((CC=>({kind:CC,id:bC[CC],components:nC.components[CC]})));return QC(CC,wC,fC,nC,(QC=>{let{dracoDecoder:wC,geometry:bC,triangles:nC,numPoints:fC,numIndices:oC,attributes:qC}=QC;const FC=ZC(CC);let WC=null;if(nC){const ZC=4*oC,QC=zC(CC,ZC);try{wC.GetTrianglesUInt32Array(bC,ZC,QC),WC=new Uint32Array(oC),WC.set(new Uint32Array(CC.HEAPF32.buffer,QC,oC))}finally{CC._free(QC)}}const NC=[];for(const[ZC,MC,gC]of qC){const[QC]=FC[gC],nC=MC.num_components(),oC=fC*nC,qC=oC*QC.BYTES_PER_ELEMENT,WC=zC(CC,qC);try{wC.GetAttributeDataArrayForAllPoints(bC,MC,gC,qC,WC),NC.push({kind:ZC,data:new QC(CC.HEAPF32.buffer,WC,oC).slice(),size:nC,byteOffset:MC.byte_offset(),byteStride:MC.byte_stride(),normalized:MC.normalized()})}finally{CC._free(WC)}}return{indices:WC,attributes:NC,totalVertices:fC}}))}(CC,oC,qC,FC),nC=bC.attributes.map((CC=>CC.data.buffer));bC.indices&&nC.push(bC.indices.buffer),wC.postMessage({id:"decoded",seq:fC,...bC},nC)}catch(WC){wC.postMessage({id:"decodeError",seq:fC,message:WC instanceof Error?WC.message:String(WC)})}}),(CC=>{wC.postMessage({id:"decodeError",seq:fC,message:CC instanceof Error?CC.message:String(CC)})})):wC.postMessage({id:"decodeError",seq:fC,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, ZC.p + "dracoDecode.worker.50084743.worker.js")
    }
    var oC = ZC(77);
    const qC = 1e3;
    let FC = null,
      WC = null;
    const NC = [],
      MC = [];
    let gC = 0;
    const SC = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      pC = function(CC, zC) {
        const ZC = CC ? Math.max(1, Math.min(Math.floor(.5 * CC), 4)) : 1;
        return zC ? Math.min(ZC, 2) : ZC
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, oC.isMobile)());

    function PC() {
      if (!FC) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: CC,
        wasmBinaryUrl: zC
      } = FC;
      return WC ??= fetch(zC).then((CC => {
        if (!CC.ok) throw new Error(`Draco: fetching ${zC} failed: ${CC.status}`);
        return CC.arrayBuffer()
      })), WC.catch((() => {
        WC = null
      })), SC.workersStarted++, WC.then((zC => new Promise(((ZC, QC) => {
        const wC = new fC;
        wC.onerror = CC => {
          wC.onmessage = null, wC.onerror = null, wC.terminate(), QC(new Error("Draco: the decode worker failed to start" + (CC.message ? `: ${CC.message}` : " (its script did not load)")))
        }, wC.onmessage = CC => {
          let {
            data: zC
          } = CC;
          wC.onmessage = null, wC.onerror = null, "initDone" === zC.id ? ZC(wC) : (wC.terminate(), QC(new Error(`Draco: ${"initError"===zC.id?zC.message:"the worker did not start"}`)))
        };
        const bC = zC.slice(0),
          nC = {
            id: "init",
            url: CC,
            wasmBinary: bC
          };
        wC.postMessage(nC, [bC])
      }))))
    }

    function GC(CC) {
      const zC = NC.indexOf(CC); - 1 !== zC && NC.splice(zC, 1);
      const ZC = MC.shift();
      ZC && AC(ZC)
    }

    function RC(CC, zC) {
      CC.busy = !0, CC.releaseTimer && (clearTimeout(CC.releaseTimer), CC.releaseTimer = null);
      CC.worker.then((ZC => {
        const QC = gC++;
        ZC.onmessage = wC => {
          let {
            data: bC
          } = wC;
          if (("decoded" === bC.id || "decodeError" === bC.id) && bC.seq === QC) {
            if (ZC.onmessage = null, ZC.onerror = null, "decoded" === bC.id) return SC.decodes++, zC.resolve({
              indices: bC.indices,
              attributes: bC.attributes,
              totalVertices: bC.totalVertices
            }), void(() => {
              const zC = MC.shift();
              zC ? RC(CC, zC) : (CC.busy = !1, CC.releaseTimer = setTimeout((() => {
                const zC = NC.indexOf(CC); - 1 !== zC && NC.splice(zC, 1), CC.worker.then((CC => {
                  CC.terminate()
                }))
              }), qC))
            })();
            ZC.terminate(), zC.reject(new Error(bC.message)), GC(CC)
          }
        }, ZC.onerror = QC => {
          ZC.onmessage = null, ZC.onerror = null, ZC.terminate(), zC.reject(new Error(`Draco: the decode worker failed: ${QC.message}`)), GC(CC)
        };
        const wC = {
          id: "decode",
          seq: QC,
          data: zC.data,
          attributeIds: zC.attributeIds,
          expected: zC.expected
        };
        ZC.postMessage(wC, [zC.data.buffer])
      }), (ZC => {
        zC.reject(ZC instanceof Error ? ZC : new Error(String(ZC))), GC(CC)
      }))
    }

    function AC(CC) {
      const zC = NC.find((CC => !CC.busy));
      if (zC) RC(zC, CC);
      else {
        if (NC.length < pC) {
          const zC = {
            worker: PC(),
            busy: !0,
            releaseTimer: null
          };
          return NC.push(zC), SC.mostWorkers = Math.max(SC.mostWorkers, NC.length), void RC(zC, CC)
        }
        MC.push(CC)
      }
    }

    function xC(CC, zC, ZC) {
      return new Promise(((QC, wC) => {
        AC({
          data: new Int8Array(CC.buffer, CC.byteOffset, CC.byteLength).slice(),
          attributeIds: zC,
          expected: ZC,
          resolve: QC,
          reject: wC
        })
      }))
    }
    var JC = ZC(37329),
      IC = ZC(37339),
      iC = ZC(34228),
      vC = ZC(34223);
    const eC = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function hC(CC) {
      const zC = (0, vC.j)(CC.byteLength);
      if (zC) throw new iC.n(zC);
      const {
        json: ZC,
        bin: QC
      } = (0, iC.x)(CC), wC = (0, vC.f)(ZC, QC);
      if (wC) throw new iC.n(wC);
      try {
        return function(CC, zC) {
          var ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC;
          const PC = new Map,
            GC = ZC => {
              let QC = PC.get(ZC);
              if (!QC) {
                var wC;
                const bC = CC.bufferViews[ZC],
                  nC = null !== (wC = bC.byteOffset) && void 0 !== wC ? wC : 0;
                QC = {
                  index: ZC,
                  bytes: zC.subarray(nC, nC + bC.byteLength),
                  byteStride: bC.byteStride
                }, PC.set(ZC, QC)
              }
              return QC
            },
            RC = new Map,
            AC = zC => {
              let ZC = RC.get(zC);
              if (!ZC) {
                var QC;
                const wC = CC.accessors[zC];
                ZC = {
                  index: zC,
                  count: wC.count,
                  type: wC.type,
                  numComponents: iC.q[wC.type],
                  componentType: wC.componentType,
                  normalized: null !== (QC = wC.normalized) && void 0 !== QC && QC,
                  byteOffset: wC.byteOffset,
                  bufferView: void 0 === wC.bufferView ? null : GC(wC.bufferView),
                  min: wC.min,
                  max: wC.max
                }, RC.set(zC, ZC)
              }
              return ZC
            },
            xC = null !== (ZC = null === (QC = CC.extensionsUsed) || void 0 === QC ? void 0 : QC.includes("KHR_draco_mesh_compression")) && void 0 !== ZC && ZC,
            JC = (null !== (wC = CC.meshes) && void 0 !== wC ? wC : []).map(((zC, ZC) => {
              const QC = zC.primitives.map(((zC, ZC) => {
                var QC, wC, bC;
                const nC = xC ? null === (QC = zC.extensions) || void 0 === QC ? void 0 : QC.KHR_draco_mesh_compression : void 0;
                let fC = null;
                const oC = [];
                if (nC) {
                  const ZC = {
                    vertices: CC.accessors[zC.attributes.POSITION].count,
                    indices: void 0 === zC.indices ? 0 : CC.accessors[zC.indices].count,
                    components: {}
                  };
                  fC = {
                    bufferView: GC(nC.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: ZC
                  };
                  for (const [QC, wC] of iC.h) {
                    const bC = nC.attributes[QC];
                    if (void 0 === bC) continue;
                    fC.attributeIds[wC] = bC;
                    const oC = zC.attributes[QC];
                    var qC;
                    if (void 0 !== oC) fC.normalized[wC] = null !== (qC = CC.accessors[oC].normalized) && void 0 !== qC && qC, ZC.components[wC] = iC.q[CC.accessors[oC].type]
                  }
                } else
                  for (const [CC, FC] of iC.h) {
                    const ZC = zC.attributes[CC];
                    void 0 !== ZC && oC.push({
                      semantic: CC,
                      kind: FC,
                      accessor: AC(ZC)
                    })
                  }
                return {
                  index: ZC,
                  mode: null !== (wC = zC.mode) && void 0 !== wC ? wC : 4,
                  attributes: oC,
                  indices: nC || void 0 === zC.indices ? null : AC(zC.indices),
                  position: void 0 === zC.attributes.POSITION ? null : AC(zC.attributes.POSITION),
                  material: null !== (bC = zC.material) && void 0 !== bC ? bC : null,
                  draco: fC
                }
              }));
              return {
                index: ZC,
                name: zC.name,
                primitives: QC,
                extras: zC.extras
              }
            })),
            IC = (null !== (bC = CC.nodes) && void 0 !== bC ? bC : []).map(((CC, zC) => {
              var ZC, QC;
              return {
                index: zC,
                name: CC.name,
                children: null !== (ZC = CC.children) && void 0 !== ZC ? ZC : [],
                mesh: null !== (QC = CC.mesh) && void 0 !== QC ? QC : null,
                translation: CC.translation,
                rotation: CC.rotation,
                scale: CC.scale,
                hasCamera: void 0 !== CC.camera,
                extras: CC.extras
              }
            })),
            vC = null !== (nC = null === (fC = CC.extensionsUsed) || void 0 === fC ? void 0 : fC.includes("KHR_materials_unlit")) && void 0 !== nC && nC,
            hC = null !== (oC = null === (qC = CC.extensionsUsed) || void 0 === qC ? void 0 : qC.includes("KHR_texture_transform")) && void 0 !== oC && oC,
            KC = (null !== (FC = CC.materials) && void 0 !== FC ? FC : []).map(((CC, zC) => {
              var ZC, QC, wC, bC;
              const nC = CC.pbrMetallicRoughness,
                fC = null === nC || void 0 === nC ? void 0 : nC.baseColorTexture;
              return {
                index: zC,
                name: CC.name,
                extras: CC.extras,
                unlit: vC && void 0 !== (null === (ZC = CC.extensions) || void 0 === ZC ? void 0 : ZC.KHR_materials_unlit),
                pbr: nC ? {
                  baseColorFactor: nC.baseColorFactor,
                  metallicFactor: nC.metallicFactor,
                  roughnessFactor: nC.roughnessFactor
                } : null,
                baseColorTexture: fC ? {
                  texture: fC.index,
                  transform: hC && (null === (QC = fC.extensions) || void 0 === QC ? void 0 : QC.KHR_texture_transform) || null
                } : null,
                emissiveFactor: CC.emissiveFactor,
                alphaMode: null !== (wC = CC.alphaMode) && void 0 !== wC ? wC : "OPAQUE",
                alphaCutoff: CC.alphaCutoff,
                doubleSided: null !== (bC = CC.doubleSided) && void 0 !== bC && bC
              }
            })),
            YC = (null !== (WC = CC.textures) && void 0 !== WC ? WC : []).map(((zC, ZC) => {
              var QC, wC;
              const bC = void 0 === zC.sampler ? eC : {
                index: zC.sampler,
                ...null === (QC = CC.samplers) || void 0 === QC ? void 0 : QC[zC.sampler]
              };
              return {
                index: ZC,
                sampler: {
                  index: bC.index,
                  magFilter: bC.magFilter,
                  minFilter: bC.minFilter,
                  wrapS: bC.wrapS,
                  wrapT: bC.wrapT
                },
                image: null !== (wC = zC.source) && void 0 !== wC ? wC : -1
              }
            })),
            dC = (null !== (NC = CC.images) && void 0 !== NC ? NC : []).map(((CC, zC) => ({
              index: zC,
              name: CC.name,
              mimeType: CC.mimeType,
              bufferView: GC(CC.bufferView)
            }))),
            mC = null !== (MC = (0, iC.w)(CC)) && void 0 !== MC ? MC : 0;
          return {
            json: CC,
            rootNodes: null !== (gC = null === (SC = CC.scenes) || void 0 === SC || null === (pC = SC[mC]) || void 0 === pC ? void 0 : pC.nodes) && void 0 !== gC ? gC : [],
            nodes: IC,
            meshes: JC,
            materials: KC,
            textures: YC,
            images: dC
          }
        }(ZC, QC)
      } catch (bC) {
        throw bC instanceof iC.l ? bC : new iC.l(`reading the GLB failed: ${bC instanceof Error?bC.message:String(bC)}`)
      }
    }
    async function KC(CC, zC) {
      var ZC, QC;
      const wC = CC.draco;
      if (!wC) throw new iC.l("not a Draco primitive");
      let bC;
      try {
        bC = await zC(wC.bufferView.bytes, wC.attributeIds, wC.expected)
      } catch (qC) {
        throw new iC.l(`Draco decoding failed: ${qC instanceof Error?qC.message:String(qC)}`)
      }
      const {
        vertices: nC,
        indices: fC,
        components: oC
      } = wC.expected;
      if (bC.totalVertices !== nC || (null !== (ZC = null === (QC = bC.indices) || void 0 === QC ? void 0 : QC.length) && void 0 !== ZC ? ZC : 0) !== fC || bC.attributes.some((CC => CC.size !== oC[CC.kind] || CC.data.length !== nC * CC.size))) throw new iC.l("Draco decoding gave other counts than the accessors declare");
      for (const FC of bC.attributes) {
        const CC = wC.normalized[FC.kind];
        void 0 !== CC && (FC.normalized = CC)
      }
      return bC
    }
    const YC = new WeakMap;

    function dC(CC, zC) {
      var ZC;
      const QC = null !== (ZC = YC.get(CC)) && void 0 !== ZC ? ZC : zC(CC);
      return YC.set(CC, QC), QC
    }

    function mC(CC) {
      const zC = CC.bufferView,
        ZC = 5125 === CC.componentType ? Uint32Array : Uint16Array,
        QC = zC.bytes.buffer,
        wC = zC.bytes.byteOffset + (CC.byteOffset || 0);
      return wC % ZC.BYTES_PER_ELEMENT !== 0 ? new ZC(QC.slice(wC, wC + CC.count * ZC.BYTES_PER_ELEMENT), 0) : new ZC(QC, wC, CC.count)
    }

    function HC(CC, zC) {
      if (CC.min && CC.max) return [new Float64Array(CC.min), new Float64Array(CC.max)];
      const ZC = zC.find((CC => {
          let {
            kind: zC
          } = CC;
          return "position" === zC
        })),
        QC = ZC ? (0, IC.g)(ZC, CC.count) : new Float32Array(0);
      return (0, IC.t)(QC.length / 3, ((CC, zC) => QC[3 * CC + zC]))
    }

    function EC(CC) {
      const zC = CC.attributes.map((CC => {
          var zC, ZC;
          let {
            kind: QC,
            accessor: wC
          } = CC;
          const {
            bufferView: bC,
            numComponents: nC
          } = wC;
          if (!bC) {
            return {
              kind: QC,
              data: dC(wC, (() => new Float32Array(nC * wC.count))),
              offset: 0,
              stride: 4 * nC,
              components: nC,
              glType: 5126,
              isNormalized: !1
            }
          }
          const fC = null !== (zC = bC.byteStride) && void 0 !== zC ? zC : nC * iC.e[wC.componentType];
          return {
            kind: QC,
            data: bC.bytes,
            offset: null !== (ZC = wC.byteOffset) && void 0 !== ZC ? ZC : 0,
            stride: fC,
            components: nC,
            glType: wC.componentType,
            isNormalized: wC.normalized
          }
        })),
        ZC = CC.indices,
        QC = ZC && dC(ZC, mC),
        wC = CC.position;
      return new IC.f(zC, QC, wC.count, ...HC(wC, zC))
    }
    const lC = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function XC(CC, zC) {
      const ZC = zC.attributes.map((CC => {
        let {
          kind: zC,
          data: ZC,
          size: QC,
          byteOffset: wC,
          byteStride: bC,
          normalized: nC
        } = CC;
        return {
          kind: zC,
          data: ZC,
          offset: wC,
          stride: bC,
          components: QC,
          glType: 5120 + lC.indexOf(ZC.constructor),
          isNormalized: nC
        }
      }));
      return new IC.f(ZC, zC.indices, zC.totalVertices, ...HC(CC.position, ZC))
    }

    function cC(CC) {
      const zC = CC.lastIndexOf("/");
      return zC < 0 ? CC : CC.substring(zC + 1)
    }

    function uC(CC) {
      const zC = CC.lastIndexOf("/");
      return zC < 0 ? "" : CC.substring(0, zC + 1)
    }

    function rC(CC) {
      return CC.name || `node${CC.index}`
    }
    const sC = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      TC = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      aC = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function tC(CC) {
      var zC, ZC, QC, wC;
      const bC = null !== (zC = CC.minFilter) && void 0 !== zC ? zC : 9987;
      return 9729 === (null !== (ZC = CC.magFilter) && void 0 !== ZC ? ZC : 9729) ? null !== (QC = TC[bC]) && void 0 !== QC ? QC : 3 : null !== (wC = aC[bC]) && void 0 !== wC ? wC : 4
    }
    const DC = {
      33071: 0,
      33648: 2
    };

    function jC(CC) {
      var zC;
      return null !== (zC = DC[null !== CC && void 0 !== CC ? CC : 10497]) && void 0 !== zC ? zC : 1
    }

    function yC(CC) {
      return 9728 === CC.minFilter || 9729 === CC.minFilter
    }

    function LC(CC) {
      var zC, ZC, QC;
      const wC = Float64Array.from(null !== (zC = CC.scale) && void 0 !== zC ? zC : [1, 1, 1]);
      return CC.hasCamera && (wC[0] = -1), {
        translation: Float64Array.from(null !== (ZC = CC.translation) && void 0 !== ZC ? ZC : [0, 0, 0]),
        rotation: Float64Array.from(null !== (QC = CC.rotation) && void 0 !== QC ? QC : [0, 0, 0, 1]),
        scale: wC
      }
    }

    function UC(CC, zC) {
      let {
        translation: ZC,
        rotation: QC,
        scale: wC
      } = CC;
      const bC = new Float32Array(16);
      return (0, JC.b)(wC, 0, QC, 0, ZC, 0, bC), zC && (0, JC.o)(bC, zC, 0, bC), bC
    }
    class BC {
      constructor(CC, zC, ZC, QC) {
        this.model = CC, this.decode = zC, this.fileInfo = ZC, this.uniqueRootUrl = QC, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const wC = new Set,
          bC = (zC, ZC) => {
            const QC = CC.nodes[zC];
            if (this.parents.has(QC)) throw new iC.l(`/nodes/${zC}: Invalid recursive node hierarchy`);
            this.parents.set(QC, ZC);
            const nC = null === QC.mesh ? [] : CC.meshes[QC.mesh].primitives,
              fC = nC.map((CC => {
                const zC = nC.length > 1;
                return {
                  name: zC ? `${rC(QC)}_primitive${CC.index}` : rC(QC),
                  node: QC,
                  primitive: CC,
                  part: zC,
                  geometry: null
                }
              }));
            this.uses.set(QC, fC);
            const oC = null !== QC.mesh && wC.has(QC.mesh);
            wC.add(QC.mesh), this.own.set(QC, oC ? [] : fC);
            for (const CC of QC.children) bC(CC, QC)
          };
        for (const nC of CC.rootNodes) bC(nC, null);
        this.primitives = CC.nodes.flatMap((CC => {
          var zC;
          return null !== (zC = this.own.get(CC)) && void 0 !== zC ? zC : []
        }))
      }
      decodeGeometries() {
        const CC = new Map;
        return Promise.all(this.primitives.map((async zC => {
          const {
            primitive: ZC
          } = zC, QC = ZC.draco;
          let wC = QC ? CC.get(QC.bufferView.index) : Promise.resolve(EC(ZC));
          wC || (wC = KC(ZC, this.decode).then((CC => XC(ZC, CC))), CC.set(QC.bufferView.index, wC)), zC.geometry = await wC
        })))
      }
      parentOf(CC) {
        var zC;
        return null !== (zC = this.parents.get(CC)) && void 0 !== zC ? zC : null
      }
      meshesUnder(CC) {
        const zC = this.model.nodes.filter((CC => this.uses.has(CC)));
        for (const QC of zC) {
          const zC = this.uses.get(QC),
            ZC = zC.find((zC => zC.name === CC));
          if (ZC) return 1 === zC.length ? this.subtree(QC) : this.own.get(QC).includes(ZC) ? [ZC] : []
        }
        const ZC = zC.find((zC => 1 !== this.uses.get(zC).length && rC(zC) === CC));
        return ZC ? this.subtree(ZC) : null
      }
      subtree(CC) {
        return [...this.own.get(CC), ...CC.children.flatMap((CC => this.subtree(this.model.nodes[CC])))]
      }
      worldMatrix(CC, zC, ZC) {
        let QC = UC(LC(zC ? sC : {}), null);
        const wC = [];
        for (let nC = CC.part ? CC.node : this.parentOf(CC.node); nC; nC = this.parentOf(nC)) wC.unshift(nC);
        for (const nC of wC) QC = UC(LC(nC), QC);
        const bC = LC(CC.part ? {} : CC.node);
        return void 0 !== ZC && bC.scale.fill(ZC), UC(bC, QC)
      }
      floats(CC) {
        const {
          vertexAttributes: zC,
          vertexCount: ZC
        } = CC.geometry;
        return new Map(zC.map((CC => [CC.kind, (0, IC.g)(CC, ZC)])))
      }
      imageUrl(CC) {
        return function(CC, zC, ZC) {
          let {
            name: QC
          } = zC;
          return `data:${CC}${QC}#image${ZC}`
        }(this.uniqueRootUrl, this.fileInfo, CC)
      }
      textureDesc(CC, zC) {
        var ZC;
        let {
          texture: QC,
          transform: wC
        } = CC;
        const {
          sampler: bC,
          image: nC
        } = this.model.textures[QC], {
          bufferView: fC,
          mimeType: oC,
          name: qC
        } = this.model.images[nC], FC = wC && {
          ...wC.offset ? {
            uOffset: wC.offset[0],
            vOffset: wC.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...wC.rotation ? {
            wAng: -wC.rotation
          } : {},
          ...wC.scale ? {
            uScale: wC.scale[0],
            vScale: wC.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(nC),
          noMipmap: yC(bC),
          invertY: !1,
          samplingMode: tC(bC),
          data: {
            bytes: fC.bytes,
            mimeType: oC,
            label: qC,
            context: `/textures/${QC}`
          },
          sets: {
            wrapU: jC(bC.wrapS),
            wrapV: jC(bC.wrapT),
            ...FC,
            coordinatesIndex: null !== (ZC = null === wC || void 0 === wC ? void 0 : wC.texCoord) && void 0 !== ZC ? ZC : 0,
            hasAlpha: zC
          }
        }
      }
    }
    async function OC(CC, zC, ZC, QC, wC, bC) {
      let nC = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const fC = function(CC, zC, ZC) {
          return "string" !== typeof zC ? {
            url: "",
            rootUrl: CC,
            name: ZC()
          } : zC ? zC.startsWith("data:") ? {
            url: zC,
            rootUrl: CC,
            name: ""
          } : CC ? {
            url: CC + zC,
            rootUrl: CC,
            name: zC
          } : {
            url: zC,
            rootUrl: uC(zC),
            name: cC(zC)
          } : {
            url: CC,
            rootUrl: uC(CC),
            name: cC(CC)
          }
        }(ZC, CC, wC),
        oC = {};
      zC.addPendingData(oC);
      try {
        const ZC = hC(await async function(CC, zC) {
            return "string" !== typeof zC ? zC : CC.url.startsWith("data:") ? (0, iC.s)(CC.url) : await (0, iC.t)(CC.url)
          }(fC, CC)),
          oC = new BC(ZC, QC, fC, function(CC, zC) {
            let {
              rootUrl: ZC,
              name: QC
            } = CC;
            return !ZC.startsWith("file:") && QC ? ZC : `${ZC}${zC()}/`
          }(fC, wC));
        return await bC(oC), zC.importedMeshesFiles && (zC.loadingPluginName = "Wm", nC && zC.importedMeshesFiles.push(fC.url)), oC
      } finally {
        zC.removePendingData(oC)
      }
    }
    var kC = ZC(37432),
      VC = ZC(37306),
      Cz = ZC(37721);

    function zz(CC) {
      if (null === CC || void 0 === CC || !CC.min || !CC.max) return null;
      const [zC, ZC, QC] = CC.min, [wC, bC, nC] = CC.max, {
        BoundingInfo: fC,
        Eg: oC
      } = (0, kC.b)();
      return new fC(new oC(zC, ZC, QC), new oC(wC, bC, nC))
    }

    function Zz(CC) {
      (0, VC.d)(CC) || (CC.geometry && CC.geometry.useBoundingInfoFromGeometry ? CC._updateBoundingInfo() : CC.refreshBoundingInfo(!0, !0))
    }
    class Qz {
      constructor(CC, zC) {
        this.sS = CC, this.decode = zC, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(CC) {
        let zC = this.viewData.get(CC.index);
        return zC || (zC = this.bufferData.then((() => CC.bytes)), this.viewData.set(CC.index, zC)), zC
      }
      viewBuffer(CC) {
        let zC = this.viewBuffers.get(CC.index);
        return zC || (zC = this.viewBytes(CC).then((CC => new((0, kC.b)().gg)(this.sS.mg(), CC, !1))), this.viewBuffers.set(CC.index, zC)), zC
      }
      vertexBuffer(CC, zC) {
        const {
          kind: ZC,
          data: QC
        } = zC, wC = `${CC.index}:${ZC}`;
        let bC = this.vertexBuffers.get(wC);
        if (!bC) {
          const nC = CC.bufferView;
          bC = nC ? this.viewBuffer(nC).then((CC => this.layoutVertexBuffer(CC, zC))) : Promise.resolve(QC).then((CC => new((0, kC.b)().VertexBuffer)(this.sS.mg(), CC, ZC, !1))), this.vertexBuffers.set(wC, bC)
        }
        return bC
      }
      layoutVertexBuffer(CC, zC) {
        let {
          kind: ZC,
          offset: QC,
          stride: wC,
          components: bC,
          glType: nC,
          isNormalized: fC
        } = zC;
        const oC = this.sS.mg();
        return new((0, kC.b)().VertexBuffer)(oC, CC, ZC, !1, void 0, wC, void 0, QC, bC, nC, fC, !0, void 0, !0)
      }
      load(CC, zC, ZC) {
        const QC = (0, VC.d)(ZC),
          wC = CC => {
            QC || (ZC._delayInfo = ZC._delayInfo || [], -1 === ZC._delayInfo.indexOf(CC) && ZC._delayInfo.push(CC))
          },
          bC = zC.draco;
        if (bC) {
          for (const CC in bC.attributeIds) wC(CC);
          let nC = this.dracoGeometry.get(bC.bufferView.index);
          return nC || (nC = this.viewBytes(bC.bufferView).then((async () => {
            let wC;
            try {
              wC = await KC(zC, this.decode)
            } catch (oC) {
              throw new iC.l(`${CC}: ${oC instanceof Error?oC.message:String(oC)}`)
            }
            const bC = XC(zC, wC);
            if (QC) return bC;
            const nC = zz(zC.position),
              fC = new((0, kC.b)().MirroredGeometry)(ZC.name, this.sS);
            nC && (fC._boundingInfo = nC, fC.useBoundingInfoFromGeometry = !0), bC.indexData && fC.setIndices(bC.indexData);
            for (const CC of bC.vertexAttributes) fC.setVerticesBuffer(this.layoutVertexBuffer(CC.data, CC), bC.vertexCount);
            return fC.link(bC), fC
          })), this.dracoGeometry.set(bC.bufferView.index, nC)), nC
        }
        const nC = [],
          fC = EC(zC);
        if (QC) return ZC.isUnIndexed = !fC.indexData, ZC.hasVertexAlpha = (0, Cz.f)(zC), Promise.resolve(fC);
        const oC = new((0, kC.b)().MirroredGeometry)(ZC.name, this.sS),
          {
            indexData: qC
          } = fC;
        qC ? nC.push(this.viewBytes(zC.indices.bufferView).then((() => {
          oC.setIndices(qC)
        }))) : ZC.isUnIndexed = !0;
        for (const [FC, {
            kind: WC,
            accessor: NC
          }] of zC.attributes.entries()) wC(WC), nC.push(this.vertexBuffer(NC, fC.vertexAttributes[FC]).then((CC => {
          if ("position" === CC.getKind()) {
            const CC = zz(NC);
            CC && (oC._boundingInfo = CC, oC.useBoundingInfoFromGeometry = !0)
          }
          oC.setVerticesBuffer(CC, fC.vertexCount)
        })));
        return (0, Cz.f)(zC) && (ZC.hasVertexAlpha = !0), Promise.all(nC).then((() => (oC.link(fC), oC)))
      }
    }
    var wz, bz = ZC(37193),
      nz = ZC(36961),
      fz = ZC(37729),
      oz = ZC(37129),
      qz = ZC(37175),
      Fz = ZC(2753),
      Wz = ZC(37167);

    function Nz(CC, zC) {
      CC.metadata = CC.metadata || {};
      const ZC = CC._internalMetadata = CC._internalMetadata || {},
        QC = ZC.Wm = ZC.Wm || {};
      (QC.pointers = QC.pointers || []).push(zC)
    }

    function Mz(CC, zC) {
      if (zC && Object.keys(zC).length > 0) {
        const ZC = CC.metadata = CC.metadata || {};
        (ZC.Wm = ZC.Wm || {}).extras = zC
      }
    }

    function gz(CC, zC) {
      zC.position = CC.translation ? nz.Eg.FromArray(CC.translation) : nz.Eg.Zero(), zC.rotationQuaternion = CC.rotation ? nz.Quaternion.FromArray(CC.rotation) : nz.Quaternion.Identity(), zC.sq = CC.scale ? nz.Eg.FromArray(CC.scale) : nz.Eg.One()
    }
    class Sz {
      constructor(CC, zC) {
        if (this.sS = CC, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, zC) {
          const zC = CC.mg(),
            ZC = CC.Tm.add((() => {
              this.dispose()
            })),
            QC = zC.Yg.add((() => {
              for (const CC of [...this.geometries, ...this.meshes, ...this.textures]) CC._rebuild()
            }));
          this.release = () => {
            CC.Tm.remove(ZC), zC.Yg.remove(QC)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const CC of this.meshes) this.sS.zQC(CC);
          for (const CC of this.materials) this.sS.addMaterial(CC);
          for (const CC of this.geometries) this.sS.addGeometry(CC);
          for (const CC of this.transformNodes) this.sS.addTransformNode(CC);
          for (const CC of this.textures) this.sS.addTexture(CC)
        }
      }
      dispose() {
        var CC;
        for (const zC of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const CC of zC.slice()) CC.dispose();
          zC.length = 0
        }
        null === (CC = this.release) || void 0 === CC || CC.call(this), this.release = null
      }
    }
    class pz {
      constructor(CC, zC, ZC, QC, wC, bC, nC) {
        this.asset = CC, this.sS = zC, this.tree = ZC, this.geometryData = wC, this.materials = bC, this.lite = nC, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = QC ? ZC : null
      }
      create(CC) {
        if (this.lite) return CC();
        const zC = this.sS;
        zC._blockEntityCollection = !!this.container;
        try {
          const zC = CC();
          return this.container && (zC._parentContainer = this.container), zC
        } finally {
          zC._blockEntityCollection = !1
        }
      }
      node(CC, zC) {
        return this.create((() => this.lite ? zC ? (0, fz.g)(this.lite, CC) : (0, fz.p)(this.lite, CC) : zC ? new((0, kC.b)().Mesh)(CC, this.sS) : new((0, kC.b)().TransformNode)(CC, this.sS)))
      }
      async load() {
        var CC;
        this.asset.model.json.nodes && this.createRoot();
        const zC = this.lite ? null : this.sS,
          ZC = null !== (CC = null === zC || void 0 === zC ? void 0 : zC.blockMaterialDirtyMechanism) && void 0 !== CC && CC;
        let QC;
        zC && (zC.blockMaterialDirtyMechanism = !0);
        try {
          QC = this.loadScene()
        } finally {
          null === zC || void 0 === zC || zC._forceBlockMaterialDirtyMechanism(ZC)
        }
        await QC;
        const {
          root: wC,
          tree: bC
        } = this;
        wC && (wC.IK(!0), bC.meshes.push(wC), bC.rootNodes.push(wC));
        for (const fC of this.asset.model.nodes) {
          const CC = this.nodeObjects.get(fC.index);
          CC && ["TransformNode", "LiteNode"].includes(CC.getClassName()) && bC.transformNodes.push(CC);
          for (const zC of null !== (nC = this.nodePrimitives.get(fC.index)) && void 0 !== nC ? nC : []) {
            var nC;
            bC.meshes.push(zC);
            const CC = zC.geometry;
            CC && !bC.geometries.includes(CC) && bC.geometries.push(CC)
          }
        }
      }
      createRoot() {
        const CC = this.node("__root__", !0);
        this.root = CC, CC.IK(!1), this.sS.useRightHandedSystem || gz(sC, CC)
      }
      loadScene() {
        const CC = [];
        for (const zC of this.asset.model.rootNodes) CC.push(this.loadNode(this.asset.model.nodes[zC], (CC => {
          CC.parent = this.root
        })));
        return CC.push(Promise.resolve()), Promise.all(CC).then((() => {}))
      }
      loadNode(CC, zC) {
        const ZC = `/nodes/${CC.index}`,
          QC = [],
          wC = wC => {
            if (Nz(wC, ZC), gz(CC, wC), CC.hasCamera && !this.sS.useRightHandedSystem) {
              const {
                sq: CC
              } = wC;
              CC.set(-1, CC.y, CC.z)
            }
            for (const zC of CC.children) QC.push(this.loadNode(this.asset.model.nodes[zC], (CC => {
              CC.parent = wC
            })));
            (ZC => {
              Mz(ZC, CC.extras), zC(ZC)
            })(wC)
          };
        if (null === CC.mesh) {
          const zC = this.node(rC(CC), !1);
          this.nodeObjects.set(CC.index, zC), wC(zC)
        } else {
          const zC = this.asset.model.meshes[CC.mesh];
          QC.push(this.loadMesh(`/meshes/${zC.index}`, CC, zC, wC))
        }
        return Promise.all(QC).then((() => {
          for (const ZC of null !== (zC = this.nodePrimitives.get(CC.index)) && void 0 !== zC ? zC : []) {
            var zC;
            Zz(ZC)
          }
          return this.nodeObjects.get(CC.index)
        }))
      }
      loadMesh(CC, zC, ZC, QC) {
        const wC = [],
          bC = rC(zC);
        if (1 === ZC.primitives.length) {
          const QC = ZC.primitives[0];
          wC.push(this.loadPrimitive(`${CC}/primitives/${QC.index}`, bC, QC, (CC => {
            this.nodeObjects.set(zC.index, CC), this.nodePrimitives.set(zC.index, [CC])
          })))
        } else {
          const QC = this.node(bC, !1);
          this.nodeObjects.set(zC.index, QC);
          const nC = [];
          this.nodePrimitives.set(zC.index, nC);
          for (const zC of ZC.primitives) wC.push(this.loadPrimitive(`${CC}/primitives/${zC.index}`, `${bC}_primitive${zC.index}`, zC, (CC => {
            CC.parent = QC, nC.push(CC)
          })))
        }
        const nC = this.nodeObjects.get(zC.index);
        return QC(nC), Promise.all(wC).then((() => nC))
      }
      loadPrimitive(CC, zC, ZC, QC) {
        const wC = [],
          bC = this.node(zC, !0);
        if (bC.sideOrientation = this.sS.useRightHandedSystem ? oz.e.CounterClockWiseSideOrientation : oz.e.ClockWiseSideOrientation, wC.push(this.geometryData.load(CC, ZC, bC).then((CC => {
            if ((0, VC.d)(bC)) {
              var zC, ZC;
              const QC = CC;
              bC.replaceModel(QC, Int32Array.of(0, null !== (zC = null === (ZC = QC.indexData) || void 0 === ZC ? void 0 : ZC.length) && void 0 !== zC ? zC : QC.vertexCount, 0, QC.vertexCount))
            } else this.create((() => (CC.applyToMesh(bC), CC)))
          }))), this.materials) {
          const CC = 0 === ZC.mode ? oz.e.PointListDrawMode : oz.e.TriangleFillMode,
            zC = null === ZC.material ? null : this.asset.model.materials[ZC.material];
          wC.push(this.loadMaterial(zC, CC, (CC => {
            bC.material = CC
          })))
        }
        return Nz(bC, CC), QC(bC), Promise.all(wC).then((() => bC))
      }
      loadMaterial(CC, zC, ZC) {
        var QC;
        const wC = `${null!==(QC=null===CC||void 0===CC?void 0:CC.index)&&void 0!==QC?QC:"default"}:${zC}`;
        let bC = this.materialData.get(wC);
        return bC || (bC = this.createMaterial(CC, zC), this.materialData.set(wC, bC)), ZC(bC.material), bC.promise
      }
      createMaterial(CC, zC) {
        const ZC = CC ? CC.name || `material${CC.index}` : "__GLTFLoader._default",
          {
            style: QC,
            unlit: wC
          } = this.materials;
        let bC;
        const nC = this.create((() => {
          const nC = (0, Wz.d)({
            name: ZC,
            sS: this.sS,
            sets: {
              ...(0, Cz.b)(this.asset, CC, QC, wC),
              fillMode: zC
            },
            unrendered: !0
          });
          return bC = nC.model, nC.mirror
        }));
        let fC = Promise.resolve();
        if (CC) {
          const zC = `/materials/${CC.index}`,
            QC = bC.diffuseTexture;
          if (QC && !QC.mirror) fC = new Promise((CC => setTimeout(CC)));
          else if (QC) {
            const wC = QC.mirror;
            wC._parentContainer = this.container, wC.name = `${ZC} (Base Color)`, Nz(wC, `${zC}${CC.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(wC), fC = (0, qz.y)(QC)
          }
          Mz(nC, CC.extras), Nz(nC, zC)
        }
        return this.tree.materials.push(nC), {
          material: nC,
          promise: fC
        }
      }
    }

    function Pz() {
      bz.i.dracoDecodes = SC.decodes, bz.i.dracoWorkersStarted = SC.workersStarted, bz.i.dracoMostWorkers = SC.mostWorkers
    }
    async function Gz(CC, zC, ZC, wC, bC) {
      try {
        return await async function(CC, zC, ZC, wC, bC, nC) {
          var fC;
          let oC;
          const qC = null === (fC = (0, Fz.e)()) || void 0 === fC ? void 0 : fC.Vg,
            FC = null !== qC && void 0 !== qC && qC.CS && zC === qC.Km() ? qC : null,
            WC = bC && !FC;
          return await OC(CC, zC, ZC, wC, QC.b, (CC => (oC = new Sz(zC, WC), new pz(CC, zC, oC, WC, new Qz(zC, wC), nC, FC).load())), !bC), oC
        }(CC, zC, ZC, xC, wC, bC)
      } finally {
        Pz()
      }
    }
    async function Rz(CC, zC, ZC, wC) {
      try {
        return await OC(CC, zC, ZC, xC, QC.b, (CC => wC(CC, new Qz(zC, xC))))
      } finally {
        Pz()
      }
    }
    wz = wC.d, FC || (FC = {
      scriptUrl: new URL(wz.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(wz.wasmBinaryUrl, location.href).href
    })
  },
  41298: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC
    });
    var QC = ZC(113),
      wC = ZC(1032);

    function bC(CC) {
      return (0, QC.e)() ? `https://${wC.c.discordDomain}/${CC.href}` : CC.href
    }
    const nC = {
      scriptUrl: bC(new ZC.U(ZC(41302))),
      wasmBinaryUrl: bC(new ZC.U(ZC(41310)))
    }
  },
  36162: CC => {
    CC.exports = function(CC, zC, ZC, QC) {
      var wC = self || window;
      try {
        try {
          var bC;
          try {
            bC = new wC.Blob([CC])
          } catch (qC) {
            (bC = new(wC.BlobBuilder || wC.WebKitBlobBuilder || wC.MozBlobBuilder || wC.MSBlobBuilder)).append(CC), bC = bC.getBlob()
          }
          var nC = wC.URL || wC.webkitURL,
            fC = nC.createObjectURL(bC),
            oC = new wC[zC](fC, ZC);
          return nC.revokeObjectURL(fC), oC
        } catch (qC) {
          return new wC[zC]("data:application/javascript,".concat(encodeURIComponent(CC)), ZC)
        }
      } catch (qC) {
        if (!QC) throw Error("Inline worker is not supported");
        return new wC[zC](QC, ZC)
      }
    }
  },
  41310: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  41302: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);