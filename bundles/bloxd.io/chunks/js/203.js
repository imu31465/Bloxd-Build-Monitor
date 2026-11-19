export const id = 203;
export const ids = [203];
export const modules = {
  40545: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      loadGlbAsset: () => gC,
      loadGlbTree: () => NC
    });
    var ID = cD(37290),
      pD = cD(40554),
      iD = cD(35708),
      fD = cD.n(iD);

    function bD() {
      return fD()('(()=>{class DD extends Error{}function CD(CD,cD){const ID=CD._malloc(cD);if(0===ID)throw new DD(`Draco: the decoder\'s heap refused ${cD} bytes`);return ID}function cD(DD){return{[DD.DT_FLOAT32]:[Float32Array,5126],[DD.DT_INT8]:[Int8Array,5120],[DD.DT_INT16]:[Int16Array,5122],[DD.DT_INT32]:[Int32Array,5124],[DD.DT_UINT8]:[Uint8Array,5121],[DD.DT_UINT16]:[Uint16Array,5123],[DD.DT_UINT32]:[Uint32Array,5125]}}function ID(CD,ID,pD,iD,fD){let bD=null,QD=null,wD=null;try{bD=new CD.Decoder,QD=new CD.DecoderBuffer,QD.Init(ID,ID.byteLength);let SD=0;const BD=bD.GetEncodedGeometryType(QD);if(BD===CD.TRIANGULAR_MESH){const cD=new CD.Mesh;wD=cD;const ID=bD.DecodeBufferToMesh(QD,cD);if(!ID.ok()||0===cD.ptr)throw new DD(ID.error_msg());SD=3*cD.num_faces()}else{if(BD!==CD.POINT_CLOUD)throw new DD(`Draco: Cannot decode invalid geometry type ${BD}`);{const cD=new CD.PointCloud;wD=cD;const ID=bD.DecodeBufferToPointCloud(QD,cD);if(!ID.ok()||!cD.ptr)throw new DD(ID.error_msg())}}const yD=wD.num_points();if(yD!==iD.vertices||SD!==iD.indices)throw new DD(`Draco: decoded ${yD} vertices and ${SD} indices, the accessors declare ${iD.vertices} and ${iD.indices}`);const MD=cD(CD),tD=[];for(const{kind:CD,id:cD,components:ID}of pD){const pD=bD.GetAttributeByUniqueId(wD,cD);if(!pD||0===pD.ptr)throw new DD(`Draco: no attribute with id ${cD} (${CD})`);const iD=pD.data_type();if(!MD[iD])throw new DD(`Draco: Cannot decode invalid data type ${iD}`);if(pD.num_components()!==ID)throw new DD(`Draco: ${CD} decodes to ${pD.num_components()} components, its accessor declares ${ID}`);tD.push([CD,pD,iD])}return fD({dracoDecoder:bD,geometry:wD,triangles:BD===CD.TRIANGULAR_MESH,numPoints:yD,numIndices:SD,attributes:tD})}finally{wD&&CD.destroy(wD),QD&&CD.destroy(QD),bD&&CD.destroy(bD)}}const pD=self;let iD=null;self.onmessage=DD=>{let{data:fD}=DD;if("init"===fD.id){try{importScripts(fD.url),iD=DracoDecoderModule({wasmBinary:fD.wasmBinary}),pD.postMessage({id:"initDone"})}catch(BD){pD.postMessage({id:"initError",message:BD instanceof Error?BD.message:String(BD)})}return}const{seq:bD,data:QD,attributeIds:wD,expected:SD}=fD;iD?iD.then((DD=>{try{const iD=function(DD,pD,iD,fD){const bD=Object.keys(iD).map((DD=>({kind:DD,id:iD[DD],components:fD.components[DD]})));return ID(DD,pD,bD,fD,(ID=>{let{dracoDecoder:pD,geometry:iD,triangles:fD,numPoints:bD,numIndices:QD,attributes:wD}=ID;const SD=cD(DD);let BD=null;if(fD){const cD=4*QD,ID=CD(DD,cD);try{pD.GetTrianglesUInt32Array(iD,cD,ID),BD=new Uint32Array(QD),BD.set(new Uint32Array(DD.HEAPF32.buffer,ID,QD))}finally{DD._free(ID)}}const yD=[];for(const[cD,MD,tD]of wD){const[ID]=SD[tD],fD=MD.num_components(),QD=bD*fD,wD=QD*ID.BYTES_PER_ELEMENT,BD=CD(DD,wD);try{pD.GetAttributeDataArrayForAllPoints(iD,MD,tD,wD,BD),yD.push({kind:cD,data:new ID(DD.HEAPF32.buffer,BD,QD).slice(),size:fD,byteOffset:MD.byte_offset(),byteStride:MD.byte_stride(),normalized:MD.normalized()})}finally{DD._free(BD)}}return{indices:BD,attributes:yD,totalVertices:bD}}))}(DD,QD,wD,SD),fD=iD.attributes.map((DD=>DD.data.buffer));iD.indices&&fD.push(iD.indices.buffer),pD.postMessage({id:"decoded",seq:bD,...iD},fD)}catch(BD){pD.postMessage({id:"decodeError",seq:bD,message:BD instanceof Error?BD.message:String(BD)})}}),(DD=>{pD.postMessage({id:"decodeError",seq:bD,message:DD instanceof Error?DD.message:String(DD)})})):pD.postMessage({id:"decodeError",seq:bD,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, cD.p + "dracoDecode.worker.7779d263.worker.js")
    }
    var QD = cD(90);
    const wD = 1e3;
    let SD = null,
      BD = null;
    const yD = [],
      MD = [];
    let tD = 0;
    const ZD = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      oD = function(DD, CD) {
        const cD = DD ? Math.max(1, Math.min(Math.floor(.5 * DD), 4)) : 1;
        return CD ? Math.min(cD, 2) : cD
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, QD.isMobile)());

    function vD() {
      if (!SD) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: DD,
        wasmBinaryUrl: CD
      } = SD;
      return BD ??= fetch(CD).then((DD => {
        if (!DD.ok) throw new Error(`Draco: fetching ${CD} failed: ${DD.status}`);
        return DD.arrayBuffer()
      })), BD.catch((() => {
        BD = null
      })), ZD.workersStarted++, BD.then((CD => new Promise(((cD, ID) => {
        const pD = new bD;
        pD.onerror = DD => {
          pD.onmessage = null, pD.onerror = null, pD.terminate(), ID(new Error("Draco: the decode worker failed to start" + (DD.message ? `: ${DD.message}` : " (its script did not load)")))
        }, pD.onmessage = DD => {
          let {
            data: CD
          } = DD;
          pD.onmessage = null, pD.onerror = null, "initDone" === CD.id ? cD(pD) : (pD.terminate(), ID(new Error(`Draco: ${"initError"===CD.id?CD.message:"the worker did not start"}`)))
        };
        const iD = CD.slice(0),
          fD = {
            id: "init",
            url: DD,
            wasmBinary: iD
          };
        pD.postMessage(fD, [iD])
      }))))
    }

    function ND(DD) {
      const CD = yD.indexOf(DD); - 1 !== CD && yD.splice(CD, 1);
      const cD = MD.shift();
      cD && XD(cD)
    }

    function gD(DD, CD) {
      DD.busy = !0, DD.releaseTimer && (clearTimeout(DD.releaseTimer), DD.releaseTimer = null);
      DD.worker.then((cD => {
        const ID = tD++;
        cD.onmessage = pD => {
          let {
            data: iD
          } = pD;
          if (("decoded" === iD.id || "decodeError" === iD.id) && iD.seq === ID) {
            if (cD.onmessage = null, cD.onerror = null, "decoded" === iD.id) return ZD.decodes++, CD.resolve({
              indices: iD.indices,
              attributes: iD.attributes,
              totalVertices: iD.totalVertices
            }), void(() => {
              const CD = MD.shift();
              CD ? gD(DD, CD) : (DD.busy = !1, DD.releaseTimer = setTimeout((() => {
                const CD = yD.indexOf(DD); - 1 !== CD && yD.splice(CD, 1), DD.worker.then((DD => {
                  DD.terminate()
                }))
              }), wD))
            })();
            cD.terminate(), CD.reject(new Error(iD.message)), ND(DD)
          }
        }, cD.onerror = ID => {
          cD.onmessage = null, cD.onerror = null, cD.terminate(), CD.reject(new Error(`Draco: the decode worker failed: ${ID.message}`)), ND(DD)
        };
        const pD = {
          id: "decode",
          seq: ID,
          data: CD.data,
          attributeIds: CD.attributeIds,
          expected: CD.expected
        };
        cD.postMessage(pD, [CD.data.buffer])
      }), (cD => {
        CD.reject(cD instanceof Error ? cD : new Error(String(cD))), ND(DD)
      }))
    }

    function XD(DD) {
      const CD = yD.find((DD => !DD.busy));
      if (CD) gD(CD, DD);
      else {
        if (yD.length < oD) {
          const CD = {
            worker: vD(),
            busy: !0,
            releaseTimer: null
          };
          return yD.push(CD), ZD.mostWorkers = Math.max(ZD.mostWorkers, yD.length), void gD(CD, DD)
        }
        MD.push(DD)
      }
    }

    function mD(DD, CD, cD) {
      return new Promise(((ID, pD) => {
        XD({
          data: new Int8Array(DD.buffer, DD.byteOffset, DD.byteLength).slice(),
          attributeIds: CD,
          expected: cD,
          resolve: ID,
          reject: pD
        })
      }))
    }
    var nD = cD(36838),
      OD = cD(36845),
      PD = cD(9125),
      HD = cD(9116);
    const UD = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function xD(DD) {
      const CD = (0, HD.h)(DD.byteLength);
      if (CD) throw new PD.q(CD);
      const {
        json: cD,
        bin: ID
      } = (0, PD.x)(DD), pD = (0, HD.f)(cD, ID);
      if (pD) throw new PD.q(pD);
      try {
        return function(DD, CD) {
          var cD, ID, pD, iD, fD, bD, QD, wD, SD, BD, yD, MD, tD, ZD, oD;
          const vD = new Map,
            ND = cD => {
              let ID = vD.get(cD);
              if (!ID) {
                var pD;
                const iD = DD.bufferViews[cD],
                  fD = null !== (pD = iD.byteOffset) && void 0 !== pD ? pD : 0;
                ID = {
                  index: cD,
                  bytes: CD.subarray(fD, fD + iD.byteLength),
                  byteStride: iD.byteStride
                }, vD.set(cD, ID)
              }
              return ID
            },
            gD = new Map,
            XD = CD => {
              let cD = gD.get(CD);
              if (!cD) {
                var ID;
                const pD = DD.accessors[CD];
                cD = {
                  index: CD,
                  count: pD.count,
                  type: pD.type,
                  numComponents: PD.r[pD.type],
                  componentType: pD.componentType,
                  normalized: null !== (ID = pD.normalized) && void 0 !== ID && ID,
                  byteOffset: pD.byteOffset,
                  bufferView: void 0 === pD.bufferView ? null : ND(pD.bufferView),
                  min: pD.min,
                  max: pD.max
                }, gD.set(CD, cD)
              }
              return cD
            },
            mD = null !== (cD = null === (ID = DD.extensionsUsed) || void 0 === ID ? void 0 : ID.includes("KHR_draco_mesh_compression")) && void 0 !== cD && cD,
            nD = (null !== (pD = DD.meshes) && void 0 !== pD ? pD : []).map(((CD, cD) => {
              const ID = CD.primitives.map(((CD, cD) => {
                var ID, pD, iD;
                const fD = mD ? null === (ID = CD.extensions) || void 0 === ID ? void 0 : ID.KHR_draco_mesh_compression : void 0;
                let bD = null;
                const QD = [];
                if (fD) {
                  const cD = {
                    vertices: DD.accessors[CD.attributes.POSITION].count,
                    indices: void 0 === CD.indices ? 0 : DD.accessors[CD.indices].count,
                    components: {}
                  };
                  bD = {
                    bufferView: ND(fD.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: cD
                  };
                  for (const [ID, pD] of PD.i) {
                    const iD = fD.attributes[ID];
                    if (void 0 === iD) continue;
                    bD.attributeIds[pD] = iD;
                    const QD = CD.attributes[ID];
                    var wD;
                    if (void 0 !== QD) bD.normalized[pD] = null !== (wD = DD.accessors[QD].normalized) && void 0 !== wD && wD, cD.components[pD] = PD.r[DD.accessors[QD].type]
                  }
                } else
                  for (const [DD, SD] of PD.i) {
                    const cD = CD.attributes[DD];
                    void 0 !== cD && QD.push({
                      semantic: DD,
                      kind: SD,
                      accessor: XD(cD)
                    })
                  }
                return {
                  index: cD,
                  mode: null !== (pD = CD.mode) && void 0 !== pD ? pD : 4,
                  attributes: QD,
                  indices: fD || void 0 === CD.indices ? null : XD(CD.indices),
                  position: void 0 === CD.attributes.POSITION ? null : XD(CD.attributes.POSITION),
                  material: null !== (iD = CD.material) && void 0 !== iD ? iD : null,
                  draco: bD
                }
              }));
              return {
                index: cD,
                name: CD.name,
                primitives: ID,
                extras: CD.extras
              }
            })),
            OD = (null !== (iD = DD.nodes) && void 0 !== iD ? iD : []).map(((DD, CD) => {
              var cD, ID;
              return {
                index: CD,
                name: DD.name,
                children: null !== (cD = DD.children) && void 0 !== cD ? cD : [],
                mesh: null !== (ID = DD.mesh) && void 0 !== ID ? ID : null,
                translation: DD.translation,
                rotation: DD.rotation,
                scale: DD.scale,
                hasCamera: void 0 !== DD.camera,
                extras: DD.extras
              }
            })),
            HD = null !== (fD = null === (bD = DD.extensionsUsed) || void 0 === bD ? void 0 : bD.includes("KHR_materials_unlit")) && void 0 !== fD && fD,
            xD = null !== (QD = null === (wD = DD.extensionsUsed) || void 0 === wD ? void 0 : wD.includes("KHR_texture_transform")) && void 0 !== QD && QD,
            qD = (null !== (SD = DD.materials) && void 0 !== SD ? SD : []).map(((DD, CD) => {
              var cD, ID, pD, iD;
              const fD = DD.pbrMetallicRoughness,
                bD = null === fD || void 0 === fD ? void 0 : fD.baseColorTexture;
              return {
                index: CD,
                name: DD.name,
                extras: DD.extras,
                unlit: HD && void 0 !== (null === (cD = DD.extensions) || void 0 === cD ? void 0 : cD.KHR_materials_unlit),
                pbr: fD ? {
                  baseColorFactor: fD.baseColorFactor,
                  metallicFactor: fD.metallicFactor,
                  roughnessFactor: fD.roughnessFactor
                } : null,
                baseColorTexture: bD ? {
                  texture: bD.index,
                  transform: xD && (null === (ID = bD.extensions) || void 0 === ID ? void 0 : ID.KHR_texture_transform) || null
                } : null,
                emissiveFactor: DD.emissiveFactor,
                alphaMode: null !== (pD = DD.alphaMode) && void 0 !== pD ? pD : "OPAQUE",
                alphaCutoff: DD.alphaCutoff,
                doubleSided: null !== (iD = DD.doubleSided) && void 0 !== iD && iD
              }
            })),
            JD = (null !== (BD = DD.textures) && void 0 !== BD ? BD : []).map(((CD, cD) => {
              var ID, pD;
              const iD = void 0 === CD.sampler ? UD : {
                index: CD.sampler,
                ...null === (ID = DD.samplers) || void 0 === ID ? void 0 : ID[CD.sampler]
              };
              return {
                index: cD,
                sampler: {
                  index: iD.index,
                  magFilter: iD.magFilter,
                  minFilter: iD.minFilter,
                  wrapS: iD.wrapS,
                  wrapT: iD.wrapT
                },
                image: null !== (pD = CD.source) && void 0 !== pD ? pD : -1
              }
            })),
            KD = (null !== (yD = DD.images) && void 0 !== yD ? yD : []).map(((DD, CD) => ({
              index: CD,
              name: DD.name,
              mimeType: DD.mimeType,
              bufferView: ND(DD.bufferView)
            }))),
            aD = null !== (MD = (0, PD.v)(DD)) && void 0 !== MD ? MD : 0;
          return {
            json: DD,
            rootNodes: null !== (tD = null === (ZD = DD.scenes) || void 0 === ZD || null === (oD = ZD[aD]) || void 0 === oD ? void 0 : oD.nodes) && void 0 !== tD ? tD : [],
            nodes: OD,
            meshes: nD,
            materials: qD,
            textures: JD,
            images: KD
          }
        }(cD, ID)
      } catch (iD) {
        throw iD instanceof PD.m ? iD : new PD.m(`reading the GLB failed: ${iD instanceof Error?iD.message:String(iD)}`)
      }
    }
    async function qD(DD, CD) {
      var cD, ID;
      const pD = DD.draco;
      if (!pD) throw new PD.m("not a Draco primitive");
      let iD;
      try {
        iD = await CD(pD.bufferView.bytes, pD.attributeIds, pD.expected)
      } catch (wD) {
        throw new PD.m(`Draco decoding failed: ${wD instanceof Error?wD.message:String(wD)}`)
      }
      const {
        vertices: fD,
        indices: bD,
        components: QD
      } = pD.expected;
      if (iD.totalVertices !== fD || (null !== (cD = null === (ID = iD.indices) || void 0 === ID ? void 0 : ID.length) && void 0 !== cD ? cD : 0) !== bD || iD.attributes.some((DD => DD.size !== QD[DD.kind] || DD.data.length !== fD * DD.size))) throw new PD.m("Draco decoding gave other counts than the accessors declare");
      for (const SD of iD.attributes) {
        const DD = pD.normalized[SD.kind];
        void 0 !== DD && (SD.normalized = DD)
      }
      return iD
    }
    const JD = new WeakMap;

    function KD(DD, CD) {
      var cD;
      const ID = null !== (cD = JD.get(DD)) && void 0 !== cD ? cD : CD(DD);
      return JD.set(DD, ID), ID
    }

    function aD(DD) {
      const CD = DD.bufferView,
        cD = 5125 === DD.componentType ? Uint32Array : Uint16Array,
        ID = CD.bytes.buffer,
        pD = CD.bytes.byteOffset + (DD.byteOffset || 0);
      return pD % cD.BYTES_PER_ELEMENT !== 0 ? new cD(ID.slice(pD, pD + DD.count * cD.BYTES_PER_ELEMENT), 0) : new cD(ID, pD, DD.count)
    }

    function VD(DD, CD) {
      if (DD.min && DD.max) return [new Float64Array(DD.min), new Float64Array(DD.max)];
      const cD = CD.find((DD => {
          let {
            kind: CD
          } = DD;
          return "position" === CD
        })),
        ID = cD ? (0, OD.i)(cD, DD.count) : new Float32Array(0);
      return (0, OD.q)(ID.length / 3, ((DD, CD) => ID[3 * DD + CD]))
    }

    function zD(DD) {
      const CD = DD.attributes.map((DD => {
          var CD, cD;
          let {
            kind: ID,
            accessor: pD
          } = DD;
          const {
            bufferView: iD,
            numComponents: fD
          } = pD;
          if (!iD) {
            return {
              kind: ID,
              data: KD(pD, (() => new Float32Array(fD * pD.count))),
              offset: 0,
              stride: 4 * fD,
              components: fD,
              glType: 5126,
              isNormalized: !1
            }
          }
          const bD = null !== (CD = iD.byteStride) && void 0 !== CD ? CD : fD * PD.b[pD.componentType];
          return {
            kind: ID,
            data: iD.bytes,
            offset: null !== (cD = pD.byteOffset) && void 0 !== cD ? cD : 0,
            stride: bD,
            components: fD,
            glType: pD.componentType,
            isNormalized: pD.normalized
          }
        })),
        cD = DD.indices,
        ID = cD && KD(cD, aD),
        pD = DD.position;
      return new OD.f(CD, ID, pD.count, ...VD(pD, CD))
    }
    const jD = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function lD(DD, CD) {
      const cD = CD.attributes.map((DD => {
        let {
          kind: CD,
          data: cD,
          size: ID,
          byteOffset: pD,
          byteStride: iD,
          normalized: fD
        } = DD;
        return {
          kind: CD,
          data: cD,
          offset: pD,
          stride: iD,
          components: ID,
          glType: 5120 + jD.indexOf(cD.constructor),
          isNormalized: fD
        }
      }));
      return new OD.f(cD, CD.indices, CD.totalVertices, ...VD(DD.position, cD))
    }

    function LD(DD) {
      const CD = DD.lastIndexOf("/");
      return CD < 0 ? DD : DD.substring(CD + 1)
    }

    function TD(DD) {
      const CD = DD.lastIndexOf("/");
      return CD < 0 ? "" : DD.substring(0, CD + 1)
    }

    function GD(DD) {
      return DD.name || `node${DD.index}`
    }
    const RD = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      kD = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      dD = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function YD(DD) {
      var CD, cD, ID, pD;
      const iD = null !== (CD = DD.minFilter) && void 0 !== CD ? CD : 9987;
      return 9729 === (null !== (cD = DD.magFilter) && void 0 !== cD ? cD : 9729) ? null !== (ID = kD[iD]) && void 0 !== ID ? ID : 3 : null !== (pD = dD[iD]) && void 0 !== pD ? pD : 4
    }
    const WD = {
      33071: 0,
      33648: 2
    };

    function sD(DD) {
      var CD;
      return null !== (CD = WD[null !== DD && void 0 !== DD ? DD : 10497]) && void 0 !== CD ? CD : 1
    }

    function ED(DD) {
      return 9728 === DD.minFilter || 9729 === DD.minFilter
    }

    function eD(DD) {
      var CD, cD, ID;
      const pD = Float64Array.from(null !== (CD = DD.scale) && void 0 !== CD ? CD : [1, 1, 1]);
      return DD.hasCamera && (pD[0] = -1), {
        translation: Float64Array.from(null !== (cD = DD.translation) && void 0 !== cD ? cD : [0, 0, 0]),
        rotation: Float64Array.from(null !== (ID = DD.rotation) && void 0 !== ID ? ID : [0, 0, 0, 1]),
        scale: pD
      }
    }

    function uD(DD, CD) {
      let {
        translation: cD,
        rotation: ID,
        scale: pD
      } = DD;
      const iD = new Float32Array(16);
      return (0, nD.d)(pD, 0, ID, 0, cD, 0, iD), CD && (0, nD.p)(iD, CD, 0, iD), iD
    }
    class hD {
      constructor(DD, CD, cD, ID) {
        this.model = DD, this.decode = CD, this.fileInfo = cD, this.uniqueRootUrl = ID, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const pD = new Set,
          iD = (CD, cD) => {
            const ID = DD.nodes[CD];
            if (this.parents.has(ID)) throw new PD.m(`/nodes/${CD}: Invalid recursive node hierarchy`);
            this.parents.set(ID, cD);
            const fD = null === ID.mesh ? [] : DD.meshes[ID.mesh].primitives,
              bD = fD.map((DD => {
                const CD = fD.length > 1;
                return {
                  name: CD ? `${GD(ID)}_primitive${DD.index}` : GD(ID),
                  node: ID,
                  primitive: DD,
                  part: CD,
                  geometry: null
                }
              }));
            this.uses.set(ID, bD);
            const QD = null !== ID.mesh && pD.has(ID.mesh);
            pD.add(ID.mesh), this.own.set(ID, QD ? [] : bD);
            for (const DD of ID.children) iD(DD, ID)
          };
        for (const fD of DD.rootNodes) iD(fD, null);
        this.primitives = DD.nodes.flatMap((DD => {
          var CD;
          return null !== (CD = this.own.get(DD)) && void 0 !== CD ? CD : []
        }))
      }
      decodeGeometries() {
        const DD = new Map;
        return Promise.all(this.primitives.map((async CD => {
          const {
            primitive: cD
          } = CD, ID = cD.draco;
          let pD = ID ? DD.get(ID.bufferView.index) : Promise.resolve(zD(cD));
          pD || (pD = qD(cD, this.decode).then((DD => lD(cD, DD))), DD.set(ID.bufferView.index, pD)), CD.geometry = await pD
        })))
      }
      parentOf(DD) {
        var CD;
        return null !== (CD = this.parents.get(DD)) && void 0 !== CD ? CD : null
      }
      meshesUnder(DD) {
        const CD = this.model.nodes.filter((DD => this.uses.has(DD)));
        for (const ID of CD) {
          const CD = this.uses.get(ID),
            cD = CD.find((CD => CD.name === DD));
          if (cD) return 1 === CD.length ? this.subtree(ID) : this.own.get(ID).includes(cD) ? [cD] : []
        }
        const cD = CD.find((CD => 1 !== this.uses.get(CD).length && GD(CD) === DD));
        return cD ? this.subtree(cD) : null
      }
      subtree(DD) {
        return [...this.own.get(DD), ...DD.children.flatMap((DD => this.subtree(this.model.nodes[DD])))]
      }
      worldMatrix(DD, CD, cD) {
        let ID = uD(eD(CD ? RD : {}), null);
        const pD = [];
        for (let fD = DD.part ? DD.node : this.parentOf(DD.node); fD; fD = this.parentOf(fD)) pD.unshift(fD);
        for (const fD of pD) ID = uD(eD(fD), ID);
        const iD = eD(DD.part ? {} : DD.node);
        return void 0 !== cD && iD.scale.fill(cD), uD(iD, ID)
      }
      floats(DD) {
        const {
          vertexAttributes: CD,
          vertexCount: cD
        } = DD.geometry;
        return new Map(CD.map((DD => [DD.kind, (0, OD.i)(DD, cD)])))
      }
      imageUrl(DD) {
        return function(DD, CD, cD) {
          let {
            name: ID
          } = CD;
          return `data:${DD}${ID}#image${cD}`
        }(this.uniqueRootUrl, this.fileInfo, DD)
      }
      textureDesc(DD, CD) {
        var cD;
        let {
          texture: ID,
          transform: pD
        } = DD;
        const {
          sampler: iD,
          image: fD
        } = this.model.textures[ID], {
          bufferView: bD,
          mimeType: QD,
          name: wD
        } = this.model.images[fD], SD = pD && {
          ...pD.offset ? {
            uOffset: pD.offset[0],
            vOffset: pD.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...pD.rotation ? {
            wAng: -pD.rotation
          } : {},
          ...pD.scale ? {
            uScale: pD.scale[0],
            vScale: pD.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(fD),
          noMipmap: ED(iD),
          invertY: !1,
          samplingMode: YD(iD),
          data: {
            bytes: bD.bytes,
            mimeType: QD,
            label: wD,
            context: `/textures/${ID}`
          },
          sets: {
            wrapU: sD(iD.wrapS),
            wrapV: sD(iD.wrapT),
            ...SD,
            coordinatesIndex: null !== (cD = null === pD || void 0 === pD ? void 0 : pD.texCoord) && void 0 !== cD ? cD : 0,
            hasAlpha: CD
          }
        }
      }
    }
    async function rD(DD, CD, cD, ID, pD, iD) {
      let fD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const bD = function(DD, CD, cD) {
          return "string" !== typeof CD ? {
            url: "",
            rootUrl: DD,
            name: cD()
          } : CD ? CD.startsWith("data:") ? {
            url: CD,
            rootUrl: DD,
            name: ""
          } : DD ? {
            url: DD + CD,
            rootUrl: DD,
            name: CD
          } : {
            url: CD,
            rootUrl: TD(CD),
            name: LD(CD)
          } : {
            url: DD,
            rootUrl: TD(DD),
            name: LD(DD)
          }
        }(cD, DD, pD),
        QD = {};
      CD.addPendingData(QD);
      try {
        const cD = xD(await async function(DD, CD) {
            return "string" !== typeof CD ? CD : DD.url.startsWith("data:") ? (0, PD.t)(DD.url) : await (0, PD.u)(DD.url)
          }(bD, DD)),
          QD = new hD(cD, ID, bD, function(DD, CD) {
            let {
              rootUrl: cD,
              name: ID
            } = DD;
            return !cD.startsWith("file:") && ID ? cD : `${cD}${CD()}/`
          }(bD, pD));
        return await iD(QD), CD.importedMeshesFiles && (CD.loadingPluginName = "Jq", fD && CD.importedMeshesFiles.push(bD.url)), QD
      } finally {
        CD.removePendingData(QD)
      }
    }
    var AD = cD(36969),
      FD = cD(36810),
      DC = cD(37266);

    function CC(DD) {
      if (null === DD || void 0 === DD || !DD.min || !DD.max) return null;
      const [CD, cD, ID] = DD.min, [pD, iD, fD] = DD.max, {
        BoundingInfo: bD,
        cZ: QD
      } = (0, AD.e)();
      return new bD(new QD(CD, cD, ID), new QD(pD, iD, fD))
    }

    function cC(DD) {
      (0, FD.d)(DD) || (DD.geometry && DD.geometry.useBoundingInfoFromGeometry ? DD._updateBoundingInfo() : DD.refreshBoundingInfo(!0, !0))
    }
    class IC {
      constructor(DD, CD) {
        this.wo = DD, this.decode = CD, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(DD) {
        let CD = this.viewData.get(DD.index);
        return CD || (CD = this.bufferData.then((() => DD.bytes)), this.viewData.set(DD.index, CD)), CD
      }
      viewBuffer(DD) {
        let CD = this.viewBuffers.get(DD.index);
        return CD || (CD = this.viewBytes(DD).then((DD => new((0, AD.e)().lt)(this.wo.DZ(), DD, !1))), this.viewBuffers.set(DD.index, CD)), CD
      }
      vertexBuffer(DD, CD) {
        const {
          kind: cD,
          data: ID
        } = CD, pD = `${DD.index}:${cD}`;
        let iD = this.vertexBuffers.get(pD);
        if (!iD) {
          const fD = DD.bufferView;
          iD = fD ? this.viewBuffer(fD).then((DD => this.layoutVertexBuffer(DD, CD))) : Promise.resolve(ID).then((DD => new((0, AD.e)().VertexBuffer)(this.wo.DZ(), DD, cD, !1))), this.vertexBuffers.set(pD, iD)
        }
        return iD
      }
      layoutVertexBuffer(DD, CD) {
        let {
          kind: cD,
          offset: ID,
          stride: pD,
          components: iD,
          glType: fD,
          isNormalized: bD
        } = CD;
        const QD = this.wo.DZ();
        return new((0, AD.e)().VertexBuffer)(QD, DD, cD, !1, void 0, pD, void 0, ID, iD, fD, bD, !0, void 0, !0)
      }
      load(DD, CD, cD) {
        const ID = (0, FD.d)(cD),
          pD = DD => {
            ID || (cD._delayInfo = cD._delayInfo || [], -1 === cD._delayInfo.indexOf(DD) && cD._delayInfo.push(DD))
          },
          iD = CD.draco;
        if (iD) {
          for (const DD in iD.attributeIds) pD(DD);
          let fD = this.dracoGeometry.get(iD.bufferView.index);
          return fD || (fD = this.viewBytes(iD.bufferView).then((async () => {
            let pD;
            try {
              pD = await qD(CD, this.decode)
            } catch (QD) {
              throw new PD.m(`${DD}: ${QD instanceof Error?QD.message:String(QD)}`)
            }
            const iD = lD(CD, pD);
            if (ID) return iD;
            const fD = CC(CD.position),
              bD = new((0, AD.e)().MirroredGeometry)(cD.name, this.wo);
            fD && (bD._boundingInfo = fD, bD.useBoundingInfoFromGeometry = !0), iD.indexData && bD.setIndices(iD.indexData);
            for (const DD of iD.vertexAttributes) bD.setVerticesBuffer(this.layoutVertexBuffer(DD.data, DD), iD.vertexCount);
            return bD.link(iD), bD
          })), this.dracoGeometry.set(iD.bufferView.index, fD)), fD
        }
        const fD = [],
          bD = zD(CD);
        if (ID) return cD.isUnIndexed = !bD.indexData, cD.hasVertexAlpha = (0, DC.e)(CD), Promise.resolve(bD);
        const QD = new((0, AD.e)().MirroredGeometry)(cD.name, this.wo),
          {
            indexData: wD
          } = bD;
        wD ? fD.push(this.viewBytes(CD.indices.bufferView).then((() => {
          QD.setIndices(wD)
        }))) : cD.isUnIndexed = !0;
        for (const [SD, {
            kind: BD,
            accessor: yD
          }] of CD.attributes.entries()) pD(BD), fD.push(this.vertexBuffer(yD, bD.vertexAttributes[SD]).then((DD => {
          if ("position" === DD.getKind()) {
            const DD = CC(yD);
            DD && (QD._boundingInfo = DD, QD.useBoundingInfoFromGeometry = !0)
          }
          QD.setVerticesBuffer(DD, bD.vertexCount)
        })));
        return (0, DC.e)(CD) && (cD.hasVertexAlpha = !0), Promise.all(fD).then((() => (QD.link(bD), QD)))
      }
    }
    var pC, iC = cD(36666),
      fC = cD(36440),
      bC = cD(37282),
      QC = cD(36608),
      wC = cD(36647),
      SC = cD(2642),
      BC = cD(36636);

    function yC(DD, CD) {
      DD.metadata = DD.metadata || {};
      const cD = DD._internalMetadata = DD._internalMetadata || {},
        ID = cD.Jq = cD.Jq || {};
      (ID.pointers = ID.pointers || []).push(CD)
    }

    function MC(DD, CD) {
      if (CD && Object.keys(CD).length > 0) {
        const cD = DD.metadata = DD.metadata || {};
        (cD.Jq = cD.Jq || {}).extras = CD
      }
    }

    function tC(DD, CD) {
      CD.position = DD.translation ? fC.cZ.FromArray(DD.translation) : fC.cZ.Zero(), CD.rotationQuaternion = DD.rotation ? fC.Quaternion.FromArray(DD.rotation) : fC.Quaternion.Identity(), CD.ci = DD.scale ? fC.cZ.FromArray(DD.scale) : fC.cZ.One()
    }
    class ZC {
      constructor(DD, CD) {
        if (this.wo = DD, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, CD) {
          const CD = DD.DZ(),
            cD = DD.Aq.add((() => {
              this.dispose()
            })),
            ID = CD.onContextRestoredObservable.add((() => {
              for (const DD of [...this.geometries, ...this.meshes, ...this.textures]) DD._rebuild()
            }));
          this.release = () => {
            DD.Aq.remove(cD), CD.onContextRestoredObservable.remove(ID)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const DD of this.meshes) this.wo.HcD(DD);
          for (const DD of this.materials) this.wo.addMaterial(DD);
          for (const DD of this.geometries) this.wo.addGeometry(DD);
          for (const DD of this.transformNodes) this.wo.addTransformNode(DD);
          for (const DD of this.textures) this.wo.addTexture(DD)
        }
      }
      dispose() {
        var DD;
        for (const CD of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const DD of CD.slice()) DD.dispose();
          CD.length = 0
        }
        null === (DD = this.release) || void 0 === DD || DD.call(this), this.release = null
      }
    }
    class oC {
      constructor(DD, CD, cD, ID, pD, iD, fD) {
        this.asset = DD, this.wo = CD, this.tree = cD, this.geometryData = pD, this.materials = iD, this.lite = fD, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = ID ? cD : null
      }
      create(DD) {
        if (this.lite) return DD();
        const CD = this.wo;
        CD._blockEntityCollection = !!this.container;
        try {
          const CD = DD();
          return this.container && (CD._parentContainer = this.container), CD
        } finally {
          CD._blockEntityCollection = !1
        }
      }
      node(DD, CD) {
        return this.create((() => this.lite ? CD ? (0, bC.h)(this.lite, DD) : (0, bC.r)(this.lite, DD) : CD ? new((0, AD.e)().Mesh)(DD, this.wo) : new((0, AD.e)().TransformNode)(DD, this.wo)))
      }
      async load() {
        var DD;
        this.asset.model.json.nodes && this.createRoot();
        const CD = this.lite ? null : this.wo,
          cD = null !== (DD = null === CD || void 0 === CD ? void 0 : CD.blockMaterialDirtyMechanism) && void 0 !== DD && DD;
        let ID;
        CD && (CD.blockMaterialDirtyMechanism = !0);
        try {
          ID = this.loadScene()
        } finally {
          null === CD || void 0 === CD || CD._forceBlockMaterialDirtyMechanism(cD)
        }
        await ID;
        const {
          root: pD,
          tree: iD
        } = this;
        pD && (pD.lH(!0), iD.meshes.push(pD), iD.rootNodes.push(pD));
        for (const bD of this.asset.model.nodes) {
          const DD = this.nodeObjects.get(bD.index);
          DD && ["TransformNode", "LiteNode"].includes(DD.getClassName()) && iD.transformNodes.push(DD);
          for (const CD of null !== (fD = this.nodePrimitives.get(bD.index)) && void 0 !== fD ? fD : []) {
            var fD;
            iD.meshes.push(CD);
            const DD = CD.geometry;
            DD && !iD.geometries.includes(DD) && iD.geometries.push(DD)
          }
        }
      }
      createRoot() {
        const DD = this.node("__root__", !0);
        this.root = DD, DD.lH(!1), this.wo.useRightHandedSystem || tC(RD, DD)
      }
      loadScene() {
        const DD = [];
        for (const CD of this.asset.model.rootNodes) DD.push(this.loadNode(this.asset.model.nodes[CD], (DD => {
          DD.parent = this.root
        })));
        return DD.push(Promise.resolve()), Promise.all(DD).then((() => {}))
      }
      loadNode(DD, CD) {
        const cD = `/nodes/${DD.index}`,
          ID = [],
          pD = pD => {
            if (yC(pD, cD), tC(DD, pD), DD.hasCamera && !this.wo.useRightHandedSystem) {
              const {
                ci: DD
              } = pD;
              DD.set(-1, DD.y, DD.z)
            }
            for (const CD of DD.children) ID.push(this.loadNode(this.asset.model.nodes[CD], (DD => {
              DD.parent = pD
            })));
            (cD => {
              MC(cD, DD.extras), CD(cD)
            })(pD)
          };
        if (null === DD.mesh) {
          const CD = this.node(GD(DD), !1);
          this.nodeObjects.set(DD.index, CD), pD(CD)
        } else {
          const CD = this.asset.model.meshes[DD.mesh];
          ID.push(this.loadMesh(`/meshes/${CD.index}`, DD, CD, pD))
        }
        return Promise.all(ID).then((() => {
          for (const cD of null !== (CD = this.nodePrimitives.get(DD.index)) && void 0 !== CD ? CD : []) {
            var CD;
            cC(cD)
          }
          return this.nodeObjects.get(DD.index)
        }))
      }
      loadMesh(DD, CD, cD, ID) {
        const pD = [],
          iD = GD(CD);
        if (1 === cD.primitives.length) {
          const ID = cD.primitives[0];
          pD.push(this.loadPrimitive(`${DD}/primitives/${ID.index}`, iD, ID, (DD => {
            this.nodeObjects.set(CD.index, DD), this.nodePrimitives.set(CD.index, [DD])
          })))
        } else {
          const ID = this.node(iD, !1);
          this.nodeObjects.set(CD.index, ID);
          const fD = [];
          this.nodePrimitives.set(CD.index, fD);
          for (const CD of cD.primitives) pD.push(this.loadPrimitive(`${DD}/primitives/${CD.index}`, `${iD}_primitive${CD.index}`, CD, (DD => {
            DD.parent = ID, fD.push(DD)
          })))
        }
        const fD = this.nodeObjects.get(CD.index);
        return ID(fD), Promise.all(pD).then((() => fD))
      }
      loadPrimitive(DD, CD, cD, ID) {
        const pD = [],
          iD = this.node(CD, !0);
        if (iD.sideOrientation = this.wo.useRightHandedSystem ? QC.d.CounterClockWiseSideOrientation : QC.d.ClockWiseSideOrientation, pD.push(this.geometryData.load(DD, cD, iD).then((DD => {
            if ((0, FD.d)(iD)) {
              var CD, cD;
              const ID = DD;
              iD.replaceModel(ID, Int32Array.of(0, null !== (CD = null === (cD = ID.indexData) || void 0 === cD ? void 0 : cD.length) && void 0 !== CD ? CD : ID.vertexCount, 0, ID.vertexCount))
            } else this.create((() => (DD.applyToMesh(iD), DD)))
          }))), this.materials) {
          const DD = 0 === cD.mode ? QC.d.PointListDrawMode : QC.d.TriangleFillMode,
            CD = null === cD.material ? null : this.asset.model.materials[cD.material];
          pD.push(this.loadMaterial(CD, DD, (DD => {
            iD.material = DD
          })))
        }
        return yC(iD, DD), ID(iD), Promise.all(pD).then((() => iD))
      }
      loadMaterial(DD, CD, cD) {
        var ID;
        const pD = `${null!==(ID=null===DD||void 0===DD?void 0:DD.index)&&void 0!==ID?ID:"default"}:${CD}`;
        let iD = this.materialData.get(pD);
        return iD || (iD = this.createMaterial(DD, CD), this.materialData.set(pD, iD)), cD(iD.material), iD.promise
      }
      createMaterial(DD, CD) {
        const cD = DD ? DD.name || `material${DD.index}` : "__GLTFLoader._default",
          {
            style: ID,
            unlit: pD
          } = this.materials;
        let iD;
        const fD = this.create((() => {
          const fD = (0, BC.d)({
            name: cD,
            wo: this.wo,
            sets: {
              ...(0, DC.b)(this.asset, DD, ID, pD),
              fillMode: CD
            },
            unrendered: !0
          });
          return iD = fD.model, fD.mirror
        }));
        let bD = Promise.resolve();
        if (DD) {
          const CD = `/materials/${DD.index}`,
            ID = iD.diffuseTexture;
          if (ID && !ID.mirror) bD = new Promise((DD => setTimeout(DD)));
          else if (ID) {
            const pD = ID.mirror;
            pD._parentContainer = this.container, pD.name = `${cD} (Base Color)`, yC(pD, `${CD}${DD.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(pD), bD = (0, wC.w)(ID)
          }
          MC(fD, DD.extras), yC(fD, CD)
        }
        return this.tree.materials.push(fD), {
          material: fD,
          promise: bD
        }
      }
    }

    function vC() {
      iC.d.dracoDecodes = ZD.decodes, iC.d.dracoWorkersStarted = ZD.workersStarted, iC.d.dracoMostWorkers = ZD.mostWorkers
    }
    async function NC(DD, CD, cD, pD, iD) {
      try {
        return await async function(DD, CD, cD, pD, iD, fD) {
          var bD;
          let QD;
          const wD = null === (bD = (0, SC.i)()) || void 0 === bD ? void 0 : bD.XZ,
            SD = null !== wD && void 0 !== wD && wD.mZ && CD === wD.hq() ? wD : null,
            BD = iD && !SD;
          return await rD(DD, CD, cD, pD, ID.d, (DD => (QD = new ZC(CD, BD), new oC(DD, CD, QD, BD, new IC(CD, pD), fD, SD).load())), !iD), QD
        }(DD, CD, cD, mD, pD, iD)
      } finally {
        vC()
      }
    }
    async function gC(DD, CD, cD, pD) {
      try {
        return await rD(DD, CD, cD, mD, ID.d, (DD => pD(DD, new IC(CD, mD))))
      } finally {
        vC()
      }
    }
    pC = pD.d, SD || (SD = {
      scriptUrl: new URL(pC.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(pC.wasmBinaryUrl, location.href).href
    })
  },
  40554: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD
    });
    var ID = cD(120),
      pD = cD(1202);

    function iD(DD) {
      return (0, ID.c)() ? `https://${pD.d.discordDomain}/${DD.href}` : DD.href
    }
    const fD = {
      scriptUrl: iD(new cD.U(cD(40557))),
      wasmBinaryUrl: iD(new cD.U(cD(40564)))
    }
  },
  35708: DD => {
    DD.exports = function(DD, CD, cD, ID) {
      var pD = self || window;
      try {
        try {
          var iD;
          try {
            iD = new pD.Blob([DD])
          } catch (wD) {
            (iD = new(pD.BlobBuilder || pD.WebKitBlobBuilder || pD.MozBlobBuilder || pD.MSBlobBuilder)).append(DD), iD = iD.getBlob()
          }
          var fD = pD.URL || pD.webkitURL,
            bD = fD.createObjectURL(iD),
            QD = new pD[CD](bD, cD);
          return fD.revokeObjectURL(bD), QD
        } catch (wD) {
          return new pD[CD]("data:application/javascript,".concat(encodeURIComponent(DD)), cD)
        }
      } catch (wD) {
        if (!ID) throw Error("Inline worker is not supported");
        return new pD[CD](ID, cD)
      }
    }
  },
  40557: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  40564: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);