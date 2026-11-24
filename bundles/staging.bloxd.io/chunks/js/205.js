export const id = 205;
export const ids = [205];
export const modules = {
  41394: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      loadGlbAsset: () => Mz,
      loadGlbTree: () => nz
    });
    var pD = wD(37891),
      sD = wD(41401),
      KD = wD(36232),
      rD = wD.n(KD);

    function LD() {
      return rD()('(()=>{class DD extends Error{}function zD(zD,wD){const pD=zD._malloc(wD);if(0===pD)throw new DD(`Draco: the decoder\'s heap refused ${wD} bytes`);return pD}function wD(DD){return{[DD.DT_FLOAT32]:[Float32Array,5126],[DD.DT_INT8]:[Int8Array,5120],[DD.DT_INT16]:[Int16Array,5122],[DD.DT_INT32]:[Int32Array,5124],[DD.DT_UINT8]:[Uint8Array,5121],[DD.DT_UINT16]:[Uint16Array,5123],[DD.DT_UINT32]:[Uint32Array,5125]}}function pD(zD,pD,sD,KD,rD){let LD=null,cD=null,gD=null;try{LD=new zD.Decoder,cD=new zD.DecoderBuffer,cD.Init(pD,pD.byteLength);let RD=0;const AD=LD.GetEncodedGeometryType(cD);if(AD===zD.TRIANGULAR_MESH){const wD=new zD.Mesh;gD=wD;const pD=LD.DecodeBufferToMesh(cD,wD);if(!pD.ok()||0===wD.ptr)throw new DD(pD.error_msg());RD=3*wD.num_faces()}else{if(AD!==zD.POINT_CLOUD)throw new DD(`Draco: Cannot decode invalid geometry type ${AD}`);{const wD=new zD.PointCloud;gD=wD;const pD=LD.DecodeBufferToPointCloud(cD,wD);if(!pD.ok()||!wD.ptr)throw new DD(pD.error_msg())}}const UD=gD.num_points();if(UD!==KD.vertices||RD!==KD.indices)throw new DD(`Draco: decoded ${UD} vertices and ${RD} indices, the accessors declare ${KD.vertices} and ${KD.indices}`);const fD=wD(zD),ID=[];for(const{kind:zD,id:wD,components:pD}of sD){const sD=LD.GetAttributeByUniqueId(gD,wD);if(!sD||0===sD.ptr)throw new DD(`Draco: no attribute with id ${wD} (${zD})`);const KD=sD.data_type();if(!fD[KD])throw new DD(`Draco: Cannot decode invalid data type ${KD}`);if(sD.num_components()!==pD)throw new DD(`Draco: ${zD} decodes to ${sD.num_components()} components, its accessor declares ${pD}`);ID.push([zD,sD,KD])}return rD({dracoDecoder:LD,geometry:gD,triangles:AD===zD.TRIANGULAR_MESH,numPoints:UD,numIndices:RD,attributes:ID})}finally{gD&&zD.destroy(gD),cD&&zD.destroy(cD),LD&&zD.destroy(LD)}}const sD=self;let KD=null;self.onmessage=DD=>{let{data:rD}=DD;if("init"===rD.id){try{importScripts(rD.url),KD=DracoDecoderModule({wasmBinary:rD.wasmBinary}),sD.postMessage({id:"initDone"})}catch(AD){sD.postMessage({id:"initError",message:AD instanceof Error?AD.message:String(AD)})}return}const{seq:LD,data:cD,attributeIds:gD,expected:RD}=rD;KD?KD.then((DD=>{try{const KD=function(DD,sD,KD,rD){const LD=Object.keys(KD).map((DD=>({kind:DD,id:KD[DD],components:rD.components[DD]})));return pD(DD,sD,LD,rD,(pD=>{let{dracoDecoder:sD,geometry:KD,triangles:rD,numPoints:LD,numIndices:cD,attributes:gD}=pD;const RD=wD(DD);let AD=null;if(rD){const wD=4*cD,pD=zD(DD,wD);try{sD.GetTrianglesUInt32Array(KD,wD,pD),AD=new Uint32Array(cD),AD.set(new Uint32Array(DD.HEAPF32.buffer,pD,cD))}finally{DD._free(pD)}}const UD=[];for(const[wD,fD,ID]of gD){const[pD]=RD[ID],rD=fD.num_components(),cD=LD*rD,gD=cD*pD.BYTES_PER_ELEMENT,AD=zD(DD,gD);try{sD.GetAttributeDataArrayForAllPoints(KD,fD,ID,gD,AD),UD.push({kind:wD,data:new pD(DD.HEAPF32.buffer,AD,cD).slice(),size:rD,byteOffset:fD.byte_offset(),byteStride:fD.byte_stride(),normalized:fD.normalized()})}finally{DD._free(AD)}}return{indices:AD,attributes:UD,totalVertices:LD}}))}(DD,cD,gD,RD),rD=KD.attributes.map((DD=>DD.data.buffer));KD.indices&&rD.push(KD.indices.buffer),sD.postMessage({id:"decoded",seq:LD,...KD},rD)}catch(AD){sD.postMessage({id:"decodeError",seq:LD,message:AD instanceof Error?AD.message:String(AD)})}}),(DD=>{sD.postMessage({id:"decodeError",seq:LD,message:DD instanceof Error?DD.message:String(DD)})})):sD.postMessage({id:"decodeError",seq:LD,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, wD.p + "dracoDecode.worker.f586632e.worker.js")
    }
    var cD = wD(103);
    const gD = 1e3;
    let RD = null,
      AD = null;
    const UD = [],
      fD = [];
    let ID = 0;
    const BD = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      GD = function(DD, zD) {
        const wD = DD ? Math.max(1, Math.min(Math.floor(.5 * DD), 4)) : 1;
        return zD ? Math.min(wD, 2) : wD
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, cD.isMobile)());

    function hD() {
      if (!RD) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: DD,
        wasmBinaryUrl: zD
      } = RD;
      return AD ??= fetch(zD).then((DD => {
        if (!DD.ok) throw new Error(`Draco: fetching ${zD} failed: ${DD.status}`);
        return DD.arrayBuffer()
      })), AD.catch((() => {
        AD = null
      })), BD.workersStarted++, AD.then((zD => new Promise(((wD, pD) => {
        const sD = new LD;
        sD.onerror = DD => {
          sD.onmessage = null, sD.onerror = null, sD.terminate(), pD(new Error("Draco: the decode worker failed to start" + (DD.message ? `: ${DD.message}` : " (its script did not load)")))
        }, sD.onmessage = DD => {
          let {
            data: zD
          } = DD;
          sD.onmessage = null, sD.onerror = null, "initDone" === zD.id ? wD(sD) : (sD.terminate(), pD(new Error(`Draco: ${"initError"===zD.id?zD.message:"the worker did not start"}`)))
        };
        const KD = zD.slice(0),
          rD = {
            id: "init",
            url: DD,
            wasmBinary: KD
          };
        sD.postMessage(rD, [KD])
      }))))
    }

    function nD(DD) {
      const zD = UD.indexOf(DD); - 1 !== zD && UD.splice(zD, 1);
      const wD = fD.shift();
      wD && OD(wD)
    }

    function MD(DD, zD) {
      DD.busy = !0, DD.releaseTimer && (clearTimeout(DD.releaseTimer), DD.releaseTimer = null);
      DD.worker.then((wD => {
        const pD = ID++;
        wD.onmessage = sD => {
          let {
            data: KD
          } = sD;
          if (("decoded" === KD.id || "decodeError" === KD.id) && KD.seq === pD) {
            if (wD.onmessage = null, wD.onerror = null, "decoded" === KD.id) return BD.decodes++, zD.resolve({
              indices: KD.indices,
              attributes: KD.attributes,
              totalVertices: KD.totalVertices
            }), void(() => {
              const zD = fD.shift();
              zD ? MD(DD, zD) : (DD.busy = !1, DD.releaseTimer = setTimeout((() => {
                const zD = UD.indexOf(DD); - 1 !== zD && UD.splice(zD, 1), DD.worker.then((DD => {
                  DD.terminate()
                }))
              }), gD))
            })();
            wD.terminate(), zD.reject(new Error(KD.message)), nD(DD)
          }
        }, wD.onerror = pD => {
          wD.onmessage = null, wD.onerror = null, wD.terminate(), zD.reject(new Error(`Draco: the decode worker failed: ${pD.message}`)), nD(DD)
        };
        const sD = {
          id: "decode",
          seq: pD,
          data: zD.data,
          attributeIds: zD.attributeIds,
          expected: zD.expected
        };
        wD.postMessage(sD, [zD.data.buffer])
      }), (wD => {
        zD.reject(wD instanceof Error ? wD : new Error(String(wD))), nD(DD)
      }))
    }

    function OD(DD) {
      const zD = UD.find((DD => !DD.busy));
      if (zD) MD(zD, DD);
      else {
        if (UD.length < GD) {
          const zD = {
            worker: hD(),
            busy: !0,
            releaseTimer: null
          };
          return UD.push(zD), BD.mostWorkers = Math.max(BD.mostWorkers, UD.length), void MD(zD, DD)
        }
        fD.push(DD)
      }
    }

    function JD(DD, zD, wD) {
      return new Promise(((pD, sD) => {
        OD({
          data: new Int8Array(DD.buffer, DD.byteOffset, DD.byteLength).slice(),
          attributeIds: zD,
          expected: wD,
          resolve: pD,
          reject: sD
        })
      }))
    }
    var ED = wD(37453),
      QD = wD(37471),
      XD = wD(34287),
      VD = wD(34278);
    const PD = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function CD(DD) {
      const zD = (0, VD.i)(DD.byteLength);
      if (zD) throw new XD.n(zD);
      const {
        json: wD,
        bin: pD
      } = (0, XD.D)(DD), sD = (0, VD.e)(wD, pD);
      if (sD) throw new XD.n(sD);
      try {
        return function(DD, zD) {
          var wD, pD, sD, KD, rD, LD, cD, gD, RD, AD, UD, fD, ID, BD, GD;
          const hD = new Map,
            nD = wD => {
              let pD = hD.get(wD);
              if (!pD) {
                var sD;
                const KD = DD.bufferViews[wD],
                  rD = null !== (sD = KD.byteOffset) && void 0 !== sD ? sD : 0;
                pD = {
                  index: wD,
                  bytes: zD.subarray(rD, rD + KD.byteLength),
                  byteStride: KD.byteStride
                }, hD.set(wD, pD)
              }
              return pD
            },
            MD = new Map,
            OD = zD => {
              let wD = MD.get(zD);
              if (!wD) {
                var pD;
                const sD = DD.accessors[zD];
                wD = {
                  index: zD,
                  count: sD.count,
                  type: sD.type,
                  numComponents: XD.q[sD.type],
                  componentType: sD.componentType,
                  normalized: null !== (pD = sD.normalized) && void 0 !== pD && pD,
                  byteOffset: sD.byteOffset,
                  bufferView: void 0 === sD.bufferView ? null : nD(sD.bufferView),
                  min: sD.min,
                  max: sD.max
                }, MD.set(zD, wD)
              }
              return wD
            },
            JD = null !== (wD = null === (pD = DD.extensionsUsed) || void 0 === pD ? void 0 : pD.includes("KHR_draco_mesh_compression")) && void 0 !== wD && wD,
            ED = (null !== (sD = DD.meshes) && void 0 !== sD ? sD : []).map(((zD, wD) => {
              const pD = zD.primitives.map(((zD, wD) => {
                var pD, sD, KD;
                const rD = JD ? null === (pD = zD.extensions) || void 0 === pD ? void 0 : pD.KHR_draco_mesh_compression : void 0;
                let LD = null;
                const cD = [];
                if (rD) {
                  const wD = {
                    vertices: DD.accessors[zD.attributes.POSITION].count,
                    indices: void 0 === zD.indices ? 0 : DD.accessors[zD.indices].count,
                    components: {}
                  };
                  LD = {
                    bufferView: nD(rD.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: wD
                  };
                  for (const [pD, sD] of XD.i) {
                    const KD = rD.attributes[pD];
                    if (void 0 === KD) continue;
                    LD.attributeIds[sD] = KD;
                    const cD = zD.attributes[pD];
                    var gD;
                    if (void 0 !== cD) LD.normalized[sD] = null !== (gD = DD.accessors[cD].normalized) && void 0 !== gD && gD, wD.components[sD] = XD.q[DD.accessors[cD].type]
                  }
                } else
                  for (const [DD, RD] of XD.i) {
                    const wD = zD.attributes[DD];
                    void 0 !== wD && cD.push({
                      semantic: DD,
                      kind: RD,
                      accessor: OD(wD)
                    })
                  }
                return {
                  index: wD,
                  mode: null !== (sD = zD.mode) && void 0 !== sD ? sD : 4,
                  attributes: cD,
                  indices: rD || void 0 === zD.indices ? null : OD(zD.indices),
                  position: void 0 === zD.attributes.POSITION ? null : OD(zD.attributes.POSITION),
                  material: null !== (KD = zD.material) && void 0 !== KD ? KD : null,
                  draco: LD
                }
              }));
              return {
                index: wD,
                name: zD.name,
                primitives: pD,
                extras: zD.extras
              }
            })),
            QD = (null !== (KD = DD.nodes) && void 0 !== KD ? KD : []).map(((DD, zD) => {
              var wD, pD;
              return {
                index: zD,
                name: DD.name,
                children: null !== (wD = DD.children) && void 0 !== wD ? wD : [],
                mesh: null !== (pD = DD.mesh) && void 0 !== pD ? pD : null,
                translation: DD.translation,
                rotation: DD.rotation,
                scale: DD.scale,
                hasCamera: void 0 !== DD.camera,
                extras: DD.extras
              }
            })),
            VD = null !== (rD = null === (LD = DD.extensionsUsed) || void 0 === LD ? void 0 : LD.includes("KHR_materials_unlit")) && void 0 !== rD && rD,
            CD = null !== (cD = null === (gD = DD.extensionsUsed) || void 0 === gD ? void 0 : gD.includes("KHR_texture_transform")) && void 0 !== cD && cD,
            xD = (null !== (RD = DD.materials) && void 0 !== RD ? RD : []).map(((DD, zD) => {
              var wD, pD, sD, KD;
              const rD = DD.pbrMetallicRoughness,
                LD = null === rD || void 0 === rD ? void 0 : rD.baseColorTexture;
              return {
                index: zD,
                name: DD.name,
                extras: DD.extras,
                unlit: VD && void 0 !== (null === (wD = DD.extensions) || void 0 === wD ? void 0 : wD.KHR_materials_unlit),
                pbr: rD ? {
                  baseColorFactor: rD.baseColorFactor,
                  metallicFactor: rD.metallicFactor,
                  roughnessFactor: rD.roughnessFactor
                } : null,
                baseColorTexture: LD ? {
                  texture: LD.index,
                  transform: CD && (null === (pD = LD.extensions) || void 0 === pD ? void 0 : pD.KHR_texture_transform) || null
                } : null,
                emissiveFactor: DD.emissiveFactor,
                alphaMode: null !== (sD = DD.alphaMode) && void 0 !== sD ? sD : "OPAQUE",
                alphaCutoff: DD.alphaCutoff,
                doubleSided: null !== (KD = DD.doubleSided) && void 0 !== KD && KD
              }
            })),
            TD = (null !== (AD = DD.textures) && void 0 !== AD ? AD : []).map(((zD, wD) => {
              var pD, sD;
              const KD = void 0 === zD.sampler ? PD : {
                index: zD.sampler,
                ...null === (pD = DD.samplers) || void 0 === pD ? void 0 : pD[zD.sampler]
              };
              return {
                index: wD,
                sampler: {
                  index: KD.index,
                  magFilter: KD.magFilter,
                  minFilter: KD.minFilter,
                  wrapS: KD.wrapS,
                  wrapT: KD.wrapT
                },
                image: null !== (sD = zD.source) && void 0 !== sD ? sD : -1
              }
            })),
            bD = (null !== (UD = DD.images) && void 0 !== UD ? UD : []).map(((DD, zD) => ({
              index: zD,
              name: DD.name,
              mimeType: DD.mimeType,
              bufferView: nD(DD.bufferView)
            }))),
            jD = null !== (fD = (0, XD.z)(DD)) && void 0 !== fD ? fD : 0;
          return {
            json: DD,
            rootNodes: null !== (ID = null === (BD = DD.scenes) || void 0 === BD || null === (GD = BD[jD]) || void 0 === GD ? void 0 : GD.nodes) && void 0 !== ID ? ID : [],
            nodes: QD,
            meshes: ED,
            materials: xD,
            textures: TD,
            images: bD
          }
        }(wD, pD)
      } catch (KD) {
        throw KD instanceof XD.m ? KD : new XD.m(`reading the GLB failed: ${KD instanceof Error?KD.message:String(KD)}`)
      }
    }
    async function xD(DD, zD) {
      var wD, pD;
      const sD = DD.draco;
      if (!sD) throw new XD.m("not a Draco primitive");
      let KD;
      try {
        KD = await zD(sD.bufferView.bytes, sD.attributeIds, sD.expected)
      } catch (gD) {
        throw new XD.m(`Draco decoding failed: ${gD instanceof Error?gD.message:String(gD)}`)
      }
      const {
        vertices: rD,
        indices: LD,
        components: cD
      } = sD.expected;
      if (KD.totalVertices !== rD || (null !== (wD = null === (pD = KD.indices) || void 0 === pD ? void 0 : pD.length) && void 0 !== wD ? wD : 0) !== LD || KD.attributes.some((DD => DD.size !== cD[DD.kind] || DD.data.length !== rD * DD.size))) throw new XD.m("Draco decoding gave other counts than the accessors declare");
      for (const RD of KD.attributes) {
        const DD = sD.normalized[RD.kind];
        void 0 !== DD && (RD.normalized = DD)
      }
      return KD
    }
    const TD = new WeakMap;

    function bD(DD, zD) {
      var wD;
      const pD = null !== (wD = TD.get(DD)) && void 0 !== wD ? wD : zD(DD);
      return TD.set(DD, pD), pD
    }

    function jD(DD) {
      const zD = DD.bufferView,
        wD = 5125 === DD.componentType ? Uint32Array : Uint16Array,
        pD = zD.bytes.buffer,
        sD = zD.bytes.byteOffset + (DD.byteOffset || 0);
      return sD % wD.BYTES_PER_ELEMENT !== 0 ? new wD(pD.slice(sD, sD + DD.count * wD.BYTES_PER_ELEMENT), 0) : new wD(pD, sD, DD.count)
    }

    function dD(DD, zD) {
      if (DD.min && DD.max) return [new Float64Array(DD.min), new Float64Array(DD.max)];
      const wD = zD.find((DD => {
          let {
            kind: zD
          } = DD;
          return "position" === zD
        })),
        pD = wD ? (0, QD.i)(wD, DD.count) : new Float32Array(0);
      return (0, QD.r)(pD.length / 3, ((DD, zD) => pD[3 * DD + zD]))
    }

    function SD(DD) {
      const zD = DD.attributes.map((DD => {
          var zD, wD;
          let {
            kind: pD,
            accessor: sD
          } = DD;
          const {
            bufferView: KD,
            numComponents: rD
          } = sD;
          if (!KD) {
            return {
              kind: pD,
              data: bD(sD, (() => new Float32Array(rD * sD.count))),
              offset: 0,
              stride: 4 * rD,
              components: rD,
              glType: 5126,
              isNormalized: !1
            }
          }
          const LD = null !== (zD = KD.byteStride) && void 0 !== zD ? zD : rD * XD.b[sD.componentType];
          return {
            kind: pD,
            data: KD.bytes,
            offset: null !== (wD = sD.byteOffset) && void 0 !== wD ? wD : 0,
            stride: LD,
            components: rD,
            glType: sD.componentType,
            isNormalized: sD.normalized
          }
        })),
        wD = DD.indices,
        pD = wD && bD(wD, jD),
        sD = DD.position;
      return new QD.g(zD, pD, sD.count, ...dD(sD, zD))
    }
    const iD = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function lD(DD, zD) {
      const wD = zD.attributes.map((DD => {
        let {
          kind: zD,
          data: wD,
          size: pD,
          byteOffset: sD,
          byteStride: KD,
          normalized: rD
        } = DD;
        return {
          kind: zD,
          data: wD,
          offset: sD,
          stride: KD,
          components: pD,
          glType: 5120 + iD.indexOf(wD.constructor),
          isNormalized: rD
        }
      }));
      return new QD.g(wD, zD.indices, zD.totalVertices, ...dD(DD.position, wD))
    }

    function WD(DD) {
      const zD = DD.lastIndexOf("/");
      return zD < 0 ? DD : DD.substring(zD + 1)
    }

    function ND(DD) {
      const zD = DD.lastIndexOf("/");
      return zD < 0 ? "" : DD.substring(0, zD + 1)
    }

    function ZD(DD) {
      return DD.name || `node${DD.index}`
    }
    const yD = {
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
      mD = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function eD(DD) {
      var zD, wD, pD, sD;
      const KD = null !== (zD = DD.minFilter) && void 0 !== zD ? zD : 9987;
      return 9729 === (null !== (wD = DD.magFilter) && void 0 !== wD ? wD : 9729) ? null !== (pD = kD[KD]) && void 0 !== pD ? pD : 3 : null !== (sD = mD[KD]) && void 0 !== sD ? sD : 4
    }
    const oD = {
      33071: 0,
      33648: 2
    };

    function aD(DD) {
      var zD;
      return null !== (zD = oD[null !== DD && void 0 !== DD ? DD : 10497]) && void 0 !== zD ? zD : 1
    }

    function uD(DD) {
      return 9728 === DD.minFilter || 9729 === DD.minFilter
    }

    function vD(DD) {
      var zD, wD, pD;
      const sD = Float64Array.from(null !== (zD = DD.scale) && void 0 !== zD ? zD : [1, 1, 1]);
      return DD.hasCamera && (sD[0] = -1), {
        translation: Float64Array.from(null !== (wD = DD.translation) && void 0 !== wD ? wD : [0, 0, 0]),
        rotation: Float64Array.from(null !== (pD = DD.rotation) && void 0 !== pD ? pD : [0, 0, 0, 1]),
        scale: sD
      }
    }

    function tD(DD, zD) {
      let {
        translation: wD,
        rotation: pD,
        scale: sD
      } = DD;
      const KD = new Float32Array(16);
      return (0, ED.b)(sD, 0, pD, 0, wD, 0, KD), zD && (0, ED.j)(KD, zD, 0, KD), KD
    }
    class FD {
      constructor(DD, zD, wD, pD) {
        this.model = DD, this.decode = zD, this.fileInfo = wD, this.uniqueRootUrl = pD, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const sD = new Set,
          KD = (zD, wD) => {
            const pD = DD.nodes[zD];
            if (this.parents.has(pD)) throw new XD.m(`/nodes/${zD}: Invalid recursive node hierarchy`);
            this.parents.set(pD, wD);
            const rD = null === pD.mesh ? [] : DD.meshes[pD.mesh].primitives,
              LD = rD.map((DD => {
                const zD = rD.length > 1;
                return {
                  name: zD ? `${ZD(pD)}_primitive${DD.index}` : ZD(pD),
                  node: pD,
                  primitive: DD,
                  part: zD,
                  geometry: null
                }
              }));
            this.uses.set(pD, LD);
            const cD = null !== pD.mesh && sD.has(pD.mesh);
            sD.add(pD.mesh), this.own.set(pD, cD ? [] : LD);
            for (const DD of pD.children) KD(DD, pD)
          };
        for (const rD of DD.rootNodes) KD(rD, null);
        this.primitives = DD.nodes.flatMap((DD => {
          var zD;
          return null !== (zD = this.own.get(DD)) && void 0 !== zD ? zD : []
        }))
      }
      decodeGeometries() {
        const DD = new Map;
        return Promise.all(this.primitives.map((async zD => {
          const {
            primitive: wD
          } = zD, pD = wD.draco;
          let sD = pD ? DD.get(pD.bufferView.index) : Promise.resolve(SD(wD));
          sD || (sD = xD(wD, this.decode).then((DD => lD(wD, DD))), DD.set(pD.bufferView.index, sD)), zD.geometry = await sD
        })))
      }
      parentOf(DD) {
        var zD;
        return null !== (zD = this.parents.get(DD)) && void 0 !== zD ? zD : null
      }
      meshesUnder(DD) {
        const zD = this.model.nodes.filter((DD => this.uses.has(DD)));
        for (const pD of zD) {
          const zD = this.uses.get(pD),
            wD = zD.find((zD => zD.name === DD));
          if (wD) return 1 === zD.length ? this.subtree(pD) : this.own.get(pD).includes(wD) ? [wD] : []
        }
        const wD = zD.find((zD => 1 !== this.uses.get(zD).length && ZD(zD) === DD));
        return wD ? this.subtree(wD) : null
      }
      subtree(DD) {
        return [...this.own.get(DD), ...DD.children.flatMap((DD => this.subtree(this.model.nodes[DD])))]
      }
      worldMatrix(DD, zD, wD) {
        let pD = tD(vD(zD ? yD : {}), null);
        const sD = [];
        for (let rD = DD.part ? DD.node : this.parentOf(DD.node); rD; rD = this.parentOf(rD)) sD.unshift(rD);
        for (const rD of sD) pD = tD(vD(rD), pD);
        const KD = vD(DD.part ? {} : DD.node);
        return void 0 !== wD && KD.scale.fill(wD), tD(KD, pD)
      }
      floats(DD) {
        const {
          vertexAttributes: zD,
          vertexCount: wD
        } = DD.geometry;
        return new Map(zD.map((DD => [DD.kind, (0, QD.i)(DD, wD)])))
      }
      imageUrl(DD) {
        return function(DD, zD, wD) {
          let {
            name: pD
          } = zD;
          return `data:${DD}${pD}#image${wD}`
        }(this.uniqueRootUrl, this.fileInfo, DD)
      }
      textureDesc(DD, zD) {
        var wD;
        let {
          texture: pD,
          transform: sD
        } = DD;
        const {
          sampler: KD,
          image: rD
        } = this.model.textures[pD], {
          bufferView: LD,
          mimeType: cD,
          name: gD
        } = this.model.images[rD], RD = sD && {
          ...sD.offset ? {
            uOffset: sD.offset[0],
            vOffset: sD.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...sD.rotation ? {
            wAng: -sD.rotation
          } : {},
          ...sD.scale ? {
            uScale: sD.scale[0],
            vScale: sD.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(rD),
          noMipmap: uD(KD),
          invertY: !1,
          samplingMode: eD(KD),
          data: {
            bytes: LD.bytes,
            mimeType: cD,
            label: gD,
            context: `/textures/${pD}`
          },
          sets: {
            wrapU: aD(KD.wrapS),
            wrapV: aD(KD.wrapT),
            ...RD,
            coordinatesIndex: null !== (wD = null === sD || void 0 === sD ? void 0 : sD.texCoord) && void 0 !== wD ? wD : 0,
            hasAlpha: zD
          }
        }
      }
    }
    async function YD(DD, zD, wD, pD, sD, KD) {
      let rD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const LD = function(DD, zD, wD) {
          return "string" !== typeof zD ? {
            url: "",
            rootUrl: DD,
            name: wD()
          } : zD ? zD.startsWith("data:") ? {
            url: zD,
            rootUrl: DD,
            name: ""
          } : DD ? {
            url: DD + zD,
            rootUrl: DD,
            name: zD
          } : {
            url: zD,
            rootUrl: ND(zD),
            name: WD(zD)
          } : {
            url: DD,
            rootUrl: ND(DD),
            name: WD(DD)
          }
        }(wD, DD, sD),
        cD = {};
      zD.addPendingData(cD);
      try {
        const wD = CD(await async function(DD, zD) {
            return "string" !== typeof zD ? zD : DD.url.startsWith("data:") ? (0, XD.s)(DD.url) : await (0, XD.w)(DD.url)
          }(LD, DD)),
          cD = new FD(wD, pD, LD, function(DD, zD) {
            let {
              rootUrl: wD,
              name: pD
            } = DD;
            return !wD.startsWith("file:") && pD ? wD : `${wD}${zD()}/`
          }(LD, sD));
        return await KD(cD), zD.importedMeshesFiles && (zD.loadingPluginName = "kS", rD && zD.importedMeshesFiles.push(LD.url)), cD
      } finally {
        zD.removePendingData(cD)
      }
    }
    var HD = wD(37577),
      qD = wD(37438),
      Dz = wD(37876);

    function zz(DD) {
      if (null === DD || void 0 === DD || !DD.min || !DD.max) return null;
      const [zD, wD, pD] = DD.min, [sD, KD, rD] = DD.max, {
        BoundingInfo: LD,
        WI: cD
      } = (0, HD.e)();
      return new LD(new cD(zD, wD, pD), new cD(sD, KD, rD))
    }

    function wz(DD) {
      (0, qD.f)(DD) || (DD.geometry && DD.geometry.useBoundingInfoFromGeometry ? DD._updateBoundingInfo() : DD.refreshBoundingInfo(!0, !0))
    }
    class pz {
      constructor(DD, zD) {
        this.oB = DD, this.decode = zD, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(DD) {
        let zD = this.viewData.get(DD.index);
        return zD || (zD = this.bufferData.then((() => DD.bytes)), this.viewData.set(DD.index, zD)), zD
      }
      viewBuffer(DD) {
        let zD = this.viewBuffers.get(DD.index);
        return zD || (zD = this.viewBytes(DD).then((DD => new((0, HD.e)().nI)(this.oB.iI(), DD, !1))), this.viewBuffers.set(DD.index, zD)), zD
      }
      vertexBuffer(DD, zD) {
        const {
          kind: wD,
          data: pD
        } = zD, sD = `${DD.index}:${wD}`;
        let KD = this.vertexBuffers.get(sD);
        if (!KD) {
          const rD = DD.bufferView;
          KD = rD ? this.viewBuffer(rD).then((DD => this.layoutVertexBuffer(DD, zD))) : Promise.resolve(pD).then((DD => new((0, HD.e)().VertexBuffer)(this.oB.iI(), DD, wD, !1))), this.vertexBuffers.set(sD, KD)
        }
        return KD
      }
      layoutVertexBuffer(DD, zD) {
        let {
          kind: wD,
          offset: pD,
          stride: sD,
          components: KD,
          glType: rD,
          isNormalized: LD
        } = zD;
        const cD = this.oB.iI();
        return new((0, HD.e)().VertexBuffer)(cD, DD, wD, !1, void 0, sD, void 0, pD, KD, rD, LD, !0, void 0, !0)
      }
      load(DD, zD, wD) {
        const pD = (0, qD.f)(wD),
          sD = DD => {
            pD || (wD._delayInfo = wD._delayInfo || [], -1 === wD._delayInfo.indexOf(DD) && wD._delayInfo.push(DD))
          },
          KD = zD.draco;
        if (KD) {
          for (const DD in KD.attributeIds) sD(DD);
          let rD = this.dracoGeometry.get(KD.bufferView.index);
          return rD || (rD = this.viewBytes(KD.bufferView).then((async () => {
            let sD;
            try {
              sD = await xD(zD, this.decode)
            } catch (cD) {
              throw new XD.m(`${DD}: ${cD instanceof Error?cD.message:String(cD)}`)
            }
            const KD = lD(zD, sD);
            if (pD) return KD;
            const rD = zz(zD.position),
              LD = new((0, HD.e)().MirroredGeometry)(wD.name, this.oB);
            rD && (LD._boundingInfo = rD, LD.useBoundingInfoFromGeometry = !0), KD.indexData && LD.setIndices(KD.indexData);
            for (const DD of KD.vertexAttributes) LD.setVerticesBuffer(this.layoutVertexBuffer(DD.data, DD), KD.vertexCount);
            return LD.link(KD), LD
          })), this.dracoGeometry.set(KD.bufferView.index, rD)), rD
        }
        const rD = [],
          LD = SD(zD);
        if (pD) return wD.isUnIndexed = !LD.indexData, wD.hasVertexAlpha = (0, Dz.i)(zD), Promise.resolve(LD);
        const cD = new((0, HD.e)().MirroredGeometry)(wD.name, this.oB),
          {
            indexData: gD
          } = LD;
        gD ? rD.push(this.viewBytes(zD.indices.bufferView).then((() => {
          cD.setIndices(gD)
        }))) : wD.isUnIndexed = !0;
        for (const [RD, {
            kind: AD,
            accessor: UD
          }] of zD.attributes.entries()) sD(AD), rD.push(this.vertexBuffer(UD, LD.vertexAttributes[RD]).then((DD => {
          if ("position" === DD.getKind()) {
            const DD = zz(UD);
            DD && (cD._boundingInfo = DD, cD.useBoundingInfoFromGeometry = !0)
          }
          cD.setVerticesBuffer(DD, LD.vertexCount)
        })));
        return (0, Dz.i)(zD) && (wD.hasVertexAlpha = !0), Promise.all(rD).then((() => (cD.link(LD), cD)))
      }
    }
    var sz, Kz = wD(37318),
      rz = wD(37070),
      Lz = wD(37885),
      cz = wD(37259),
      gz = wD(37304),
      Rz = wD(2769),
      Az = wD(37294);

    function Uz(DD, zD) {
      DD.metadata = DD.metadata || {};
      const wD = DD._internalMetadata = DD._internalMetadata || {},
        pD = wD.kS = wD.kS || {};
      (pD.pointers = pD.pointers || []).push(zD)
    }

    function fz(DD, zD) {
      if (zD && Object.keys(zD).length > 0) {
        const wD = DD.metadata = DD.metadata || {};
        (wD.kS = wD.kS || {}).extras = zD
      }
    }

    function Iz(DD, zD) {
      zD.position = DD.translation ? rz.WI.FromArray(DD.translation) : rz.WI.Zero(), zD.rotationQuaternion = DD.rotation ? rz.Quaternion.FromArray(DD.rotation) : rz.Quaternion.Identity(), zD.rc = DD.scale ? rz.WI.FromArray(DD.scale) : rz.WI.One()
    }
    class Bz {
      constructor(DD, zD) {
        if (this.oB = DD, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, zD) {
          const zD = DD.iI(),
            wD = DD.Bl.add((() => {
              this.dispose()
            })),
            pD = zD.SI.add((() => {
              for (const DD of [...this.geometries, ...this.meshes, ...this.textures]) DD._rebuild()
            }));
          this.release = () => {
            DD.Bl.remove(wD), zD.SI.remove(pD)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const DD of this.meshes) this.oB.VpD(DD);
          for (const DD of this.materials) this.oB.addMaterial(DD);
          for (const DD of this.geometries) this.oB.addGeometry(DD);
          for (const DD of this.transformNodes) this.oB.addTransformNode(DD);
          for (const DD of this.textures) this.oB.addTexture(DD)
        }
      }
      dispose() {
        var DD;
        for (const zD of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const DD of zD.slice()) DD.dispose();
          zD.length = 0
        }
        null === (DD = this.release) || void 0 === DD || DD.call(this), this.release = null
      }
    }
    class Gz {
      constructor(DD, zD, wD, pD, sD, KD, rD) {
        this.asset = DD, this.oB = zD, this.tree = wD, this.geometryData = sD, this.materials = KD, this.lite = rD, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = pD ? wD : null
      }
      create(DD) {
        if (this.lite) return DD();
        const zD = this.oB;
        zD._blockEntityCollection = !!this.container;
        try {
          const zD = DD();
          return this.container && (zD._parentContainer = this.container), zD
        } finally {
          zD._blockEntityCollection = !1
        }
      }
      node(DD, zD) {
        return this.create((() => this.lite ? zD ? (0, Lz.g)(this.lite, DD) : (0, Lz.r)(this.lite, DD) : zD ? new((0, HD.e)().Mesh)(DD, this.oB) : new((0, HD.e)().TransformNode)(DD, this.oB)))
      }
      async load() {
        var DD;
        this.asset.model.json.nodes && this.createRoot();
        const zD = this.lite ? null : this.oB,
          wD = null !== (DD = null === zD || void 0 === zD ? void 0 : zD.blockMaterialDirtyMechanism) && void 0 !== DD && DD;
        let pD;
        zD && (zD.blockMaterialDirtyMechanism = !0);
        try {
          pD = this.loadScene()
        } finally {
          null === zD || void 0 === zD || zD._forceBlockMaterialDirtyMechanism(wD)
        }
        await pD;
        const {
          root: sD,
          tree: KD
        } = this;
        sD && (sD.nC(!0), KD.meshes.push(sD), KD.rootNodes.push(sD));
        for (const LD of this.asset.model.nodes) {
          const DD = this.nodeObjects.get(LD.index);
          DD && ["TransformNode", "LiteNode"].includes(DD.getClassName()) && KD.transformNodes.push(DD);
          for (const zD of null !== (rD = this.nodePrimitives.get(LD.index)) && void 0 !== rD ? rD : []) {
            var rD;
            KD.meshes.push(zD);
            const DD = zD.geometry;
            DD && !KD.geometries.includes(DD) && KD.geometries.push(DD)
          }
        }
      }
      createRoot() {
        const DD = this.node("__root__", !0);
        this.root = DD, DD.nC(!1), this.oB.useRightHandedSystem || Iz(yD, DD)
      }
      loadScene() {
        const DD = [];
        for (const zD of this.asset.model.rootNodes) DD.push(this.loadNode(this.asset.model.nodes[zD], (DD => {
          DD.parent = this.root
        })));
        return DD.push(Promise.resolve()), Promise.all(DD).then((() => {}))
      }
      loadNode(DD, zD) {
        const wD = `/nodes/${DD.index}`,
          pD = [],
          sD = sD => {
            if (Uz(sD, wD), Iz(DD, sD), DD.hasCamera && !this.oB.useRightHandedSystem) {
              const {
                rc: DD
              } = sD;
              DD.set(-1, DD.y, DD.z)
            }
            for (const zD of DD.children) pD.push(this.loadNode(this.asset.model.nodes[zD], (DD => {
              DD.parent = sD
            })));
            (wD => {
              fz(wD, DD.extras), zD(wD)
            })(sD)
          };
        if (null === DD.mesh) {
          const zD = this.node(ZD(DD), !1);
          this.nodeObjects.set(DD.index, zD), sD(zD)
        } else {
          const zD = this.asset.model.meshes[DD.mesh];
          pD.push(this.loadMesh(`/meshes/${zD.index}`, DD, zD, sD))
        }
        return Promise.all(pD).then((() => {
          for (const wD of null !== (zD = this.nodePrimitives.get(DD.index)) && void 0 !== zD ? zD : []) {
            var zD;
            wz(wD)
          }
          return this.nodeObjects.get(DD.index)
        }))
      }
      loadMesh(DD, zD, wD, pD) {
        const sD = [],
          KD = ZD(zD);
        if (1 === wD.primitives.length) {
          const pD = wD.primitives[0];
          sD.push(this.loadPrimitive(`${DD}/primitives/${pD.index}`, KD, pD, (DD => {
            this.nodeObjects.set(zD.index, DD), this.nodePrimitives.set(zD.index, [DD])
          })))
        } else {
          const pD = this.node(KD, !1);
          this.nodeObjects.set(zD.index, pD);
          const rD = [];
          this.nodePrimitives.set(zD.index, rD);
          for (const zD of wD.primitives) sD.push(this.loadPrimitive(`${DD}/primitives/${zD.index}`, `${KD}_primitive${zD.index}`, zD, (DD => {
            DD.parent = pD, rD.push(DD)
          })))
        }
        const rD = this.nodeObjects.get(zD.index);
        return pD(rD), Promise.all(sD).then((() => rD))
      }
      loadPrimitive(DD, zD, wD, pD) {
        const sD = [],
          KD = this.node(zD, !0);
        if (KD.sideOrientation = this.oB.useRightHandedSystem ? cz.e.CounterClockWiseSideOrientation : cz.e.ClockWiseSideOrientation, sD.push(this.geometryData.load(DD, wD, KD).then((DD => {
            if ((0, qD.f)(KD)) {
              var zD, wD;
              const pD = DD;
              KD.replaceModel(pD, Int32Array.of(0, null !== (zD = null === (wD = pD.indexData) || void 0 === wD ? void 0 : wD.length) && void 0 !== zD ? zD : pD.vertexCount, 0, pD.vertexCount))
            } else this.create((() => (DD.applyToMesh(KD), DD)))
          }))), this.materials) {
          const DD = 0 === wD.mode ? cz.e.PointListDrawMode : cz.e.TriangleFillMode,
            zD = null === wD.material ? null : this.asset.model.materials[wD.material];
          sD.push(this.loadMaterial(zD, DD, (DD => {
            KD.material = DD
          })))
        }
        return Uz(KD, DD), pD(KD), Promise.all(sD).then((() => KD))
      }
      loadMaterial(DD, zD, wD) {
        var pD;
        const sD = `${null!==(pD=null===DD||void 0===DD?void 0:DD.index)&&void 0!==pD?pD:"default"}:${zD}`;
        let KD = this.materialData.get(sD);
        return KD || (KD = this.createMaterial(DD, zD), this.materialData.set(sD, KD)), wD(KD.material), KD.promise
      }
      createMaterial(DD, zD) {
        const wD = DD ? DD.name || `material${DD.index}` : "__GLTFLoader._default",
          {
            style: pD,
            unlit: sD
          } = this.materials;
        let KD;
        const rD = this.create((() => {
          const rD = (0, Az.c)({
            name: wD,
            oB: this.oB,
            sets: {
              ...(0, Dz.e)(this.asset, DD, pD, sD),
              fillMode: zD
            },
            unrendered: !0
          });
          return KD = rD.model, rD.mirror
        }));
        let LD = Promise.resolve();
        if (DD) {
          const zD = `/materials/${DD.index}`,
            pD = KD.diffuseTexture;
          if (pD && !pD.mirror) LD = new Promise((DD => setTimeout(DD)));
          else if (pD) {
            const sD = pD.mirror;
            sD._parentContainer = this.container, sD.name = `${wD} (Base Color)`, Uz(sD, `${zD}${DD.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(sD), LD = (0, gz.x)(pD)
          }
          fz(rD, DD.extras), Uz(rD, zD)
        }
        return this.tree.materials.push(rD), {
          material: rD,
          promise: LD
        }
      }
    }

    function hz() {
      Kz.e.dracoDecodes = BD.decodes, Kz.e.dracoWorkersStarted = BD.workersStarted, Kz.e.dracoMostWorkers = BD.mostWorkers
    }
    async function nz(DD, zD, wD, sD, KD) {
      try {
        return await async function(DD, zD, wD, sD, KD, rD) {
          var LD;
          let cD;
          const gD = null === (LD = (0, Rz.e)()) || void 0 === LD ? void 0 : LD.wB,
            RD = null !== gD && void 0 !== gD && gD.pB && zD === gD.Ul() ? gD : null,
            AD = KD && !RD;
          return await YD(DD, zD, wD, sD, pD.c, (DD => (cD = new Bz(zD, AD), new Gz(DD, zD, cD, AD, new pz(zD, sD), rD, RD).load())), !KD), cD
        }(DD, zD, wD, JD, sD, KD)
      } finally {
        hz()
      }
    }
    async function Mz(DD, zD, wD, sD) {
      try {
        return await YD(DD, zD, wD, JD, pD.c, (DD => sD(DD, new pz(zD, JD))))
      } finally {
        hz()
      }
    }
    sz = sD.b, RD || (RD = {
      scriptUrl: new URL(sz.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(sz.wasmBinaryUrl, location.href).href
    })
  },
  41401: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD
    });
    var pD = wD(128),
      sD = wD(1084);

    function KD(DD) {
      return (0, pD.d)() ? `https://${sD.b.discordDomain}/${DD.href}` : DD.href
    }
    const rD = {
      scriptUrl: KD(new wD.U(wD(41405))),
      wasmBinaryUrl: KD(new wD.U(wD(41409)))
    }
  },
  36232: DD => {
    DD.exports = function(DD, zD, wD, pD) {
      var sD = self || window;
      try {
        try {
          var KD;
          try {
            KD = new sD.Blob([DD])
          } catch (gD) {
            (KD = new(sD.BlobBuilder || sD.WebKitBlobBuilder || sD.MozBlobBuilder || sD.MSBlobBuilder)).append(DD), KD = KD.getBlob()
          }
          var rD = sD.URL || sD.webkitURL,
            LD = rD.createObjectURL(KD),
            cD = new sD[zD](LD, wD);
          return rD.revokeObjectURL(LD), cD
        } catch (gD) {
          return new sD[zD]("data:application/javascript,".concat(encodeURIComponent(DD)), wD)
        }
      } catch (gD) {
        if (!pD) throw Error("Inline worker is not supported");
        return new sD[zD](pD, wD)
      }
    }
  },
  41405: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41409: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);