export const id = 204;
export const ids = [204];
export const modules = {
  41244: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      loadGlbAsset: () => oE,
      loadGlbTree: () => HE
    });
    var Yq = gq(37872),
      lq = gq(41246),
      Oq = gq(36328),
      mq = gq.n(Oq);

    function xq() {
      return mq()('(()=>{class qq extends Error{}function Eq(Eq,gq){const Yq=Eq._malloc(gq);if(0===Yq)throw new qq(`Draco: the decoder\'s heap refused ${gq} bytes`);return Yq}function gq(qq){return{[qq.DT_FLOAT32]:[Float32Array,5126],[qq.DT_INT8]:[Int8Array,5120],[qq.DT_INT16]:[Int16Array,5122],[qq.DT_INT32]:[Int32Array,5124],[qq.DT_UINT8]:[Uint8Array,5121],[qq.DT_UINT16]:[Uint16Array,5123],[qq.DT_UINT32]:[Uint32Array,5125]}}function Yq(Eq,Yq,lq,Oq,mq){let xq=null,Aq=null,cq=null;try{xq=new Eq.Decoder,Aq=new Eq.DecoderBuffer,Aq.Init(Yq,Yq.byteLength);let uq=0;const Bq=xq.GetEncodedGeometryType(Aq);if(Bq===Eq.TRIANGULAR_MESH){const gq=new Eq.Mesh;cq=gq;const Yq=xq.DecodeBufferToMesh(Aq,gq);if(!Yq.ok()||0===gq.ptr)throw new qq(Yq.error_msg());uq=3*gq.num_faces()}else{if(Bq!==Eq.POINT_CLOUD)throw new qq(`Draco: Cannot decode invalid geometry type ${Bq}`);{const gq=new Eq.PointCloud;cq=gq;const Yq=xq.DecodeBufferToPointCloud(Aq,gq);if(!Yq.ok()||!gq.ptr)throw new qq(Yq.error_msg())}}const Wq=cq.num_points();if(Wq!==Oq.vertices||uq!==Oq.indices)throw new qq(`Draco: decoded ${Wq} vertices and ${uq} indices, the accessors declare ${Oq.vertices} and ${Oq.indices}`);const Nq=gq(Eq),aq=[];for(const{kind:Eq,id:gq,components:Yq}of lq){const lq=xq.GetAttributeByUniqueId(cq,gq);if(!lq||0===lq.ptr)throw new qq(`Draco: no attribute with id ${gq} (${Eq})`);const Oq=lq.data_type();if(!Nq[Oq])throw new qq(`Draco: Cannot decode invalid data type ${Oq}`);if(lq.num_components()!==Yq)throw new qq(`Draco: ${Eq} decodes to ${lq.num_components()} components, its accessor declares ${Yq}`);aq.push([Eq,lq,Oq])}return mq({dracoDecoder:xq,geometry:cq,triangles:Bq===Eq.TRIANGULAR_MESH,numPoints:Wq,numIndices:uq,attributes:aq})}finally{cq&&Eq.destroy(cq),Aq&&Eq.destroy(Aq),xq&&Eq.destroy(xq)}}const lq=self;let Oq=null;self.onmessage=qq=>{let{data:mq}=qq;if("init"===mq.id){try{importScripts(mq.url),Oq=DracoDecoderModule({wasmBinary:mq.wasmBinary}),lq.postMessage({id:"initDone"})}catch(Bq){lq.postMessage({id:"initError",message:Bq instanceof Error?Bq.message:String(Bq)})}return}const{seq:xq,data:Aq,attributeIds:cq,expected:uq}=mq;Oq?Oq.then((qq=>{try{const Oq=function(qq,lq,Oq,mq){const xq=Object.keys(Oq).map((qq=>({kind:qq,id:Oq[qq],components:mq.components[qq]})));return Yq(qq,lq,xq,mq,(Yq=>{let{dracoDecoder:lq,geometry:Oq,triangles:mq,numPoints:xq,numIndices:Aq,attributes:cq}=Yq;const uq=gq(qq);let Bq=null;if(mq){const gq=4*Aq,Yq=Eq(qq,gq);try{lq.GetTrianglesUInt32Array(Oq,gq,Yq),Bq=new Uint32Array(Aq),Bq.set(new Uint32Array(qq.HEAPF32.buffer,Yq,Aq))}finally{qq._free(Yq)}}const Wq=[];for(const[gq,Nq,aq]of cq){const[Yq]=uq[aq],mq=Nq.num_components(),Aq=xq*mq,cq=Aq*Yq.BYTES_PER_ELEMENT,Bq=Eq(qq,cq);try{lq.GetAttributeDataArrayForAllPoints(Oq,Nq,aq,cq,Bq),Wq.push({kind:gq,data:new Yq(qq.HEAPF32.buffer,Bq,Aq).slice(),size:mq,byteOffset:Nq.byte_offset(),byteStride:Nq.byte_stride(),normalized:Nq.normalized()})}finally{qq._free(Bq)}}return{indices:Bq,attributes:Wq,totalVertices:xq}}))}(qq,Aq,cq,uq),mq=Oq.attributes.map((qq=>qq.data.buffer));Oq.indices&&mq.push(Oq.indices.buffer),lq.postMessage({id:"decoded",seq:xq,...Oq},mq)}catch(Bq){lq.postMessage({id:"decodeError",seq:xq,message:Bq instanceof Error?Bq.message:String(Bq)})}}),(qq=>{lq.postMessage({id:"decodeError",seq:xq,message:qq instanceof Error?qq.message:String(qq)})})):lq.postMessage({id:"decodeError",seq:xq,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, gq.p + "dracoDecode.worker.3ee8a88d.worker.js")
    }
    var Aq = gq(96);
    const cq = 1e3;
    let uq = null,
      Bq = null;
    const Wq = [],
      Nq = [];
    let aq = 0;
    const Vq = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      dq = function(qq, Eq) {
        const gq = qq ? Math.max(1, Math.min(Math.floor(.5 * qq), 4)) : 1;
        return Eq ? Math.min(gq, 2) : gq
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, Aq.isMobile)());

    function jq() {
      if (!uq) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: qq,
        wasmBinaryUrl: Eq
      } = uq;
      return Bq ??= fetch(Eq).then((qq => {
        if (!qq.ok) throw new Error(`Draco: fetching ${Eq} failed: ${qq.status}`);
        return qq.arrayBuffer()
      })), Bq.catch((() => {
        Bq = null
      })), Vq.workersStarted++, Bq.then((Eq => new Promise(((gq, Yq) => {
        const lq = new xq;
        lq.onerror = qq => {
          lq.onmessage = null, lq.onerror = null, lq.terminate(), Yq(new Error("Draco: the decode worker failed to start" + (qq.message ? `: ${qq.message}` : " (its script did not load)")))
        }, lq.onmessage = qq => {
          let {
            data: Eq
          } = qq;
          lq.onmessage = null, lq.onerror = null, "initDone" === Eq.id ? gq(lq) : (lq.terminate(), Yq(new Error(`Draco: ${"initError"===Eq.id?Eq.message:"the worker did not start"}`)))
        };
        const Oq = Eq.slice(0),
          mq = {
            id: "init",
            url: qq,
            wasmBinary: Oq
          };
        lq.postMessage(mq, [Oq])
      }))))
    }

    function Hq(qq) {
      const Eq = Wq.indexOf(qq); - 1 !== Eq && Wq.splice(Eq, 1);
      const gq = Nq.shift();
      gq && Pq(gq)
    }

    function oq(qq, Eq) {
      qq.busy = !0, qq.releaseTimer && (clearTimeout(qq.releaseTimer), qq.releaseTimer = null);
      qq.worker.then((gq => {
        const Yq = aq++;
        gq.onmessage = lq => {
          let {
            data: Oq
          } = lq;
          if (("decoded" === Oq.id || "decodeError" === Oq.id) && Oq.seq === Yq) {
            if (gq.onmessage = null, gq.onerror = null, "decoded" === Oq.id) return Vq.decodes++, Eq.resolve({
              indices: Oq.indices,
              attributes: Oq.attributes,
              totalVertices: Oq.totalVertices
            }), void(() => {
              const Eq = Nq.shift();
              Eq ? oq(qq, Eq) : (qq.busy = !1, qq.releaseTimer = setTimeout((() => {
                const Eq = Wq.indexOf(qq); - 1 !== Eq && Wq.splice(Eq, 1), qq.worker.then((qq => {
                  qq.terminate()
                }))
              }), cq))
            })();
            gq.terminate(), Eq.reject(new Error(Oq.message)), Hq(qq)
          }
        }, gq.onerror = Yq => {
          gq.onmessage = null, gq.onerror = null, gq.terminate(), Eq.reject(new Error(`Draco: the decode worker failed: ${Yq.message}`)), Hq(qq)
        };
        const lq = {
          id: "decode",
          seq: Yq,
          data: Eq.data,
          attributeIds: Eq.attributeIds,
          expected: Eq.expected
        };
        gq.postMessage(lq, [Eq.data.buffer])
      }), (gq => {
        Eq.reject(gq instanceof Error ? gq : new Error(String(gq))), Hq(qq)
      }))
    }

    function Pq(qq) {
      const Eq = Wq.find((qq => !qq.busy));
      if (Eq) oq(Eq, qq);
      else {
        if (Wq.length < dq) {
          const Eq = {
            worker: jq(),
            busy: !0,
            releaseTimer: null
          };
          return Wq.push(Eq), Vq.mostWorkers = Math.max(Vq.mostWorkers, Wq.length), void oq(Eq, qq)
        }
        Nq.push(qq)
      }
    }

    function Qq(qq, Eq, gq) {
      return new Promise(((Yq, lq) => {
        Pq({
          data: new Int8Array(qq.buffer, qq.byteOffset, qq.byteLength).slice(),
          attributeIds: Eq,
          expected: gq,
          resolve: Yq,
          reject: lq
        })
      }))
    }
    var yq = gq(37472),
      tq = gq(37481),
      rq = gq(9358),
      vq = gq(9351);
    const hq = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function nq(qq) {
      const Eq = (0, vq.h)(qq.byteLength);
      if (Eq) throw new rq.k(Eq);
      const {
        json: gq,
        bin: Yq
      } = (0, rq.y)(qq), lq = (0, vq.f)(gq, Yq);
      if (lq) throw new rq.k(lq);
      try {
        return function(qq, Eq) {
          var gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq;
          const jq = new Map,
            Hq = gq => {
              let Yq = jq.get(gq);
              if (!Yq) {
                var lq;
                const Oq = qq.bufferViews[gq],
                  mq = null !== (lq = Oq.byteOffset) && void 0 !== lq ? lq : 0;
                Yq = {
                  index: gq,
                  bytes: Eq.subarray(mq, mq + Oq.byteLength),
                  byteStride: Oq.byteStride
                }, jq.set(gq, Yq)
              }
              return Yq
            },
            oq = new Map,
            Pq = Eq => {
              let gq = oq.get(Eq);
              if (!gq) {
                var Yq;
                const lq = qq.accessors[Eq];
                gq = {
                  index: Eq,
                  count: lq.count,
                  type: lq.type,
                  numComponents: rq.m[lq.type],
                  componentType: lq.componentType,
                  normalized: null !== (Yq = lq.normalized) && void 0 !== Yq && Yq,
                  byteOffset: lq.byteOffset,
                  bufferView: void 0 === lq.bufferView ? null : Hq(lq.bufferView),
                  min: lq.min,
                  max: lq.max
                }, oq.set(Eq, gq)
              }
              return gq
            },
            Qq = null !== (gq = null === (Yq = qq.extensionsUsed) || void 0 === Yq ? void 0 : Yq.includes("KHR_draco_mesh_compression")) && void 0 !== gq && gq,
            yq = (null !== (lq = qq.meshes) && void 0 !== lq ? lq : []).map(((Eq, gq) => {
              const Yq = Eq.primitives.map(((Eq, gq) => {
                var Yq, lq, Oq;
                const mq = Qq ? null === (Yq = Eq.extensions) || void 0 === Yq ? void 0 : Yq.KHR_draco_mesh_compression : void 0;
                let xq = null;
                const Aq = [];
                if (mq) {
                  const gq = {
                    vertices: qq.accessors[Eq.attributes.POSITION].count,
                    indices: void 0 === Eq.indices ? 0 : qq.accessors[Eq.indices].count,
                    components: {}
                  };
                  xq = {
                    bufferView: Hq(mq.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: gq
                  };
                  for (const [Yq, lq] of rq.h) {
                    const Oq = mq.attributes[Yq];
                    if (void 0 === Oq) continue;
                    xq.attributeIds[lq] = Oq;
                    const Aq = Eq.attributes[Yq];
                    var cq;
                    if (void 0 !== Aq) xq.normalized[lq] = null !== (cq = qq.accessors[Aq].normalized) && void 0 !== cq && cq, gq.components[lq] = rq.m[qq.accessors[Aq].type]
                  }
                } else
                  for (const [qq, uq] of rq.h) {
                    const gq = Eq.attributes[qq];
                    void 0 !== gq && Aq.push({
                      semantic: qq,
                      kind: uq,
                      accessor: Pq(gq)
                    })
                  }
                return {
                  index: gq,
                  mode: null !== (lq = Eq.mode) && void 0 !== lq ? lq : 4,
                  attributes: Aq,
                  indices: mq || void 0 === Eq.indices ? null : Pq(Eq.indices),
                  position: void 0 === Eq.attributes.POSITION ? null : Pq(Eq.attributes.POSITION),
                  material: null !== (Oq = Eq.material) && void 0 !== Oq ? Oq : null,
                  draco: xq
                }
              }));
              return {
                index: gq,
                name: Eq.name,
                primitives: Yq,
                extras: Eq.extras
              }
            })),
            tq = (null !== (Oq = qq.nodes) && void 0 !== Oq ? Oq : []).map(((qq, Eq) => {
              var gq, Yq;
              return {
                index: Eq,
                name: qq.name,
                children: null !== (gq = qq.children) && void 0 !== gq ? gq : [],
                mesh: null !== (Yq = qq.mesh) && void 0 !== Yq ? Yq : null,
                translation: qq.translation,
                rotation: qq.rotation,
                scale: qq.scale,
                hasCamera: void 0 !== qq.camera,
                extras: qq.extras
              }
            })),
            vq = null !== (mq = null === (xq = qq.extensionsUsed) || void 0 === xq ? void 0 : xq.includes("KHR_materials_unlit")) && void 0 !== mq && mq,
            nq = null !== (Aq = null === (cq = qq.extensionsUsed) || void 0 === cq ? void 0 : cq.includes("KHR_texture_transform")) && void 0 !== Aq && Aq,
            bq = (null !== (uq = qq.materials) && void 0 !== uq ? uq : []).map(((qq, Eq) => {
              var gq, Yq, lq, Oq;
              const mq = qq.pbrMetallicRoughness,
                xq = null === mq || void 0 === mq ? void 0 : mq.baseColorTexture;
              return {
                index: Eq,
                name: qq.name,
                extras: qq.extras,
                unlit: vq && void 0 !== (null === (gq = qq.extensions) || void 0 === gq ? void 0 : gq.KHR_materials_unlit),
                pbr: mq ? {
                  baseColorFactor: mq.baseColorFactor,
                  metallicFactor: mq.metallicFactor,
                  roughnessFactor: mq.roughnessFactor
                } : null,
                baseColorTexture: xq ? {
                  texture: xq.index,
                  transform: nq && (null === (Yq = xq.extensions) || void 0 === Yq ? void 0 : Yq.KHR_texture_transform) || null
                } : null,
                emissiveFactor: qq.emissiveFactor,
                alphaMode: null !== (lq = qq.alphaMode) && void 0 !== lq ? lq : "OPAQUE",
                alphaCutoff: qq.alphaCutoff,
                doubleSided: null !== (Oq = qq.doubleSided) && void 0 !== Oq && Oq
              }
            })),
            iq = (null !== (Bq = qq.textures) && void 0 !== Bq ? Bq : []).map(((Eq, gq) => {
              var Yq, lq;
              const Oq = void 0 === Eq.sampler ? hq : {
                index: Eq.sampler,
                ...null === (Yq = qq.samplers) || void 0 === Yq ? void 0 : Yq[Eq.sampler]
              };
              return {
                index: gq,
                sampler: {
                  index: Oq.index,
                  magFilter: Oq.magFilter,
                  minFilter: Oq.minFilter,
                  wrapS: Oq.wrapS,
                  wrapT: Oq.wrapT
                },
                image: null !== (lq = Eq.source) && void 0 !== lq ? lq : -1
              }
            })),
            Zq = (null !== (Wq = qq.images) && void 0 !== Wq ? Wq : []).map(((qq, Eq) => ({
              index: Eq,
              name: qq.name,
              mimeType: qq.mimeType,
              bufferView: Hq(qq.bufferView)
            }))),
            fq = null !== (Nq = (0, rq.u)(qq)) && void 0 !== Nq ? Nq : 0;
          return {
            json: qq,
            rootNodes: null !== (aq = null === (Vq = qq.scenes) || void 0 === Vq || null === (dq = Vq[fq]) || void 0 === dq ? void 0 : dq.nodes) && void 0 !== aq ? aq : [],
            nodes: tq,
            meshes: yq,
            materials: bq,
            textures: iq,
            images: Zq
          }
        }(gq, Yq)
      } catch (Oq) {
        throw Oq instanceof rq.j ? Oq : new rq.j(`reading the GLB failed: ${Oq instanceof Error?Oq.message:String(Oq)}`)
      }
    }
    async function bq(qq, Eq) {
      var gq, Yq;
      const lq = qq.draco;
      if (!lq) throw new rq.j("not a Draco primitive");
      let Oq;
      try {
        Oq = await Eq(lq.bufferView.bytes, lq.attributeIds, lq.expected)
      } catch (cq) {
        throw new rq.j(`Draco decoding failed: ${cq instanceof Error?cq.message:String(cq)}`)
      }
      const {
        vertices: mq,
        indices: xq,
        components: Aq
      } = lq.expected;
      if (Oq.totalVertices !== mq || (null !== (gq = null === (Yq = Oq.indices) || void 0 === Yq ? void 0 : Yq.length) && void 0 !== gq ? gq : 0) !== xq || Oq.attributes.some((qq => qq.size !== Aq[qq.kind] || qq.data.length !== mq * qq.size))) throw new rq.j("Draco decoding gave other counts than the accessors declare");
      for (const uq of Oq.attributes) {
        const qq = lq.normalized[uq.kind];
        void 0 !== qq && (uq.normalized = qq)
      }
      return Oq
    }
    const iq = new WeakMap;

    function Zq(qq, Eq) {
      var gq;
      const Yq = null !== (gq = iq.get(qq)) && void 0 !== gq ? gq : Eq(qq);
      return iq.set(qq, Yq), Yq
    }

    function fq(qq) {
      const Eq = qq.bufferView,
        gq = 5125 === qq.componentType ? Uint32Array : Uint16Array,
        Yq = Eq.bytes.buffer,
        lq = Eq.bytes.byteOffset + (qq.byteOffset || 0);
      return lq % gq.BYTES_PER_ELEMENT !== 0 ? new gq(Yq.slice(lq, lq + qq.count * gq.BYTES_PER_ELEMENT), 0) : new gq(Yq, lq, qq.count)
    }

    function Mq(qq, Eq) {
      if (qq.min && qq.max) return [new Float64Array(qq.min), new Float64Array(qq.max)];
      const gq = Eq.find((qq => {
          let {
            kind: Eq
          } = qq;
          return "position" === Eq
        })),
        Yq = gq ? (0, tq.j)(gq, qq.count) : new Float32Array(0);
      return (0, tq.w)(Yq.length / 3, ((qq, Eq) => Yq[3 * qq + Eq]))
    }

    function Tq(qq) {
      const Eq = qq.attributes.map((qq => {
          var Eq, gq;
          let {
            kind: Yq,
            accessor: lq
          } = qq;
          const {
            bufferView: Oq,
            numComponents: mq
          } = lq;
          if (!Oq) {
            return {
              kind: Yq,
              data: Zq(lq, (() => new Float32Array(mq * lq.count))),
              offset: 0,
              stride: 4 * mq,
              components: mq,
              glType: 5126,
              isNormalized: !1
            }
          }
          const xq = null !== (Eq = Oq.byteStride) && void 0 !== Eq ? Eq : mq * rq.c[lq.componentType];
          return {
            kind: Yq,
            data: Oq.bytes,
            offset: null !== (gq = lq.byteOffset) && void 0 !== gq ? gq : 0,
            stride: xq,
            components: mq,
            glType: lq.componentType,
            isNormalized: lq.normalized
          }
        })),
        gq = qq.indices,
        Yq = gq && Zq(gq, fq),
        lq = qq.position;
      return new tq.h(Eq, Yq, lq.count, ...Mq(lq, Eq))
    }
    const zq = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function Sq(qq, Eq) {
      const gq = Eq.attributes.map((qq => {
        let {
          kind: Eq,
          data: gq,
          size: Yq,
          byteOffset: lq,
          byteStride: Oq,
          normalized: mq
        } = qq;
        return {
          kind: Eq,
          data: gq,
          offset: lq,
          stride: Oq,
          components: Yq,
          glType: 5120 + zq.indexOf(gq.constructor),
          isNormalized: mq
        }
      }));
      return new tq.h(gq, Eq.indices, Eq.totalVertices, ...Mq(qq.position, gq))
    }

    function pq(qq) {
      const Eq = qq.lastIndexOf("/");
      return Eq < 0 ? qq : qq.substring(Eq + 1)
    }

    function Gq(qq) {
      const Eq = qq.lastIndexOf("/");
      return Eq < 0 ? "" : qq.substring(0, Eq + 1)
    }

    function Lq(qq) {
      return qq.name || `node${qq.index}`
    }
    const Jq = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      kq = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      Rq = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function Uq(qq) {
      var Eq, gq, Yq, lq;
      const Oq = null !== (Eq = qq.minFilter) && void 0 !== Eq ? Eq : 9987;
      return 9729 === (null !== (gq = qq.magFilter) && void 0 !== gq ? gq : 9729) ? null !== (Yq = kq[Oq]) && void 0 !== Yq ? Yq : 3 : null !== (lq = Rq[Oq]) && void 0 !== lq ? lq : 4
    }
    const Fq = {
      33071: 0,
      33648: 2
    };

    function sq(qq) {
      var Eq;
      return null !== (Eq = Fq[null !== qq && void 0 !== qq ? qq : 10497]) && void 0 !== Eq ? Eq : 1
    }

    function Xq(qq) {
      return 9728 === qq.minFilter || 9729 === qq.minFilter
    }

    function wq(qq) {
      var Eq, gq, Yq;
      const lq = Float64Array.from(null !== (Eq = qq.scale) && void 0 !== Eq ? Eq : [1, 1, 1]);
      return qq.hasCamera && (lq[0] = -1), {
        translation: Float64Array.from(null !== (gq = qq.translation) && void 0 !== gq ? gq : [0, 0, 0]),
        rotation: Float64Array.from(null !== (Yq = qq.rotation) && void 0 !== Yq ? Yq : [0, 0, 0, 1]),
        scale: lq
      }
    }

    function Kq(qq, Eq) {
      let {
        translation: gq,
        rotation: Yq,
        scale: lq
      } = qq;
      const Oq = new Float32Array(16);
      return (0, yq.d)(lq, 0, Yq, 0, gq, 0, Oq), Eq && (0, yq.m)(Oq, Eq, 0, Oq), Oq
    }
    class Cq {
      constructor(qq, Eq, gq, Yq) {
        this.model = qq, this.decode = Eq, this.fileInfo = gq, this.uniqueRootUrl = Yq, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const lq = new Set,
          Oq = (Eq, gq) => {
            const Yq = qq.nodes[Eq];
            if (this.parents.has(Yq)) throw new rq.j(`/nodes/${Eq}: Invalid recursive node hierarchy`);
            this.parents.set(Yq, gq);
            const mq = null === Yq.mesh ? [] : qq.meshes[Yq.mesh].primitives,
              xq = mq.map((qq => {
                const Eq = mq.length > 1;
                return {
                  name: Eq ? `${Lq(Yq)}_primitive${qq.index}` : Lq(Yq),
                  node: Yq,
                  primitive: qq,
                  part: Eq,
                  geometry: null
                }
              }));
            this.uses.set(Yq, xq);
            const Aq = null !== Yq.mesh && lq.has(Yq.mesh);
            lq.add(Yq.mesh), this.own.set(Yq, Aq ? [] : xq);
            for (const qq of Yq.children) Oq(qq, Yq)
          };
        for (const mq of qq.rootNodes) Oq(mq, null);
        this.primitives = qq.nodes.flatMap((qq => {
          var Eq;
          return null !== (Eq = this.own.get(qq)) && void 0 !== Eq ? Eq : []
        }))
      }
      decodeGeometries() {
        const qq = new Map;
        return Promise.all(this.primitives.map((async Eq => {
          const {
            primitive: gq
          } = Eq, Yq = gq.draco;
          let lq = Yq ? qq.get(Yq.bufferView.index) : Promise.resolve(Tq(gq));
          lq || (lq = bq(gq, this.decode).then((qq => Sq(gq, qq))), qq.set(Yq.bufferView.index, lq)), Eq.geometry = await lq
        })))
      }
      parentOf(qq) {
        var Eq;
        return null !== (Eq = this.parents.get(qq)) && void 0 !== Eq ? Eq : null
      }
      meshesUnder(qq) {
        const Eq = this.model.nodes.filter((qq => this.uses.has(qq)));
        for (const Yq of Eq) {
          const Eq = this.uses.get(Yq),
            gq = Eq.find((Eq => Eq.name === qq));
          if (gq) return 1 === Eq.length ? this.subtree(Yq) : this.own.get(Yq).includes(gq) ? [gq] : []
        }
        const gq = Eq.find((Eq => 1 !== this.uses.get(Eq).length && Lq(Eq) === qq));
        return gq ? this.subtree(gq) : null
      }
      subtree(qq) {
        return [...this.own.get(qq), ...qq.children.flatMap((qq => this.subtree(this.model.nodes[qq])))]
      }
      worldMatrix(qq, Eq, gq) {
        let Yq = Kq(wq(Eq ? Jq : {}), null);
        const lq = [];
        for (let mq = qq.part ? qq.node : this.parentOf(qq.node); mq; mq = this.parentOf(mq)) lq.unshift(mq);
        for (const mq of lq) Yq = Kq(wq(mq), Yq);
        const Oq = wq(qq.part ? {} : qq.node);
        return void 0 !== gq && Oq.scale.fill(gq), Kq(Oq, Yq)
      }
      floats(qq) {
        const {
          vertexAttributes: Eq,
          vertexCount: gq
        } = qq.geometry;
        return new Map(Eq.map((qq => [qq.kind, (0, tq.j)(qq, gq)])))
      }
      imageUrl(qq) {
        return function(qq, Eq, gq) {
          let {
            name: Yq
          } = Eq;
          return `data:${qq}${Yq}#image${gq}`
        }(this.uniqueRootUrl, this.fileInfo, qq)
      }
      textureDesc(qq, Eq) {
        var gq;
        let {
          texture: Yq,
          transform: lq
        } = qq;
        const {
          sampler: Oq,
          image: mq
        } = this.model.textures[Yq], {
          bufferView: xq,
          mimeType: Aq,
          name: cq
        } = this.model.images[mq], uq = lq && {
          ...lq.offset ? {
            uOffset: lq.offset[0],
            vOffset: lq.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...lq.rotation ? {
            wAng: -lq.rotation
          } : {},
          ...lq.scale ? {
            uScale: lq.scale[0],
            vScale: lq.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(mq),
          noMipmap: Xq(Oq),
          invertY: !1,
          samplingMode: Uq(Oq),
          data: {
            bytes: xq.bytes,
            mimeType: Aq,
            label: cq,
            context: `/textures/${Yq}`
          },
          sets: {
            wrapU: sq(Oq.wrapS),
            wrapV: sq(Oq.wrapT),
            ...uq,
            coordinatesIndex: null !== (gq = null === lq || void 0 === lq ? void 0 : lq.texCoord) && void 0 !== gq ? gq : 0,
            hasAlpha: Eq
          }
        }
      }
    }
    async function Iq(qq, Eq, gq, Yq, lq, Oq) {
      let mq = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const xq = function(qq, Eq, gq) {
          return "string" !== typeof Eq ? {
            url: "",
            rootUrl: qq,
            name: gq()
          } : Eq ? Eq.startsWith("data:") ? {
            url: Eq,
            rootUrl: qq,
            name: ""
          } : qq ? {
            url: qq + Eq,
            rootUrl: qq,
            name: Eq
          } : {
            url: Eq,
            rootUrl: Gq(Eq),
            name: pq(Eq)
          } : {
            url: qq,
            rootUrl: Gq(qq),
            name: pq(qq)
          }
        }(gq, qq, lq),
        Aq = {};
      Eq.addPendingData(Aq);
      try {
        const gq = nq(await async function(qq, Eq) {
            return "string" !== typeof Eq ? Eq : qq.url.startsWith("data:") ? (0, rq.p)(qq.url) : await (0, rq.q)(qq.url)
          }(xq, qq)),
          Aq = new Cq(gq, Yq, xq, function(qq, Eq) {
            let {
              rootUrl: gq,
              name: Yq
            } = qq;
            return !gq.startsWith("file:") && Yq ? gq : `${gq}${Eq()}/`
          }(xq, lq));
        return await Oq(Aq), Eq.importedMeshesFiles && (Eq.loadingPluginName = "QJ", mq && Eq.importedMeshesFiles.push(xq.url)), Aq
      } finally {
        Eq.removePendingData(Aq)
      }
    }
    var eq = gq(37586),
      Dq = gq(37451),
      qE = gq(37860);

    function EE(qq) {
      if (null === qq || void 0 === qq || !qq.min || !qq.max) return null;
      const [Eq, gq, Yq] = qq.min, [lq, Oq, mq] = qq.max, {
        BoundingInfo: xq,
        Na: Aq
      } = (0, eq.b)();
      return new xq(new Aq(Eq, gq, Yq), new Aq(lq, Oq, mq))
    }

    function gE(qq) {
      (0, Dq.c)(qq) || (qq.geometry && qq.geometry.useBoundingInfoFromGeometry ? qq._updateBoundingInfo() : qq.refreshBoundingInfo(!0, !0))
    }
    class YE {
      constructor(qq, Eq) {
        this.PV = qq, this.decode = Eq, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(qq) {
        let Eq = this.viewData.get(qq.index);
        return Eq || (Eq = this.bufferData.then((() => qq.bytes)), this.viewData.set(qq.index, Eq)), Eq
      }
      viewBuffer(qq) {
        let Eq = this.viewBuffers.get(qq.index);
        return Eq || (Eq = this.viewBytes(qq).then((qq => new((0, eq.b)().IN)(this.PV.Ba(), qq, !1))), this.viewBuffers.set(qq.index, Eq)), Eq
      }
      vertexBuffer(qq, Eq) {
        const {
          kind: gq,
          data: Yq
        } = Eq, lq = `${qq.index}:${gq}`;
        let Oq = this.vertexBuffers.get(lq);
        if (!Oq) {
          const mq = qq.bufferView;
          Oq = mq ? this.viewBuffer(mq).then((qq => this.layoutVertexBuffer(qq, Eq))) : Promise.resolve(Yq).then((qq => new((0, eq.b)().VertexBuffer)(this.PV.Ba(), qq, gq, !1))), this.vertexBuffers.set(lq, Oq)
        }
        return Oq
      }
      layoutVertexBuffer(qq, Eq) {
        let {
          kind: gq,
          offset: Yq,
          stride: lq,
          components: Oq,
          glType: mq,
          isNormalized: xq
        } = Eq;
        const Aq = this.PV.Ba();
        return new((0, eq.b)().VertexBuffer)(Aq, qq, gq, !1, void 0, lq, void 0, Yq, Oq, mq, xq, !0, void 0, !0)
      }
      load(qq, Eq, gq) {
        const Yq = (0, Dq.c)(gq),
          lq = qq => {
            Yq || (gq._delayInfo = gq._delayInfo || [], -1 === gq._delayInfo.indexOf(qq) && gq._delayInfo.push(qq))
          },
          Oq = Eq.draco;
        if (Oq) {
          for (const qq in Oq.attributeIds) lq(qq);
          let mq = this.dracoGeometry.get(Oq.bufferView.index);
          return mq || (mq = this.viewBytes(Oq.bufferView).then((async () => {
            let lq;
            try {
              lq = await bq(Eq, this.decode)
            } catch (Aq) {
              throw new rq.j(`${qq}: ${Aq instanceof Error?Aq.message:String(Aq)}`)
            }
            const Oq = Sq(Eq, lq);
            if (Yq) return Oq;
            const mq = EE(Eq.position),
              xq = new((0, eq.b)().MirroredGeometry)(gq.name, this.PV);
            mq && (xq._boundingInfo = mq, xq.useBoundingInfoFromGeometry = !0), Oq.indexData && xq.setIndices(Oq.indexData);
            for (const qq of Oq.vertexAttributes) xq.setVerticesBuffer(this.layoutVertexBuffer(qq.data, qq), Oq.vertexCount);
            return xq.link(Oq), xq
          })), this.dracoGeometry.set(Oq.bufferView.index, mq)), mq
        }
        const mq = [],
          xq = Tq(Eq);
        if (Yq) return gq.isUnIndexed = !xq.indexData, gq.hasVertexAlpha = (0, qE.g)(Eq), Promise.resolve(xq);
        const Aq = new((0, eq.b)().MirroredGeometry)(gq.name, this.PV),
          {
            indexData: cq
          } = xq;
        cq ? mq.push(this.viewBytes(Eq.indices.bufferView).then((() => {
          Aq.setIndices(cq)
        }))) : gq.isUnIndexed = !0;
        for (const [uq, {
            kind: Bq,
            accessor: Wq
          }] of Eq.attributes.entries()) lq(Bq), mq.push(this.vertexBuffer(Wq, xq.vertexAttributes[uq]).then((qq => {
          if ("position" === qq.getKind()) {
            const qq = EE(Wq);
            qq && (Aq._boundingInfo = qq, Aq.useBoundingInfoFromGeometry = !0)
          }
          Aq.setVerticesBuffer(qq, xq.vertexCount)
        })));
        return (0, qE.g)(Eq) && (gq.hasVertexAlpha = !0), Promise.all(mq).then((() => (Aq.link(xq), Aq)))
      }
    }
    var lE, OE = gq(37333),
      mE = gq(37131),
      xE = gq(37870),
      AE = gq(37282),
      cE = gq(37313),
      uE = gq(2668),
      BE = gq(37305);

    function WE(qq, Eq) {
      qq.metadata = qq.metadata || {};
      const gq = qq._internalMetadata = qq._internalMetadata || {},
        Yq = gq.QJ = gq.QJ || {};
      (Yq.pointers = Yq.pointers || []).push(Eq)
    }

    function NE(qq, Eq) {
      if (Eq && Object.keys(Eq).length > 0) {
        const gq = qq.metadata = qq.metadata || {};
        (gq.QJ = gq.QJ || {}).extras = Eq
      }
    }

    function aE(qq, Eq) {
      Eq.position = qq.translation ? mE.Na.FromArray(qq.translation) : mE.Na.Zero(), Eq.rotationQuaternion = qq.rotation ? mE.Quaternion.FromArray(qq.rotation) : mE.Quaternion.Identity(), Eq.rc = qq.scale ? mE.Na.FromArray(qq.scale) : mE.Na.One()
    }
    class VE {
      constructor(qq, Eq) {
        if (this.PV = qq, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, Eq) {
          const Eq = qq.Ba(),
            gq = qq.MJ.add((() => {
              this.dispose()
            })),
            Yq = Eq.onContextRestoredObservable.add((() => {
              for (const qq of [...this.geometries, ...this.meshes, ...this.textures]) qq._rebuild()
            }));
          this.release = () => {
            qq.MJ.remove(gq), Eq.onContextRestoredObservable.remove(Yq)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const qq of this.meshes) this.PV.ZYq(qq);
          for (const qq of this.materials) this.PV.addMaterial(qq);
          for (const qq of this.geometries) this.PV.addGeometry(qq);
          for (const qq of this.transformNodes) this.PV.addTransformNode(qq);
          for (const qq of this.textures) this.PV.addTexture(qq)
        }
      }
      dispose() {
        var qq;
        for (const Eq of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const qq of Eq.slice()) qq.dispose();
          Eq.length = 0
        }
        null === (qq = this.release) || void 0 === qq || qq.call(this), this.release = null
      }
    }
    class dE {
      constructor(qq, Eq, gq, Yq, lq, Oq, mq) {
        this.asset = qq, this.PV = Eq, this.tree = gq, this.geometryData = lq, this.materials = Oq, this.lite = mq, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = Yq ? gq : null
      }
      create(qq) {
        if (this.lite) return qq();
        const Eq = this.PV;
        Eq._blockEntityCollection = !!this.container;
        try {
          const Eq = qq();
          return this.container && (Eq._parentContainer = this.container), Eq
        } finally {
          Eq._blockEntityCollection = !1
        }
      }
      node(qq, Eq) {
        return this.create((() => this.lite ? Eq ? (0, xE.e)(this.lite, qq) : (0, xE.o)(this.lite, qq) : Eq ? new((0, eq.b)().Mesh)(qq, this.PV) : new((0, eq.b)().TransformNode)(qq, this.PV)))
      }
      async load() {
        var qq;
        this.asset.model.json.nodes && this.createRoot();
        const Eq = this.lite ? null : this.PV,
          gq = null !== (qq = null === Eq || void 0 === Eq ? void 0 : Eq.blockMaterialDirtyMechanism) && void 0 !== qq && qq;
        let Yq;
        Eq && (Eq.blockMaterialDirtyMechanism = !0);
        try {
          Yq = this.loadScene()
        } finally {
          null === Eq || void 0 === Eq || Eq._forceBlockMaterialDirtyMechanism(gq)
        }
        await Yq;
        const {
          root: lq,
          tree: Oq
        } = this;
        lq && (lq.hG(!0), Oq.meshes.push(lq), Oq.rootNodes.push(lq));
        for (const xq of this.asset.model.nodes) {
          const qq = this.nodeObjects.get(xq.index);
          qq && ["TransformNode", "LiteNode"].includes(qq.getClassName()) && Oq.transformNodes.push(qq);
          for (const Eq of null !== (mq = this.nodePrimitives.get(xq.index)) && void 0 !== mq ? mq : []) {
            var mq;
            Oq.meshes.push(Eq);
            const qq = Eq.geometry;
            qq && !Oq.geometries.includes(qq) && Oq.geometries.push(qq)
          }
        }
      }
      createRoot() {
        const qq = this.node("__root__", !0);
        this.root = qq, qq.hG(!1), this.PV.useRightHandedSystem || aE(Jq, qq)
      }
      loadScene() {
        const qq = [];
        for (const Eq of this.asset.model.rootNodes) qq.push(this.loadNode(this.asset.model.nodes[Eq], (qq => {
          qq.parent = this.root
        })));
        return qq.push(Promise.resolve()), Promise.all(qq).then((() => {}))
      }
      loadNode(qq, Eq) {
        const gq = `/nodes/${qq.index}`,
          Yq = [],
          lq = lq => {
            if (WE(lq, gq), aE(qq, lq), qq.hasCamera && !this.PV.useRightHandedSystem) {
              const {
                rc: qq
              } = lq;
              qq.set(-1, qq.y, qq.z)
            }
            for (const Eq of qq.children) Yq.push(this.loadNode(this.asset.model.nodes[Eq], (qq => {
              qq.parent = lq
            })));
            (gq => {
              NE(gq, qq.extras), Eq(gq)
            })(lq)
          };
        if (null === qq.mesh) {
          const Eq = this.node(Lq(qq), !1);
          this.nodeObjects.set(qq.index, Eq), lq(Eq)
        } else {
          const Eq = this.asset.model.meshes[qq.mesh];
          Yq.push(this.loadMesh(`/meshes/${Eq.index}`, qq, Eq, lq))
        }
        return Promise.all(Yq).then((() => {
          for (const gq of null !== (Eq = this.nodePrimitives.get(qq.index)) && void 0 !== Eq ? Eq : []) {
            var Eq;
            gE(gq)
          }
          return this.nodeObjects.get(qq.index)
        }))
      }
      loadMesh(qq, Eq, gq, Yq) {
        const lq = [],
          Oq = Lq(Eq);
        if (1 === gq.primitives.length) {
          const Yq = gq.primitives[0];
          lq.push(this.loadPrimitive(`${qq}/primitives/${Yq.index}`, Oq, Yq, (qq => {
            this.nodeObjects.set(Eq.index, qq), this.nodePrimitives.set(Eq.index, [qq])
          })))
        } else {
          const Yq = this.node(Oq, !1);
          this.nodeObjects.set(Eq.index, Yq);
          const mq = [];
          this.nodePrimitives.set(Eq.index, mq);
          for (const Eq of gq.primitives) lq.push(this.loadPrimitive(`${qq}/primitives/${Eq.index}`, `${Oq}_primitive${Eq.index}`, Eq, (qq => {
            qq.parent = Yq, mq.push(qq)
          })))
        }
        const mq = this.nodeObjects.get(Eq.index);
        return Yq(mq), Promise.all(lq).then((() => mq))
      }
      loadPrimitive(qq, Eq, gq, Yq) {
        const lq = [],
          Oq = this.node(Eq, !0);
        if (Oq.sideOrientation = this.PV.useRightHandedSystem ? AE.c.CounterClockWiseSideOrientation : AE.c.ClockWiseSideOrientation, lq.push(this.geometryData.load(qq, gq, Oq).then((qq => {
            if ((0, Dq.c)(Oq)) {
              var Eq, gq;
              const Yq = qq;
              Oq.replaceModel(Yq, Int32Array.of(0, null !== (Eq = null === (gq = Yq.indexData) || void 0 === gq ? void 0 : gq.length) && void 0 !== Eq ? Eq : Yq.vertexCount, 0, Yq.vertexCount))
            } else this.create((() => (qq.applyToMesh(Oq), qq)))
          }))), this.materials) {
          const qq = 0 === gq.mode ? AE.c.PointListDrawMode : AE.c.TriangleFillMode,
            Eq = null === gq.material ? null : this.asset.model.materials[gq.material];
          lq.push(this.loadMaterial(Eq, qq, (qq => {
            Oq.material = qq
          })))
        }
        return WE(Oq, qq), Yq(Oq), Promise.all(lq).then((() => Oq))
      }
      loadMaterial(qq, Eq, gq) {
        var Yq;
        const lq = `${null!==(Yq=null===qq||void 0===qq?void 0:qq.index)&&void 0!==Yq?Yq:"default"}:${Eq}`;
        let Oq = this.materialData.get(lq);
        return Oq || (Oq = this.createMaterial(qq, Eq), this.materialData.set(lq, Oq)), gq(Oq.material), Oq.promise
      }
      createMaterial(qq, Eq) {
        const gq = qq ? qq.name || `material${qq.index}` : "__GLTFLoader._default",
          {
            style: Yq,
            unlit: lq
          } = this.materials;
        let Oq;
        const mq = this.create((() => {
          const mq = (0, BE.b)({
            name: gq,
            PV: this.PV,
            sets: {
              ...(0, qE.e)(this.asset, qq, Yq, lq),
              fillMode: Eq
            },
            unrendered: !0
          });
          return Oq = mq.model, mq.mirror
        }));
        let xq = Promise.resolve();
        if (qq) {
          const Eq = `/materials/${qq.index}`,
            Yq = Oq.diffuseTexture;
          if (Yq && !Yq.mirror) xq = new Promise((qq => setTimeout(qq)));
          else if (Yq) {
            const lq = Yq.mirror;
            lq._parentContainer = this.container, lq.name = `${gq} (Base Color)`, WE(lq, `${Eq}${qq.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(lq), xq = (0, cE.y)(Yq)
          }
          NE(mq, qq.extras), WE(mq, Eq)
        }
        return this.tree.materials.push(mq), {
          material: mq,
          promise: xq
        }
      }
    }

    function jE() {
      OE.h.dracoDecodes = Vq.decodes, OE.h.dracoWorkersStarted = Vq.workersStarted, OE.h.dracoMostWorkers = Vq.mostWorkers
    }
    async function HE(qq, Eq, gq, lq, Oq) {
      try {
        return await async function(qq, Eq, gq, lq, Oq, mq) {
          var xq;
          let Aq;
          const cq = null === (xq = (0, uE.e)()) || void 0 === xq ? void 0 : xq.Ma,
            uq = null !== cq && void 0 !== cq && cq.Ta && Eq === cq.ZJ() ? cq : null,
            Bq = Oq && !uq;
          return await Iq(qq, Eq, gq, lq, Yq.d, (qq => (Aq = new VE(Eq, Bq), new dE(qq, Eq, Aq, Bq, new YE(Eq, lq), mq, uq).load())), !Oq), Aq
        }(qq, Eq, gq, Qq, lq, Oq)
      } finally {
        jE()
      }
    }
    async function oE(qq, Eq, gq, lq) {
      try {
        return await Iq(qq, Eq, gq, Qq, Yq.d, (qq => lq(qq, new YE(Eq, Qq))))
      } finally {
        jE()
      }
    }
    lE = lq.e, uq || (uq = {
      scriptUrl: new URL(lE.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(lE.wasmBinaryUrl, location.href).href
    })
  },
  41246: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq
    });
    var Yq = gq(136),
      lq = gq(1201);

    function Oq(qq) {
      return (0, Yq.c)() ? `https://${lq.d.discordDomain}/${qq.href}` : qq.href
    }
    const mq = {
      scriptUrl: Oq(new gq.U(gq(41253))),
      wasmBinaryUrl: Oq(new gq.U(gq(41259)))
    }
  },
  36328: qq => {
    qq.exports = function(qq, Eq, gq, Yq) {
      var lq = self || window;
      try {
        try {
          var Oq;
          try {
            Oq = new lq.Blob([qq])
          } catch (cq) {
            (Oq = new(lq.BlobBuilder || lq.WebKitBlobBuilder || lq.MozBlobBuilder || lq.MSBlobBuilder)).append(qq), Oq = Oq.getBlob()
          }
          var mq = lq.URL || lq.webkitURL,
            xq = mq.createObjectURL(Oq),
            Aq = new lq[Eq](xq, gq);
          return mq.revokeObjectURL(xq), Aq
        } catch (cq) {
          return new lq[Eq]("data:application/javascript,".concat(encodeURIComponent(qq)), gq)
        }
      } catch (cq) {
        if (!Yq) throw Error("Inline worker is not supported");
        return new lq[Eq](Yq, gq)
      }
    }
  },
  41259: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  41253: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);