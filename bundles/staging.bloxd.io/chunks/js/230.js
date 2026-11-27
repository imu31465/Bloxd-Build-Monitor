export const id = 230;
export const ids = [230];
export const modules = {
  44693: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      loadGlbAsset: () => Zi,
      loadGlbTree: () => ti
    });
    var ye = He(38745),
      be = He(125),
      Me = He(1150);

    function Ke(ee) {
      return (0, be.isDiscordClient)() ? `https://${Me.d.discordDomain}/${ee.href}` : ee.href
    }
    const Ue = {
      scriptUrl: Ke(new He.U(He(44697))),
      wasmBinaryUrl: Ke(new He.U(He(44704)))
    };
    var Fe = He(36938),
      Je = He.n(Fe);

    function oe() {
      return Je()('(()=>{class ee extends Error{}function ie(ie,He){const ye=ie._malloc(He);if(0===ye)throw new ee(`Draco: the decoder\'s heap refused ${He} bytes`);return ye}function He(He,ye,be,Me){let Ke=null,Ue=null,Fe=null;try{Ke=new He.Decoder,Ue=new He.DecoderBuffer,Ue.Init(ye,ye.byteLength);let Je=0;const oe=Ke.GetEncodedGeometryType(Ue);if(oe===He.TRIANGULAR_MESH){const ie=new He.Mesh;Fe=ie;const ye=Ke.DecodeBufferToMesh(Ue,ie);if(!ye.ok()||0===ie.ptr)throw new ee(ye.error_msg());Je=3*ie.num_faces()}else{if(oe!==He.POINT_CLOUD)throw new ee(`Draco: Cannot decode invalid geometry type ${oe}`);{const ie=new He.PointCloud;Fe=ie;const ye=Ke.DecodeBufferToPointCloud(Ue,ie);if(!ye.ok()||!ie.ptr)throw new ee(ye.error_msg())}}const Re=Fe.num_points();if(Re!==Me.vertices||Je!==Me.indices)throw new ee(`Draco: decoded ${Re} vertices and ${Je} indices, the accessors declare ${Me.vertices} and ${Me.indices}`);const ke=function(ee){return{[ee.DT_FLOAT32]:Float32Array,[ee.DT_INT8]:Int8Array,[ee.DT_INT16]:Int16Array,[ee.DT_INT32]:Int32Array,[ee.DT_UINT8]:Uint8Array,[ee.DT_UINT16]:Uint16Array,[ee.DT_UINT32]:Uint32Array}}(He),qe=[];for(const ie of Object.keys(be)){const He=be[ie],ye=Me.components[ie],Ue=Ke.GetAttributeByUniqueId(Fe,He);if(!Ue||0===Ue.ptr)throw new ee(`Draco: no attribute with id ${He} (${ie})`);const Je=Ue.data_type();if(!ke[Je])throw new ee(`Draco: Cannot decode invalid data type ${Je}`);if(Ue.num_components()!==ye)throw new ee(`Draco: ${ie} decodes to ${Ue.num_components()} components, its accessor declares ${ye}`);qe.push([ie,Ue,ke[Je]])}let fe=null;if(oe===He.TRIANGULAR_MESH){const ee=4*Je,ye=ie(He,ee);try{Ke.GetTrianglesUInt32Array(Fe,ee,ye),fe=new Uint32Array(Je),fe.set(new Uint32Array(He.HEAPF32.buffer,ye,Je))}finally{He._free(ye)}}const Te=[];for(const[ee,ye,be]of qe){const Me=ye.num_components(),Ue=Re*Me,Je=Ue*be.BYTES_PER_ELEMENT,oe=ie(He,Je);try{Ke.GetAttributeDataArrayForAllPoints(Fe,ye,ye.data_type(),Je,oe),Te.push({kind:ee,data:new be(He.HEAPF32.buffer,oe,Ue).slice(),size:Me,byteOffset:ye.byte_offset(),byteStride:ye.byte_stride(),normalized:ye.normalized()})}finally{He._free(oe)}}return{indices:fe,attributes:Te,totalVertices:Re}}finally{Fe&&He.destroy(Fe),Ue&&He.destroy(Ue),Ke&&He.destroy(Ke)}}const ye=self;let be=null;self.onmessage=ee=>{let{data:ie}=ee;if("init"===ie.id){try{importScripts(ie.url),be=DracoDecoderModule({wasmBinary:ie.wasmBinary}),ye.postMessage({id:"initDone"})}catch(Je){ye.postMessage({id:"initError",message:Je instanceof Error?Je.message:String(Je)})}return}const{seq:Me,data:Ke,attributeIds:Ue,expected:Fe}=ie;be?be.then((ee=>{try{const ie=He(ee,Ke,Ue,Fe),be=ie.attributes.map((ee=>ee.data.buffer));ie.indices&&be.push(ie.indices.buffer),ye.postMessage({id:"decoded",seq:Me,...ie},be)}catch(Je){ye.postMessage({id:"decodeError",seq:Me,message:Je instanceof Error?Je.message:String(Je)})}}),(ee=>{ye.postMessage({id:"decodeError",seq:Me,message:ee instanceof Error?ee.message:String(ee)})})):ye.postMessage({id:"decodeError",seq:Me,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, He.p + "dracoDecode.worker.045ae8a0.worker.js")
    }
    var Re = He(97),
      ke = He(4781),
      qe = He(3565);
    const fe = 2;
    const Te = 1e3;
    let pe = null,
      Xe = null;
    const ze = [],
      Be = [];
    let Ee = 0;
    const ge = {
      decodes: 0,
      workersStarted: 0,
      mostWorkers: 0
    };
    let Oe = null;

    function de() {
      if (!pe) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: ee,
        wasmBinaryUrl: ie
      } = pe;
      return Xe ??= fetch(ie).then((ee => {
        if (!ee.ok) throw new Error(`Draco: fetching ${ie} failed: ${ee.status}`);
        return ee.arrayBuffer()
      })), Xe.catch((() => {
        Xe = null
      })), ge.workersStarted++, Promise.all([Xe, (0, qe.g)()]).then((ie => {
        let [He] = ie;
        return new Promise(((ie, ye) => {
          const be = new oe;
          be.onerror = ee => {
            be.onmessage = null, be.onerror = null, be.terminate(), ye(new Error("Draco: the decode worker failed to start" + (ee.message ? `: ${ee.message}` : " (its script did not load)")))
          }, be.onmessage = ee => {
            let {
              data: He
            } = ee;
            be.onmessage = null, be.onerror = null, "initDone" === He.id ? ie(be) : (be.terminate(), ye(new Error(`Draco: ${"initError"===He.id?He.message:"the worker did not start"}`)))
          };
          const Me = He.slice(0),
            Ke = {
              id: "init",
              url: ee,
              wasmBinary: Me
            };
          be.postMessage(Ke, [Me])
        }))
      }))
    }

    function We(ee) {
      const ie = ze.indexOf(ee); - 1 !== ie && ze.splice(ie, 1);
      const He = Be.shift();
      He && Ze(He)
    }

    function te(ee, ie) {
      ee.busy = !0, ee.releaseTimer && (clearTimeout(ee.releaseTimer), ee.releaseTimer = null);
      ee.worker.then((He => {
        const ye = Ee++;
        He.onmessage = be => {
          let {
            data: Me
          } = be;
          if (("decoded" === Me.id || "decodeError" === Me.id) && Me.seq === ye) {
            if (He.onmessage = null, He.onerror = null, "decoded" === Me.id) return ge.decodes++, ie.resolve({
              indices: Me.indices,
              attributes: Me.attributes,
              totalVertices: Me.totalVertices
            }), void(() => {
              const ie = Be.shift();
              ie ? te(ee, ie) : (ee.busy = !1, ee.releaseTimer = setTimeout((() => {
                const ie = ze.indexOf(ee); - 1 !== ie && ze.splice(ie, 1), ee.worker.then((ee => {
                  ee.terminate()
                }))
              }), Te))
            })();
            He.terminate(), ie.reject(new Error(Me.message)), We(ee)
          }
        }, He.onerror = ye => {
          He.onmessage = null, He.onerror = null, He.terminate(), ie.reject(new Error(`Draco: the decode worker failed: ${ye.message}`)), We(ee)
        };
        const be = {
          id: "decode",
          seq: ye,
          data: ie.data,
          attributeIds: ie.attributeIds,
          expected: ie.expected
        };
        He.postMessage(be, [ie.data.buffer])
      }), (He => {
        ie.reject(He instanceof Error ? He : new Error(String(He))), We(ee)
      }))
    }

    function Ze(ee) {
      const ie = ze.find((ee => !ee.busy));
      if (ie) te(ie, ee);
      else {
        if (Oe ??= (0, ke.c)() ? 1 : function(ee, ie) {
            const He = ee ? Math.max(1, Math.min(Math.floor(.5 * ee), 4)) : 1;
            return ie ? Math.min(He, fe) : He
          }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, Re.isMobile)()), ze.length < Oe) {
          const ie = {
            worker: de(),
            busy: !0,
            releaseTimer: null
          };
          return ze.push(ie), ge.mostWorkers = Math.max(ge.mostWorkers, ze.length), void te(ie, ee)
        }
        Be.push(ee)
      }
    }

    function we(ee, ie, He) {
      return new Promise(((ye, be) => {
        Ze({
          data: new Int8Array(ee.buffer, ee.byteOffset, ee.byteLength).slice(),
          attributeIds: ie,
          expected: He,
          resolve: ye,
          reject: be
        })
      }))
    }
    var De = He(38185),
      Pe = He(38195),
      Ae = He(34988),
      Ye = He(34984);
    const Ve = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function ae(ee) {
      const ie = (0, Ye.l)(ee.byteLength);
      if (ie) throw new Ae.k(ie);
      const {
        json: He,
        bin: ye
      } = (0, Ae.y)(ee), be = (0, Ye.i)(He, ye);
      if (be) throw new Ae.k(be);
      try {
        return function(ee, ie) {
          var He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe;
          const Xe = new Map,
            ze = He => {
              let ye = Xe.get(He);
              if (!ye) {
                var be;
                const Me = ee.bufferViews[He],
                  Ke = null !== (be = Me.byteOffset) && void 0 !== be ? be : 0;
                ye = {
                  index: He,
                  bytes: ie.subarray(Ke, Ke + Me.byteLength),
                  byteStride: Me.byteStride
                }, Xe.set(He, ye)
              }
              return ye
            },
            Be = new Map,
            Ee = ie => {
              let He = Be.get(ie);
              if (!He) {
                var ye;
                const be = ee.accessors[ie];
                He = {
                  index: ie,
                  count: be.count,
                  type: be.type,
                  numComponents: Ae.m[be.type],
                  componentType: be.componentType,
                  normalized: null !== (ye = be.normalized) && void 0 !== ye && ye,
                  byteOffset: be.byteOffset,
                  bufferView: void 0 === be.bufferView ? null : ze(be.bufferView),
                  min: be.min,
                  max: be.max
                }, Be.set(ie, He)
              }
              return He
            },
            ge = null !== (He = null === (ye = ee.extensionsUsed) || void 0 === ye ? void 0 : ye.includes("KHR_draco_mesh_compression")) && void 0 !== He && He,
            Oe = (null !== (be = ee.meshes) && void 0 !== be ? be : []).map(((ie, He) => {
              const ye = ie.primitives.map(((ie, He) => {
                var ye, be, Me;
                const Ke = ge ? null === (ye = ie.extensions) || void 0 === ye ? void 0 : ye.KHR_draco_mesh_compression : void 0;
                let Ue = null;
                const Fe = [];
                if (Ke) {
                  const He = {
                    vertices: ee.accessors[ie.attributes.POSITION].count,
                    indices: void 0 === ie.indices ? 0 : ee.accessors[ie.indices].count,
                    components: {}
                  };
                  Ue = {
                    bufferView: ze(Ke.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: He
                  };
                  for (const [ye, be] of Ae.e) {
                    const Me = Ke.attributes[ye];
                    if (void 0 === Me) continue;
                    Ue.attributeIds[be] = Me;
                    const Fe = ie.attributes[ye];
                    var Je;
                    if (void 0 !== Fe) Ue.normalized[be] = null !== (Je = ee.accessors[Fe].normalized) && void 0 !== Je && Je, He.components[be] = Ae.m[ee.accessors[Fe].type]
                  }
                } else
                  for (const [ee, oe] of Ae.e) {
                    const He = ie.attributes[ee];
                    void 0 !== He && Fe.push({
                      semantic: ee,
                      kind: oe,
                      accessor: Ee(He)
                    })
                  }
                return {
                  index: He,
                  mode: null !== (be = ie.mode) && void 0 !== be ? be : 4,
                  attributes: Fe,
                  indices: Ke || void 0 === ie.indices ? null : Ee(ie.indices),
                  position: void 0 === ie.attributes.POSITION ? null : Ee(ie.attributes.POSITION),
                  material: null !== (Me = ie.material) && void 0 !== Me ? Me : null,
                  draco: Ue
                }
              }));
              return {
                index: He,
                name: ie.name,
                primitives: ye,
                extras: ie.extras
              }
            })),
            de = (null !== (Me = ee.nodes) && void 0 !== Me ? Me : []).map(((ee, ie) => {
              var He, ye;
              return {
                index: ie,
                name: ee.name,
                children: null !== (He = ee.children) && void 0 !== He ? He : [],
                mesh: null !== (ye = ee.mesh) && void 0 !== ye ? ye : null,
                translation: ee.translation,
                rotation: ee.rotation,
                scale: ee.scale,
                hasCamera: void 0 !== ee.camera,
                extras: ee.extras
              }
            })),
            We = null !== (Ke = null === (Ue = ee.extensionsUsed) || void 0 === Ue ? void 0 : Ue.includes("KHR_materials_unlit")) && void 0 !== Ke && Ke,
            te = null !== (Fe = null === (Je = ee.extensionsUsed) || void 0 === Je ? void 0 : Je.includes("KHR_texture_transform")) && void 0 !== Fe && Fe,
            Ze = (null !== (oe = ee.materials) && void 0 !== oe ? oe : []).map(((ee, ie) => {
              var He, ye, be, Me;
              const Ke = ee.pbrMetallicRoughness,
                Ue = null === Ke || void 0 === Ke ? void 0 : Ke.baseColorTexture;
              return {
                index: ie,
                name: ee.name,
                extras: ee.extras,
                unlit: We && void 0 !== (null === (He = ee.extensions) || void 0 === He ? void 0 : He.KHR_materials_unlit),
                pbr: Ke ? {
                  baseColorFactor: Ke.baseColorFactor,
                  metallicFactor: Ke.metallicFactor,
                  roughnessFactor: Ke.roughnessFactor
                } : null,
                baseColorTexture: Ue ? {
                  texture: Ue.index,
                  transform: te && (null === (ye = Ue.extensions) || void 0 === ye ? void 0 : ye.KHR_texture_transform) || null
                } : null,
                emissiveFactor: ee.emissiveFactor,
                alphaMode: null !== (be = ee.alphaMode) && void 0 !== be ? be : "OPAQUE",
                alphaCutoff: ee.alphaCutoff,
                doubleSided: null !== (Me = ee.doubleSided) && void 0 !== Me && Me
              }
            })),
            we = (null !== (Re = ee.textures) && void 0 !== Re ? Re : []).map(((ie, He) => {
              var ye, be;
              const Me = void 0 === ie.sampler ? Ve : {
                index: ie.sampler,
                ...null === (ye = ee.samplers) || void 0 === ye ? void 0 : ye[ie.sampler]
              };
              return {
                index: He,
                sampler: {
                  index: Me.index,
                  magFilter: Me.magFilter,
                  minFilter: Me.minFilter,
                  wrapS: Me.wrapS,
                  wrapT: Me.wrapT
                },
                image: null !== (be = ie.source) && void 0 !== be ? be : -1
              }
            })),
            De = (null !== (ke = ee.images) && void 0 !== ke ? ke : []).map(((ee, ie) => ({
              index: ie,
              name: ee.name,
              mimeType: ee.mimeType,
              bufferView: ze(ee.bufferView)
            }))),
            Pe = null !== (qe = (0, Ae.u)(ee)) && void 0 !== qe ? qe : 0;
          return {
            json: ee,
            rootNodes: null !== (fe = null === (Te = ee.scenes) || void 0 === Te || null === (pe = Te[Pe]) || void 0 === pe ? void 0 : pe.nodes) && void 0 !== fe ? fe : [],
            nodes: de,
            meshes: Oe,
            materials: Ze,
            textures: we,
            images: De
          }
        }(He, ye)
      } catch (Me) {
        throw Me instanceof Ae.i ? Me : new Ae.i(`reading the GLB failed: ${Me instanceof Error?Me.message:String(Me)}`)
      }
    }
    async function ce(ee, ie) {
      var He, ye;
      const be = ee.draco;
      if (!be) throw new Ae.i("not a Draco primitive");
      let Me;
      try {
        Me = await ie(be.bufferView.bytes, be.attributeIds, be.expected)
      } catch (Je) {
        throw new Ae.i(`Draco decoding failed: ${Je instanceof Error?Je.message:String(Je)}`)
      }
      const {
        vertices: Ke,
        indices: Ue,
        components: Fe
      } = be.expected;
      if (Me.totalVertices !== Ke || (null !== (He = null === (ye = Me.indices) || void 0 === ye ? void 0 : ye.length) && void 0 !== He ? He : 0) !== Ue || Me.attributes.some((ee => ee.size !== Fe[ee.kind] || ee.data.length !== Ke * ee.size))) throw new Ae.i("Draco decoding gave other counts than the accessors declare");
      for (const oe of Me.attributes) {
        const ee = be.normalized[oe.kind];
        void 0 !== ee && (oe.normalized = ee)
      }
      return Me
    }
    const xe = new WeakMap;

    function Le(ee, ie) {
      var He;
      const ye = null !== (He = xe.get(ee)) && void 0 !== He ? He : ie(ee);
      return xe.set(ee, ye), ye
    }

    function Ce(ee) {
      const ie = ee.bufferView,
        He = 5125 === ee.componentType ? Uint32Array : Uint16Array,
        ye = ie.bytes.buffer,
        be = ie.bytes.byteOffset + (ee.byteOffset || 0);
      return be % He.BYTES_PER_ELEMENT !== 0 ? new He(ye.slice(be, be + ee.count * He.BYTES_PER_ELEMENT), 0) : new He(ye, be, ee.count)
    }

    function ve(ee, ie) {
      if (ee.min && ee.max) return [new Float64Array(ee.min), new Float64Array(ee.max)];
      const He = ie.find((ee => {
          let {
            kind: ie
          } = ee;
          return "position" === ie
        })),
        ye = He ? (0, Pe.e)(He, ee.count) : new Float32Array(0);
      return (0, Pe.o)(ye.length / 3, ((ee, ie) => ye[3 * ee + ie]))
    }

    function ue(ee) {
      const ie = ee.attributes.map((ee => {
          var ie, He;
          let {
            kind: ye,
            accessor: be
          } = ee;
          const {
            bufferView: Me,
            numComponents: Ke
          } = be;
          if (!Me) {
            return {
              kind: ye,
              data: Le(be, (() => new Float32Array(Ke * be.count))),
              offset: 0,
              stride: 4 * Ke,
              components: Ke,
              glType: 5126,
              isNormalized: !1
            }
          }
          const Ue = null !== (ie = Me.byteStride) && void 0 !== ie ? ie : Ke * Ae.c[be.componentType];
          return {
            kind: ye,
            data: Me.bytes,
            offset: null !== (He = be.byteOffset) && void 0 !== He ? He : 0,
            stride: Ue,
            components: Ke,
            glType: be.componentType,
            isNormalized: be.normalized
          }
        })),
        He = ee.indices,
        ye = He && Le(He, Ce),
        be = ee.position;
      return new Pe.c(ie, ye, be.count, ...ve(be, ie))
    }
    const me = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function le(ee, ie) {
      const He = ie.attributes.map((ee => {
        let {
          kind: ie,
          data: He,
          size: ye,
          byteOffset: be,
          byteStride: Me,
          normalized: Ke
        } = ee;
        return {
          kind: ie,
          data: He,
          offset: be,
          stride: Me,
          components: ye,
          glType: 5120 + me.indexOf(He.constructor),
          isNormalized: Ke
        }
      }));
      return new Pe.c(He, ie.indices, ie.totalVertices, ...ve(ee.position, He))
    }

    function Se(ee) {
      const ie = ee.lastIndexOf("/");
      return ie < 0 ? ee : ee.substring(ie + 1)
    }

    function ne(ee) {
      const ie = ee.lastIndexOf("/");
      return ie < 0 ? "" : ee.substring(0, ie + 1)
    }

    function je(ee) {
      return ee.name || `node${ee.index}`
    }
    const se = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      Ie = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      he = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function Ne(ee) {
      var ie, He, ye, be;
      const Me = null !== (ie = ee.minFilter) && void 0 !== ie ? ie : 9987;
      return 9729 === (null !== (He = ee.magFilter) && void 0 !== He ? He : 9729) ? null !== (ye = Ie[Me]) && void 0 !== ye ? ye : 3 : null !== (be = he[Me]) && void 0 !== be ? be : 4
    }
    const Ge = {
      33071: 0,
      33648: 2
    };

    function re(ee) {
      var ie;
      return null !== (ie = Ge[null !== ee && void 0 !== ee ? ee : 10497]) && void 0 !== ie ? ie : 1
    }

    function Qe(ee) {
      return 9728 === ee.minFilter || 9729 === ee.minFilter
    }

    function ei(ee) {
      var ie, He, ye;
      const be = Float64Array.from(null !== (ie = ee.scale) && void 0 !== ie ? ie : [1, 1, 1]);
      return ee.hasCamera && (be[0] = -1), {
        translation: Float64Array.from(null !== (He = ee.translation) && void 0 !== He ? He : [0, 0, 0]),
        rotation: Float64Array.from(null !== (ye = ee.rotation) && void 0 !== ye ? ye : [0, 0, 0, 1]),
        scale: be
      }
    }

    function ii(ee, ie) {
      let {
        translation: He,
        rotation: ye,
        scale: be
      } = ee;
      const Me = new Float32Array(16);
      return (0, De.b)(be, 0, ye, 0, He, 0, Me), ie && (0, De.k)(Me, ie, 0, Me), Me
    }
    class Hi {
      constructor(ee, ie, He, ye) {
        this.model = ee, this.decode = ie, this.fileInfo = He, this.uniqueRootUrl = ye, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const be = new Set,
          Me = (ie, He) => {
            const ye = ee.nodes[ie];
            if (this.parents.has(ye)) throw new Ae.i(`/nodes/${ie}: Invalid recursive node hierarchy`);
            this.parents.set(ye, He);
            const Ke = null === ye.mesh ? [] : ee.meshes[ye.mesh].primitives,
              Ue = Ke.map((ee => {
                const ie = Ke.length > 1;
                return {
                  name: ie ? `${je(ye)}_primitive${ee.index}` : je(ye),
                  node: ye,
                  primitive: ee,
                  part: ie,
                  geometry: null
                }
              }));
            this.uses.set(ye, Ue);
            const Fe = null !== ye.mesh && be.has(ye.mesh);
            be.add(ye.mesh), this.own.set(ye, Fe ? [] : Ue);
            for (const ee of ye.children) Me(ee, ye)
          };
        for (const Ke of ee.rootNodes) Me(Ke, null);
        this.primitives = ee.nodes.flatMap((ee => {
          var ie;
          return null !== (ie = this.own.get(ee)) && void 0 !== ie ? ie : []
        }))
      }
      decodeGeometries() {
        const ee = new Map;
        return Promise.all(this.primitives.map((async ie => {
          const {
            primitive: He
          } = ie, ye = He.draco;
          let be = ye ? ee.get(ye.bufferView.index) : Promise.resolve(ue(He));
          be || (be = ce(He, this.decode).then((ee => le(He, ee))), ee.set(ye.bufferView.index, be)), ie.geometry = await be
        })))
      }
      parentOf(ee) {
        var ie;
        return null !== (ie = this.parents.get(ee)) && void 0 !== ie ? ie : null
      }
      meshesUnder(ee) {
        const ie = this.model.nodes.filter((ee => this.uses.has(ee)));
        for (const ye of ie) {
          const ie = this.uses.get(ye),
            He = ie.find((ie => ie.name === ee));
          if (He) return 1 === ie.length ? this.subtree(ye) : this.own.get(ye).includes(He) ? [He] : []
        }
        const He = ie.find((ie => 1 !== this.uses.get(ie).length && je(ie) === ee));
        return He ? this.subtree(He) : null
      }
      subtree(ee) {
        return [...this.own.get(ee), ...ee.children.flatMap((ee => this.subtree(this.model.nodes[ee])))]
      }
      worldMatrix(ee, ie, He) {
        let ye = ii(ei(ie ? se : {}), null);
        const be = [];
        for (let Ke = ee.part ? ee.node : this.parentOf(ee.node); Ke; Ke = this.parentOf(Ke)) be.unshift(Ke);
        for (const Ke of be) ye = ii(ei(Ke), ye);
        const Me = ei(ee.part ? {} : ee.node);
        return void 0 !== He && Me.scale.fill(He), ii(Me, ye)
      }
      floats(ee) {
        const {
          vertexAttributes: ie,
          vertexCount: He
        } = ee.geometry;
        return new Map(ie.map((ee => [ee.kind, (0, Pe.e)(ee, He)])))
      }
      imageUrl(ee) {
        return function(ee, ie, He) {
          let {
            name: ye
          } = ie;
          return `data:${ee}${ye}#image${He}`
        }(this.uniqueRootUrl, this.fileInfo, ee)
      }
      textureDesc(ee, ie) {
        var He;
        let {
          texture: ye,
          transform: be
        } = ee;
        const {
          sampler: Me,
          image: Ke
        } = this.model.textures[ye], {
          bufferView: Ue,
          mimeType: Fe,
          name: Je
        } = this.model.images[Ke], oe = be && {
          ...be.offset ? {
            uOffset: be.offset[0],
            vOffset: be.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...be.rotation ? {
            wAng: -be.rotation
          } : {},
          ...be.scale ? {
            uScale: be.scale[0],
            vScale: be.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(Ke),
          noMipmap: Qe(Me),
          invertY: !1,
          samplingMode: Ne(Me),
          data: {
            bytes: Ue.bytes,
            mimeType: Fe,
            label: Je,
            context: `/textures/${ye}`
          },
          sets: {
            wrapU: re(Me.wrapS),
            wrapV: re(Me.wrapT),
            ...oe,
            coordinatesIndex: null !== (He = null === be || void 0 === be ? void 0 : be.texCoord) && void 0 !== He ? He : 0,
            hasAlpha: ie
          }
        }
      }
    }
    async function yi(ee, ie, He, ye, be, Me) {
      let Ke = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const Ue = function(ee, ie, He) {
          return "string" !== typeof ie ? {
            url: "",
            rootUrl: ee,
            name: He()
          } : ie ? ie.startsWith("data:") ? {
            url: ie,
            rootUrl: ee,
            name: ""
          } : ee ? {
            url: ee + ie,
            rootUrl: ee,
            name: ie
          } : {
            url: ie,
            rootUrl: ne(ie),
            name: Se(ie)
          } : {
            url: ee,
            rootUrl: ne(ee),
            name: Se(ee)
          }
        }(He, ee, be),
        Fe = {};
      ie.addPendingData(Fe);
      try {
        const He = ae(await async function(ee, ie) {
            return "string" !== typeof ie ? ie : ee.url.startsWith("data:") ? (0, Ae.p)(ee.url) : await (0, Ae.s)(ee.url)
          }(Ue, ee)),
          Fe = new Hi(He, ye, Ue, function(ee, ie) {
            let {
              rootUrl: He,
              name: ye
            } = ee;
            return !He.startsWith("file:") && ye ? He : `${He}${ie()}/`
          }(Ue, be));
        return await Me(Fe), ie.importedMeshesFiles && (ie.loadingPluginName = "YV", Ke && ie.importedMeshesFiles.push(Ue.url)), Fe
      } finally {
        ie.removePendingData(Fe)
      }
    }
    var bi = He(38314),
      Mi = He(38171),
      Ki = He(38729);

    function Ui(ee) {
      if (null === ee || void 0 === ee || !ee.min || !ee.max) return null;
      const [ie, He, ye] = ee.min, [be, Me, Ke] = ee.max, {
        BoundingInfo: Ue,
        rf: Fe
      } = (0, bi.d)();
      return new Ue(new Fe(ie, He, ye), new Fe(be, Me, Ke))
    }

    function Fi(ee) {
      (0, Mi.f)(ee) || (ee.geometry && ee.geometry.useBoundingInfoFromGeometry ? ee._updateBoundingInfo() : ee.refreshBoundingInfo(!0, !0))
    }
    class Ji {
      constructor(ee, ie) {
        this.yp = ee, this.decode = ie, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(ee) {
        let ie = this.viewData.get(ee.index);
        return ie || (ie = this.bufferData.then((() => ee.bytes)), this.viewData.set(ee.index, ie)), ie
      }
      viewBuffer(ee) {
        let ie = this.viewBuffers.get(ee.index);
        return ie || (ie = this.viewBytes(ee).then((ee => new((0, bi.d)().bR)(this.yp.Nf(), ee, !1))), this.viewBuffers.set(ee.index, ie)), ie
      }
      vertexBuffer(ee, ie) {
        const {
          kind: He,
          data: ye
        } = ie, be = `${ee.index}:${He}`;
        let Me = this.vertexBuffers.get(be);
        if (!Me) {
          const Ke = ee.bufferView;
          Me = Ke ? this.viewBuffer(Ke).then((ee => this.layoutVertexBuffer(ee, ie))) : Promise.resolve(ye).then((ee => new((0, bi.d)().VertexBuffer)(this.yp.Nf(), ee, He, !1))), this.vertexBuffers.set(be, Me)
        }
        return Me
      }
      layoutVertexBuffer(ee, ie) {
        let {
          kind: He,
          offset: ye,
          stride: be,
          components: Me,
          glType: Ke,
          isNormalized: Ue
        } = ie;
        const Fe = this.yp.Nf();
        return new((0, bi.d)().VertexBuffer)(Fe, ee, He, !1, void 0, be, void 0, ye, Me, Ke, Ue, !0, void 0, !0)
      }
      load(ee, ie, He) {
        const ye = (0, Mi.f)(He),
          be = ee => {
            ye || (He._delayInfo = He._delayInfo || [], -1 === He._delayInfo.indexOf(ee) && He._delayInfo.push(ee))
          },
          Me = ie.draco;
        if (Me) {
          for (const ee in Me.attributeIds) be(ee);
          let Ke = this.dracoGeometry.get(Me.bufferView.index);
          return Ke || (Ke = this.viewBytes(Me.bufferView).then((async () => {
            let be;
            try {
              be = await ce(ie, this.decode)
            } catch (Fe) {
              throw new Ae.i(`${ee}: ${Fe instanceof Error?Fe.message:String(Fe)}`)
            }
            const Me = le(ie, be);
            if (ye) return Me;
            const Ke = Ui(ie.position),
              Ue = new((0, bi.d)().MirroredGeometry)(He.name, this.yp);
            Ke && (Ue._boundingInfo = Ke, Ue.useBoundingInfoFromGeometry = !0), Me.indexData && Ue.setIndices(Me.indexData);
            for (const ee of Me.vertexAttributes) Ue.setVerticesBuffer(this.layoutVertexBuffer(ee.data, ee), Me.vertexCount);
            return Ue.link(Me), Ue
          })), this.dracoGeometry.set(Me.bufferView.index, Ke)), Ke
        }
        const Ke = [],
          Ue = ue(ie);
        if (ye) return He.isUnIndexed = !Ue.indexData, He.hasVertexAlpha = (0, Ki.f)(ie), Promise.resolve(Ue);
        const Fe = new((0, bi.d)().MirroredGeometry)(He.name, this.yp),
          {
            indexData: Je
          } = Ue;
        Je ? Ke.push(this.viewBytes(ie.indices.bufferView).then((() => {
          Fe.setIndices(Je)
        }))) : He.isUnIndexed = !0;
        for (const [oe, {
            kind: Re,
            accessor: ke
          }] of ie.attributes.entries()) be(Re), Ke.push(this.vertexBuffer(ke, Ue.vertexAttributes[oe]).then((ee => {
          if ("position" === ee.getKind()) {
            const ee = Ui(ke);
            ee && (Fe._boundingInfo = ee, Fe.useBoundingInfoFromGeometry = !0)
          }
          Fe.setVerticesBuffer(ee, Ue.vertexCount)
        })));
        return (0, Ki.f)(ie) && (He.hasVertexAlpha = !0), Promise.all(Ke).then((() => (Fe.link(Ue), Fe)))
      }
    }
    var oi, Ri = He(38112),
      ki = He(37913),
      qi = He(38743),
      fi = He(38012),
      Ti = He(38081),
      Xi = He(2969),
      zi = He(38049);

    function Bi(ee, ie) {
      ee.metadata = ee.metadata || {};
      const He = ee._internalMetadata = ee._internalMetadata || {},
        ye = He.YV = He.YV || {};
      (ye.pointers = ye.pointers || []).push(ie)
    }

    function Ei(ee, ie) {
      if (ie && Object.keys(ie).length > 0) {
        const He = ee.metadata = ee.metadata || {};
        (He.YV = He.YV || {}).extras = ie
      }
    }

    function gi(ee, ie) {
      ie.position = ee.translation ? ki.rf.FromArray(ee.translation) : ki.rf.Zero(), ie.rotationQuaternion = ee.rotation ? ki.Quaternion.FromArray(ee.rotation) : ki.Quaternion.Identity(), ie.wR = ee.scale ? ki.rf.FromArray(ee.scale) : ki.rf.One()
    }
    class Oi {
      constructor(ee, ie) {
        if (this.yp = ee, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, ie) {
          const ie = ee.Nf(),
            He = ee.Bx.add((() => {
              this.dispose()
            })),
            ye = ie.hf.add((() => {
              for (const ee of [...this.geometries, ...this.meshes, ...this.textures]) ee._rebuild()
            }));
          this.release = () => {
            ee.Bx.remove(He), ie.hf.remove(ye)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const ee of this.meshes) this.yp.Nbe(ee);
          for (const ee of this.materials) this.yp.addMaterial(ee);
          for (const ee of this.geometries) this.yp.addGeometry(ee);
          for (const ee of this.transformNodes) this.yp.addTransformNode(ee);
          for (const ee of this.textures) this.yp.addTexture(ee)
        }
      }
      dispose() {
        var ee;
        for (const ie of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const ee of ie.slice()) ee.dispose();
          ie.length = 0
        }
        null === (ee = this.release) || void 0 === ee || ee.call(this), this.release = null
      }
    }
    class di {
      constructor(ee, ie, He, ye, be, Me, Ke) {
        this.asset = ee, this.yp = ie, this.tree = He, this.geometryData = be, this.materials = Me, this.lite = Ke, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = ye ? He : null
      }
      create(ee) {
        if (this.lite) return ee();
        const ie = this.yp;
        ie._blockEntityCollection = !!this.container;
        try {
          const ie = ee();
          return this.container && (ie._parentContainer = this.container), ie
        } finally {
          ie._blockEntityCollection = !1
        }
      }
      node(ee, ie) {
        return this.create((() => this.lite ? ie ? (0, qi.f)(this.lite, ee) : (0, qi.r)(this.lite, ee) : ie ? new((0, bi.d)().Mesh)(ee, this.yp) : new((0, bi.d)().TransformNode)(ee, this.yp)))
      }
      async load() {
        var ee;
        this.asset.model.json.nodes && this.createRoot();
        const ie = this.lite ? null : this.yp,
          He = null !== (ee = null === ie || void 0 === ie ? void 0 : ie.blockMaterialDirtyMechanism) && void 0 !== ee && ee;
        let ye;
        ie && (ie.blockMaterialDirtyMechanism = !0);
        try {
          ye = this.loadScene()
        } finally {
          null === ie || void 0 === ie || ie._forceBlockMaterialDirtyMechanism(He)
        }
        await ye;
        const {
          root: be,
          tree: Me
        } = this;
        be && (be.JY(!0), Me.meshes.push(be), Me.rootNodes.push(be));
        for (const Ue of this.asset.model.nodes) {
          const ee = this.nodeObjects.get(Ue.index);
          ee && ["TransformNode", "LiteNode"].includes(ee.getClassName()) && Me.transformNodes.push(ee);
          for (const ie of null !== (Ke = this.nodePrimitives.get(Ue.index)) && void 0 !== Ke ? Ke : []) {
            var Ke;
            Me.meshes.push(ie);
            const ee = ie.geometry;
            ee && !Me.geometries.includes(ee) && Me.geometries.push(ee)
          }
        }
      }
      createRoot() {
        const ee = this.node("__root__", !0);
        this.root = ee, ee.JY(!1), this.yp.useRightHandedSystem || gi(se, ee)
      }
      loadScene() {
        const ee = [];
        for (const ie of this.asset.model.rootNodes) ee.push(this.loadNode(this.asset.model.nodes[ie], (ee => {
          ee.parent = this.root
        })));
        return ee.push(Promise.resolve()), Promise.all(ee).then((() => {}))
      }
      loadNode(ee, ie) {
        const He = `/nodes/${ee.index}`,
          ye = [],
          be = be => {
            if (Bi(be, He), gi(ee, be), ee.hasCamera && !this.yp.useRightHandedSystem) {
              const {
                wR: ee
              } = be;
              ee.set(-1, ee.y, ee.z)
            }
            for (const ie of ee.children) ye.push(this.loadNode(this.asset.model.nodes[ie], (ee => {
              ee.parent = be
            })));
            (He => {
              Ei(He, ee.extras), ie(He)
            })(be)
          };
        if (null === ee.mesh) {
          const ie = this.node(je(ee), !1);
          this.nodeObjects.set(ee.index, ie), be(ie)
        } else {
          const ie = this.asset.model.meshes[ee.mesh];
          ye.push(this.loadMesh(`/meshes/${ie.index}`, ee, ie, be))
        }
        return Promise.all(ye).then((() => {
          for (const He of null !== (ie = this.nodePrimitives.get(ee.index)) && void 0 !== ie ? ie : []) {
            var ie;
            Fi(He)
          }
          return this.nodeObjects.get(ee.index)
        }))
      }
      loadMesh(ee, ie, He, ye) {
        const be = [],
          Me = je(ie);
        if (1 === He.primitives.length) {
          const ye = He.primitives[0];
          be.push(this.loadPrimitive(`${ee}/primitives/${ye.index}`, Me, ye, (ee => {
            this.nodeObjects.set(ie.index, ee), this.nodePrimitives.set(ie.index, [ee])
          })))
        } else {
          const ye = this.node(Me, !1);
          this.nodeObjects.set(ie.index, ye);
          const Ke = [];
          this.nodePrimitives.set(ie.index, Ke);
          for (const ie of He.primitives) be.push(this.loadPrimitive(`${ee}/primitives/${ie.index}`, `${Me}_primitive${ie.index}`, ie, (ee => {
            ee.parent = ye, Ke.push(ee)
          })))
        }
        const Ke = this.nodeObjects.get(ie.index);
        return ye(Ke), Promise.all(be).then((() => Ke))
      }
      loadPrimitive(ee, ie, He, ye) {
        const be = [],
          Me = this.node(ie, !0);
        if (Me.sideOrientation = this.yp.useRightHandedSystem ? fi.e.CounterClockWiseSideOrientation : fi.e.ClockWiseSideOrientation, be.push(this.geometryData.load(ee, He, Me).then((ee => {
            if ((0, Mi.f)(Me)) {
              var ie, He;
              const ye = ee;
              Me.replaceModel(ye, Int32Array.of(0, null !== (ie = null === (He = ye.indexData) || void 0 === He ? void 0 : He.length) && void 0 !== ie ? ie : ye.vertexCount, 0, ye.vertexCount))
            } else this.create((() => (ee.applyToMesh(Me), ee)))
          }))), this.materials) {
          const ee = 0 === He.mode ? fi.e.PointListDrawMode : fi.e.TriangleFillMode,
            ie = null === He.material ? null : this.asset.model.materials[He.material];
          be.push(this.loadMaterial(ie, ee, (ee => {
            Me.material = ee
          })))
        }
        return Bi(Me, ee), ye(Me), Promise.all(be).then((() => Me))
      }
      loadMaterial(ee, ie, He) {
        var ye;
        const be = `${null!==(ye=null===ee||void 0===ee?void 0:ee.index)&&void 0!==ye?ye:"default"}:${ie}`;
        let Me = this.materialData.get(be);
        return Me || (Me = this.createMaterial(ee, ie), this.materialData.set(be, Me)), He(Me.material), Me.promise
      }
      createMaterial(ee, ie) {
        const He = ee ? ee.name || `material${ee.index}` : "__GLTFLoader._default",
          {
            style: ye,
            unlit: be
          } = this.materials;
        let Me;
        const Ke = this.create((() => {
          const Ke = (0, zi.b)({
            name: He,
            yp: this.yp,
            sets: {
              ...(0, Ki.b)(this.asset, ee, ye, be),
              fillMode: ie
            },
            unrendered: !0
          });
          return Me = Ke.model, Ke.mirror
        }));
        let Ue = Promise.resolve();
        if (ee) {
          const ie = `/materials/${ee.index}`,
            ye = Me.diffuseTexture;
          if (ye && !ye.mirror) Ue = new Promise((ee => setTimeout(ee)));
          else if (ye) {
            const be = ye.mirror;
            be._parentContainer = this.container, be.name = `${He} (Base Color)`, Bi(be, `${ie}${ee.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(be), Ue = (0, Ti.u)(ye)
          }
          Ei(Ke, ee.extras), Bi(Ke, ie)
        }
        return this.tree.materials.push(Ke), {
          material: Ke,
          promise: Ue
        }
      }
    }

    function Wi() {
      Ri.d.dracoDecodes = ge.decodes, Ri.d.dracoWorkersStarted = ge.workersStarted, Ri.d.dracoMostWorkers = ge.mostWorkers
    }
    async function ti(ee, ie, He, be, Me) {
      try {
        return await async function(ee, ie, He, be, Me, Ke) {
          var Ue;
          let Fe;
          const Je = null === (Ue = (0, Xi.h)()) || void 0 === Ue ? void 0 : Ue.PR,
            oe = null !== Je && void 0 !== Je && Je.pT && ie === Je.Xx() ? Je : null,
            Re = Me && !oe;
          return await yi(ee, ie, He, be, ye.d, (ee => (Fe = new Oi(ie, Re), new di(ee, ie, Fe, Re, new Ji(ie, be), Ke, oe).load())), !Me), Fe
        }(ee, ie, He, we, be, Me)
      } finally {
        Wi()
      }
    }
    async function Zi(ee, ie, He, be) {
      try {
        return await yi(ee, ie, He, we, ye.d, (ee => be(ee, new Ji(ie, we))))
      } finally {
        Wi()
      }
    }
    oi = Ue, pe || (pe = {
      scriptUrl: new URL(oi.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(oi.wasmBinaryUrl, location.href).href
    })
  },
  36938: ee => {
    ee.exports = function(ee, ie, He, ye) {
      var be = self || window;
      try {
        try {
          var Me;
          try {
            Me = new be.Blob([ee])
          } catch (Je) {
            (Me = new(be.BlobBuilder || be.WebKitBlobBuilder || be.MozBlobBuilder || be.MSBlobBuilder)).append(ee), Me = Me.getBlob()
          }
          var Ke = be.URL || be.webkitURL,
            Ue = Ke.createObjectURL(Me),
            Fe = new be[ie](Ue, He);
          return Ke.revokeObjectURL(Ue), Fe
        } catch (Je) {
          return new be[ie]("data:application/javascript,".concat(encodeURIComponent(ee)), He)
        }
      } catch (Je) {
        if (!ye) throw Error("Inline worker is not supported");
        return new be[ie](ye, He)
      }
    }
  },
  44697: (ee, ie, He) => {
    ee.exports = He.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  44704: (ee, ie, He) => {
    ee.exports = He.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);